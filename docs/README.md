# Hoja de ruta definitiva para ingenieros de IA 2026 🔥
### De cero a sistemas de inteligencia artificial de grado de producción

**Hoja de ruta definitiva para ingenieros de IA 2026**: creado específicamente para su contexto como arquitecto de IA que construye PrinceSinghAI, PrinceSinghDev, orquestación Multi-LLM, RoadmapAI, CodeLLM y AskAI, búsqueda global de IA

## 🎥 Ver vídeo completo

[![Ver el vídeo](https://img.youtube.com/vi/7Gxu-VCPJ0A/maxresdefault.jpg)](https://www.youtube.com/watch?v=7Gxu-VCPJ0A)

**Qué hay dentro (17 fases + Capstone):**

La hoja de ruta comienza desde el cero absoluto y llega hasta la arquitectura de IA de nivel de producción. Aquí está el desglose:

- **Fase 0** - Mentalidad: Ingeniero de IA vs Ingeniero de ML, demanda del mercado 2026
- **Fase 1** - Python (incluido async/await para API de IA; la mayoría de las hojas de ruta omiten esto)
- **Fase 2** - Matemáticas y estadísticas (álgebra lineal, cálculo, probabilidad, optimización)
- **Fase 3** - Fundamentos del aprendizaje automático (base para comprender los LLM)
- **Fase 4** - Aprendizaje profundo (base para comprender los LLM)
- **Fase 5** - PLN y transformers (inmersión en arquitectura)
- **Fase 6** - Ingeniería LLM (TODAS las API principales: OpenAI, Claude, Gemini, Mistral, Groq, NVIDIA)
- **Fase 7** - **Orquestación Multi-LLM** (su especialidad: enrutamiento, respaldos, MCP, LangGraph, LangChain, CrewAI, AutoGen)
- **Fase 8** - Bases de datos RAG y vectoriales (técnicas avanzadas: HyDE, reranking, búsqueda híbrida)
- **Fase 9** - Agentes de IA y sistemas agentes (marco AskAI)
- **Fase 10** - Ajuste fino (LoRA, QLoRA, DPO, RLHF)
- **Fase 11** - IA generativa (difusión, multimodal, voz, vídeo)
- **Fase 12** - MLOps y LLMOps (producción, monitoreo, Kubernetes, CI/CD)
- **Fase 13** - Diseño del sistema de IA (listo para la entrevista + patrones de arquitectura reales)
- **Fase 14** - SQL + pgvector para IA
- **Fase 15** - Cuantización y optimización (vLLM, GGUF, SLMs)
- **Fase 16** - Aprendizaje por refuerzo (RLHF, DPO, PPO)
- **Fase 17** - Ética, seguridad y gobernanza de la IA

Cada fase tiene **3 proyectos** 
- Fácil 🟢
- Medio 🟡
- Difícil 🔴) 

51 proyectos en total. El proyecto final (*capstone*) es la arquitectura completa de una plataforma multi-LLM.

---

## 📌 Cómo utilizar esta hoja de ruta

```
PRINCIPIANTE → Fases 1 → 2 → 3 → 4 (enfoque primero los fundamentos)
INTERMEDIO   → Empezar Fase 3, repasar huecos en Fases 1–2
EXPERTO      → Fases 5 → 6 → 7 → 8 (sistemas avanzados y arquitectura)
```

Cada fase finaliza con **aprendizaje basado en proyectos**:
- 🟢 **Fácil** - Genera confianza, refuerza los fundamentos
- 🟡 **Medio** - Patrones del mundo real, pensamiento de producción
- 🔴 **Difícil** - Grado de producción, multisistema, escalable

---

## 🗺️ FASE 0 - Mentalidad y Orientación

### ¿Qué es un ingeniero de IA (2026)?

Un ingeniero de IA **no** es un científico de datos ni un investigador de ML. Eres el puente entre potentes modelos de IA y productos del mundo real. Tú:

- Integrar, orquestar e implementar modelos de IA en sistemas de producción.
- Diseñar canalizaciones multi-LLM con enrutamiento, respaldo y optimización de costos.
- Construir sistemas RAG, agentes de IA y flujos de trabajo agénticos.
- Saber cuándo usar OpenAI frente a Claude, Gemini, Mistral u opciones de código abierto.
- Entregar software fiable, seguro y escalable impulsado por IA.

### Ingeniero de IA frente a ingeniero de ML

| Ingeniero de IA | Ingeniero de aprendizaje automático |
|---|---|
| Utiliza modelos preentrenados mediante APIs | Entrena modelos desde cero |
| Integración de APIs, ingeniería de prompts | Pipelines de datos, evaluación de modelos |
| Tiempo de comercialización más rápido | Caro y con mucha investigación |
| Experiencia en producto + desarrollo | Profunda experiencia en aprendizaje automático y matemáticas |
| **Tú eres esto** | Papel de la ciencia de datos |

### Demanda del mercado 2026

Las habilidades que las empresas buscan con más frecuencia incluyen:
- Orquestación multi-LLM (enrutamiento OpenAI + Claude + Gemini)
- Arquitectura RAG y bases de datos vectoriales.
- Agentes de IA y sistemas de agentes.
- LLMOps y monitoreo de producción.
- Ingeniería rápida a escala
- Métodos de ajuste y PEFT
- MCP (Protocolo de contexto modelo)
- Sistemas de IA multimodales
- Optimización de costos y eficiencia de inferencia.

---

## 🗺️ FASE 1 - Fundamentos de programación

> **Objetivo:** Escribir Python limpio y con calidad de producción. Esto no es negociable.

### 1.1 Fundamentos de Python

**Tipos de datos y variables**
- Enteros, flotantes, cadenas, booleanos, `None`
- Conversión de tipo: `int()`, `float()`, `str()`,`bool()`
-`type()`y`isinstance()`
- Tipos mutables versus inmutables: críticos para los canales de IA

**Cadenas (strings)**
- Corte de cadenas:`s[start:stop:step]`
- Métodos: `split`, `join`, `strip`, `replace`, `find`, `startswith`,`endswith`
- f-strings: `f"value is {x:.2f}"`
- Cadenas multilínea con comillas triples

**Colecciones**
- Listas: indexación, división, `append`, `extend`, `pop`, `sort`,`reverse`
- Tuplas: inmutabilidad y cuándo preferir las listas.
- Diccionarios - CRUD, `.keys()`, `.values()`, `.items()`,`.get()`
- Conjuntos: unicidad, unión, intersección, diferencia.
- Colecciones anidadas - lista de diccionarios, dictado de listas

**Control de flujo**
-`if / elif / else`
- Bucles `for`: iteración sobre listas, diccionarios y rangos
- Bucles`while`y`break / continue`
- `range()`, `enumerate()`,`zip()`

### 1.2 Funciones

- Definición de funciones con`def`
- Argumentos posicionales versus palabras clave
- Valores de argumento predeterminados
-`*args`y `**kwargs`: se utilizan constantemente en los SDK de IA
- Valores de retorno, desempaquetado de tuplas.
- Funciones lambda
- Recursión
- Cadenas de documentos

### 1.3 Programación orientada a objetos

- Clases e instancias.
-`__init__`constructor
- Métodos de instancia y`self`
- Variables de clase versus instancia
- Herencia y`super()`
- Métodos anuladores
- `__repr__`, `__str__`, `__len__`,`__getitem__`
- `@property`, `@staticmethod`,`@classmethod`
- Clases abstractas con`ABC`- muy utilizadas en LangChain, LlamaIndex

### 1.4 Código pitónico y modismos

- Enumerar, dictar, establecer comprensiones
- Generador de expresiones: memoria eficiente para grandes conjuntos de datos.
- `map()`, `filter()`,`reduce()`
- Desembalaje:`a, b, *rest = lst`
- `any()`, `all()`,`sorted()`con`key=`
- Módulo `collections`: `Counter`, `defaultdict`,`deque`

### 1.5 E/S de archivos y manejo de datos

- Lectura/escritura de archivos de texto con `open()` y administradores de contexto (`with`)
- Lectura de CSV con el módulo `csv`
- Lectura/escritura de JSON: `json.load()`,`json.dump()`
- Pickle: `pickle.dump()`, `pickle.load()`
- Módulo `os`: unión de rutas, listado de directorios, creación de directorios
-`pathlib.Path`- manejo moderno de rutas de archivos
-`glob`- archivos de coincidencia de patrones (útiles para el procesamiento por lotes)

### 1.6 Manejo y depuración de errores

-`try / except / finally`
- Detectar excepciones específicas
- Generar excepciones:`raise ValueError("message")`
- Clases de excepción personalizadas
- Módulo `logging`: DEBUG, INFO, WARNING, ERROR
-`pdb`y`breakpoint()`
- Lectura de rastreos

### 1.7 Rendimiento y memoria

- Generadores y `yield`: fundamentales para transmitir respuestas de IA
- Módulo `itertools`
-`timeit`y`cProfile`para evaluación comparativa
- Copia superficial versus profunda
- Preferencia de vectorización sobre los bucles de Python.

### 1.8 NumPy (no negociable para IA)

- Creación de matrices: `np.array()`, `np.zeros()`, `np.ones()`,`np.eye()`
- Forma de matriz, ndim, dtype
- Remodelación: `reshape()`, `flatten()`,`ravel()`
- Apilamiento: `np.stack()`, `np.hstack()`,`np.vstack()`
- Indexación booleana,`np.where()`
- Reglas de transmisión
- Operador`np.dot()`y `@`
- Operaciones matriciales: `np.linalg.inv()`,`np.linalg.eig()`
- Agregaciones con argumento `axis=`
- Módulo `np.random`

### 1.9 Pandas (Esencial para el trabajo de datos)

- Creación de DataFrames y Series
- `df.head()`, `df.info()`, `df.describe()`,`df.shape`
- Indexación`loc`frente a `iloc`
- filtrado booleano
- Manejo de valores faltantes: `isna()`, `dropna()`,`fillna()`
- `groupby()`, `agg()`, `pivot_table()`,`value_counts()`
- `merge()`, `concat()`, `melt()`,`pivot()`
- Fechas de análisis:`pd.to_datetime()`

### 1.10 Calidad del código y estructura del proyecto

- Entornos virtuales:`venv`o`conda`
-`requirements.txt`y`pip freeze`
- Escribir código modular - dividir en archivos y módulos
-`__init__.py`- convertir una carpeta en un paquete
- Escriba sugerencias:`def fn(x: int) -> str:`
-`dataclasses`- contenedores de datos más limpios
- Pruebas unitarias con`pytest`
- Linting con`ruff`o `flake8`, formateo con`black`

### 1.11 Python para flujos de trabajo de IA

- Cuadernos Jupyter - celdas, comandos mágicos
- Google Colab - Acceso a GPU
-`tqdm`- barras de progreso para bucles de entrenamiento
-`argparse`- Argumentos CLI para scripts
- Configuraciones`hydra`o `yaml`: administración de configuraciones de experimentos
-`dotenv`- gestión de claves API (CRÍTICO para proyectos de IA)
- Siembra para reproducibilidad: `random`, `numpy`,`torch`
- Guardar/cargar modelos: `pickle`, `joblib`,`torch.save()`

### 1.12 Async Python (crítico para las API de IA)

- Sintaxis `async/await`
-`asyncio`bucle de eventos
-`aiohttp`- llamadas HTTP asíncronas a API de IA
- Llamadas API simultáneas con`asyncio.gather()`
- `httpx`: primer cliente HTTP asíncrono utilizado en aplicaciones de IA de producción
- Comprender por qué la transmisión de respuestas de LLM necesita sincronización

---

### 📦 Proyectos Fase 1

**🟢 Fácil: CLI del kit de herramientas de IA de Python**
- Cree una herramienta CLI que acepte entrada de texto y llame a la API OpenAI
- Funciones: resumir, traducir, análisis de sentimientos.
- Pila: Python, `argparse`,`openai`SDK,`.env`

**🟡 Medio: llamador asíncrono de múltiples API**
- Llame a OpenAI + Anthropic + Gemini simultáneamente con`asyncio.gather()`
- Comparar las respuestas una al lado de la otra
- Agregar manejo de errores, reintentos con retroceso exponencial
- Pila: Python, `httpx`, `asyncio`,`rich`para visualización del terminal

**🔴 Difícil: canalización de datos de grado de producción**
- Cree una canalización que lea archivos CSV, limpie datos, los fragmente en lotes y los envíe a una API integrada.
- Características: barras de progreso, recuperación de errores, reanudación desde el punto de control, procesamiento por lotes asíncrono
- Pila: Python, Pandas, NumPy, `tqdm`, `asyncio`, API de embeddings de OpenAI

---

## 🗺️ FASE 2 - Matemáticas y estadística para IA

> **Objetivo:** comprender las matemáticas detrás de lo que hacen los modelos; no es necesario derivar todo, pero sí comprenderlo.

### 2.1 Álgebra lineal

**Vectores**
- Qué es un vector - geométrica y algebraicamente
- Suma de vectores, multiplicación escalar.
- Producto escalar - intuición geométrica (similitud, proyección)
- Magnitud vectorial/norma (`L1`, `L2`,`Lp`normas)
- Vectores unitarios y normalización.
- Similitud del coseno: cómo funcionan las embeddings
- Ortogonalidad

**Matrices**
- Operaciones matriciales: suma, multiplicación, transposición.
- Producto por elementos versus producto matricial
- Matriz de identidad, matriz inversa.
- Determinante - intuición geométrica
- Rango de una matriz

**Operaciones matriciales en contexto de aprendizaje automático**
- Transformaciones lineales
- Sistemas de ecuaciones lineales:`Ax = b`
- Sistemas sobredeterminados y mínimos cuadrados.
- Traza de una matriz

**Descomposiciones**
- Valores propios y vectores propios
- Por qué son importantes los valores propios en PCA
- Descomposición de valores singulares (SVD): intuición de alto nivel
- Cómo se relaciona la SVD con la reducción de dimensionalidad

### 2.2 Cálculo

**Derivados**
- Qué es una derivada: tasa de cambio, pendiente
- Regla de potencia, regla de cadena, regla de producto.
- Derivado de `log`, `exp`,`sigmoid`
- Mínimos, máximos, puntos silla.
- Segunda derivada - concavidad, convexidad

**Derivados Parciales y Multivariable**
- Derivada parcial - tasa de cambio w.r.t. una variable
- Gradiente - vector de todas las derivadas parciales
- La pendiente apunta hacia arriba - minimizar significa ir en sentido contrario
- matriz jacobiana
- Matriz de arpillera

**Regla de la cadena (crítica para el aprendizaje automático)**
- Regla de la cadena para una sola variable
- Regla de la cadena para multivariable: cómo funciona la retropropagación
- Gráficos computacionales - pase hacia adelante y hacia atrás.

**Funciones clave para diferenciarse**
- Sigmoide:`σ(x) = 1/(1+e^-x)`y su derivada
- ReLU y su derivado
- gradiente Softmax
- gradiente de pérdida de entropía cruzada
- gradiente de pérdida de MSE

### 2.3 Probabilidad y estadística

**Conceptos básicos de probabilidad**
- Espacio muestral, eventos, resultados.
- Probabilidad conjunta, marginal y condicional.
- Independencia
- Ley de probabilidad total

**Teorema de Bayes**
- Fórmula:`P(A|B) = P(B|A) * P(A) / P(B)`
- Previo, probabilidad, posterior
- Actualización bayesiana
- Naive Bayes como aplicación directa

**Variables aleatorias y distribuciones**
- Variables aleatorias discretas vs continuas
- PMF, PDF, CDF
- Valor esperado, varianza, desviación estándar.
- Covarianza y correlación

**Distribuciones clave**
- Bernoulli, Binomial, Gaussiano (Normal), Uniforme
- Poisson, Exponencial, Multinomial (usado en PNL)

**Conceptos estadísticos**
- Teorema del límite central
- Ley de los Grandes Números
- MLE (Estimación de máxima verosimilitud)
- MAPA (Máximo A Posteriori)
- Entropía, divergencia KL, entropía cruzada

### 2.4 Optimización

**Conceptos básicos**
- Función objetivo/pérdida
- Funciones convexas vs no convexas
- Mínimos locales vs mínimos globales vs puntos silla
- Optimización restringida versus no restringida

**Descenso de gradiente**
- Intuición - bola rodando cuesta abajo
- Regla de actualización:`θ = θ - α * ∇L(θ)`
- Tasa de aprendizaje: demasiado alta versus demasiado baja
- Lote GD vs SGD vs Mini-lote

**Optimizadores**
- Impulso
- RMSProp
- Adam: combina impulso + RMSProp (el más común)
- Programaciones de tasas de aprendizaje: caída de pasos, recocido de coseno, calentamiento

**Desafíos clave**
- Degradados que desaparecen
- Explosión de degradados + recorte de degradado
- Puntos de silla en dimensiones altas.
- Regiones de la meseta

**Regularización**
- Regularización L2 (caída de peso)
- Regularización L1 - promueve la escasez
- Abandono
- Parada anticipada

### 2.5 Teoría de la información

- Entropía`H(X) = -Σ p(x) log p(x)`
- Pérdida de entropía cruzada - pérdida natural por clasificación
- KL Divergencia - utilizado en VAE, destilación, RL
- Información mutua
- Bits contra nats

---

### 📦 Proyectos Fase 2

**🟢 Fácil: búsqueda de similitud de coseno**
- Implementar similitud de coseno desde cero usando NumPy
- Cree una mini búsqueda semántica: dada una consulta, encuentre las oraciones más similares
- Visualizar el espacio vectorial con matplotlib

**🟡 Medio: Visualizador de descenso de gradiente**
- Implementar descenso de gradiente desde cero para regresión lineal y regresión logística.
- Visualizar curvas de pérdidas, límites de decisión.
- Comparar la convergencia SGD vs Adam vs RMSProp
- Pila: Python, NumPy, Matplotlib

**🔴 Difícil: construye tu propia red neuronal desde cero**
- Implementar pase hacia adelante, pase hacia atrás (backprop), actualizaciones de peso.
- Soporte: capas lineales, ReLU, sigmoideas y Softmax
- Entrene en MNIST, alcance >95% de precisión
- Sin PyTorch/TensorFlow - NumPy puro
- Pila: Python, NumPy, Matplotlib

---

## 🗺️ FASE 3 - Fundamentos del aprendizaje automático

> **Objetivo:** Comprender los algoritmos de aprendizaje automático clásicos que impulsan la ingeniería y la evaluación de funciones de IA.

### 3.1 Conceptos básicos de aprendizaje automático

- Aprendizaje supervisado, no supervisado y por refuerzo
- Conjunto de entrenamiento, conjunto de validación, conjunto de prueba.
- Sobreajuste y desajuste
- Compensación sesgo-varianza
- Validación cruzada (k veces)
- Métricas de evaluación: Exactitud, Precisión, Recuperación, F1, AUC-ROC

### 3.2 Regresión lineal y logística

- Regresión lineal - forma cerrada y descenso de gradiente
- Regresión logística - salida sigmoidea, clasificación binaria
- Funciones de costos: MSE, Entropía cruzada binaria
- Regularización: Cresta (L2), Lazo (L1)
- Clasificación multiclase: Uno contra Resto

### 3.3 Árboles y conjuntos de decisión

- Árboles de decisión - criterios de división (Gini, entropía)
- Bosques aleatorios - embolsado de árboles de decisión
- Aumento de gradiente - XGBoost, LightGBM (usado en funciones de ML)
- Importancia de la característica

### 3.4 Aprendizaje no supervisado

- Agrupación de K-medias
-DBSCAN
- PCA - reducción de dimensionalidad (se conecta a embeddings)
- t-SNE / UMAP - visualización de datos de alta dimensión (visualización integrada)

### 3.5 Ajuste de hiperparámetros

- Búsqueda de cuadrícula, búsqueda aleatoria
- Optimización bayesiana
- Tasa de aprendizaje, tamaño de lote, épocas, capas.
- Parada anticipada

### 3,6 ml con Scikit-Learn

- Pipelines: clase `Pipeline()`
- Preprocesadores: `StandardScaler`, `MinMaxScaler`,`OneHotEncoder`
- Selección de modelo: `GridSearchCV`,`cross_val_score`
- Guardando modelos:`joblib`
- Comprender el patrón API de sklearn (ajustar/transformar/predecir)

---

### 📦 Proyectos Fase 3

**🟢 Fácil: Clasificador de spam**
- Cree un clasificador de correo electrónico spam/no spam con TF-IDF + Regresión logística
- Evaluar con precisión, recordar, F1
- Pila: Scikit-learn, Pandas, NLTK

**🟡 Medio: Sistema de predicción de abandono de clientes**
- Proceso completo: limpieza de datos → ingeniería de funciones → entrenamiento de modelos → evaluación
- Pruebe la regresión logística frente al bosque aleatorio frente a XGBoost
- Agregue SHAP para mayor explicabilidad
- Pila: Scikit-learn, XGBoost, SHAP, Pandas, Matplotlib

**🔴 Difícil: Mini-Framework de AutoML**
- Cree un marco que pruebe automáticamente múltiples modelos e hiperparámetros.
- Generar un informe de evaluación completo.
- Agregar importancia de característica, matriz de confusión, curva ROC
- Pila: Scikit-learn, Optuna (optimización bayesiana), Pandas, Matplotlib

---

## 🗺️ FASE 4 - Aprendizaje profundo

> **Objetivo:** Comprender las redes neuronales con suficiente profundidad para trabajar con transformadores.

### 4.1 Fundamentos de redes neuronales

- Neurona, Perceptrón, MLP
- Funciones de activación: Sigmoide, Tanh, ReLU, GELU, SwiGLU
- Pase hacia adelante: cómo fluye la información
- Retropropagación: cómo fluyen los gradientes hacia atrás
- Estrategias de inicialización de peso.
- Problema de gradiente que desaparece o explota

### 4.2 Técnicas de entrenamiento

- Normalización de lotes - entrenamiento estabilizador
- Normalización de capa: utilizada en transformadores.
- Abandono - regularización estocástica
- Conexiones residuales (conexiones de salto): utilizadas en todos los modelos modernos
- Recorte de degradado

### 4.3 Redes neuronales convolucionales (CNN)

- Operación de convolución - detección de características
- Agrupación de capas - reducción de resolución espacial
- Arquitecturas CNN: LeNet, AlexNet, VGG, ResNet
- Transferir aprendizaje con CNN
- Aplicaciones: clasificación de imágenes, detección de objetos.

### 4.4 Redes neuronales recurrentes (RNN)

- RNN: procesamiento de secuencias paso a paso
- Estado oculto: memoria a través de pasos de tiempo.
- Gradiente de desaparición en RNN
- LSTM - estado de la celda, puertas de olvido/entrada/salida
- GRU - alternativa LSTM más simple
- RNN bidireccionales
- Seq2Seq: codificador + decodificador
- Decodificación de búsqueda de haz

### 4.5 Mecanismo de Atención (Pre-Transformador)

- Atención como alineación "suave"
- Atención aditiva vs multiplicativa
- Atención de Bahdanau para seq2seq.
- Por qué la atención resolvió el problema del cuello de botella

### 4.6 PyTorch (Domina esto)

- Tensores - creación, operaciones, GPU
-`torch.nn.Module`- modelos de construcción
-`torch.optim`- Adán, SGD, etc.
- Conjuntos de datos personalizados con`torch.utils.data.Dataset`
- DataLoader - procesamiento por lotes y barajado
- Bucle de entrenamiento: adelante → pérdida → atrás → paso
-`model.eval()`frente a`model.train()`
- Guardando/cargando: `torch.save()`,`torch.load()`
- Pasar a GPU:`.to(device)`
- Cálculo del gradiente: `.requires_grad`,`torch.no_grad()`
- Funciones de pérdida personalizadas
- Programadores de tasas de aprendizaje

### 4.7 Transferir el aprendizaje

- ¿Qué es el preentrenamiento y por qué es importante?
- Ajuste fino versus extracción de características
- Congelar capas
- Momento ImageNet para PNL
- Uso de modelos previamente entrenados de HuggingFace

---

### 📦 Proyectos Fase 4

**🟢 Fácil: Clasificador de imágenes con aprendizaje por transferencia**
- Ajuste ResNet-18 en un conjunto de datos de imágenes personalizado (5 categorías)
- Seguimiento de la precisión del tren/val, trazar curvas de pérdida
- Pila: PyTorch, torchvision, Matplotlib

**🟡 Medio: Análisis de sentimiento con LSTM vs BERT**
- Construya LSTM desde cero y luego use BERT previamente entrenado
- Comparar el rendimiento en el conjunto de datos de reseñas de películas
- Pila: PyTorch, HuggingFace Transformers

**🔴 Difícil: construye un Mini GPT desde cero**
- Implementar la arquitectura completa del transformador: atención, atención de múltiples cabezales, codificación posicional, feed-forward, conexiones residuales.
- Entrenar en un pequeño corpus de texto (Shakespeare/wiki)
- Pila: PyTorch, NumPy (sigue el estilo nanoGPT de Andrej Karpathy)

---

## 🗺️ FASE 5 - Transformadores y procesamiento del lenguaje natural

> **Objetivo:** Experiencia profunda en PNL para productos basados en LLM.

### 5.1 Preprocesamiento de texto

- Tokenización: palabras, subpalabras, caracteres.
- Minúsculas, eliminación de puntuación, normalización de espacios en blanco.
- Eliminación de palabras de parada: cuándo y cuándo no
- Derivación vs Lematización
- Segmentación de oraciones
- Manejo de tokens especiales: URL, correos electrónicos, hashtags
- Problemas de codificación y Unicode (`utf-8`)

### 5.2 Representación de texto clásica

- Bolsa de palabras (Arco)
- TF-IDF - fórmula e intuición
- N-gramas - captura de contexto
- Codificación one-hot y por qué falla a escala
- Representaciones escasas versus densas

### 5.3 Incrustaciones de palabras

- Por qué embeddings: vectores densos y semánticos
- Word2Vec - CBOW frente a Skip-gram
- GloVe - estadísticas globales de co-ocurrencia
- FastText - embeddings de subpalabras, maneja OOV
- Similitud de coseno en embeddings.
- Tareas de analogía:`king - man + woman = queen`
- Incrustaciones estáticas vs contextuales

### 5.4 Tokenización de subpalabras (moderno)

- Codificación de pares de bytes (BPE): utilizada en GPT
- WordPieza - utilizado en BERT
- FrasePieza - utilizado en T5, LLaMA
- Tokens especiales: `[CLS]`, `[SEP]`, `[PAD]`, `[MASK]`, `<eos>`,`<bos>`
- ID de token: cómo se asigna el texto a números enteros
- Compensaciones sobre el tamaño del vocabulario

### 5.5 Arquitectura de transformadores (domine esto)

- Por qué los transformadores reemplazaron a los RNN: paralelismo y atención de largo alcance
- Autoatención: cada token atendiendo a los demás.
- Consulta, Clave, Valor (Q, K, V) - intuición y formulación matricial
- Puntuación de atención:`softmax(QKᵀ / √d_k) * V`
- Atención multicabezal - atendiendo a diferentes aspectos
- Codificación posicional - orden de inyección
- Subcapa de retroalimentación
- Normalización de capas y conexiones residuales.
- Solo codificador (estilo BERT): tareas de comprensión
- Solo decodificador (estilo GPT): tareas de generación
- Codificador-Decodificador (estilo T5) - Tareas seq2seq
- Enmascaramiento causal en decodificadores.

### 5.6 Modelado del lenguaje

-`P(next token | previous tokens)`
- Modelado de lenguaje autorregresivo.
- Modelado de lenguaje enmascarado (MLM)
- Perplejidad - evaluación de modelos lingüísticos
- Muestreo de temperatura, Top-k, Top-p (núcleo)
- Codicioso vs muestreo vs búsqueda de haz

### 5.7 Modelos clave preentrenados

| Modelo | Tipo | Mejor para |
|---|---|---|
| BERT | Sólo codificador | Clasificación, NER, control de calidad |
| GPT-4 | Sólo decodificador | Generación, chat |
| Claudio 3.5/4 | Sólo decodificador | Contexto largo, seguridad |
| Géminis | Codificador-Decodificador | Multimodal |
| T5 | Codificador-Decodificador | Tareas Seq2seq |
| LLAMA 3 | Sólo decodificador | Ajuste de código abierto |
| Mistral 7B | Sólo decodificador | Inferencia eficiente |
| Qwen 2.5 | Sólo decodificador | Multilingüe |

### 5.8 Métricas de evaluación de PNL

- Exactitud, Precisión, Recuperación, F1
- BLEU - traducción automática
- ROJO - resumen
- Perplejidad - modelos lingüísticos
- BERTScore - similitud semántica
- Evaluación humana
- Coincidencia exacta (EM) - Tareas de control de calidad

### 5.9 Bibliotecas clave de Python

-`NLTK`- PNL clásica
-`spaCy`- producción de PNL: NER, análisis
-`transformers`(HuggingFace) - modelos previamente entrenados
-`datasets`(HuggingFace) - cargando conjuntos de datos
-`sentence-transformers`- embeddings de oraciones
-`tiktoken`- Tokenizador de OpenAI (BPE)
-`evaluate`- Métricas de HuggingFace

---

### 📦 Proyectos Fase 5

**🟢 Fácil: canalización de reconocimiento de entidades nombradas (NER)**
- Utilice spaCy para extraer entidades de artículos de noticias
- Cree una interfaz web sencilla con Streamlit
- Pila: spaCy, Streamlit

**🟡 Medio: Motor de búsqueda semántico**
- Incrustar 10.000 párrafos de Wikipedia con BERT
- Construir una interfaz de búsqueda que encuentre pasajes semánticamente similares
- Pila: HuggingFace, transformadores de oraciones, FAISS, Streamlit

**🔴 Difícil: ajuste BERT para clasificación de etiquetas múltiples**
- Ajuste BERT en un conjunto de datos de clasificación de texto de múltiples etiquetas
- Manejar el desequilibrio de clases, métricas de evaluación personalizadas.
- Implementar como API REST con FastAPI
- Pila: PyTorch, HuggingFace Transformers, FastAPI, Docker

---

## 🗺️ FASE 6: Modelos de lenguaje grandes e ingeniería de IA

> **Objetivo:** Este es su dominio principal. Domine los fundamentos, las API y los patrones de producción de LLM.

### 6.1 Fundamentos del LLM

**Análisis profundo de la arquitectura**
- Transformador a escala: qué cambios pasan de los parámetros 1B a 100B
- Ventana contextual: cómo funciona y limitaciones
- KV Cache: cómo acelera la inferencia
- Tokenización a escala
- Codificaciones posicionales: Absoluta, Relativa, RoPE, ALiBi
- Atención Flash: atención con memoria eficiente
- Atención de consultas agrupadas (GQA): utilizada en LLaMA 3
- Atención de ventana corredera - usado en Mistral

**Capacitación LLM**
- Capacitación previa: aprendizaje a partir de textos a escala de Internet.
- Ajuste de instrucciones - siguiendo las instrucciones del usuario
- RLHF (Aprendizaje por refuerzo a partir de la retroalimentación humana)
- IA constitucional (enfoque de Anthropic)
- DPO (Optimización de Preferencia Directa) - alternativa a RLHF
- Leyes de escala: relación entre el tamaño del modelo, los datos y la computación.

### 6.2 Ingeniería rápida (grado de producción)

**Anatomía inmediata**
- Aviso del sistema: funciones y restricciones
- Mensaje de usuario: la solicitud real
- Turno de asistente: historial de respuestas del modelo.
- Ejemplos breves en contexto.

**Técnicas de indicaciones**
- Indicación de disparo cero
- Indicaciones de un solo disparo y de pocos disparos.
- Cadena de pensamiento (CoT) - "pensar paso a paso"
- Autoconsistencia: generar múltiples rutas de CoT, votar
- Indicaciones de ReAct - Razonamiento + Actuación (para agentes)
- Árbol del Pensamiento (ToT)
- Solicitud de salida estructurada - JSON, XML
- Indicación de rol: "Usted es un ingeniero de software senior..."
- Encadenamiento de mensajes: salida de un mensaje → entrada del siguiente

**Ingeniería de pronta producción**
- Dar instrucciones claras + formato + límites
- Siempre especificando qué NO hacer
- Uso de ejemplos y restricciones de salida.
- Versiones rápidas y registros de cambios
- Indicaciones de prueba A/B
- Compresión rápida: reducción del recuento de tokens
- Defensa de inyección rápida

**Herramientas**
- PromptLayer - seguimiento de versiones de mensajes
- LangSmith - Observabilidad de LangChain
- Zona de juegos OpenAI
- Consola Anthropic

### 6.3 Trabajar con API de IA

**API OpenAI**
- API de finalización de chat - matriz `messages`
- Llamada de funciones / uso de herramientas
- Modo JSON / Salidas estructuradas
- Transmisión de respuestas (SSE)
- API de embeddings
- API de visión (GPT-4V)
- API de asistentes con búsqueda de archivos.
- API por lotes para procesamiento masivo
- Conteo de tokens con`tiktoken`
- Límites de tarifas y cuotas

**API Anthropic (Claude)**
- Estructura API de mensajes
- Avisos del sistema
- Contexto largo (200.000 tokens)
- Soporte de visión
- Uso de herramientas
- Transmisión

**API de Google AI (Gemini)**
- Géminis Pro / Ultra
- Entradas multimodales (texto, imagen, vídeo, audio)
- Búsqueda en tiempo real
- Almacenamiento en caché de contexto (reducción de costos)

**API de IA Mistral**
- Mistral 7B, 8x7B (MoE), grande
- Llamada de función
- Modo JSON
- Modelos de código abierto vía Ollama

**Meta (LLaMA) vía HuggingFace / Ollama**
- Modelos LLaMA 3
- Corriendo localmente con Ollama
- Ajuste de LLaMA con PEFT

**Otros proveedores clave**
- Cohere - incorporaciones empresariales, RAG
- NVIDIA NIM - Inferencia optimizada para GPU
- Groq - inferencia ultrarrápida (LPU)
- Together AI: alojamiento de código abierto
- Replicar - alojamiento de API modelo

### 6.4 Patrones de integración de API

**Manejo de límites de tokens**
- Contar tokens antes de enviarlos (tiktoken, tokenizador Anthropic)
- Estrategias de truncamiento
- Gestión de ventanas de contexto
- Resumen de la historia antigua.

**API de transmisión**
- Eventos enviados por el servidor (SSE): transmisión de fragmentos de texto
- Manejo de respuestas parciales.
- Representación del lado del cliente de la salida de streaming
- Beneficios: reducción de latencia percibida

**Limitación de velocidad y reintentos**
- Retroceso exponencial con jitter
- Respetar las cuotas de proveedores.
- Gestión de solicitudes basada en colas
- Patrón de disyuntor

**Control de costos**
- Registrar el uso del token por usuario/función
- Enrutamiento GPT-3.5 vs GPT-4 por complejidad de la tarea
- Compresión rápida (eliminar espacios en blanco, resumir contexto)
- Almacenamiento en caché con huellas dactilares SHA-256
- Canalizaciones asíncronas para tareas que no son en tiempo real

**Manejo de errores y respaldo**

```
try:
    response = call_gpt4(prompt)
except APIError:
    response = call_gpt35(prompt)  # cheaper fallback
except RateLimitError:
    response = get_cached_response(prompt)
except Exception:
    response = DEFAULT_MESSAGE
```
### 6.5 Integración segura de API

- **Nunca** exponga las claves API al frontend
- Archivos`.env`localmente, Secret Manager en producción
- Patrón de proxy backend - frontend → su API → proveedor LLM
- Limitación de tarifas por usuario con Redis
- Estrategia de rotación de claves API
- Registro y seguimiento

---

### 📦 Proyectos Fase 6

**🟢 Fácil: Chatbot AI multiproveedor**
- Construir un chatbot que pueda cambiar entre OpenAI / Claude / Gemini
- Agregar soporte de transmisión con SSE
- Almacenar el historial de conversaciones en Redis
- Pila: FastAPI, OpenAI SDK, Anthropic SDK, Redis, React

**🟡 Medio: Clasificación de currículums impulsado por IA**
- Cargue un currículum en PDF → extraiga texto → compare con la descripción del trabajo
- Puntuación del partido de vuelta, habilidades faltantes, comentarios
- Agregar almacenamiento en caché con Redis (huella digital SHA-256)
- Pila: FastAPI, OpenAI, `pdf-parse`, Redis, React

**🔴 Difícil: Servicio de middleware de IA de producción**
- Cree un middleware que se encuentre entre su aplicación y múltiples proveedores de LLM
- Características: enrutamiento inteligente, limitación de velocidad, seguimiento de costos, cadena de respaldo, registro rápido, conteo de tokens, procesamiento por lotes asíncrono
- Pila: FastAPI, Redis, PostgreSQL, OpenAI + Anthropic + Gemini SDK, Docker

---

## 🗺️ FASE 7 - Orquestación Multi-LLM (Tu especialidad)

> **Objetivo:** Diseñar y construir sistemas multi-LLM de grado de producción. Esto es lo que separa a los buenos ingenieros de IA de los grandes.

### 7.1 Por qué la arquitectura Multi-LLM

- Ningún modelo es mejor para todas las tareas
- Optimización de costos: use modelos costosos solo cuando sea necesario
- Confiabilidad: respaldo cuando un proveedor no funciona
- Latencia: ruta al modelo más rápido para consultas simples
- Cumplimiento: algunos clientes empresariales no pueden utilizar ciertos proveedores
- Ventana contextual: ruta a Claude para documentos largos, GPT-4 para razonamiento

### 7.2 Estrategias de enrutamiento

**Enrutamiento basado en tareas**

```
Simple query   → Mistral 7B / GPT-3.5    (cheap, fast)
Reasoning      → GPT-4 / Claude 3 Opus   (expensive, accurate)
Long context   → Claude 3.5 Sonnet       (200K context)
Code           → GPT-4 / CodeLlama       (specialized)
Multimodal     → Gemini Pro / GPT-4V     (vision)
Embeddings     → text-embedding-3-small  (cost-effective)
Fast inference → Groq (LLaMA 3)          (ultra-low latency)
```
**Rutas basadas en costos**
- Verificación de nivel de usuario: gratis → modelos baratos, premium → GPT-4
- Monitoreo del presupuesto de tokens
- Enrutamiento dinámico basado en el gasto mensual
- Optimización de la tasa de aciertos de caché

**Enrutamiento basado en el rendimiento**
- Seguimiento de la calidad de la respuesta por modelo por tipo de tarea
- Pruebas A/B de modelos en producción.
- Bucle de retroalimentación: las calificaciones de los usuarios informan el enrutamiento
- Aplicación de SLA de latencia

### 7.3 Arquitectura alternativa

```
Principal:   GPT-4o           (preferido, mejor calidad)
    ↓ fallo
Secundario: Claude 3.5 Sonnet (calidad similar)
    ↓ fallo
Terciario:  GPT-3.5 Turbo    (más barato, aún capaz)
    ↓ fallo
Caché:      Última respuesta conocida (obsoleta pero útil)
    ↓ sin acierto
Por defecto: respuesta de plantilla estática
```
**Patrón de disyuntor**
- Seguimiento de la tasa de fracaso por proveedor
- Circuito abierto después de N fallas en M segundos
- Estado semiabierto - prueba con petición única
- Cerrar circuito en caso de éxito.

### 7.4 Protocolo de contexto modelo (MCP)

- ¿Qué es MCP? El estándar abierto de Anthropic para la conectividad de herramientas de IA.
- MCP vs llamada de función vs uso de herramientas
- Servidores MCP: recursos, herramientas, indicaciones
- Clientes MCP - Claude Desktop, IDE, aplicaciones personalizadas
- Construyendo un servidor MCP en Python
- Construyendo un servidor MCP en TypeScript
- Conexión de MCP a bases de datos, API y sistemas de archivos.
- MCP para sistemas multiagente
- Consideraciones de seguridad en MCP

### 7.5 Marcos de orquestación de LLM

**LangChain**
- Conceptos básicos: Cadenas, Agentes, Memoria, Herramientas.
-`LLMChain`- mensaje básico + LLM
-`SequentialChain`- encadenamiento de múltiples LLM
-`ConversationalChain`- con memoria
-`RetrievalQA`- Cadena TRAPO
- Llamada de herramientas con agentes de LangChain.
- LCEL (LangChain Expression Language) - nueva sintaxis de composición
- LangSmith - observabilidad y seguimiento

**IdiomaGráfico**
- Lo que LangGraph agrega sobre LangChain: flujos de trabajo cíclicos y con estado
- Nodos - unidades de trabajo (llamadas LLM, herramientas, condiciones)
- Bordes - conexiones entre nodos (condicional, paralelo)
- Estado: estado compartido pasado entre nodos
- Creación de flujos de trabajo de múltiples agentes con LangGraph
- Patrones humanos en el circuito
- Transmisión desde LangGraph
- Persistencia y puntos de control.

**LlamaIndex**
- Conectores de datos - carga de documentos
- Tipos de índice: VectorStore, Resumen, Gráfico de conocimiento
- motores de consulta
- Descomposición de subpreguntas
- LlamaIndex vs LangChain - cuándo usar cuál

**TripulaciónAI**
- Descomposición de tareas multiagente
- Agentes con roles, historias de fondo, objetivos.
- Tareas y flujos de procesos.
- Integración de herramientas

**AutoGen (Microsoft)**
- Patrones de conversación multiagente
- AsistenteAgente vs UsuarioProxy
- Agentes de ejecución de código.
- Patrones de chat grupal

### 7.6 Creación de sistemas de estilo PrinceSinghAI / PrinceSinghDev

**Arquitectura de puerta de enlace multiLLM**

```
Client Request
    ↓
API Gateway (Auth, Rate Limit, Logging)
    ↓
Router Service (Task Classification)
    ↓ ↓ ↓
OpenAI  Claude  Gemini  Mistral  (parallel or cascading)
    ↓
Response Aggregator
    ↓
Cache Layer (Redis)
    ↓
Client Response
```
**Componentes clave para construir**
- Capa de abstracción del proveedor: interfaz unificada para todos los LLM
- Enrutador inteligente: clasifica la tarea, selecciona el modelo óptimo
- Contador de tokens: por proveedor, por usuario
- Rastreador de costos: monitoreo de gastos en tiempo real
- Validador de respuestas: validación de esquemas, controles de calidad.
- Administrador de respaldo: cascada a través de proveedores
- Administrador de caché: almacenamiento en caché semántico con embeddings
- Observabilidad: seguimientos, métricas, registros.

---

### 📦 Proyectos Fase 7

**🟢 Fácil: Panel de control del enrutador LLM**
- Cree una interfaz de usuario que le permita comparar las respuestas de GPT-4, Claude y Gemini una al lado de la otra.
- Mostrar recuento de tokens, costo y latencia para cada uno
- Pila: React, FastAPI, OpenAI + Anthropic + Gemini SDK

**🟡 Medio: enrutador inteligente Multi-LLM**
- Clasificar consultas entrantes (simples/complejas/código/contexto largo/visión)
- Ruta al mejor modelo según clasificación.
- Agregar cadena de respaldo, seguimiento de costos, almacenamiento en caché de respuestas
- Pila: FastAPI, Redis, PostgreSQL, OpenAI + Anthropic + Gemini

**🔴 Difícil: Plataforma de orquestación de producción Multi-LLM (PrinceSinghAI)**
- Servicio de puerta de enlace completo con: autenticación, limitación de velocidad por usuario, enrutamiento inteligente, cadenas de respaldo, seguimiento de costos por usuario/función, control de versiones rápido, pruebas A/B, transmisión de respuestas, panel de observabilidad
- Integración MCP para conectividad de herramientas.
- Implementar en Kubernetes con escalado automático
- Pila: FastAPI, Redis, PostgreSQL, Kafka, OpenAI + Anthropic + Gemini + Mistral, Docker, Kubernetes, Grafana

---

## 🗺️ FASE 8 - Bases de datos RAG y vectoriales

> **Objetivo:** Construir sistemas de recuperación que brinden a los LLM acceso a su conocimiento privado.

### 8.1 Por qué existe RAG

- Los LLM tienen límites de conocimiento
- Los LLM no pueden acceder a datos privados/de propiedad exclusiva
- Los LLM alucinan cuando no saben
- RAG = Búsqueda basada en embeddings + Generación basada en mensajes
- RAG vs Ajuste fino: cuándo usar cuál

### 8.2 Análisis profundo de embeddings

- ¿Qué son las embeddings? - Representaciones vectoriales densas y semánticas.
- Modelos de embeddings: `text-embedding-3-small`, `text-embedding-3-large` (OpenAI)
- `all-MiniLM-L6-v2`,`bge-large`(código abierto, HuggingFace)
-`embed-english-v3`(Cohere) - sintonizado para RAG
- Dimensiones de empotramiento: equilibrio entre calidad y almacenamiento
- Incorporación por lotes para mayor eficiencia
- Similitud entre embeddings: coseno, producto escalar, euclidiana.

### 8.3 Estrategias de fragmentación

- Fragmentación de tamaño fijo: simple pero ingenua
- Fragmentación basada en oraciones: respeta los límites naturales
- División de texto de caracteres recursivo - Valor predeterminado de LangChain
- Fragmentación semántica: división por cambio de tema
- Fragmentación basada en documentos: por encabezados, secciones
- Compensación entre el tamaño del fragmento y la superposición
- Metadatos fragmentados: fuente, página, sección

### 8.4 Bases de datos vectoriales

| Base de datos | Tipo | Mejor para |
|---|---|---|
| **FAISS** | Locales | Creación de prototipos, investigación |
| **Croma** | Local/Nube | Producción temprana |
| **Piña** | Gestionado | Escala de producción |
| **Weaviate** | Autohospedado | Filtrado de metadatos |
| **Qdrante** | Autohospedado | Alto rendimiento |
| **LanzaDB** | Integrado | Aplicaciones sin servidor |
| **pgvector** | Extensión de PostgreSQL | Usuarios existentes de Postgres |
| **Atlas de MongoDB** | Gestionado | Aplicaciones de pila completa |
| **Supabase** | Gestionado | Postgres + vectores |

**Operaciones de bases de datos vectoriales**
- Indexación: almacenamiento de embeddings con metadatos
- Búsqueda de similitudes: encontrar vecinos más cercanos
- Búsqueda filtrada - metadatos + similitud de vectores
- Búsqueda híbrida: palabra clave + vector (BM25 + embeddings)
- Aislamiento de espacio de nombres/colección - multiinquilino
- Índice HNSW - Mundo pequeño navegable jerárquico (algoritmo detrás de la mayoría de las bases de datos vectoriales)

### 8.5 Implementación del oleoducto RAG

**TRAPO Básico**

```
Document → Chunk → Embed → Store in Vector DB
                                    ↓
User Query → Embed → Retrieve Top-K Chunks
                                    ↓
            Chunks + Query → LLM → Answer
```
**Técnicas RAG avanzadas**
- **Incrustaciones de documentos hipotéticos (HyDE)** - generar una respuesta hipotética, incrustarla para su recuperación
- **Expansión de consultas**: genera múltiples variantes de consulta
- **Reclasificación**: utilice un codificador cruzado para reclasificar los fragmentos recuperados (Cohere Rerank, BGE Reranker)
- **Recuperación de consultas múltiples**: descompone preguntas complejas en subconsultas
- **Autoconsulta** - LLM genera un filtro estructurado a partir del lenguaje natural
- **Compresión contextual**: comprime el contexto recuperado antes de enviarlo a LLM
- **Recuperador de documentos principales**: recupera fragmentos pequeños y devuelve el documento principal
- **Recuperador multivectorial**: múltiples embeddings por documento (resumen + texto completo)

**Evaluación RAG**
- Fidelidad: ¿la respuesta se basa en el contexto recuperado?
- Relevancia de la respuesta: ¿la respuesta aborda la pregunta?
- Precisión del contexto: ¿son relevantes los fragmentos recuperados?
- Recuerdo del contexto: ¿recuperamos toda la información necesaria?
- Herramientas: framework RAGAs, LangSmith, TRULENS

### 8.6 Consideraciones sobre el RAG de producción

- Indexación incremental: agregar nuevos documentos sin volver a indexar
- Control de versiones de documentos - manejo de actualizaciones de documentos
- Aislamiento multiinquilino: espacios vectoriales por usuario y por organización
- Almacenamiento en caché: embeddings de caché, resultados de consultas de caché
- Monitoreo: calidad de recuperación, latencia, tasas de aciertos
- Respaldo: "No sé" cuando el contexto es insuficiente

---

### 📦 Proyectos Fase 8

**🟢 Fácil: chatea con tu PDF**
- Cargue un PDF, fragmentelo e incrústelo, haga preguntas
- Pila: LangChain, OpenAI, Chroma, Streamlit

**🟡 Medio: Base de conocimientos de varios documentos**
- Ingerir múltiples documentos (PDF, DOCX, TXT, páginas web)
- Búsqueda híbrida: BM25 + similitud vectorial
- Atribución de fuente en las respuestas.
- Pila: LlamaIndex, Qdrant, Cohere Rerank, FastAPI, React

**🔴 Difícil: Sistema RAG empresarial (contexto RoadmapAI)**
- RAG multiinquilino con aislamiento de espacio de nombres
- Canalización incremental de ingesta de documentos.
- Recuperación avanzada: HyDE + reordenación (reranking) + compresión contextual
- Panel de evaluación de RAG con RAGA
- Implementación de producción con almacenamiento en caché y monitoreo de Redis.
- Pila: LangChain, Pinecone, Cohere, FastAPI, Redis, PostgreSQL, Grafana, Docker

---

## 🗺️ FASE 9 - Agentes de IA y sistemas agentes

> **Objetivo:** Construir sistemas de IA autónomos que puedan razonar, planificar y tomar acciones.

### 9.1 ¿Qué son los agentes de IA?

- Agente = LLM + Herramientas + Memoria + Planificación
- Diferencia entre cadena y agente: los agentes deciden dinámicamente
- Tipos: ReAct, Planificar y ejecutar, Multiagente
- Cuándo usar agentes versus cadenas
- Riesgos: coste, alucinaciones, bucles infinitos.

### 9.2 Componentes del agente

**Herramientas / Funciones**
- Herramientas de búsqueda web (Tavily, SerpAPI, Bing)
- Intérprete/ejecución de código
- Calculadora
- Herramienta de consulta de base de datos
- Herramienta de lectura/escritura de archivos
- Herramientas de llamada API
- Herramientas de raspado web
- Calendario, correo electrónico, herramientas de calendario (a través de MCP)

**Sistemas de memoria**
- Memoria en contexto - historial de conversaciones en el mensaje
- Memoria externa - almacén de vectores de interacciones pasadas
- Memoria de entidad - seguimiento de entidades mencionadas
- Memoria resumida: comprimir conversaciones antiguas
- Memoria episódica: recuerda eventos pasados específicos.

**Estrategias de planificación**
- ReAct (Razón + Actuación) - entrelaza pensamiento y acción
- Planificar y ejecutar: primero genere el plan completo y luego ejecútelo
- Árbol de pensamientos: explora múltiples caminos de razonamiento
- MRKL (Razonamiento, Conocimiento, Lenguaje Modular)

### 9.3 Llamada a funciones/uso de herramientas

**Uso de la herramienta OpenAI**
- Definir herramientas como esquemas JSON.
- Adjuntar a la llamada API
- Analizar respuestas de llamadas de herramientas
- Ejecutar herramienta, devolver resultado.
- Continuar la conversación con el resultado de la herramienta.
- Llamadas a herramientas paralelas

**Uso de herramientas Anthropics**
- Formato de definición de herramienta.
- Formato de resultado de la herramienta
- Uso de múltiples herramientas

**Construcción de sistemas de herramientas robustos**
- Validación de herramientas - validación del esquema de entrada
- Manejo de errores de herramientas - falla elegante
- Tiempos de espera de herramientas
- Autorización de herramientas: ¿qué puede hacer el agente?
- Ejecución de código en espacio aislado

### 9.4 Sistemas multiagente

**Patrones**
- Supervisor → Agentes trabajadores (jerárquicos)
- Agentes peer-to-peer (colaborativos)
- Agentes de canalización (especialistas secuenciales)
- Agentes adversarios (crítico + generador)

**LangGraph para multiagente**
- Gráficos con estado con estado compartido.
- Bordes condicionales - enrutamiento dinámico
- Ejecución paralela de agentes.
- Puntos de control con presencia humana
- Protocolos de comunicación del agente.

**Casos de uso de múltiples agentes en el mundo real**
- Sistema de revisión de código: Escritor + Revisor + Agentes probadores
- Sistema de investigación: Planificador + Investigador + Agentes sintetizadores
- Desarrollo de software: PM + Ingeniero + Agentes QA (estilo Devin)
- Atención al cliente: Clasificador + Especialista + Agentes escaladores

### 9.5 IA agente (marco AskAI)

**Principios agentes**
- Autonomía: los agentes toman decisiones sin intervención humana en cada paso.
- Orientación a objetivos: los agentes trabajan hacia objetivos específicos.
- Persistencia: los agentes mantienen el estado a través de las interacciones.
- Adaptabilidad: los agentes se ajustan en función de la retroalimentación.

**Sistemas Agenticos de Producción**
- Descomposición de tareas: dividir tareas complejas en subtareas
- Seguimiento del progreso: seguimiento de la finalización de varios pasos
- Recuperación de errores: reintentar pasos fallidos
- Escalada humana: cuándo hacer una pausa y solicitar información
- Pistas de auditoría: registro de cada decisión de los agentes

**Seguridad en Agentes**
- Confirmación de acción para operaciones irreversibles.
- Limitación del alcance: qué pueden y qué no pueden hacer los agentes.
- Controles de costos: gasto máximo por ejecución de agente
- Ejecución de código sandboxing
- Validación de entrada/salida

---

### 📦 Proyectos Fase 9

**🟢 Fácil: ReAct Agent con búsqueda web**
- Crear un agente que pueda buscar en la web para responder preguntas sobre eventos actuales.
- Herramientas: búsqueda de Tavily, calculadora, fecha actual
- Pila: LangChain, OpenAI, Tavily API

**🟡 Medio: Agente de revisión de código**
- Multiagente: Revisor (encuentra problemas), Mejorador (sugiere soluciones), Probador (escribe pruebas)
- Soporta Python y JavaScript
- Pila: LangGraph, OpenAI, Docker (ejecución en espacio aislado)

**🔴 Difícil: Agente de investigación autónomo (AskAI)**
- Dada una pregunta de investigación, agente: la descompone en subpreguntas, busca en la web + base de conocimiento interna, lee artículos, sintetiza hallazgos, escribe un informe estructurado.
- Características: investigación paralela, cita de fuentes, puntuación de confianza, puntos de control de aprobación humana
- Pila: LangGraph, OpenAI + Claude, Tavily, Pinecone, FastAPI, React, Redis para estado

---

## 🗺️ FASE 10: Ajuste y personalización del modelo

> **Objetivo:** Personalizar modelos para su dominio y caso de uso específicos.

### 10.1 Cuándo realizar el ajuste fino

**Ajusta cuando:**
- Necesita un formato de salida consistente que la ingeniería de prompts no puede lograr
- Tienes conocimientos de un dominio específico (médico, legal, código)
- Debe reducir la duración del mensaje (instrucciones de horneado en el modelo)
- Necesita un mejor rendimiento en una tarea específica

**No afines cuando:**
- RAG puede resolver el problema más barato
- No tienes suficientes datos de calidad (<50-100 ejemplos normalmente no es suficiente)
- La tarea se resuelve fácilmente con ingeniería de prompts.
- Necesita los conocimientos más recientes (el ajuste fino no actualiza los conocimientos)

### 10.2 Ajuste completo

- Comprender el proceso de ajuste
- Preparación de datos - formato de instrucción:`{"prompt": "...", "completion": "..."}`
- API de ajuste fino de OpenAI (GPT-3.5, GPT-4o-mini)
-API HuggingFace `Trainer`
- Calidad de los datos de entrenamiento > cantidad
- Conjunto de validación - seguimiento del sobreajuste
- Hiperparámetros: tasa de aprendizaje, épocas, tamaño de lote

### 10.3 Ajuste fino eficiente de parámetros (PEFT)

**LoRA (adaptación de bajo rango)**
- Intuición: inyecta pequeñas matrices entrenables en capas de atención.
- Rango (r): compensación entre eficiencia y capacidad
- Alfa (factor de escala)
- A qué capas aplicar LoRA
- Fusionar pesos LoRA en el modelo base

**QLoRA (LoRA cuantificado)**
- Cuantización de 4 bits del modelo base.
- LoRA encima del modelo cuantificado
- Ajuste los modelos 70B en GPU de consumo
- Cuantización NF4 (Flotador Normal 4)

**Otros métodos PEFT**
- Ajuste de prefijos: tokens de prefijos entrenables
- Ajuste rápido - avisos suaves
- IA3: inyecta vectores entrenables en atención y FFN

### 10.4 Herramientas de ajuste fino

- **Biblioteca HuggingFace PEFT** - estándar para LoRA/QLoRA
- **TRL (Aprendizaje por refuerzo de transformadores)** - SFT, RLHF, DPO
- **Unsloth** - Ajuste fino 2 veces más rápido, menos memoria
- **Axolotl** - marco de ajuste de producción
- **LLaMA-Factory** - UI fácil de ajustar
- **Pesos y sesgos** - seguimiento de experimentos
- **MLflow** - control de versiones del modelo

### 10.5 Preparación del conjunto de datos

- Formato de seguimiento de instrucciones (formato Alpaca)
- Formato de chat (formato ShareGPT)
- Formato DPO: respuestas elegidas vs rechazadas
- Limpieza y deduplicación de datos.
- Técnicas de aumento de datos.
- Filtrado de calidad: eliminación de ejemplos de baja calidad.
- Estrategias de mezcla de datos.

### 10.6 Evaluación después del ajuste

- Métricas específicas de tareas (BLEU, ROUGE, F1, precisión)
- Suites de referencia: MMLU, HumanEval, MT-Bench
- Evaluación humana
- Evaluación de LLM como juez
- Pruebas de regresión: asegúrese de no degradarse en otras tareas

---

### 📦 Proyectos Fase 10

**🟢 Fácil: ajuste GPT-3.5 en preguntas y respuestas personalizadas**
- Prepare 100 pares de preguntas y respuestas de alta calidad en su dominio
- Ajuste a través de la API OpenAI
- Comparar el rendimiento del modelo base versus el ajustado
- Pila: API de ajuste fino OpenAI, Python

**🟡 Medio: LoRA Afina LLaMA en Código**
- Ajuste LLaMA 3 8B con LoRA para la generación de código en un lenguaje/marco específico
- Utilice HuggingFace PEFT + TRL
- Evaluar en HumanEval
- Pila: HuggingFace PEFT, TRL, Unsloth, W&B

**🔴 Difícil: canalización RLHF completa (contexto CodeLLM)**
- Recopilar datos de preferencias (compleciones de código elegidas o rechazadas)
- Modelo de recompensa de tren.
- Aplicar DPO para ajustar el modelo base
- Evaluar en un punto de referencia personalizado
- Pila: TRL, HuggingFace, PyTorch, Axolotl, W&B, Docker

---

## 🗺️ FASE 11 - IA generativa (más allá del texto)

### 11.1 Autocodificadores variacionales (VAE)

- Codificador → espacio latente → decodificador
- Pérdida de divergencia KL + pérdida de reconstrucción
- Truco de reparametrización
- Aplicaciones: generación de imágenes, detección de anomalías.

### 11.2 Redes generativas adversarias (GAN)

- Generador vs Discriminador
- Juego minimax
- Colapso del modo: el principal desafío.
- GAN condicionales (cGAN)
- EstiloGAN, DCGAN
- Aplicaciones: síntesis de imágenes, transferencia de estilo.

### 11.3 Modelos de difusión

- Proceso de avance: agregar ruido a los datos
- Proceso inverso: aprender a eliminar el ruido.
- DDPM (Modelos probabilísticos de difusión de eliminación de ruido)
- Coincidencia de puntuación
- DDIM - muestreo más rápido
- Orientación sin clasificador
- Arquitectura de difusión estable
- ControlNet - generación condicional

### 11.4 API de texto a imagen

- API DALL-E 3 - OpenAI
- Difusión estable vía Replicate / HuggingFace
- Mitad del viaje (sin API, basado en UI)
- Ideograma, Flux - modelos más nuevos
- Ingeniería rápida para la generación de imágenes.
- Indicaciones negativas

### 11.5 IA multimodal

- Modelos Visión-Lenguaje (VLM)
- GPT-4V / GPT-4o - entrada de texto + imagen
- Claude 3 Visión
- Géminis (texto + imagen + vídeo + audio)
- LLaVA - VLM de código abierto
- CLIP - conectar texto e imágenes
- Aplicaciones: subtítulos de imágenes, control de calidad visual, comprensión de documentos

### 11.6 Audio IA

- OpenAI Whisper - conversión de voz a texto
- TTS: OpenAI TTS, ElevenLabs, Coqui
- Generación musical: Suno, Udio
- Clonación de voz
- Procesamiento de voz en tiempo real

### 11.7 Vídeo IA

- Sora (OpenAI) - texto a vídeo
- Pista ML, Pika Labs
- Vídeo de comprensión con Gemini.
- Análisis cuadro por cuadro

---

### 📦 Proyectos Fase 11

**🟢 Fácil: control de calidad multimodal de imagen y texto**
- Crea una aplicación: sube una imagen, haz una pregunta al respecto
- Utilice GPT-4V o Claude Vision
- Pila: FastAPI, API OpenAI Vision, React

**🟡 Medio: Canal de generación de imágenes de IA**
- Cree una aplicación de conversión de texto a imagen con controles de estilo
- Agregar transformación de imagen a imagen
- Agregue filtrado de seguridad con API de moderación
- Pila: API DALL-E 3, Difusión estable (réplica), FastAPI, React

**🔴 Difícil: Asistente de voz con IA (canal completo)**
- Entrada de voz → Whisper STT → Procesamiento LLM → Salida TTS
- Características: transmisión de audio, detección de palabras de activación, compatibilidad con varios idiomas
- Pila: OpenAI Whisper, GPT-4, ElevenLabs TTS, FastAPI, React Native

---

## 🗺️ FASE 12 - MLOps, LLMOps y sistemas de producción

> **Objetivo:** Enviar IA a producción de forma confiable, económica y escalable.

### 12.1 Gestión de datos y control de versiones

- DVC (Control de versiones de datos): control de versiones de conjuntos de datos y modelos
- Validación de datos - Grandes Expectativas, Pandera
- Linaje de datos: seguimiento de los orígenes de los datos
- Tiendas destacadas - Feast, Tecton
- Pipelines de datos: Airflow, Prefect, Luigi

### 12.2 Seguimiento del experimento

- Pesos y sesgos (W&B): estándar de la industria
- MLflow - alternativa de código abierto
- Qué rastrear: hiperparámetros, métricas, artefactos, versión del código
- Comparación de ejecuciones e informes.

### 12.3 Desarrollo de modelos e infraestructura de capacitación

- Nube de GPU: AWS (SageMaker, EC2), GCP (Vertex AI), Azure ML
- Entrenamiento distribuido: PyTorch DDP, DeepSpeed, FSDP
- Entrenamiento de precisión mixto (FP16, BF16)
- Punto de control del modelo
- Monitoreo y alertas de entrenamiento.

### 12.4 Evaluación y prueba del modelo

**Evaluación sin conexión**
- Puntos de referencia específicos de tareas
- Evaluación humana con pautas.
- LLM como juez (GPT-4 evaluando otros modelos)
- Equipo rojo - pruebas adversas

**Evaluación en línea**
- Pruebas A/B de modelos en producción.
- Implementación en la sombra: ejecute el nuevo modelo en paralelo
- Lanzamientos en Canarias - cambio gradual de tráfico
- Recopilación de comentarios de los usuarios (pulgar arriba/abajo)

### 12.5 Implementación y servicio del modelo

**Servicio API**
- FastAPI: el estándar para las API de ML
- Matraz: más simple, menos eficaz
- gRPC - para servicios internos de alto rendimiento
- BentoML: marco de servicio específico de ML
- Ray Serve - servicio distribuido

**Optimización del modelo para publicación**
- Cuantización - INT8, INT4 (reducir el tamaño del modelo)
- Poda - eliminando pesos innecesarios
- Destilación de conocimientos - modelo de estudiante más pequeño
- ONNX: formato de modelo independiente del marco
- TensorRT - Inferencia optimizada de NVIDIA

**Backends de inferencia**
- Ollama - modelo local al servicio
- vLLM: servicio LLM de alto rendimiento (PaggedAttention)
- TGI (Inferencia de generación de texto) - HuggingFace
- LiteLLM: API unificada para todos los proveedores
- NVIDIA NIM: inferencia de nivel de producción

### 12.6 Contenedorización y orquestación

- Docker - contener todo
-`Dockerfile`para servicios de ML
- Construcciones de varias etapas para imágenes más pequeñas
- Docker Compose - desarrollo multiservicio local
- Kubernetes (K8s) - orquestación de producción
- Gráficos de timón - Paquete de aplicaciones K8s
- Horizontal Pod Autoscaler (HPA): escala según la carga
- Programación de GPU en K8

### 12.7 Implementación de la nube

**AWS**
- EC2 + SageMaker para aprendizaje automático
- Lambda para funciones ligeras de IA
- ECS / EKS para contenedores
- S3 para almacenamiento de modelo/datos
- CloudWatch para monitoreo

**PCG**
- Vertex AI: plataforma de aprendizaje automático completa
- Cloud Run: contenedores sin servidor
- GKE - Kubernetes administrado
- BigQuery para datos de aprendizaje automático

**Azur**
- Aprendizaje automático de Azure
- Servicio Azure OpenAI - OpenAI empresarial
- AKS - Kubernetes administrado

### 12.8 Monitoreo y registro

**Monitoreo específico de LLM**
- Uso de token por usuario/función (costo)
- Latencia (p50, p95, p99)
- Tasas de error por proveedor
- Monitoreo de calidad rápido
- Puntajes de calidad de respuesta.
- Detección de alucinaciones
- Detección de deriva - cambios de comportamiento del modelo

**Herramientas**
- **LangSmith** - Observabilidad de LangChain
- **Helicone** - Proxy OpenAI con análisis
- **Langfuse** - observabilidad LLM de código abierto
- **Prometheus + Grafana** - métricas generales
- **Datadog** - monitoreo de pila completa
- **Sentry** - seguimiento de errores

### 12.9 CI/CD para IA

- GitHub Actions / GitLab CI para canalizaciones de IA
- Pruebas automatizadas para ML (pytest + pruebas de modelos)
- Validación del modelo antes de la implementación.
- Pruebas de regresión rápidas
- Evaluación automatizada de modelos en CI.
- Indicadores de funciones para funciones de IA
- Implementaciones azul-verde

### 12.10 LLM Seguridad y protección

**Defensa de inyección inmediata**
- Separación de roles sistema/usuario
- Saneamiento de entrada - bloqueo de frases de anulación
- Validación de salida
- Registro de mensajes sospechosos
- Escaneo de inyección de archivos (PDF, DOCX)

**Moderación de contenido**
- API de moderación OpenAI
- Entrada del usuario previa a la selección
- Salida del modelo posterior a la selección.
- Bloqueo basado en categorías: odio, autolesión, NSFW
- Clasificadores personalizados para contenido específico de dominio

**Privacidad de datos**
- Detección y enmascaramiento de PII antes de enviar a las API
- Requisitos de residencia de datos (UE, EE. UU., India)
- Implementación local para datos confidenciales
- Registros de auditoría para el cumplimiento

---

### 📦 Proyectos Fase 12

**🟢 Fácil: Dockerizar una API de IA**
- Contenga su aplicación FastAPI + OpenAI
- Agregar controles de salud, registro adecuado, gestión de var env
- Implementar en un proveedor de nube (Railway, Render o AWS)
- Pila: Docker, FastAPI, Acciones de GitHub

**🟡 Medio: Panel de monitoreo de LLMOps**
- Instrumente su API de IA con Langfuse o Helicone
- Seguimiento: uso de token, latencia, tasas de error, costo por usuario
- Construir reglas de alerta para anomalías.
- Pila: FastAPI, Langfuse/Helicone, Grafana, PostgreSQL

**🔴 Difícil: plataforma de producción de IA en Kubernetes**
- Plataforma de IA multiservicio: puerta de enlace API, servicio de enrutador, proxy LLM, monitoreo
- Implementación de Kubernetes con HPA para escalado automático
- Canalización de CI/CD con GitHub Actions
- Observabilidad total: Prometheus, Grafana, Langfuse
- Pila: FastAPI, Redis, PostgreSQL, Docker, Kubernetes, Helm, GitHub Actions, Prometheus, Grafana

---

## 🗺️ FASE 13 - Diseño del sistema de IA

> **Objetivo:** Diseñar sistemas de IA a escala para entrevistas y productos del mundo real.

### 13.1 Marco de diseño del sistema de IA

**Cómo abordar cualquier pregunta sobre el diseño de un sistema de IA:**
1. **Aclarar requisitos** - funcional + no funcional
2. **Identificar componentes de IA**: ¿qué tareas necesitan IA?
3. **Diseño de flujo de datos**: ¿cómo se mueven los datos a través del sistema?
4. **Selección de modelo**: ¿qué LLM/modelo es mejor para cada tarea?
5. **Escalabilidad**: ¿cómo maneja una carga de 10x y 100x?
6. **Optimización de costos**: ¿cuál es el costo por usuario?
7. **Confiabilidad**: ¿qué sucede cuando la IA falla?
8. **Monitoreo**: ¿cómo sabes que está funcionando?

### 13.2 Diseños clásicos de sistemas de IA

**Chatbot AI con memoria**

```
Frontend (Chat UI) → Backend API → Session Manager (Redis)
→ Context Builder → LLM → Response → Cache → Return
Fallback: if LLM fails → cached response or template
```
**Base de conocimientos de RAG**

```
Documents → Ingestion Pipeline → Chunker → Embedder → Vector DB
User Query → Embed → Retrieve Top-K → Rerank → LLM → Answer
```
**Sistema de recomendación de múltiples LLM**

```
User Profile → Embedding → Vector DB Similarity
→ GPT scoring → Re-rank → Personalized Results
Feedback loop → Update embeddings
```
**Preguntas y respuestas en PDF a escala (10.000 usuarios)**

```
Upload → Hash check → Queue → Text Extract → Chunk → Embed → Store
Query → Embed → Retrieve → Rerank → GPT → Stream Response
Cache: query-level caching with semantic similarity
```
**Atención al cliente de IA**

```
Message → Intent classifier → Router
Low confidence → Human escalation
High confidence → RAG knowledge base → LLM response
Track: session state in Redis, conversation in PostgreSQL
```
### 13.3 Estrategia de colocación de inferencias

| Colocación | Ventajas | Contras | Usar cuando |
|---|---|---|---|
| API de back-end | Seguro, registro y fácil escalamiento | Mayor latencia | La mayoría de los casos |
| Lado del cliente (navegador) | Latencia ultrabaja, sin conexión | Expone modelo, limitado | Modelos pequeños |
| Edge (trabajadores de Cloudflare) | Baja latencia + seguro | Límites del modelo complejo | Autocompletar búsqueda |
| Cola asíncrona | Mango con púas, barato | Respuesta retrasada | Tareas largas |

### 13.4 Estrategias de almacenamiento en caché

**Almacenamiento en caché de coincidencias exactas**
- Hash SHA-256 del mensaje → Clave Redis
- Ideal para: indicaciones basadas en plantillas con variación limitada

**Almacenamiento en caché semántico**
- Incrustar la consulta → buscar consultas en caché similares (similitud de coseno)
- Devuelve la respuesta almacenada en caché si similitud > umbral
- Ideal para: aplicaciones conversacionales con preguntas similares

**Almacenamiento en caché de plantillas**
- Caché a nivel de plantilla, no a nivel de instancia
- Ideal para: generación estructurada con sustitución de variables

### 13.5 Arquitectura de IA asíncrona

**Cuándo usar asíncrono:**
- Latencia del modelo > 2-3 segundos
- Procesamiento costoso (análisis de PDF, trabajos por lotes)
- El usuario no necesita una respuesta inmediata.

**Patrón asíncrono:**

```
Frontend → POST /task → Task ID returned immediately
Worker → processes → updates DB
Frontend → polls GET /task/{id} or receives webhook
```
### 13.6 Arquitectura consciente de los costos

**Selección de modelo por función:**

```
Autocomplete    → GPT-3.5 Turbo ($0.001/1K)
Summarization   → Claude Haiku  ($0.00025/1K)
Complex QA      → GPT-4o        ($0.01/1K)
Embeddings      → text-embedding-3-small ($0.00002/1K)
Classification  → Fine-tuned GPT-3.5 ($0.003/1K)
```
**Estrategias de reducción de costos:**
- Compresión rápida: elimine tokens innecesarios
- Límites de longitud de salida - parámetro `max_tokens`
- Almacenamiento en caché (reducción del 50 al 70 % para aplicaciones típicas)
- Degradación del modelo para usuarios del nivel gratuito
- Procesamiento por lotes asíncrono - solicitudes de paquetes
- Optimización de la ventana de contexto

---

### 📦 Proyectos Fase 13

**🟢 Fácil: Diseño de documento para función de IA**
- Escribir un documento de diseño de 5 páginas para una función de IA (por ejemplo, asistente de escritura de IA)
- Portada: arquitectura, flujo de datos, elección de modelo, estimación de costos, respaldo
- Obtener comentarios de la comunidad.

**🟡 Medio: Herramienta de calculadora de costos**
- Crear una herramienta que estime los costos de la API de IA según los patrones de uso.
- Admite precios OpenAI, Anthropic, Gemini y Cohere
- Muestra el desglose de costos por modelo, función y nivel de usuario.
- Pila: Reaccionar, FastAPI

**🔴 Difícil: implementación completa del diseño del sistema de IA**
- Implementar la arquitectura completa para uno de los diseños clásicos anteriores.
- Enfoque: grado de producción, escalable, monitoreado, consciente de los costos
- Redactar ADR (Registros de decisiones de arquitectura) para decisiones clave
- Pila: Pila de producción completa de su elección

---

## 🗺️ FASE 14: SQL y bases de datos para ingenieros de IA

> **Objetivo:** Consultar datos con confianza y diseñar bases de datos que admitan sistemas de IA.

### 14.1 SQL central

- `SELECT`, `FROM`, `WHERE`, `ORDER BY`, `LIMIT`,`DISTINCT`
- `AND`, `OR`, `NOT`, `IN`, `BETWEEN`, `LIKE`,`IS NULL`
- `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL OUTER JOIN`,`SELF JOIN`
- `GROUP BY`,`HAVING`
- Funciones agregadas: `COUNT`, `SUM`, `AVG`, `MIN`,`MAX`

### 14.2 SQL avanzado

- CTE (Expresiones de tabla comunes) - Cláusulas `WITH`
- Funciones de ventana: `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `LAG()`,`LEAD()`
-`PARTITION BY`frente a`GROUP BY`
- `SUM() OVER`,`AVG() OVER`- totales acumulados
- CTE recursivos - datos jerárquicos
- Subconsultas: correlacionadas vs no correlacionadas
-`CASE WHEN`lógica condicional
-`COALESCE`para manejo NULL

### 14.3 Patrones SQL específicos de IA

- Consultas de ingeniería de características (ratios, promedios móviles)
- Datos pivotantes para funciones de aprendizaje automático
- Muestreo:`ORDER BY RANDOM() LIMIT n`
- Columnas JSON (`JSON_EXTRACT`,`->`en Postgres)
- **pgvector** - búsqueda de similitud de vectores en PostgreSQL
  -`<->`operador de distancia coseno
  -`<#>`producto interno negativo
  -`<=>`Distancia L2
  - Creación de índices vectoriales (HNSW, IVFFlat)

### 14.4 Diseño de bases de datos para aplicaciones de IA

- Diseño de esquemas para el historial de conversaciones.
- Esquema para versiones y resultados rápidos.
- Esquema para el seguimiento del uso de tokens.
- Esquema para preferencias/memoria del usuario.
- Indexación para cargas de trabajo de IA

### 14.5 NoSQL para IA

- **Redis**: estado de sesión, almacenamiento en caché, limitación de velocidad, publicación/suscripción para streaming
- **MongoDB**: almacenamiento de documentos flexible para salidas de IA
- **DynamoDB**: sin servidor, de alto rendimiento
- Cuándo utilizar SQL frente a NoSQL para aplicaciones de IA

---

### 📦 Proyectos Fase 14

**🟢 Fácil: Panel de análisis de uso de IA**
- Diseñar y consultar una base de datos que rastrea el uso de API de IA.
- Generar consultas: costo por usuario, características principales, tasas de error
- Pila: PostgreSQL, Python, Metabase/Grafana

**🟡 Medio: Búsqueda semántica pgvector**
- Implementar búsqueda semántica usando pgvector en PostgreSQL
- Almacenar embeddings junto con metadatos.
- Construir un índice HNSW eficiente
- Pila: PostgreSQL + pgvector, FastAPI, embeddings de OpenAI

**🔴 Difícil: Arquitectura de base de datos completa para AI Platform**
- Diseñar un esquema completo para una plataforma de IA multiinquilino
- Incluye: usuarios, conversaciones, tokens, embeddings, versiones de avisos, pruebas A/B.
- Implementar migraciones, índices, particionamiento.
- Stack: PostgreSQL, pgvector, Redis, Alembic (migraciones)

---

## 🗺️ FASE 15 - Cuantización, Optimización y Eficiencia

> **Objetivo:** Ejecutar modelos de manera eficiente a escala.

### 15.1 Cuantización del modelo

- ¿Qué es la cuantificación? Reducción de la precisión de los pesos.
- FP32 → FP16 → BF16 → INT8 → INT4
- Cuantización post-entrenamiento (PTQ)
- Entrenamiento consciente de la cuantificación (QAT)
- GPTQ: método de cuantificación preciso para LLM
- AWQ (cuantización de peso consciente de la activación)
- GGUF - formato para llama.cpp (inferencia local)
- Usando la biblioteca`bitsandbytes`para 4 bits/8 bits

### 15.2 Optimización de inferencia

- KV Cache - evitando el recálculo
- Lotes continuos - lotes dinámicos de solicitudes (enfoque de vLLM)
- Decodificación especulativa: utilice un modelo de borrador pequeño para acelerar el modelo grande
- Flash Attention v2: atención con uso eficiente de la memoria
- Paralelismo tensorial: división del modelo entre GPU
- Paralelismo de canalización: canalización de capas entre GPU

### 15.3 Modelos de lenguaje pequeño (SLM)

- Phi-3 / Phi-4 (Microsoft): modelos pequeños y potentes
- Gemma 2 2B (Google) - modelo pequeño eficiente
- Mistral 7B: el mejor modelo pequeño de código abierto
- Qwen 2.5 1.5B, 3B - SLM multilingües
- SmolLM - modelos diminutos para el borde
- Cuando los SLM superan a los LLM (tareas específicas, afinadas)
- IA en el dispositivo con SLM

### 15.4 Destilación del conocimiento

- Formación profesor-alumno
- Etiquetas suaves del profesor.
- Destilación de capa intermedia
- DistilBERT - BERT destilado
- TinyLlama - LLaMA destilada
- Aplicaciones: implementar capacidad 7B en parámetros 1B

### 15.5 Eficiencia de servicio del modelo

- **vLLM** - PagedAttention, procesamiento por lotes continuo, rendimiento 24x
- **TGI (Inferencia de generación de texto)** - Servidor de producción HuggingFace
- **Ollama** - servicio modelo local
- **llama.cpp** - Inferencia de CPU, formato GGUF
- **ONNX Runtime** - inferencia multiplataforma
- **TensorRT-LLM** - Optimizado para NVIDIA

---

### 📦 Proyectos Fase 15

**🟢 Fácil: configuración local de LLM**
- Configurar Ollama con múltiples modelos (LLaMA 3, Mistral, Gemma)
- Cree una interfaz de chat sencilla que se conecte con modelos locales.
- Punto de referencia: latencia, uso de memoria por modelo

**🟡 Medio: Comparación de cuantificación de modelos**
- Tome LLaMA 3 8B, cuantice a 8 bits y 4 bits (GPTQ, AWQ)
- Punto de referencia: perplejidad, velocidad, memoria, desempeño de tareas.
- Pila: bitsandbytes, GPTQ, HuggingFace

**🔴 Difícil: servidor de inferencia de alto rendimiento (CodeLLM)**
- Implementar vLLM con múltiples modelos
- Implementar procesamiento por lotes de solicitudes, cambio de modelo, equilibrio de carga.
- Punto de referencia contra la implementación ingenua
- Pila: vLLM, Docker, Kubernetes, Prometheus, Grafana

---

## 🗺️ FASE 16 - Aprendizaje por refuerzo para ingenieros de IA

> **Objetivo:** Comprender RL lo suficiente como para trabajar con RLHF, PPO y capacitación de agentes.

### 16.1 Fundamentos de RL

- Procesos de Decisión de Markov (MDP)
- Agente, Medio Ambiente, Estado, Acción, Recompensa
- Política: mapeo de estados a acciones
- Función de valor: recompensa acumulada esperada
- Función Q: valor de actuar en el estado
- Exploración versus explotación (epsilon-greedy, UCB)
- Factor de descuento (γ)

### 16.2 Métodos basados en valores

- Q-aprendizaje
- DQN (Red Q profunda)
- Doble DQN, duelo DQN, repetición de experiencia priorizada

### 16.3 Métodos basados en políticas

- REFORZAR (Gradiente de políticas)
- Métodos Actor-Crítico
- PPO (optimización de política próxima): utilizado en RLHF
- GRPO (optimización de políticas relativas al grupo): utilizado en DeepSeek R1

### 16.4 RL para LLM (RLHF y más allá)

- Tubería RLHF: SFT → Modelo de recompensa → PPO
- Entrenamiento del modelo de recompensa sobre las preferencias humanas.
- PPO con restricción de divergencia KL (prevención del colapso)
- DPO (Optimización de preferencia directa): alternativa RLHF más sencilla
- RLAIF (RL de AI Feedback) - utilizando LLM como evaluador
- IA constitucional (enfoque de Claude)
- Modelos de recompensa de proceso (PRM): recompensa en cada paso de razonamiento
- Modelos de recompensa por resultados (ORM): recompensa solo en la respuesta final

### 16.5 RL multiagente

- Agentes cooperativos vs competitivos
- Conceptos básicos de la teoría de juegos.
- Entrenamiento de autojuego
- Comunicación multiagente

---

### 📦 Proyectos Fase 16

**🟢 Fácil: capacite a un agente de CartPole**
- Implementar Q-learning y PPO en CartPole-v1
- Comparar convergencia, estabilidad.
- Pila: gimnasio, stable-baselines3, PyTorch

**🟡 Medio: Entrenamiento del modelo de recompensa**
- Recopilar datos de preferencia (respuestas A vs B)
- Entrenar un modelo de recompensa usando el modelo Bradley-Terry
- Pila: PyTorch, HuggingFace Transformers, TRL

**🔴 Difícil: proceso de ajuste fino de DPO**
- Recopilar un conjunto de datos de preferencias para una tarea específica
- Ajustar un modelo 7B usando DPO
- Evaluar con respecto a la línea de base de SFT
- Pila: TRL, HuggingFace PEFT, Axolotl, W&B

---

## 🗺️ FASE 17: Ética, seguridad y gobernanza de la IA

> **Objetivo:** Construir IA de manera responsable. Esto es cada vez más un requisito laboral.

### 17.1 Fundamentos de seguridad de la IA

- Tipos de daño de la IA: inmediato, sistémico, a largo plazo
- Problema de alineación - IA haciendo lo que queremos
- Alucinaciones: por qué los modelos inventan cosas
- Sesgo y equidad en los sistemas de IA.
- Preocupaciones por el doble uso

### 17.2 Inyección rápida y seguridad

- Inyección directa: el usuario manipula el modelo.
- Inyección inmediata indirecta: contenido malicioso en los datos recuperados
- Estrategias de defensa: separación de roles, validación de entradas, filtrado de salidas.
- Patrones de jailbreak y mitigaciones.
- Pruebas adversarias / equipo rojo

### 17.3 Sesgo y equidad

- Fuentes de sesgo: datos de entrenamiento, etiquetado, diseño de modelos.
- Tipos: demográfico, de representación, sesgo de medición.
- Métricas de equidad: paridad demográfica, probabilidades igualadas
- Herramientas de detección de sesgos: Fairlearn, AI Fairness 360
- Mitigación: reponderación, remuestreo, entrenamiento basado en restricciones.

### 17.4 Privacidad y gobernanza de datos

- PII en datos de entrenamiento e inferencia.
- Cumplimiento del RGPD para sistemas de IA
- Principio de minimización de datos.
- Derecho de supresión en sistemas ML
- Conceptos básicos de privacidad diferencial
- Aprendizaje federado: entrene sin centralizar datos

### 17.5 Transparencia y explicabilidad de la IA

- Tarjetas modelo: documentan las capacidades y limitaciones del modelo.
- Tarjetas del sistema: documentan el comportamiento del sistema de IA.
- SHAP - Explicaciones de los aditivos SHApley
- LIME - Explicaciones independientes del modelo local interpretable
- Visualización de atención
- Cadena de pensamiento como explicabilidad.

### 17.6 IA responsable en producción

- Arquitectura de moderación de contenido.
- Clasificadores de seguridad
- Humano informado para decisiones de alto riesgo
- Registros y pistas de auditoría
- Respuesta a incidentes por fallas de IA.
- Marcos de gobernanza de la IA: Ley de IA de la UE, NIST AI RMF

---

## 🗺️ CAPSTONE: cree su sistema de IA de producción

> **La fase final: construir un sistema de IA de producción completo que demuestre todas las habilidades**

### Proyecto final: Plataforma de IA multi-LLM (PrinceSinghAI/PrinceSinghDev Vision)

**Descripción general del sistema:**
Cree una plataforma de IA multiinquilino de nivel de producción que sirva como base para todos sus productos de IA.

**Componentes principales:**
1. **API Gateway**: autenticación, limitación de velocidad, enrutamiento de solicitudes
2. **Enrutador Multi-LLM**: enrutamiento inteligente a través de OpenAI, Claude, Gemini, Mistral
3. **RAG Engine**: recuperación de conocimientos de múltiples documentos y múltiples inquilinos
4. **Agent Orchestrator**: ejecución del flujo de trabajo de múltiples agentes
5. **Integración MCP**: conectividad de herramientas a través del protocolo de contexto del modelo
6. **Pila de observabilidad** - Langfuse, Prometheus, Grafana
7. **Panel de administración**: análisis de uso, seguimiento de costos y rendimiento del modelo
8. **CI/CD Pipeline**: pruebas e implementación automatizadas

**Pila técnica:**
- **Backend:** FastAPI (Python), asíncrono en todas partes
- **Bases de datos:** PostgreSQL (+ pgvector), Redis, Chroma/Qdrant
- **Proveedores de LLM:** OpenAI, Anthropic, Google AI, Mistral (a través de LiteLLM)
- **Orquestación:** LangChain + LangGraph
- **Infraestructura:** Docker, Kubernetes, Acciones de GitHub
- **Seguimiento:** Langfuse, Prometheus, Grafana
- **Frontal:** Reaccionar + TypeScript

**Características a implementar:**
- Gestión de usuarios multiinquilino
- Gestión de claves API por usuario
- Enrutamiento de modelos inteligente con optimización de costos.
- Canalización RAG con múltiples tipos de documentos
- Transmisión de respuestas
- Memoria de conversación (Redis)
- Gestión de versiones rápida
- Pruebas A/B para indicaciones y modelos.
- Panel de seguimiento de costos
- Límites de uso y facturación.
- Panel de administración con total observabilidad.

---

## 📚 Referencia de recursos

### Fundacional

| Tema | Recurso |
|---|---|
| Álgebra lineal | 3Blue1Brown - Esencia del álgebra lineal (YouTube) |
| Cálculo | 3Blue1Brown - Esencia de Cálculo (YouTube) |
| Probabilidad y estadísticas | Estadísticas 110 - Joe Blitzstein (Harvard, YouTube) |
| Matemáticas para ML | Matemáticas para el aprendizaje automático - Deisenroth (PDF gratuito) |
| Conceptos básicos de Python | Automatiza las cosas aburridas (gratis en línea) |
| NumPy y Pandas | Python para análisis de datos - Wes McKinney |

### Aprendizaje profundo

| Tema | Recurso |
|---|---|
| Aprendizaje profundo | Andrej Karpathy - Redes neuronales: de cero a héroe (YouTube) |
| PyTorch | fast.ai Aprendizaje profundo práctico |
| Construir GPT | Andrej Karpathy - Construyamos GPT (YouTube) |
| Libro de aprendizaje profundo | deeplearningbook.org (gratis) |

### LLM e ingeniería de inteligencia artificial

| Tema | Recurso |
|---|---|
| LLM | Curso de NLP de Hugging Face (gratis) |
| Transformadores | Natural Language Processing with Transformers — Tunstall |
| Ingeniería de prompts | Guía de ingeniería de prompts de Anthropic |
| LangChain | Documentación de LangChain y LangSmith |
| RAG | Documentación de LlamaIndex |
| Agentes | Documentación de LangGraph |
| Ajuste fino | Documentación PEFT de HuggingFace |

### IA de producción

| Tema | Recurso |
|---|---|
| MLOps | Hecho con ML (madewithml.com) |
| LLMOps | Documentación de LangSmith + Langfuse |
| Diseño de sistemas | Diseño de sistemas ML - Chip Huyen |
| Ingeniería de IA | Ingeniería de IA - Chip Huyen (nuevo libro) |

### Manténgase actualizado

| Recurso | Para qué |
|---|---|
| Artículos con código | Últimos puntos de referencia de investigación |
| Blog de cara de abrazo | Nuevos modelos y técnicas |
| Blog de OpenAI | Nuevas API y capacidades |
| Investigación Antrópica | Seguridad y nuevas características de Claude |
| Twitter/X: @karpathy, @sama, @emollick | Líderes de la industria |
| r/LocalLLaMA | Noticias de modelos de código abierto |
| Noticias de LLM (boletín) | Resumen semanal |

---

## 🎯 Resumen de habilidades (demanda del mercado 2026)

### Nivel 1: imprescindible (todo trabajo de ingeniero de IA)

- Python (asíncrono avanzado, código limpio)
- API OpenAI (GPT-4, embeddings, llamadas de funciones)
- API Anthropic (Claude, contexto largo, uso de herramientas)
- Ingeniería rápida (estructurada, segura para la producción)
- Arquitectura RAG (fragmentos, embeddings, bases de datos vectoriales)
- FastAPI (creación de API de IA)
- Docker (contener todo)
- Git/GitHub (control de versiones, CI/CD)
- PostgreSQL + Redis (bases de datos para aplicaciones de IA)
- Conceptos básicos de LangChain o LlamaIndex

### Nivel 2: altamente valorado (destaque)

- Orquestación multi-LLM (enrutamiento, respaldos, optimización de costos)
- LangGraph (sistemas agente)
- Ajuste fino con LoRA/QLoRA
- Ecosistema HuggingFace
- Kubernetes (implementación en producción)
- LLMOps (Langfuse, Helicone)
- Protocolo de contexto modelo (MCP)
- Bases de datos vectoriales (Pinecone, Qdrant, Weaviate)
- vLLM/TGI (optimización de inferencia)
- IA multimodal (visión, audio)

### Nivel 3: nivel experto (senior/principal)

- Pipelines RLHF / DPO personalizadas
- Entrenamiento distribuido (DeepSpeed, FSDP)
- Arquitecturas de modelos personalizados.
- RAG avanzado (HyDE, reordenación (reranking), compresión contextual)
- Diseño de sistemas de IA a escala.
- Infraestructura de ML (GPU, servicio)
- Seguridad de IA y equipo rojo
- Medición del impacto empresarial

---

## 🛤️ Rutas de aprendizaje por objetivo

### Ruta A: Ingeniero de IA (centrado en el producto)

```
Fase 0 → 1 → 2 (ligera) → 6 → 7 → 8 → 9 → 12 → 13 → Capstone
Plazo: 6–9 meses
```
### Ruta B: Ingeniero de ML (centrado en la investigación)

```
Fase 0 → 1 → 2 → 3 → 4 → 5 → 10 → 15 → 16 → Capstone
Plazo: 9–12 meses
```
### Ruta C: Arquitecto de IA (centrado en sistemas)

```
Fase 0 → 1 (ligera) → 6 → 7 → 8 → 9 → 12 → 13 → 14 → 15 → Capstone
Plazo: 6 meses (ingenieros con experiencia)
```
### Ruta D: Ingeniero de IA integral / full stack (tú)

```
Todas las fases → Todos los proyectos → Capstone
Plazo: 12–18 meses
Enfoque: PrinceSinghAI · Multi-LLM · AskAI · CodeLLM · RoadmapAI
```
---

## 🏆 Proyectos de portafolio (prioriza estos)

1. **Enrutador Multi-LLM**: enruta consultas a través de GPT-4, Claude, Gemini con seguimiento de costos
2. **Base de conocimiento RAG** — Múltiples documentos, multi-tenant, con recuperación avanzada
3. **AI Agent Platform**: flujo de trabajo de múltiples agentes con LangGraph + MCP
4. **Modelo de dominio ajustado**: LoRA ajusta su dominio e implementa con vLLM
5. **Documento de diseño de sistemas de IA**: diseño publicado para un sistema de IA complejo
6. **Contribución de código abierto**: contribuya a LangChain, LlamaIndex o vLLM
7. **Capstone: Plataforma PrinceSinghAI** - Plataforma multi-LLM de producción completa

---

*Última actualización: 2026 | Creado para la era impulsada por la IA*
*"Los mejores ingenieros de IA no sólo utilizan modelos: diseñan sistemas en torno a ellos".*