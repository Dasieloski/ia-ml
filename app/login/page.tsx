"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { DollarSign, Eye, EyeOff, Lock, ArrowRight } from "lucide-react";
import { login, isAuthenticated } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // If already authenticated, go straight to roadmap
  useEffect(() => {
    if (isAuthenticated()) router.replace("/roadmap");
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Small delay for feel
    setTimeout(() => {
      const ok = login(password);
      if (ok) {
        router.replace("/roadmap");
      } else {
        setError("Contraseña incorrecta.");
        setLoading(false);
        setPassword("");
      }
    }, 320);
  };

  return (
    <div className="min-h-screen bg-[#06060a] text-white flex flex-col items-center justify-center px-5 relative overflow-hidden">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] bg-[radial-gradient(ellipse_at_center,rgba(240,192,64,0.07),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[400px] bg-[radial-gradient(ellipse_at_center,rgba(90,255,214,0.05),transparent_70%)]" />
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-sm"
      >
        {/* Logo */}
        <div className="flex items-center gap-2 justify-center mb-8">
          <div className="h-8 w-8 rounded-lg border border-[#f0c040]/25 bg-[#f0c040]/10 flex items-center justify-center">
            <DollarSign className="h-4 w-4 text-[#f0c040]" />
          </div>
          <span className="text-sm font-bold text-white/70">AI/ML Roadmap</span>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-7 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]">
          <h1 className="text-lg font-black text-white mb-1 tracking-tight">
            Acceso privado
          </h1>
          <p className="text-xs text-white/35 mb-6">
            Este roadmap es personal. Ingresa tu contraseña para continuar.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Password field */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <Lock className="h-3.5 w-3.5 text-white/25" />
              </div>
              <input
                type={showPwd ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                placeholder="Contraseña"
                autoFocus
                className="w-full h-12 bg-white/[0.05] border border-white/[0.1] rounded-lg pl-9 pr-10 text-base text-white placeholder:text-white/25 outline-none focus:border-[#f0c040]/40 focus:bg-white/[0.07] transition-all"
                style={{ fontSize: 16 }}
              />
              <button
                type="button"
                onClick={() => setShowPwd((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors"
                tabIndex={-1}
              >
                {showPwd ? (
                  <EyeOff className="h-3.5 w-3.5" />
                ) : (
                  <Eye className="h-3.5 w-3.5" />
                )}
              </button>
            </div>

            {/* Error */}
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] text-red-400/80 font-mono"
              >
                {error}
              </motion.p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full h-12 rounded-lg text-sm font-black bg-[#f0c040] text-black hover:bg-[#f0c040]/88 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-[0_0_40px_-8px_rgba(240,192,64,0.5)] flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1 h-1 rounded-full bg-black"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </span>
              ) : (
                <>
                  Entrar <ArrowRight className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-[10px] text-white/18 mt-5 font-mono">
          Solo uso personal · aiml2025
        </p>
      </motion.div>
    </div>
  );
}
