export type TopicStatus = 'not_started' | 'in_progress' | 'completed' | 'completed_with_doubts'

export interface Topic {
  id: string
  title: string
  description: string
  subtopics: string[]
  estimatedHours: number
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  dependencies: string[]
  status: TopicStatus
  resources?: { title: string; url: string }[]
}

export interface Submodule {
  id: string
  title: string
  description: string
  topics: Topic[]
}

export interface Module {
  id: string
  title: string
  description: string
  submodules: Submodule[]
  badge?: { label: string; color: string }
}

export interface Phase {
  id: string
  title: string
  description: string
  estimatedWeeks: number
  modules: Module[]
  level: 'fundamentals' | 'intermediate' | 'advanced' | 'specialization' | 'projects'
}

export interface RoadmapData {
  phases: Phase[]
  salaryRanges: { level: string; range: string; timeframe: string }[]
}

export const roadmapData: RoadmapData = {
  salaryRanges: [
    { level: 'Junior', range: '$30-60k', timeframe: '6-12 meses' },
    { level: 'Mid', range: '$60-100k', timeframe: '1-2 años' },
    { level: 'Senior', range: '$100-180k', timeframe: '3+ años' },
  ],
  phases: [
    {
      id: 'phase-0',
      title: 'Mentalidad y Orientación',
      description: 'Entiende qué hace exactamente un AI/ML Engineer y la demanda del mercado 2026',
      estimatedWeeks: 1,
      level: 'fundamentals',
      modules: [
        {
          id: 'mod-0-1',
          title: '¿Qué es un Ingeniero de IA?',
          description: 'El puente entre modelos de IA y productos del mundo real',
          badge: { label: 'Fase 0', color: 'purple' },
          submodules: [
            {
              id: 'sub-0-1-1',
              title: 'Roles y Responsabilidades',
              description: 'Diferencias entre AI Engineer, ML Engineer y Data Scientist',
              topics: [
                {
                  id: 'topic-0-1',
                  title: 'Construye modelos',
                  description: 'Entrena algoritmos para que la máquina aprenda patrones',
                  subtopics: ['Detectar spam', 'Predecir ventas', 'Entender texto', 'Procesamiento de datos'],
                  estimatedHours: 2,
                  difficulty: 'beginner',
                  dependencies: [],
                  status: 'not_started',
                },
                {
                  id: 'topic-0-2',
                  title: 'Crea sistemas con LLMs',
                  description: 'Conecta GPT/Claude a datos reales de empresas usando RAG, agents y APIs',
                  subtopics: ['RAG pipelines', 'AI Agents', 'API integration', 'Prompt engineering'],
                  estimatedHours: 2,
                  difficulty: 'beginner',
                  dependencies: [],
                  status: 'not_started',
                },
                {
                  id: 'topic-0-3',
                  title: 'Deploya a producción (MLOps)',
                  description: 'Hace que los modelos funcionen en el mundo real, escalables y sin caerse',
                  subtopics: ['Containerización', 'CI/CD', 'Monitoring', 'Scaling'],
                  estimatedHours: 2,
                  difficulty: 'beginner',
                  dependencies: [],
                  status: 'not_started',
                },
                {
                  id: 'topic-0-4',
                  title: 'AI Engineer vs ML Engineer',
                  description: 'Diferencias clave entre roles',
                  subtopics: [
                    'AI: Usa modelos preentrenados via APIs',
                    'ML: Entrena modelos desde cero',
                    'AI: Tiempo de comercialización más rápido',
                    'ML: Caro y con mucha investigación'
                  ],
                  estimatedHours: 1,
                  difficulty: 'beginner',
                  dependencies: [],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-0-1-2',
              title: 'Demanda del Mercado 2026',
              description: 'Skills más buscadas por las empresas',
              topics: [
                {
                  id: 'topic-0-5',
                  title: 'Skills de Alta Demanda',
                  description: 'Habilidades que las empresas buscan con más frecuencia',
                  subtopics: [
                    'Orquestación multi-LLM',
                    'Arquitectura RAG y bases de datos vectoriales',
                    'AI Agents y sistemas de agentes',
                    'LLMOps y monitoreo de producción',
                    'Ingeniería de prompts a escala',
                    'Fine-tuning y métodos PEFT',
                    'MCP (Model Context Protocol)',
                    'Sistemas de IA multimodales'
                  ],
                  estimatedHours: 2,
                  difficulty: 'beginner',
                  dependencies: [],
                  status: 'not_started',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-1',
      title: 'Fundamentos de Programación',
      description: 'Python limpio con calidad de producción - esto no es negociable',
      estimatedWeeks: 4,
      level: 'fundamentals',
      modules: [
        {
          id: 'mod-1-1',
          title: 'Python para ML',
          description: 'NumPy, Pandas, Matplotlib - bases sólidas de programación',
          badge: { label: 'Fase 1', color: 'purple' },
          submodules: [
            {
              id: 'sub-1-1-1',
              title: 'Fundamentos de Python',
              description: 'Tipos de datos, estructuras y flujo de control',
              topics: [
                {
                  id: 'topic-1-1',
                  title: 'Tipos de datos y variables',
                  description: 'Enteros, flotantes, cadenas, booleanos, None',
                  subtopics: [
                    'Conversión de tipo: int(), float(), str(), bool()',
                    'type() e isinstance()',
                    'Tipos mutables vs inmutables',
                    'Críticos para los canales de IA'
                  ],
                  estimatedHours: 3,
                  difficulty: 'beginner',
                  dependencies: [],
                  status: 'not_started',
                },
                {
                  id: 'topic-1-2',
                  title: 'Cadenas (strings)',
                  description: 'Manipulación de texto en Python',
                  subtopics: [
                    'Corte de cadenas: s[start:stop:step]',
                    'Métodos: split, join, strip, replace, find',
                    'f-strings: f"value is {x:.2f}"',
                    'Cadenas multilínea'
                  ],
                  estimatedHours: 2,
                  difficulty: 'beginner',
                  dependencies: ['topic-1-1'],
                  status: 'not_started',
                },
                {
                  id: 'topic-1-3',
                  title: 'Colecciones',
                  description: 'Listas, tuplas, diccionarios y conjuntos',
                  subtopics: [
                    'Listas: indexación, append, extend, pop, sort',
                    'Tuplas: inmutabilidad',
                    'Diccionarios: CRUD, .keys(), .values(), .items()',
                    'Conjuntos: unicidad, unión, intersección'
                  ],
                  estimatedHours: 4,
                  difficulty: 'beginner',
                  dependencies: ['topic-1-1'],
                  status: 'not_started',
                },
                {
                  id: 'topic-1-4',
                  title: 'Control de flujo',
                  description: 'Condicionales y bucles',
                  subtopics: [
                    'if / elif / else',
                    'Bucles for y while',
                    'break / continue',
                    'range(), enumerate(), zip()'
                  ],
                  estimatedHours: 3,
                  difficulty: 'beginner',
                  dependencies: ['topic-1-3'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-1-1-2',
              title: 'Funciones y OOP',
              description: 'Programación modular y orientada a objetos',
              topics: [
                {
                  id: 'topic-1-5',
                  title: 'Funciones',
                  description: 'Definición y uso de funciones en Python',
                  subtopics: [
                    'def y argumentos',
                    '*args y **kwargs',
                    'Funciones lambda',
                    'Recursión y docstrings'
                  ],
                  estimatedHours: 4,
                  difficulty: 'beginner',
                  dependencies: ['topic-1-4'],
                  status: 'not_started',
                },
                {
                  id: 'topic-1-6',
                  title: 'Programación Orientada a Objetos',
                  description: 'Clases, herencia y métodos especiales',
                  subtopics: [
                    'Clases e instancias, __init__',
                    'Herencia y super()',
                    '__repr__, __str__, __len__',
                    'Clases abstractas con ABC'
                  ],
                  estimatedHours: 6,
                  difficulty: 'intermediate',
                  dependencies: ['topic-1-5'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-1-1-3',
              title: 'NumPy y Pandas',
              description: 'Herramientas esenciales para trabajo con datos',
              topics: [
                {
                  id: 'topic-1-7',
                  title: 'NumPy (No negociable para IA)',
                  description: 'Operaciones vectoriales y matriciales',
                  subtopics: [
                    'Creación de matrices: np.array(), np.zeros(), np.ones()',
                    'Operaciones: reshape(), flatten(), stack()',
                    'Broadcasting y operador @',
                    'np.linalg y np.random'
                  ],
                  estimatedHours: 8,
                  difficulty: 'intermediate',
                  dependencies: ['topic-1-6'],
                  status: 'not_started',
                },
                {
                  id: 'topic-1-8',
                  title: 'Pandas (Esencial para trabajo de datos)',
                  description: 'DataFrames y manipulación de datos',
                  subtopics: [
                    'DataFrames y Series',
                    'Indexación loc vs iloc',
                    'groupby(), agg(), pivot_table()',
                    'merge(), concat(), pd.to_datetime()'
                  ],
                  estimatedHours: 8,
                  difficulty: 'intermediate',
                  dependencies: ['topic-1-7'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-1-1-4',
              title: 'Python Asíncrono (Crítico para APIs de IA)',
              description: 'Async/await para llamadas concurrentes',
              topics: [
                {
                  id: 'topic-1-9',
                  title: 'Async Python',
                  description: 'Programación asíncrona para APIs de IA',
                  subtopics: [
                    'Sintaxis async/await',
                    'asyncio bucle de eventos',
                    'aiohttp y httpx',
                    'asyncio.gather() para llamadas concurrentes'
                  ],
                  estimatedHours: 6,
                  difficulty: 'intermediate',
                  dependencies: ['topic-1-6'],
                  status: 'not_started',
                  resources: [
                    { title: 'Kaggle Learn - Python', url: 'https://www.kaggle.com/learn' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-2',
      title: 'Matemáticas y Estadística para IA',
      description: 'Comprender las matemáticas detrás de los modelos - no necesitas derivar todo, pero sí comprenderlo',
      estimatedWeeks: 4,
      level: 'fundamentals',
      modules: [
        {
          id: 'mod-2-1',
          title: 'Matemáticas Esenciales',
          description: 'Álgebra lineal, cálculo y probabilidad',
          badge: { label: 'Fase 2', color: 'purple' },
          submodules: [
            {
              id: 'sub-2-1-1',
              title: 'Álgebra Lineal',
              description: 'Fundamento matemático de embeddings y transformaciones',
              topics: [
                {
                  id: 'topic-2-1',
                  title: 'Vectores',
                  description: 'Operaciones vectoriales fundamentales',
                  subtopics: [
                    'Suma de vectores, multiplicación escalar',
                    'Producto escalar e intuición geométrica',
                    'Magnitud vectorial (L1, L2, Lp normas)',
                    'Similitud del coseno: cómo funcionan las embeddings'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-1-7'],
                  status: 'not_started',
                },
                {
                  id: 'topic-2-2',
                  title: 'Matrices',
                  description: 'Operaciones matriciales para ML',
                  subtopics: [
                    'Operaciones: suma, multiplicación, transposición',
                    'Matriz de identidad e inversa',
                    'Determinante y rango',
                    'Transformaciones lineales'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-2-1'],
                  status: 'not_started',
                },
                {
                  id: 'topic-2-3',
                  title: 'Descomposiciones',
                  description: 'Eigenvalores y SVD',
                  subtopics: [
                    'Valores propios y vectores propios',
                    'Por qué son importantes en PCA',
                    'SVD: intuición de alto nivel',
                    'Relación con reducción de dimensionalidad'
                  ],
                  estimatedHours: 4,
                  difficulty: 'advanced',
                  dependencies: ['topic-2-2'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-2-1-2',
              title: 'Cálculo',
              description: 'Derivadas y optimización',
              topics: [
                {
                  id: 'topic-2-4',
                  title: 'Derivadas',
                  description: 'Fundamentos del cálculo diferencial',
                  subtopics: [
                    'Tasa de cambio y pendiente',
                    'Regla de potencia, regla de cadena',
                    'Derivada de log, exp, sigmoid',
                    'Mínimos, máximos, puntos silla'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-2-1'],
                  status: 'not_started',
                },
                {
                  id: 'topic-2-5',
                  title: 'Gradientes y Backpropagation',
                  description: 'Cómo aprenden las redes neuronales',
                  subtopics: [
                    'Derivada parcial',
                    'Gradiente: vector de todas las derivadas parciales',
                    'Regla de la cadena multivariable',
                    'Gráficos computacionales'
                  ],
                  estimatedHours: 6,
                  difficulty: 'advanced',
                  dependencies: ['topic-2-4'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-2-1-3',
              title: 'Probabilidad y Estadística',
              description: 'Fundamentos probabilísticos para ML',
              topics: [
                {
                  id: 'topic-2-6',
                  title: 'Probabilidad Básica',
                  description: 'Conceptos fundamentales de probabilidad',
                  subtopics: [
                    'Probabilidad conjunta, marginal y condicional',
                    'Teorema de Bayes',
                    'Variables aleatorias y distribuciones',
                    'Valor esperado y varianza'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: [],
                  status: 'not_started',
                },
                {
                  id: 'topic-2-7',
                  title: 'Distribuciones y Estadística',
                  description: 'Distribuciones clave para ML',
                  subtopics: [
                    'Bernoulli, Binomial, Gaussiana',
                    'MLE y MAP',
                    'Entropía y divergencia KL',
                    'Entropía cruzada'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-2-6'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-2-1-4',
              title: 'Optimización',
              description: 'Algoritmos de optimización para ML',
              topics: [
                {
                  id: 'topic-2-8',
                  title: 'Descenso de Gradiente',
                  description: 'El algoritmo fundamental de entrenamiento',
                  subtopics: [
                    'Regla de actualización: θ = θ - α * ∇L(θ)',
                    'Tasa de aprendizaje',
                    'SGD vs Mini-batch',
                    'Adam, RMSProp, Momentum'
                  ],
                  estimatedHours: 6,
                  difficulty: 'intermediate',
                  dependencies: ['topic-2-5'],
                  status: 'not_started',
                  resources: [
                    { title: '3Blue1Brown - Álgebra Lineal', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-3',
      title: 'Fundamentos del Aprendizaje Automático',
      description: 'Algoritmos de ML clásicos que impulsan la ingeniería y evaluación de funciones de IA',
      estimatedWeeks: 4,
      level: 'intermediate',
      modules: [
        {
          id: 'mod-3-1',
          title: 'ML Clásico',
          description: 'Regresión, clasificación, árboles de decisión, clustering',
          badge: { label: 'Fase 3', color: 'teal' },
          submodules: [
            {
              id: 'sub-3-1-1',
              title: 'Conceptos Básicos de ML',
              description: 'Fundamentos del aprendizaje automático',
              topics: [
                {
                  id: 'topic-3-1',
                  title: 'Tipos de Aprendizaje',
                  description: 'Supervisado, no supervisado y por refuerzo',
                  subtopics: [
                    'Conjunto de entrenamiento, validación y prueba',
                    'Sobreajuste y desajuste',
                    'Compensación sesgo-varianza',
                    'Validación cruzada (k-fold)'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-2-7'],
                  status: 'not_started',
                },
                {
                  id: 'topic-3-2',
                  title: 'Métricas de Evaluación',
                  description: 'Cómo medir el rendimiento de modelos',
                  subtopics: [
                    'Exactitud, Precisión, Recall, F1',
                    'AUC-ROC',
                    'Matriz de confusión',
                    'MSE, MAE, RMSE'
                  ],
                  estimatedHours: 3,
                  difficulty: 'intermediate',
                  dependencies: ['topic-3-1'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-3-1-2',
              title: 'Regresión y Clasificación',
              description: 'Algoritmos fundamentales de ML',
              topics: [
                {
                  id: 'topic-3-3',
                  title: 'Regresión Lineal y Logística',
                  description: 'Los algoritmos más básicos de ML',
                  subtopics: [
                    'Regresión lineal: forma cerrada y GD',
                    'Regresión logística: sigmoidea',
                    'Funciones de costo: MSE, BCE',
                    'Regularización: Ridge (L2), Lasso (L1)'
                  ],
                  estimatedHours: 6,
                  difficulty: 'intermediate',
                  dependencies: ['topic-2-8'],
                  status: 'not_started',
                },
                {
                  id: 'topic-3-4',
                  title: 'Árboles de Decisión y Ensembles',
                  description: 'Modelos basados en árboles',
                  subtopics: [
                    'Criterios de división: Gini, entropía',
                    'Random Forests',
                    'Gradient Boosting: XGBoost, LightGBM',
                    'Importancia de características'
                  ],
                  estimatedHours: 6,
                  difficulty: 'intermediate',
                  dependencies: ['topic-3-3'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-3-1-3',
              title: 'Aprendizaje No Supervisado',
              description: 'Clustering y reducción de dimensionalidad',
              topics: [
                {
                  id: 'topic-3-5',
                  title: 'Clustering y Dimensionalidad',
                  description: 'Agrupación y visualización de datos',
                  subtopics: [
                    'K-means clustering',
                    'DBSCAN',
                    'PCA: reducción de dimensionalidad',
                    't-SNE / UMAP: visualización de embeddings'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-2-3'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-3-1-4',
              title: 'Scikit-Learn',
              description: 'Framework estándar para ML clásico',
              topics: [
                {
                  id: 'topic-3-6',
                  title: 'ML con Scikit-Learn',
                  description: 'API estándar de sklearn',
                  subtopics: [
                    'Pipelines: clase Pipeline()',
                    'Preprocesadores: StandardScaler, OneHotEncoder',
                    'GridSearchCV, cross_val_score',
                    'Patrón fit/transform/predict'
                  ],
                  estimatedHours: 6,
                  difficulty: 'intermediate',
                  dependencies: ['topic-3-4'],
                  status: 'not_started',
                  resources: [
                    { title: 'Machine Learning Specialization - Andrew Ng', url: 'https://www.deeplearning.ai/courses/machine-learning-specialization/' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-4',
      title: 'Deep Learning',
      description: 'Redes neuronales con suficiente profundidad para trabajar con transformadores',
      estimatedWeeks: 6,
      level: 'intermediate',
      modules: [
        {
          id: 'mod-4-1',
          title: 'Redes Neuronales',
          description: 'Fundamentos de deep learning y PyTorch',
          badge: { label: 'Fase 4', color: 'teal' },
          submodules: [
            {
              id: 'sub-4-1-1',
              title: 'Fundamentos de Redes Neuronales',
              description: 'Arquitectura básica de redes neuronales',
              topics: [
                {
                  id: 'topic-4-1',
                  title: 'Arquitectura de Redes Neuronales',
                  description: 'Neurona, Perceptrón, MLP',
                  subtopics: [
                    'Funciones de activación: ReLU, GELU, SwiGLU',
                    'Forward pass y backpropagation',
                    'Inicialización de pesos',
                    'Gradientes que desaparecen/explotan'
                  ],
                  estimatedHours: 6,
                  difficulty: 'intermediate',
                  dependencies: ['topic-2-5', 'topic-3-3'],
                  status: 'not_started',
                },
                {
                  id: 'topic-4-2',
                  title: 'Técnicas de Entrenamiento',
                  description: 'Normalización y regularización',
                  subtopics: [
                    'Batch Normalization',
                    'Layer Normalization (usada en transformadores)',
                    'Dropout',
                    'Conexiones residuales (skip connections)'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-4-1'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-4-1-2',
              title: 'CNNs y RNNs',
              description: 'Arquitecturas especializadas',
              topics: [
                {
                  id: 'topic-4-3',
                  title: 'Redes Convolucionales (CNN)',
                  description: 'Procesamiento de imágenes',
                  subtopics: [
                    'Operación de convolución',
                    'Pooling layers',
                    'ResNet, VGG arquitecturas',
                    'Transfer learning con CNN'
                  ],
                  estimatedHours: 6,
                  difficulty: 'intermediate',
                  dependencies: ['topic-4-2'],
                  status: 'not_started',
                },
                {
                  id: 'topic-4-4',
                  title: 'Redes Recurrentes (RNN)',
                  description: 'Procesamiento de secuencias',
                  subtopics: [
                    'RNN y estado oculto',
                    'LSTM: gates y cell state',
                    'GRU',
                    'Seq2Seq y atención'
                  ],
                  estimatedHours: 6,
                  difficulty: 'advanced',
                  dependencies: ['topic-4-2'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-4-1-3',
              title: 'PyTorch',
              description: 'Framework de deep learning',
              topics: [
                {
                  id: 'topic-4-5',
                  title: 'Domina PyTorch',
                  description: 'El framework estándar para deep learning',
                  subtopics: [
                    'Tensores y operaciones GPU',
                    'torch.nn.Module',
                    'DataLoader y Datasets',
                    'Training loop: forward → loss → backward → step'
                  ],
                  estimatedHours: 10,
                  difficulty: 'intermediate',
                  dependencies: ['topic-4-1'],
                  status: 'not_started',
                  resources: [
                    { title: 'Fast.ai - Practical Deep Learning', url: 'https://fast.ai' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-5',
      title: 'Transformadores y NLP',
      description: 'Experiencia profunda en procesamiento de lenguaje natural para productos basados en LLM',
      estimatedWeeks: 6,
      level: 'advanced',
      modules: [
        {
          id: 'mod-5-1',
          title: 'NLP y Transformadores',
          description: 'La arquitectura que revolucionó la IA',
          badge: { label: 'Fase 5', color: 'amber' },
          submodules: [
            {
              id: 'sub-5-1-1',
              title: 'Preprocesamiento de Texto',
              description: 'Preparación de datos de texto',
              topics: [
                {
                  id: 'topic-5-1',
                  title: 'Tokenización',
                  description: 'Dividir texto en tokens',
                  subtopics: [
                    'Tokenización por palabras y subpalabras',
                    'BPE (usado en GPT)',
                    'WordPiece (usado en BERT)',
                    'SentencePiece (usado en LLaMA)'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-1-2'],
                  status: 'not_started',
                },
                {
                  id: 'topic-5-2',
                  title: 'Embeddings de Palabras',
                  description: 'Representaciones vectoriales semánticas',
                  subtopics: [
                    'Word2Vec: CBOW vs Skip-gram',
                    'GloVe',
                    'FastText',
                    'Embeddings estáticos vs contextuales'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-2-1', 'topic-5-1'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-5-1-2',
              title: 'Arquitectura Transformer',
              description: 'El corazón de los LLMs modernos',
              topics: [
                {
                  id: 'topic-5-3',
                  title: 'Self-Attention',
                  description: 'El mecanismo clave de los transformadores',
                  subtopics: [
                    'Query, Key, Value (Q, K, V)',
                    'Score: softmax(QK^T / √d_k) * V',
                    'Multi-head attention',
                    'Codificación posicional'
                  ],
                  estimatedHours: 8,
                  difficulty: 'advanced',
                  dependencies: ['topic-2-2', 'topic-4-4'],
                  status: 'not_started',
                },
                {
                  id: 'topic-5-4',
                  title: 'Arquitecturas Transformer',
                  description: 'Encoder-only, Decoder-only, Encoder-Decoder',
                  subtopics: [
                    'Encoder-only (BERT): tareas de comprensión',
                    'Decoder-only (GPT): generación de texto',
                    'Encoder-Decoder (T5): seq2seq',
                    'Causal masking en decodificadores'
                  ],
                  estimatedHours: 6,
                  difficulty: 'advanced',
                  dependencies: ['topic-5-3'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-5-1-3',
              title: 'Modelos Preentrenados',
              description: 'HuggingFace y modelos clave',
              topics: [
                {
                  id: 'topic-5-5',
                  title: 'Modelos Preentrenados Clave',
                  description: 'BERT, GPT, LLaMA, Mistral y más',
                  subtopics: [
                    'BERT: clasificación, NER, QA',
                    'GPT-4: generación, chat',
                    'Claude: contexto largo, seguridad',
                    'LLaMA 3, Mistral 7B: código abierto'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-5-4'],
                  status: 'not_started',
                  resources: [
                    { title: 'HuggingFace Course', url: 'https://huggingface.co/learn' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-6',
      title: 'LLMs e Ingeniería de IA',
      description: 'Tu dominio principal - APIs de LLM, prompt engineering y patrones de producción',
      estimatedWeeks: 8,
      level: 'advanced',
      modules: [
        {
          id: 'mod-6-1',
          title: 'Fundamentos LLM',
          description: 'APIs de OpenAI, Anthropic, Google y patrones de producción',
          badge: { label: 'Fase 6', color: 'amber' },
          submodules: [
            {
              id: 'sub-6-1-1',
              title: 'Prompt Engineering',
              description: 'El arte de comunicarse con LLMs',
              topics: [
                {
                  id: 'topic-6-1',
                  title: 'Técnicas de Prompting',
                  description: 'Ingeniería de prompts de grado producción',
                  subtopics: [
                    'Zero-shot, few-shot, one-shot',
                    'Chain of Thought (CoT)',
                    'ReAct: Reasoning + Acting',
                    'Structured output: JSON, XML'
                  ],
                  estimatedHours: 6,
                  difficulty: 'intermediate',
                  dependencies: ['topic-5-5'],
                  status: 'not_started',
                },
                {
                  id: 'topic-6-2',
                  title: 'Prompt Engineering Avanzado',
                  description: 'Técnicas avanzadas para producción',
                  subtopics: [
                    'Self-consistency: múltiples rutas CoT',
                    'Tree of Thought (ToT)',
                    'Prompt versioning y A/B testing',
                    'Defensa contra prompt injection'
                  ],
                  estimatedHours: 6,
                  difficulty: 'advanced',
                  dependencies: ['topic-6-1'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-6-1-2',
              title: 'APIs de IA',
              description: 'OpenAI, Anthropic, Google y más',
              topics: [
                {
                  id: 'topic-6-3',
                  title: 'API OpenAI',
                  description: 'GPT-4, embeddings, function calling',
                  subtopics: [
                    'Chat completions API',
                    'Function calling / tool use',
                    'JSON mode / Structured outputs',
                    'Streaming con SSE'
                  ],
                  estimatedHours: 6,
                  difficulty: 'intermediate',
                  dependencies: ['topic-6-1'],
                  status: 'not_started',
                },
                {
                  id: 'topic-6-4',
                  title: 'API Anthropic (Claude)',
                  description: 'Claude, contexto largo, tool use',
                  subtopics: [
                    'Messages API structure',
                    'System prompts',
                    'Contexto largo (200K tokens)',
                    'Tool use'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-6-3'],
                  status: 'not_started',
                  resources: [
                    { title: 'DeepLearning.AI Short Courses', url: 'https://www.deeplearning.ai/short-courses/' },
                  ],
                },
              ],
            },
            {
              id: 'sub-6-1-3',
              title: 'Patrones de Integración',
              description: 'Patrones de producción para APIs de IA',
              topics: [
                {
                  id: 'topic-6-5',
                  title: 'Patrones de Producción',
                  description: 'Rate limiting, caching, fallbacks',
                  subtopics: [
                    'Manejo de límites de tokens',
                    'Streaming responses (SSE)',
                    'Exponential backoff con jitter',
                    'Circuit breaker pattern'
                  ],
                  estimatedHours: 6,
                  difficulty: 'advanced',
                  dependencies: ['topic-6-4', 'topic-1-9'],
                  status: 'not_started',
                },
                {
                  id: 'topic-6-6',
                  title: 'Seguridad de APIs',
                  description: 'Protección de claves y datos',
                  subtopics: [
                    'Nunca exponer claves al frontend',
                    '.env localmente, Secret Manager en producción',
                    'Backend proxy pattern',
                    'Rate limiting por usuario con Redis'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-6-5'],
                  status: 'not_started',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-7',
      title: 'Orquestación Multi-LLM',
      description: 'Lo que separa a los buenos ingenieros de IA de los grandes - tu especialidad',
      estimatedWeeks: 8,
      level: 'advanced',
      modules: [
        {
          id: 'mod-7-1',
          title: 'Arquitectura Multi-LLM',
          description: 'Enrutamiento, fallbacks, MCP, LangGraph, LangChain',
          badge: { label: 'Fase 7', color: 'coral' },
          submodules: [
            {
              id: 'sub-7-1-1',
              title: 'Estrategias de Enrutamiento',
              description: 'Dirigir queries al mejor modelo',
              topics: [
                {
                  id: 'topic-7-1',
                  title: 'Enrutamiento Inteligente',
                  description: 'Seleccionar el modelo óptimo por tarea',
                  subtopics: [
                    'Enrutamiento basado en tarea',
                    'Enrutamiento basado en costo',
                    'Enrutamiento basado en rendimiento',
                    'Arquitectura de fallback'
                  ],
                  estimatedHours: 6,
                  difficulty: 'advanced',
                  dependencies: ['topic-6-4'],
                  status: 'not_started',
                },
                {
                  id: 'topic-7-2',
                  title: 'Model Context Protocol (MCP)',
                  description: 'Estándar de Anthropic para conectividad',
                  subtopics: [
                    'Qué es MCP',
                    'Servidores MCP: recursos, herramientas, prompts',
                    'Construir servidor MCP en Python',
                    'Seguridad en MCP'
                  ],
                  estimatedHours: 8,
                  difficulty: 'advanced',
                  dependencies: ['topic-7-1'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-7-1-2',
              title: 'Frameworks de Orquestación',
              description: 'LangChain, LangGraph, LlamaIndex',
              topics: [
                {
                  id: 'topic-7-3',
                  title: 'LangChain',
                  description: 'Framework para aplicaciones LLM',
                  subtopics: [
                    'Chains, Agents, Memory, Tools',
                    'LLMChain, SequentialChain',
                    'RetrievalQA chain',
                    'LCEL (LangChain Expression Language)'
                  ],
                  estimatedHours: 8,
                  difficulty: 'intermediate',
                  dependencies: ['topic-6-5'],
                  status: 'not_started',
                },
                {
                  id: 'topic-7-4',
                  title: 'LangGraph',
                  description: 'Flujos de trabajo cíclicos y con estado',
                  subtopics: [
                    'Nodos y edges',
                    'Estado compartido',
                    'Flujos multiagente',
                    'Human-in-the-loop'
                  ],
                  estimatedHours: 10,
                  difficulty: 'advanced',
                  dependencies: ['topic-7-3'],
                  status: 'not_started',
                },
                {
                  id: 'topic-7-5',
                  title: 'LlamaIndex y CrewAI',
                  description: 'Alternativas para casos específicos',
                  subtopics: [
                    'LlamaIndex: conectores de datos e índices',
                    'CrewAI: agentes con roles y objetivos',
                    'AutoGen: patrones de conversación multiagente',
                    'Cuándo usar cada framework'
                  ],
                  estimatedHours: 6,
                  difficulty: 'advanced',
                  dependencies: ['topic-7-4'],
                  status: 'not_started',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-8',
      title: 'RAG y Bases de Datos Vectoriales',
      description: 'Construir sistemas de recuperación que den a los LLMs acceso a conocimiento privado',
      estimatedWeeks: 6,
      level: 'advanced',
      modules: [
        {
          id: 'mod-8-1',
          title: 'RAG Pipelines',
          description: 'La skill #1 más pagada - conecta LLMs a documentos reales',
          badge: { label: 'Fase 8', color: 'amber' },
          submodules: [
            {
              id: 'sub-8-1-1',
              title: 'Embeddings y Chunking',
              description: 'Preparación de datos para RAG',
              topics: [
                {
                  id: 'topic-8-1',
                  title: 'Embeddings Profundo',
                  description: 'Representaciones vectoriales para búsqueda semántica',
                  subtopics: [
                    'text-embedding-3-small/large (OpenAI)',
                    'bge-large, all-MiniLM-L6-v2 (open source)',
                    'Dimensiones y tradeoffs',
                    'Batching para eficiencia'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-5-2'],
                  status: 'not_started',
                },
                {
                  id: 'topic-8-2',
                  title: 'Estrategias de Chunking',
                  description: 'Dividir documentos de forma óptima',
                  subtopics: [
                    'Fixed-size chunking',
                    'Sentence-based chunking',
                    'Semantic chunking',
                    'Chunk overlap y metadatos'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-8-1'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-8-1-2',
              title: 'Vector Databases',
              description: 'Almacenamiento y búsqueda de embeddings',
              topics: [
                {
                  id: 'topic-8-3',
                  title: 'Bases de Datos Vectoriales',
                  description: 'Pinecone, pgvector, Qdrant, Weaviate',
                  subtopics: [
                    'FAISS, Chroma: desarrollo local',
                    'Pinecone, Qdrant: producción',
                    'pgvector: PostgreSQL + vectores',
                    'HNSW index: el algoritmo detrás'
                  ],
                  estimatedHours: 6,
                  difficulty: 'intermediate',
                  dependencies: ['topic-8-2'],
                  status: 'not_started',
                },
                {
                  id: 'topic-8-4',
                  title: 'Operaciones Vectoriales',
                  description: 'Indexación, búsqueda y filtrado',
                  subtopics: [
                    'Similarity search',
                    'Filtered search con metadatos',
                    'Hybrid search: BM25 + vectores',
                    'Namespaces para multi-tenant'
                  ],
                  estimatedHours: 4,
                  difficulty: 'advanced',
                  dependencies: ['topic-8-3'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-8-1-3',
              title: 'RAG Avanzado',
              description: 'Técnicas avanzadas de recuperación',
              topics: [
                {
                  id: 'topic-8-5',
                  title: 'Técnicas RAG Avanzadas',
                  description: 'HyDE, reranking, query expansion',
                  subtopics: [
                    'HyDE: Hypothetical Document Embeddings',
                    'Query expansion',
                    'Reranking con Cohere',
                    'Contextual compression'
                  ],
                  estimatedHours: 8,
                  difficulty: 'advanced',
                  dependencies: ['topic-8-4'],
                  status: 'not_started',
                },
                {
                  id: 'topic-8-6',
                  title: 'RAG en Producción',
                  description: 'Evaluación y monitoreo',
                  subtopics: [
                    'Evaluación RAG: RAGAs framework',
                    'Faithfulness, relevance, precision',
                    'Incremental indexing',
                    'Multi-tenant isolation'
                  ],
                  estimatedHours: 6,
                  difficulty: 'advanced',
                  dependencies: ['topic-8-5'],
                  status: 'not_started',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-9',
      title: 'AI Agents y Sistemas Agénticos',
      description: 'Construir sistemas de IA autónomos que razonan, planifican y toman acciones',
      estimatedWeeks: 6,
      level: 'specialization',
      modules: [
        {
          id: 'mod-9-1',
          title: 'AI Agents',
          description: 'LLM + Tools + Memory + Planning',
          badge: { label: 'Fase 9', color: 'coral' },
          submodules: [
            {
              id: 'sub-9-1-1',
              title: 'Componentes de Agentes',
              description: 'Herramientas, memoria y planificación',
              topics: [
                {
                  id: 'topic-9-1',
                  title: 'Tools y Function Calling',
                  description: 'Herramientas que pueden usar los agentes',
                  subtopics: [
                    'Web search (Tavily, SerpAPI)',
                    'Code execution',
                    'Database queries',
                    'API calls y tool validation'
                  ],
                  estimatedHours: 6,
                  difficulty: 'intermediate',
                  dependencies: ['topic-7-4'],
                  status: 'not_started',
                },
                {
                  id: 'topic-9-2',
                  title: 'Sistemas de Memoria',
                  description: 'Memoria para agentes persistentes',
                  subtopics: [
                    'In-context memory',
                    'Vector store memory',
                    'Entity memory',
                    'Summary memory'
                  ],
                  estimatedHours: 4,
                  difficulty: 'advanced',
                  dependencies: ['topic-9-1', 'topic-8-3'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-9-1-2',
              title: 'Sistemas Multi-Agente',
              description: 'Múltiples agentes colaborando',
              topics: [
                {
                  id: 'topic-9-3',
                  title: 'Patrones Multi-Agente',
                  description: 'Arquitecturas de múltiples agentes',
                  subtopics: [
                    'Supervisor → Worker agents',
                    'Peer-to-peer collaboration',
                    'Pipeline agents',
                    'Adversarial agents'
                  ],
                  estimatedHours: 8,
                  difficulty: 'advanced',
                  dependencies: ['topic-9-2'],
                  status: 'not_started',
                },
                {
                  id: 'topic-9-4',
                  title: 'Agentes en Producción',
                  description: 'Seguridad y escalabilidad',
                  subtopics: [
                    'Task decomposition',
                    'Error recovery',
                    'Human escalation',
                    'Sandboxing y límites de costo'
                  ],
                  estimatedHours: 6,
                  difficulty: 'expert',
                  dependencies: ['topic-9-3'],
                  status: 'not_started',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-10',
      title: 'Fine-tuning y Personalización',
      description: 'Personalizar modelos para tu dominio específico - premium de 30-50% en salario',
      estimatedWeeks: 4,
      level: 'specialization',
      modules: [
        {
          id: 'mod-10-1',
          title: 'Fine-tuning',
          description: 'LoRA, QLoRA, DPO, RLHF',
          badge: { label: 'Fase 10', color: 'coral' },
          submodules: [
            {
              id: 'sub-10-1-1',
              title: 'PEFT (Parameter-Efficient Fine-Tuning)',
              description: 'Fine-tuning eficiente en recursos',
              topics: [
                {
                  id: 'topic-10-1',
                  title: 'LoRA y QLoRA',
                  description: 'Adaptación de bajo rango',
                  subtopics: [
                    'LoRA: matrices entrenables pequeñas',
                    'Rank (r) y alpha',
                    'QLoRA: cuantización 4-bit + LoRA',
                    'Fusionar pesos LoRA'
                  ],
                  estimatedHours: 8,
                  difficulty: 'advanced',
                  dependencies: ['topic-5-4'],
                  status: 'not_started',
                },
                {
                  id: 'topic-10-2',
                  title: 'Herramientas de Fine-tuning',
                  description: 'HuggingFace PEFT, TRL, Unsloth',
                  subtopics: [
                    'HuggingFace PEFT library',
                    'TRL: Transformer RL',
                    'Unsloth: 2x más rápido',
                    'W&B para tracking'
                  ],
                  estimatedHours: 6,
                  difficulty: 'advanced',
                  dependencies: ['topic-10-1'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-10-1-2',
              title: 'Alignment',
              description: 'RLHF, DPO y alineación de modelos',
              topics: [
                {
                  id: 'topic-10-3',
                  title: 'RLHF y DPO',
                  description: 'Alinear modelos con preferencias humanas',
                  subtopics: [
                    'RLHF pipeline: SFT → Reward → PPO',
                    'DPO: alternativa más simple',
                    'Constitutional AI',
                    'Reward models'
                  ],
                  estimatedHours: 8,
                  difficulty: 'expert',
                  dependencies: ['topic-10-2'],
                  status: 'not_started',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-11',
      title: 'IA Generativa (Más allá del texto)',
      description: 'Imágenes, audio, video y sistemas multimodales',
      estimatedWeeks: 4,
      level: 'specialization',
      modules: [
        {
          id: 'mod-11-1',
          title: 'IA Multimodal',
          description: 'Difusión, visión, audio y video',
          badge: { label: 'Fase 11', color: 'coral' },
          submodules: [
            {
              id: 'sub-11-1-1',
              title: 'Modelos Generativos',
              description: 'VAE, GAN, Diffusion',
              topics: [
                {
                  id: 'topic-11-1',
                  title: 'Modelos de Difusión',
                  description: 'Stable Diffusion y text-to-image',
                  subtopics: [
                    'Forward/reverse process',
                    'DDPM, DDIM',
                    'Classifier-free guidance',
                    'ControlNet'
                  ],
                  estimatedHours: 6,
                  difficulty: 'advanced',
                  dependencies: ['topic-4-1'],
                  status: 'not_started',
                },
                {
                  id: 'topic-11-2',
                  title: 'Vision-Language Models',
                  description: 'GPT-4V, Claude Vision, Gemini',
                  subtopics: [
                    'GPT-4V / GPT-4o',
                    'Claude 3 Vision',
                    'Gemini multimodal',
                    'CLIP y LLaVA'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-6-4'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-11-1-2',
              title: 'Audio y Video AI',
              description: 'Speech-to-text, TTS, video generation',
              topics: [
                {
                  id: 'topic-11-3',
                  title: 'Audio AI',
                  description: 'Whisper, TTS, voice cloning',
                  subtopics: [
                    'OpenAI Whisper: STT',
                    'TTS: OpenAI, ElevenLabs',
                    'Voice cloning',
                    'Real-time processing'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-6-3'],
                  status: 'not_started',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-12',
      title: 'MLOps y LLMOps',
      description: 'Enviar IA a producción de forma confiable, económica y escalable',
      estimatedWeeks: 6,
      level: 'specialization',
      modules: [
        {
          id: 'mod-12-1',
          title: 'Producción de IA',
          description: 'Docker, Kubernetes, monitoring, CI/CD',
          badge: { label: 'Fase 12', color: 'coral' },
          submodules: [
            {
              id: 'sub-12-1-1',
              title: 'Containerización y Deploy',
              description: 'Docker y Kubernetes para ML',
              topics: [
                {
                  id: 'topic-12-1',
                  title: 'Docker para ML',
                  description: 'Containerizar modelos y APIs',
                  subtopics: [
                    'Dockerfile para servicios ML',
                    'Multi-stage builds',
                    'Docker Compose',
                    'GPU scheduling'
                  ],
                  estimatedHours: 6,
                  difficulty: 'intermediate',
                  dependencies: [],
                  status: 'not_started',
                },
                {
                  id: 'topic-12-2',
                  title: 'Kubernetes',
                  description: 'Orquestación de producción',
                  subtopics: [
                    'K8s basics',
                    'Helm charts',
                    'HPA: autoscaling',
                    'GPU scheduling en K8s'
                  ],
                  estimatedHours: 8,
                  difficulty: 'advanced',
                  dependencies: ['topic-12-1'],
                  status: 'not_started',
                },
              ],
            },
            {
              id: 'sub-12-1-2',
              title: 'Monitoring y Observabilidad',
              description: 'LLMOps y tracking',
              topics: [
                {
                  id: 'topic-12-3',
                  title: 'LLM Monitoring',
                  description: 'Métricas específicas de LLM',
                  subtopics: [
                    'Token usage y costos',
                    'Latencia (p50, p95, p99)',
                    'Calidad de respuestas',
                    'Detección de drift'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: [],
                  status: 'not_started',
                },
                {
                  id: 'topic-12-4',
                  title: 'Herramientas de Observabilidad',
                  description: 'LangSmith, Langfuse, Prometheus',
                  subtopics: [
                    'LangSmith',
                    'Langfuse (open source)',
                    'Prometheus + Grafana',
                    'Helicone'
                  ],
                  estimatedHours: 6,
                  difficulty: 'intermediate',
                  dependencies: ['topic-12-3'],
                  status: 'not_started',
                  resources: [
                    { title: 'AWS ML Specialty', url: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/' },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-13',
      title: 'Diseño de Sistemas de IA',
      description: 'Diseñar sistemas de IA a escala para entrevistas y productos reales',
      estimatedWeeks: 4,
      level: 'specialization',
      modules: [
        {
          id: 'mod-13-1',
          title: 'System Design para IA',
          description: 'Arquitectura, caching, async y costos',
          badge: { label: 'Fase 13', color: 'coral' },
          submodules: [
            {
              id: 'sub-13-1-1',
              title: 'Patrones de Diseño',
              description: 'Arquitecturas clásicas de sistemas IA',
              topics: [
                {
                  id: 'topic-13-1',
                  title: 'Framework de Diseño',
                  description: 'Cómo abordar cualquier diseño de sistema IA',
                  subtopics: [
                    'Aclarar requisitos',
                    'Identificar componentes de IA',
                    'Selección de modelo',
                    'Escalabilidad y costos'
                  ],
                  estimatedHours: 4,
                  difficulty: 'advanced',
                  dependencies: ['topic-7-1'],
                  status: 'not_started',
                },
                {
                  id: 'topic-13-2',
                  title: 'Estrategias de Caching',
                  description: 'Exact, semantic y template caching',
                  subtopics: [
                    'SHA-256 hash caching',
                    'Semantic caching con embeddings',
                    'Template caching',
                    'Redis para caching'
                  ],
                  estimatedHours: 4,
                  difficulty: 'advanced',
                  dependencies: ['topic-13-1'],
                  status: 'not_started',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-14',
      title: 'SQL y Bases de Datos para IA',
      description: 'Consultar datos y diseñar bases de datos que soporten sistemas de IA',
      estimatedWeeks: 3,
      level: 'intermediate',
      modules: [
        {
          id: 'mod-14-1',
          title: 'SQL para IA',
          description: 'PostgreSQL, pgvector, Redis, MongoDB',
          badge: { label: 'Fase 14', color: 'teal' },
          submodules: [
            {
              id: 'sub-14-1-1',
              title: 'SQL Avanzado',
              description: 'CTEs, window functions, pgvector',
              topics: [
                {
                  id: 'topic-14-1',
                  title: 'SQL para ML',
                  description: 'Consultas específicas para IA',
                  subtopics: [
                    'CTEs y window functions',
                    'Columnas JSON',
                    'pgvector: operadores de distancia',
                    'Índices HNSW'
                  ],
                  estimatedHours: 6,
                  difficulty: 'intermediate',
                  dependencies: [],
                  status: 'not_started',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-15',
      title: 'Cuantización y Optimización',
      description: 'Ejecutar modelos eficientemente a escala',
      estimatedWeeks: 3,
      level: 'specialization',
      modules: [
        {
          id: 'mod-15-1',
          title: 'Eficiencia de Modelos',
          description: 'Cuantización, vLLM, SLMs',
          badge: { label: 'Fase 15', color: 'coral' },
          submodules: [
            {
              id: 'sub-15-1-1',
              title: 'Cuantización',
              description: 'Reducir tamaño y mejorar velocidad',
              topics: [
                {
                  id: 'topic-15-1',
                  title: 'Técnicas de Cuantización',
                  description: 'INT8, INT4, GPTQ, AWQ',
                  subtopics: [
                    'FP32 → FP16 → INT8 → INT4',
                    'GPTQ y AWQ',
                    'GGUF para llama.cpp',
                    'bitsandbytes'
                  ],
                  estimatedHours: 6,
                  difficulty: 'advanced',
                  dependencies: ['topic-5-4'],
                  status: 'not_started',
                },
                {
                  id: 'topic-15-2',
                  title: 'Inference Optimization',
                  description: 'vLLM, TGI, Flash Attention',
                  subtopics: [
                    'KV Cache',
                    'Continuous batching (vLLM)',
                    'Speculative decoding',
                    'Flash Attention v2'
                  ],
                  estimatedHours: 6,
                  difficulty: 'expert',
                  dependencies: ['topic-15-1'],
                  status: 'not_started',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-16',
      title: 'Reinforcement Learning',
      description: 'Comprender RL para RLHF, PPO y entrenamiento de agentes',
      estimatedWeeks: 4,
      level: 'specialization',
      modules: [
        {
          id: 'mod-16-1',
          title: 'RL para LLMs',
          description: 'RLHF, PPO, DPO, reward models',
          badge: { label: 'Fase 16', color: 'coral' },
          submodules: [
            {
              id: 'sub-16-1-1',
              title: 'Fundamentos de RL',
              description: 'MDP, Q-learning, policy gradients',
              topics: [
                {
                  id: 'topic-16-1',
                  title: 'Fundamentos RL',
                  description: 'Bases del aprendizaje por refuerzo',
                  subtopics: [
                    'MDP: estado, acción, recompensa',
                    'Q-learning',
                    'Policy gradients',
                    'PPO (usado en RLHF)'
                  ],
                  estimatedHours: 8,
                  difficulty: 'advanced',
                  dependencies: ['topic-2-8'],
                  status: 'not_started',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'phase-17',
      title: 'Ética, Seguridad y Gobernanza',
      description: 'Construir IA de manera responsable - cada vez más un requisito laboral',
      estimatedWeeks: 2,
      level: 'specialization',
      modules: [
        {
          id: 'mod-17-1',
          title: 'IA Responsable',
          description: 'Seguridad, sesgo, privacidad y regulación',
          badge: { label: 'Fase 17', color: 'coral' },
          submodules: [
            {
              id: 'sub-17-1-1',
              title: 'Seguridad de IA',
              description: 'Prompt injection, moderación, privacidad',
              topics: [
                {
                  id: 'topic-17-1',
                  title: 'Seguridad LLM',
                  description: 'Proteger sistemas de IA',
                  subtopics: [
                    'Prompt injection defense',
                    'Content moderation',
                    'PII detection',
                    'Red teaming'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-6-6'],
                  status: 'not_started',
                },
                {
                  id: 'topic-17-2',
                  title: 'Bias y Fairness',
                  description: 'Detectar y mitigar sesgos',
                  subtopics: [
                    'Fuentes de sesgo',
                    'Métricas de fairness',
                    'Herramientas: Fairlearn',
                    'Mitigación'
                  ],
                  estimatedHours: 4,
                  difficulty: 'intermediate',
                  dependencies: ['topic-17-1'],
                  status: 'not_started',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'capstone',
      title: 'Capstone: Plataforma Multi-LLM',
      description: 'Construye tu sistema de IA de producción completo',
      estimatedWeeks: 8,
      level: 'projects',
      modules: [
        {
          id: 'mod-cap-1',
          title: 'Proyecto Final',
          description: 'Plataforma de IA multiinquilino de nivel de producción',
          badge: { label: 'Capstone', color: 'coral' },
          submodules: [
            {
              id: 'sub-cap-1-1',
              title: 'Componentes del Sistema',
              description: 'Gateway, router, RAG, agents, observability',
              topics: [
                {
                  id: 'topic-cap-1',
                  title: 'API Gateway',
                  description: 'Autenticación, rate limiting, routing',
                  subtopics: [
                    'Auth y API keys',
                    'Rate limiting por usuario',
                    'Request routing',
                    'Logging y metrics'
                  ],
                  estimatedHours: 12,
                  difficulty: 'expert',
                  dependencies: ['topic-7-1', 'topic-12-2'],
                  status: 'not_started',
                },
                {
                  id: 'topic-cap-2',
                  title: 'Multi-LLM Router',
                  description: 'Enrutamiento inteligente entre proveedores',
                  subtopics: [
                    'OpenAI, Claude, Gemini, Mistral',
                    'Smart routing',
                    'Fallback chains',
                    'Cost tracking'
                  ],
                  estimatedHours: 16,
                  difficulty: 'expert',
                  dependencies: ['topic-cap-1', 'topic-7-1'],
                  status: 'not_started',
                },
                {
                  id: 'topic-cap-3',
                  title: 'RAG Engine',
                  description: 'Sistema de recuperación multi-tenant',
                  subtopics: [
                    'Document ingestion',
                    'Multi-tenant isolation',
                    'Advanced retrieval',
                    'Evaluation dashboard'
                  ],
                  estimatedHours: 16,
                  difficulty: 'expert',
                  dependencies: ['topic-8-6', 'topic-cap-1'],
                  status: 'not_started',
                },
                {
                  id: 'topic-cap-4',
                  title: 'Observabilidad y Dashboard',
                  description: 'Monitoring completo del sistema',
                  subtopics: [
                    'Langfuse integration',
                    'Prometheus + Grafana',
                    'Cost analytics',
                    'Admin dashboard'
                  ],
                  estimatedHours: 12,
                  difficulty: 'expert',
                  dependencies: ['topic-12-4', 'topic-cap-2'],
                  status: 'not_started',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

// Helper functions
export function calculatePhaseProgress(phase: Phase, userProgress: Record<string, TopicStatus>): number {
  const topics = phase.modules.flatMap(m => m.submodules.flatMap(s => s.topics))
  if (topics.length === 0) return 0
  const completed = topics.filter(t => {
    const status = userProgress[t.id] || t.status
    return status === 'completed' || status === 'completed_with_doubts'
  }).length
  return Math.round((completed / topics.length) * 100)
}

export function calculateModuleProgress(module: Module, userProgress: Record<string, TopicStatus>): number {
  const topics = module.submodules.flatMap(s => s.topics)
  if (topics.length === 0) return 0
  const completed = topics.filter(t => {
    const status = userProgress[t.id] || t.status
    return status === 'completed' || status === 'completed_with_doubts'
  }).length
  return Math.round((completed / topics.length) * 100)
}

export function calculateTotalHours(phase: Phase): number {
  return phase.modules.reduce((acc, m) => 
    acc + m.submodules.reduce((acc2, s) => 
      acc2 + s.topics.reduce((acc3, t) => acc3 + t.estimatedHours, 0), 0), 0)
}

export function calculateCompletedHours(phase: Phase, userProgress: Record<string, TopicStatus>): number {
  return phase.modules.reduce((acc, m) => 
    acc + m.submodules.reduce((acc2, s) => 
      acc2 + s.topics.reduce((acc3, t) => {
        const status = userProgress[t.id] || t.status
        return acc3 + (status === 'completed' || status === 'completed_with_doubts' ? t.estimatedHours : 0)
      }, 0), 0), 0)
}

export function getTotalTopicsCount(): number {
  return roadmapData.phases.reduce((acc, phase) => 
    acc + phase.modules.reduce((acc2, m) => 
      acc2 + m.submodules.reduce((acc3, s) => acc3 + s.topics.length, 0), 0), 0)
}

export function getCompletedTopicsCount(userProgress: Record<string, TopicStatus>): number {
  return roadmapData.phases.reduce((acc, phase) => 
    acc + phase.modules.reduce((acc2, m) => 
      acc2 + m.submodules.reduce((acc3, s) => 
        acc3 + s.topics.filter(t => {
          const status = userProgress[t.id] || t.status
          return status === 'completed' || status === 'completed_with_doubts'
        }).length, 0), 0), 0)
}

export function getTotalHoursAll(): number {
  return roadmapData.phases.reduce((acc, phase) => acc + calculateTotalHours(phase), 0)
}

export function getCompletedHoursAll(userProgress: Record<string, TopicStatus>): number {
  return roadmapData.phases.reduce((acc, phase) => acc + calculateCompletedHours(phase, userProgress), 0)
}

export function getNextRecommendedTopic(userProgress: Record<string, TopicStatus>): Topic | null {
  for (const phase of roadmapData.phases) {
    for (const module of phase.modules) {
      for (const submodule of module.submodules) {
        for (const topic of submodule.topics) {
          const status = userProgress[topic.id] || topic.status
          if (status === 'not_started' || status === 'in_progress') {
            // Check if dependencies are met
            const depsCompleted = topic.dependencies.every(depId => {
              const depStatus = userProgress[depId]
              return depStatus === 'completed' || depStatus === 'completed_with_doubts'
            })
            if (depsCompleted || topic.dependencies.length === 0) {
              return topic
            }
          }
        }
      }
    }
  }
  return null
}

export function getLastCompletedTopic(userProgress: Record<string, TopicStatus>): Topic | null {
  let lastTopic: Topic | null = null
  for (const phase of roadmapData.phases) {
    for (const module of phase.modules) {
      for (const submodule of module.submodules) {
        for (const topic of submodule.topics) {
          const status = userProgress[topic.id] || topic.status
          if (status === 'completed' || status === 'completed_with_doubts') {
            lastTopic = topic
          }
        }
      }
    }
  }
  return lastTopic
}
