"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";

// ─── Types ────────────────────────────────────────────────────────────────────

interface DragState {
  active: boolean;
  lastX: number;
  lastY: number;
  velX: number;
  velY: number;
  rotX: number; // accumulated manual X rotation
}

// ─── 3D Model ─────────────────────────────────────────────────────────────────

function CrateModel({
  url,
  drag,
}: {
  url: string;
  drag: React.MutableRefObject<DragState>;
}) {
  const gltf = useGLTF(url);
  const group = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!group.current) return;
    group.current.traverse((obj) => {
      if (!(obj as THREE.Mesh).isMesh) return;
      const mesh = obj as THREE.Mesh;
      mesh.castShadow = false;
      mesh.receiveShadow = false;

      const applyMaterial = (m: THREE.Material) => {
        const mat = m as THREE.MeshStandardMaterial;
        if ("metalness" in mat) mat.metalness = 0.55;
        if ("roughness" in mat) mat.roughness = 0.28;
        if ("envMapIntensity" in mat) mat.envMapIntensity = 1.4;
        mat.needsUpdate = true;
      };

      if (Array.isArray(mesh.material)) {
        mesh.material.forEach(applyMaterial);
      } else if (mesh.material) {
        applyMaterial(mesh.material);
      }
    });
  }, []);

  useFrame((_state, delta) => {
    if (!group.current) return;
    const d = drag.current;

    if (d.active) {
      // User is dragging — apply their velocity
      group.current.rotation.y += d.velX;
      d.rotX = Math.max(-0.55, Math.min(0.55, d.rotX + d.velY));
      group.current.rotation.x = d.rotX;
      // Clear velocity so it's not double-applied
      d.velX = 0;
      d.velY = 0;
    } else {
      // Auto-rotate and spring X back to neutral
      group.current.rotation.y += delta * 0.14;
      d.rotX *= 0.92;
      group.current.rotation.x = d.rotX;
    }
  });

  return (
    <group ref={group} position={[0, -1.5, 0]} scale={3.8}>
      <primitive object={gltf.scene} />
    </group>
  );
}

// ─── Camera parallax rig ──────────────────────────────────────────────────────

function Rig({
  strength = 0.14,
  drag,
}: {
  strength?: number;
  drag: React.MutableRefObject<DragState>;
}) {
  const target = useMemo(() => new THREE.Vector3(), []);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      // Only do parallax when not dragging
      if (drag.current.active) return;
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [drag]);

  useFrame(({ camera }, delta) => {
    if (drag.current.active) return; // freeze parallax while user drags
    target.set(
      mouse.current.x * strength,
      mouse.current.y * strength * 0.4,
      5.5,
    );
    camera.position.lerp(target, 1 - Math.pow(0.001, delta));
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ─── Exports ──────────────────────────────────────────────────────────────────

/**
 * Hero3DScene — fills its parent container.
 * Parent must have an explicit height. Supports drag-to-rotate.
 */
export function Hero3DScene() {
  const drag = useRef<DragState>({
    active: false,
    lastX: 0,
    lastY: 0,
    velX: 0,
    velY: 0,
    rotX: 0,
  });

  const onPointerDown = (e: React.PointerEvent) => {
    // Disable drag-to-rotate on touch — let users scroll naturally
    if (e.pointerType === "touch") return;
    drag.current.active = true;
    drag.current.lastX = e.clientX;
    drag.current.lastY = e.clientY;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.lastX;
    const dy = e.clientY - drag.current.lastY;
    drag.current.velX = dx * 0.012;
    drag.current.velY = dy * 0.012;
    drag.current.lastX = e.clientX;
    drag.current.lastY = e.clientY;
  };

  const onPointerUp = () => {
    drag.current.active = false;
  };

  return (
    <div
      className="w-full h-full sm:cursor-grab sm:active:cursor-grabbing select-none"
      style={{ touchAction: "pan-y" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5.5], fov: 38, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Rich cinematic lighting */}
        <ambientLight intensity={0.9} />
        <directionalLight
          position={[4, 5, 5]}
          intensity={2.2}
          color="#c0fff2"
        />
        <directionalLight
          position={[-5, -2, 4]}
          intensity={1.4}
          color="#c4b5ff"
        />
        <pointLight
          position={[0, 4, 3]}
          intensity={2.0}
          color="#5affd6"
          distance={12}
          decay={2}
        />
        <pointLight
          position={[0, -4, 2]}
          intensity={1.2}
          color="#7d5aff"
          distance={10}
          decay={2}
        />
        <pointLight
          position={[3, 0, 1]}
          intensity={0.8}
          color="#ffffff"
          distance={8}
          decay={2}
        />

        <Suspense fallback={null}>
          <Rig drag={drag} />
          <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.4}>
            <CrateModel url="/money_crate.glb" drag={drag} />
          </Float>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}

/**
 * HeroBackground — decorative gradient glows.
 * Uses absolute inset-0, place inside a `relative` container.
 */
export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_0%,rgba(90,255,214,0.14),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_30%_100%,rgba(125,90,255,0.13),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06060a] to-transparent" />
    </div>
  );
}

useGLTF.preload("/money_crate.glb");
