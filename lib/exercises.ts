/**
 * Exercise generator for every topic in the AI/ML roadmap.
 * Each topic gets one easy exercise and one hard exercise.
 *
 * Manual table: specific exercises for key topic IDs.
 * Fallback: domain-aware generator using title + subtopics.
 */

export interface Exercise {
  title: string
  description: string
  difficulty: "easy" | "hard"
}

// ─── Manual exercises for specific topic IDs ─────────────────────────────────

const MANUAL: Record<string, [Exercise, Exercise]> = {

  // ── Phase 0: Orientación ───────────────────────────────────────────────────

  "topic-0-1": [
    {
      title: "Mapea un pipeline de ML real",
      description:
        "Busca un caso real de ML (Netflix recomendaciones, Gmail spam, etc.). Dibuja el flujo: datos → procesamiento → modelo → predicción → acción. Identifica en qué paso 'se construye el modelo' y qué tecnologías usa.",
      difficulty: "easy",
    },
    {
      title: "Diseña un sistema de ML de cero",
      description:
        "Elige un problema de negocio real (predicción de churn, detección de fraude, recomendación de productos). Diseña el sistema completo por escrito: fuentes de datos, features, tipo de modelo, métricas de éxito, plan de deployment, monitoreo. Mínimo 1 página técnica.",
      difficulty: "hard",
    },
  ],

  "topic-0-2": [
    {
      title: "Primer llamado a API de LLM",
      description:
        "Con la API de OpenAI o Anthropic (versión gratuita), escribe un script Python de menos de 30 líneas que le haga una pregunta técnica a un LLM e imprima la respuesta formateada. Maneja el error de rate-limit.",
      difficulty: "easy",
    },
    {
      title: "Mini sistema RAG desde cero",
      description:
        "Construye un sistema RAG básico: (1) lee 3 archivos .txt como base de conocimiento, (2) convierte el texto en chunks, (3) calcula embeddings con sentence-transformers, (4) ante una pregunta del usuario, recupera el chunk más similar con cosine similarity, (5) pásalo como contexto al LLM y muestra la respuesta. Sin LangChain.",
      difficulty: "hard",
    },
  ],

  "topic-0-3": [
    {
      title: "Dockerfile para un script de ML",
      description:
        "Toma cualquier script Python con numpy/pandas y crea un Dockerfile que lo containerice. Corre el container localmente y verifica que el output es idéntico al de correrlo directo.",
      difficulty: "easy",
    },
    {
      title: "Pipeline de CI/CD para un modelo",
      description:
        "Con GitHub Actions, crea un workflow que: (1) corra tests del modelo cuando hay un push, (2) si los tests pasan, construya y suba una imagen Docker a Docker Hub, (3) incluya un test de 'sanity check' que verifica que el modelo da predicciones coherentes. Documenta cada paso.",
      difficulty: "hard",
    },
  ],

  "topic-0-4": [
    {
      title: "Tabla comparativa de roles",
      description:
        "Crea una tabla en Markdown con las diferencias entre AI Engineer, ML Engineer y Data Scientist. Incluye: responsabilidades, tech stack, skills clave, salario promedio y casos de uso típicos. Mínimo 5 filas de diferencias.",
      difficulty: "easy",
    },
    {
      title: "Analiza 5 ofertas de trabajo reales",
      description:
        "Busca en LinkedIn/Indeed 5 ofertas de 'AI Engineer' y 5 de 'ML Engineer'. Extrae los requisitos de cada una. Categoriza las skills más pedidas. Calcula qué % de ofertas piden cada skill. Escribe un párrafo de conclusiones sobre qué debes aprender primero según el mercado.",
      difficulty: "hard",
    },
  ],

  "topic-0-5": [
    {
      title: "Roadmap personal de skills",
      description:
        "De las 8 skills de alta demanda listadas, ordénalas de menor a mayor dificultad según tu criterio. Para cada una, anota qué prerequisitos necesitas y cuánto tiempo estimas que te tomaría aprenderla.",
      difficulty: "easy",
    },
    {
      title: "Prototipo de AI Agent",
      description:
        "Implementa un AI Agent simple con 3 tools: (1) buscar en Wikipedia, (2) hacer cálculos matemáticos, (3) leer un archivo local. El agente debe decidir qué tool usar según la pregunta del usuario. Usa la API de un LLM directamente con function calling.",
      difficulty: "hard",
    },
  ],

  // ── Phase 1: Python ────────────────────────────────────────────────────────

  "topic-1-1": [
    {
      title: "Limpiador de datos con tipos",
      description:
        "Escribe una función `clean_value(value)` que reciba cualquier valor y lo convierta a float si es posible, a bool si es 'true'/'false', a int si es entero, o retorne None si no se puede convertir. Prueba con 10 casos distintos.",
      difficulty: "easy",
    },
    {
      title: "Parser de registros de ML",
      description:
        "Tienes logs de entrenamiento como strings: 'epoch=5,loss=0.234,acc=0.891,lr=0.001'. Escribe un parser que extraiga todos los valores con su tipo correcto (float/int según corresponda), valide que los valores estén en rangos razonables (loss > 0, acc entre 0 y 1), y retorne un diccionario tipado. Incluye manejo de logs malformados.",
      difficulty: "hard",
    },
  ],

  "topic-1-2": [
    {
      title: "Formateador de métricas ML",
      description:
        "Dada una lista de tuples (metric_name, value, epoch), escribe código que genere un reporte en string formateado. Ej: 'Epoch 5 | loss: 0.2341 | accuracy: 89.12% | lr: 0.00100'. Usa f-strings con formato numérico preciso.",
      difficulty: "easy",
    },
    {
      title: "Parser de configuración YAML-like",
      description:
        "Sin usar librerías externas, implementa un parser de strings de configuración con formato 'key: value'. Debe soportar: strings, integers, floats, booleans, listas (separadas por comas entre corchetes), y comentarios con #. Retorna un diccionario Python con tipos correctos. Incluye tests para casos edge.",
      difficulty: "hard",
    },
  ],

  "topic-1-3": [
    {
      title: "Estadísticas básicas con colecciones",
      description:
        "Dado un dataset como lista de diccionarios (registros de ventas con 'producto', 'precio', 'cantidad'), usa solo listas, dicts y sets para calcular: total por producto, producto más vendido, productos únicos, y precio promedio.",
      difficulty: "easy",
    },
    {
      title: "Índice invertido de documentos",
      description:
        "Implementa un índice invertido (base de motores de búsqueda): dado un corpus de documentos (lista de strings), construye un diccionario donde cada palabra mapea al conjunto de documentos que la contienen. Añade: función de búsqueda por AND/OR de términos, ranking por frecuencia, y normalización de texto (lowercase, sin puntuación). Solo usa estructuras built-in.",
      difficulty: "hard",
    },
  ],

  "topic-1-4": [
    {
      title: "Generador de batches",
      description:
        "Escribe una función `create_batches(data, batch_size, shuffle=False)` que divida una lista en lotes de tamaño batch_size. Si shuffle=True, aleatoriza primero. Debe funcionar si len(data) no es divisible por batch_size (último batch más pequeño).",
      difficulty: "easy",
    },
    {
      title: "Motor de búsqueda de hiperparámetros",
      description:
        "Implementa un grid search manual: recibe un diccionario de hiperparámetros con listas de valores posibles (ej: {'lr': [0.01, 0.001], 'epochs': [10, 50], 'batch': [32, 64]}), genera todas las combinaciones, y para cada una ejecuta una función de 'entrenamiento simulado' (que retorna accuracy aleatoria). Muestra las 3 mejores combinaciones ordenadas por accuracy.",
      difficulty: "hard",
    },
  ],

  "topic-1-5": [
    {
      title: "Decorador de métricas",
      description:
        "Escribe un decorador `@log_metrics` que wrappee cualquier función y: mida su tiempo de ejecución, cuente cuántas veces se llama, y loguee cada llamada con formato 'función_nombre | args | tiempo_ms'. Pruébalo con 3 funciones diferentes.",
      difficulty: "easy",
    },
    {
      title: "Pipeline funcional de procesamiento",
      description:
        "Implementa un pipeline funcional estilo sklearn: una función `make_pipeline(*transforms)` que encadene funciones de transformación. Cada transform recibe datos y retorna datos transformados. Crea 5 transforms reales: normalize, remove_nulls, clip_outliers, encode_categories, add_polynomial_features. El pipeline debe ser composable y retornar el resultado final.",
      difficulty: "hard",
    },
  ],

  "topic-1-6": [
    {
      title: "Clase Dataset",
      description:
        "Crea una clase `Dataset` que: acepte una lista de diccionarios en __init__, implemente __len__ y __getitem__, tenga un método .describe() que muestre estadísticas básicas de columnas numéricas, y permita hacer split train/test con .split(ratio=0.8).",
      difficulty: "easy",
    },
    {
      title: "Framework mínimo de ML",
      description:
        "Diseña una jerarquía de clases: clase base abstracta `BaseModel` con métodos abstractos `fit(X, y)` y `predict(X)`. Luego implementa dos subclases: `LinearRegressor` (mínimos cuadrados con NumPy) y `KNNClassifier` (k vecinos con distancia euclidiana). Ambas deben respetar exactamente la misma interfaz. Añade `__repr__` útil en cada clase.",
      difficulty: "hard",
    },
  ],

  "topic-1-7": [
    {
      title: "Operaciones matriciales básicas",
      description:
        "Con NumPy: crea una matriz 4x4 aleatoria (semilla fija), calcula su transpuesta, inversa y determinante. Verifica que A @ A^-1 ≈ I (identidad). Muestra el resultado con 4 decimales. Calcula también la norma L2 de cada fila.",
      difficulty: "easy",
    },
    {
      title: "Backpropagation manual con NumPy",
      description:
        "Implementa desde cero con solo NumPy: (1) forward pass de una red neuronal 2 capas (input→hidden→output con sigmoid), (2) cálculo de MSE loss, (3) backward pass calculando gradientes manualmente, (4) gradient descent paso a paso. Entrénala en el problema XOR (4 ejemplos) hasta convergencia. Muestra loss cada 100 epochs.",
      difficulty: "hard",
    },
  ],

  "topic-1-8": [
    {
      title: "Análisis de dataset de ML",
      description:
        "Carga el dataset Titanic de seaborn (sns.load_dataset('titanic')). Con Pandas: calcula tasa de supervivencia por clase, edad promedio por sexo, cuántos missing values hay por columna, y crea una columna 'family_size' = SibSp + Parch + 1.",
      difficulty: "easy",
    },
    {
      title: "Pipeline de feature engineering",
      description:
        "Con Pandas, implementa un pipeline de feature engineering para un dataset de ventas (crea uno sintético): (1) parse de fechas y extracción de día, mes, trimestre, día de semana, (2) encoding de categorías con frecuencia, (3) rolling statistics (media y std de últimos 7 días por producto), (4) detección y tratamiento de outliers en ventas, (5) exporta el resultado a Parquet.",
      difficulty: "hard",
    },
  ],

  "topic-1-9": [
    {
      title: "Llamadas paralelas a LLM API",
      description:
        "Usa asyncio para hacer 5 llamadas simultáneas a una API (puede ser un endpoint público gratuito o simular con asyncio.sleep). Compara el tiempo total vs hacerlas secuencialmente. Muestra el speedup logrado.",
      difficulty: "easy",
    },
    {
      title: "Cliente async para múltiples LLMs",
      description:
        "Implementa un cliente async que: (1) reciba una lista de prompts, (2) haga todas las llamadas en paralelo con asyncio.gather() con límite de concurrencia (semáforo), (3) gestione reintentos con backoff exponencial en caso de error, (4) persista los resultados a JSONL a medida que llegan, (5) muestre un progress bar en consola. Rate limit: máx 5 requests concurrentes.",
      difficulty: "hard",
    },
  ],
}

// ─── Domain-aware exercise generator (fallback) ───────────────────────────────

function detectDomain(title: string, subtopics: string[]): string {
  const text = (title + " " + subtopics.join(" ")).toLowerCase()

  if (/numpy|pandas|matplotlib|scipy|sklearn|scikit/.test(text)) return "python_ml"
  if (/python|función|clase|lambda|async|decorador|oop/.test(text)) return "python"
  if (/álgebra|matrix|vector|gradiente|derivada|cálculo|eigenvalor|svd|norma/.test(text)) return "math"
  if (/estadística|probabilidad|distribución|bayesian|regresión|varianza|media/.test(text)) return "stats"
  if (/regresión|clasificación|clustering|árbol|svm|knn|ensemble|random forest/.test(text)) return "ml"
  if (/red neuronal|neural|backprop|activation|pytorch|tensorflow|cnn|rnn|lstm/.test(text)) return "dl"
  if (/transformer|attention|bert|gpt|llm|fine-tuning|embedding|tokeniz/.test(text)) return "llm"
  if (/rag|agent|langchain|vector|chromadb|faiss|retrieval/.test(text)) return "llmops"
  if (/docker|kubernetes|mlflow|deploy|api|fastapi|flask|monitoring|ci.cd/.test(text)) return "mlops"
  if (/visión|imagen|cnn|detección|segmentación|opencv|yolo/.test(text)) return "cv"
  if (/nlp|texto|spacy|nltk|tokeniz|sentiment|ner|traducción/.test(text)) return "nlp"
  return "general"
}

function generate(
  title: string,
  subtopics: string[],
  domain: string
): [Exercise, Exercise] {
  const sub0 = subtopics[0] ?? title
  const sub1 = subtopics[1] ?? subtopics[0] ?? title
  const subLast = subtopics[subtopics.length - 1] ?? title

  const templates: Record<string, [Exercise, Exercise]> = {
    python: [
      {
        title: `Implementa: ${sub0}`,
        description: `Escribe una función Python bien documentada que demuestre '${sub0}'. Añade docstring, type hints y al menos 3 casos de prueba con valores edge (None, vacío, tipos incorrectos).`,
        difficulty: "easy",
      },
      {
        title: `Módulo completo: ${title}`,
        description: `Crea un módulo Python que implemente '${title}' cubriendo todos estos aspectos: ${subtopics.join(", ")}. Incluye manejo de errores con excepciones personalizadas, type hints completos, docstrings, y un bloque __main__ con demostración. Añade al menos 5 tests unitarios con unittest.`,
        difficulty: "hard",
      },
    ],
    python_ml: [
      {
        title: `Operación básica: ${sub0}`,
        description: `Con la librería correspondiente, implementa una función que use '${sub0}' sobre un dataset sintético de 100 filas que crees tú mismo. Muestra el resultado claramente formateado.`,
        difficulty: "easy",
      },
      {
        title: `Pipeline de datos: ${title}`,
        description: `Construye un pipeline completo que aplique cada uno de estos pasos en orden: ${subtopics.join(" → ")}. El pipeline debe funcionar con cualquier DataFrame de entrada, tener validación de datos en cada paso, y exportar el resultado procesado. Pruébalo con datos reales de Kaggle o seaborn.`,
        difficulty: "hard",
      },
    ],
    math: [
      {
        title: `Calcula a mano + verifica: ${sub0}`,
        description: `Resuelve manualmente un ejemplo de '${sub0}' con números pequeños (máx 3x3). Luego verifica el resultado con NumPy. Explica en comentarios qué representa cada paso geométricamente.`,
        difficulty: "easy",
      },
      {
        title: `Implementación desde cero: ${title}`,
        description: `Implementa '${title}' usando SOLO NumPy (sin scipy ni sklearn). Debe cubrir: ${subtopics.join(", ")}. Valida tu implementación comparando con la función equivalente de NumPy/scipy en al menos 10 casos de prueba aleatorios.`,
        difficulty: "hard",
      },
    ],
    stats: [
      {
        title: `Visualiza: ${sub0}`,
        description: `Genera datos sintéticos que sigan '${sub0}'. Calcula sus estadísticas descriptivas principales y crea un histograma con matplotlib. Etiqueta los parámetros clave en el gráfico.`,
        difficulty: "easy",
      },
      {
        title: `Análisis estadístico completo: ${title}`,
        description: `Con un dataset real de tu elección (seaborn, sklearn.datasets, etc.), aplica: ${subtopics.join(", ")}. Interpreta cada resultado en términos del dominio del dato. Concluye con un párrafo sobre qué insights estadísticos encontraste y cómo afectarían el entrenamiento de un modelo ML.`,
        difficulty: "hard",
      },
    ],
    ml: [
      {
        title: `Entrena y evalúa: ${sub0}`,
        description: `Usa sklearn para entrenar un modelo de '${sub0}' en el dataset Iris o Wine. Muestra accuracy, classification report y una matriz de confusión. Cambia un hiperparámetro y observa el impacto.`,
        difficulty: "easy",
      },
      {
        title: `Implementa desde cero: ${title}`,
        description: `Sin usar sklearn, implementa '${title}' cubriendo: ${subtopics.join(", ")}. Tu implementación debe: tener la misma API que sklearn (fit/predict), funcionar en el dataset que elijas, y comparar su accuracy con la implementación de sklearn. Explica cada parte del algoritmo en docstrings.`,
        difficulty: "hard",
      },
    ],
    dl: [
      {
        title: `Red neuronal mínima: ${sub0}`,
        description: `Implementa con PyTorch una red neuronal de 2 capas que aplique '${sub0}'. Entrénala en el dataset MNIST por 5 epochs. Muestra la curva de loss y accuracy final.`,
        difficulty: "easy",
      },
      {
        title: `Arquitectura personalizada: ${title}`,
        description: `Diseña e implementa una arquitectura de red neuronal que incorpore: ${subtopics.join(", ")}. Incluye: forward pass documentado, custom loss function si aplica, training loop con validation, guardado y carga de pesos, y evaluación en test set con al menos 3 métricas. Justifica cada decisión de arquitectura.`,
        difficulty: "hard",
      },
    ],
    llm: [
      {
        title: `Prompt engineering: ${sub0}`,
        description: `Diseña 3 prompts diferentes para resolver la misma tarea usando '${sub0}'. Compara los outputs del LLM para cada prompt. ¿Cuál da mejores resultados y por qué? Documenta tu análisis.`,
        difficulty: "easy",
      },
      {
        title: `Fine-tuning o evaluación: ${title}`,
        description: `Implementa un benchmark de evaluación que mida qué tan bien un LLM entiende '${title}'. Crea 20 preguntas con respuestas esperadas. Evalúa el modelo con al menos 2 métricas (exact match, BLEU, o LLM-as-judge). Analiza los errores más comunes y propón mejoras de prompt.`,
        difficulty: "hard",
      },
    ],
    llmops: [
      {
        title: `Prueba de concepto: ${sub0}`,
        description: `Implementa una prueba de concepto básica de '${sub0}' en menos de 50 líneas de Python. Que funcione end-to-end con un ejemplo real. Documenta los pasos con comentarios.`,
        difficulty: "easy",
      },
      {
        title: `Sistema production-ready: ${title}`,
        description: `Construye un sistema que integre: ${subtopics.join(", ")}. Debe ser robusto: manejo de errores, logging, timeouts, reintentos. Añade una API REST con FastAPI que lo exponga. Documenta cómo desplegarlo en producción.`,
        difficulty: "hard",
      },
    ],
    mlops: [
      {
        title: `Automatiza: ${sub0}`,
        description: `Automatiza '${sub0}' para un script Python de ML existente. Que funcione localmente y que puedas correrlo en menos de 5 comandos. Documenta cada paso con un README.`,
        difficulty: "easy",
      },
      {
        title: `Pipeline MLOps completo: ${title}`,
        description: `Implementa un pipeline MLOps que cubra: ${subtopics.join(", ")}. Usa herramientas reales (MLflow, DVC, GitHub Actions, Docker). El pipeline debe correr de manera reproducible en cualquier máquina. Incluye monitoreo básico de drift de datos.`,
        difficulty: "hard",
      },
    ],
    cv: [
      {
        title: `Procesa una imagen: ${sub0}`,
        description: `Con OpenCV o PIL, aplica '${sub0}' a una imagen de tu elección. Muestra la imagen original y el resultado lado a lado con matplotlib. Explica qué cambió.`,
        difficulty: "easy",
      },
      {
        title: `Pipeline de visión: ${title}`,
        description: `Construye un pipeline de computer vision que implemente: ${subtopics.join(", ")}. Debe procesar un video o batch de imágenes. Mide el FPS de procesamiento y optimiza el cuello de botella principal. Evalúa con métricas apropiadas al problema (mAP, IoU, etc.).`,
        difficulty: "hard",
      },
    ],
    nlp: [
      {
        title: `Procesa texto: ${sub0}`,
        description: `Aplica '${sub0}' a un párrafo de texto de tu elección. Muestra el resultado antes y después. Explica qué información se extrajo o transformó.`,
        difficulty: "easy",
      },
      {
        title: `Pipeline NLP end-to-end: ${title}`,
        description: `Construye un pipeline NLP que cubra: ${subtopics.join(", ")}. Usa un dataset de texto real (reviews, tweets, noticias). Evalúa la calidad de cada paso. El pipeline debe ser reutilizable para cualquier texto de entrada.`,
        difficulty: "hard",
      },
    ],
    general: [
      {
        title: `Practica: ${sub0}`,
        description: `Implementa un ejemplo funcional de '${sub0}' en Python. Debe ser ejecutable, tener output claro y mostrar al menos 2 casos de uso distintos. Añade comentarios explicativos.`,
        difficulty: "easy",
      },
      {
        title: `Proyecto integrador: ${title}`,
        description: `Construye un proyecto que integre todos los aspectos de '${title}': ${subtopics.join(", ")}. El proyecto debe tener código limpio, documentación clara, manejo de errores y ser demostrable en menos de 5 minutos. Sube el resultado a un repositorio de GitHub.`,
        difficulty: "hard",
      },
    ],
  }

  return templates[domain] ?? templates.general
}

// ─── Public API ───────────────────────────────────────────────────────────────

export function getTopicExercises(topic: {
  id: string
  title: string
  subtopics: string[]
  description: string
  difficulty: string
}): [Exercise, Exercise] {
  // 1. Manual table takes priority
  if (MANUAL[topic.id]) return MANUAL[topic.id]

  // 2. Smart domain-aware generator
  const domain = detectDomain(topic.title, topic.subtopics)
  return generate(topic.title, topic.subtopics, domain)
}
