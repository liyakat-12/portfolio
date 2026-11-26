
export const profile = {
  name: 'Liyakat Hussain',
  role: 'Machine Learning · Computer Vision · Generative AI',
  location: 'Bengaluru, India',
  phone: '+91 7889448874',
  email: 'liyakatakhoon@gmail.com',
  linkedin: 'https://www.linkedin.com/in/liyakathussain12/',
  github: 'https://github.com/liyakat-12',
  resume: '/Liyakat-Hussain-Resume.pdf',
  tagline:
    'B.Tech Computer Science Engineering graduate (2026) from IUST Kashmir with hands-on experience in Machine Learning, Deep Learning, Computer Vision and Generative AI.',
  summary:
    'B.Tech Computer Science Engineering graduate (2026) from IUST Kashmir with hands-on experience in Machine Learning, Deep Learning, Computer Vision and Generative AI. Skilled in integrating machine learning models into applications and building AI-powered solutions using Python, FastAPI, OpenAI API and Retrieval-Augmented Generation.',
}

export const stats = [
  { value: '99.97%', label: 'Best model accuracy' },
  { value: '140K+', label: 'Images trained on' },
  { value: '13', label: 'Experiments run' },
  { value: '5+', label: 'Major projects' },
]

export const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Sabudh Foundation',
    period: 'Jun 2025 – Jun 2026',
    current: false,
    points: [
      'Built and optimized Machine Learning, Deep Learning and Computer Vision models using Python, Scikit-learn, TensorFlow and PyTorch for real-world, industry-relevant applications.',
      'Performed data preprocessing, feature engineering and exploratory data analysis (EDA) across multiple projects; documented experiments and presented technical findings to the team.',
      'Collaborated with team members throughout the model development lifecycle, from data collection through model evaluation and reporting.',
    ],
  },
  {
    role: 'Python & Data Science Intern',
    company: 'Neuron Internship Program',
    period: 'Jan 2025 – Feb 2025',
    current: false,
    points: [
      'Analyzed datasets using Python, NumPy, Pandas, Matplotlib and Scikit-learn to support data-driven decision making.',
      'Implemented machine learning algorithms including regression, classification and predictive modeling with hands-on project experience.',
    ],
  },
]

export const projects = [
  {
    title: 'RAG Document Chatbot',
    subtitle: 'Retrieval-Augmented Generation (RAG)',
    highlight: 'Recall@4 89.1% · MRR 0.90',
    description:
      'A document-grounded chatbot that answers questions from uploaded PDFs using hybrid retrieval, reranking and LLM-generated responses with citations.',
    points: [
      'Built document ingestion, chunking, embeddings and hybrid retrieval using FAISS and BM25 with Reciprocal Rank Fusion (RRF).',
      'Added cross-encoder reranking and evaluated retrieval on 55 queries; Recall@4 improved from 78.9% to 89.1% and MRR from 0.77 to 0.90.',
    ],
    tags: ['Python', 'FastAPI', 'LangChain', 'FAISS', 'BM25', 'RAG'],
    github: 'https://github.com/liyakat-12/Rag-document-chatbot',
    accent: 'from-violet-500/15 to-teal-700/10',
  },
  {
    title: 'MediAssist — Medical RAG Assistant',
    subtitle: 'Healthcare Document Q&A · Retrieval-Augmented Generation',
    highlight: '1,000+ curated medical notes',
    description:
      'A medical information assistant that retrieves evidence from a curated knowledge base, provides cited answers and supports symptom-based triage.',
    points: [
      'Built a retrieval pipeline with MiniLM embeddings, ChromaDB, reranking and source citations.',
      'Added safety controls for emergency guidance, prescription/dosage requests and out-of-scope questions.',
    ],
    tags: ['Python', 'Streamlit', 'FastAPI', 'ChromaDB', 'MiniLM', 'RAG'],
    github:
      'https://github.com/liyakat-12/medical-diagnosis-assistant-llm-rag',
    demo: 'https://mediassist-web-sigma.vercel.app',
    api: 'https://mediassist-api-9yvb.onrender.com',
    accent: 'from-emerald-500/15 to-teal-700/10',
  },
  {
    title: 'Deepfake Image Detection',
    subtitle: 'Machine Learning & Deep Learning · Team Project',
    highlight: '99.97% reported test accuracy',
    description:
      'A multi-method deepfake detection framework evaluating classical machine learning and deep learning approaches on a balanced dataset of 140,000+ facial images.',
    points: [
      'Ran 13 experiments across methods including SVM, MLP, ResNet50, InceptionV3, EfficientNet-B0 and Vision Transformer (ViT-B16).',
      'Reported 99.97% test accuracy with EfficientNet-B0; applied handcrafted features including LBP, GLCM and FFT alongside transfer learning.',
    ],
    tags: [
      'EfficientNet-B0',
      'ViT',
      'ResNet50',
      'SVM',
      'OpenCV',
      'Transfer Learning',
    ],
    github:
      'https://github.com/SabudhFoundation/passion-project-deep-fake-identifiers',
    accent: 'from-teal-500/15 to-teal-700/10',
  },
  {
    title: 'Pothole Detection & Driver Alerting',
    subtitle: 'Computer Vision · Road Safety',
    highlight: 'YOLOv8n · RDD2022',
    description:
      'A road-damage detection system using YOLOv8n to identify potholes and support driver alerts with GPS-based hazard localization.',
    points: [
      'Trained and evaluated a YOLOv8n model on the RDD2022 Road Damage Dataset; reported 79.9% mAP@0.5, 84.3% precision and 78.9% recall.',
      'Integrated GPS tagging, hazard alerts and a web dashboard for viewing detected road hazards.',
    ],
    tags: ['Python', 'YOLOv8', 'OpenCV', 'Computer Vision', 'GPS'],
    github:
      'https://github.com/liyakat-12/pothole-detection-and-driver-alerting',
    demo:
      'https://pothole-detection-and-driver-alerting.onrender.com',
    accent: 'from-teal-600/15 to-cyan-700/10',
  },
  {
    title: 'Market Intelligence & Demand Forecasting',
    subtitle: 'Data Analytics · Forecasting · Decision Support',
    highlight: '63% better than seasonal-naive baseline',
    description:
      'A market intelligence platform combining data preparation, demand forecasting and market opportunity scoring to support product-market decisions.',
    points: [
      'Built a SQL-backed data workflow and data-quality pipeline across 12 markets and 600 product-market combinations.',
      'Evaluated weekly demand forecasts with MAE of 22.6 units/week, reported as 63% better than a seasonal-naive baseline.',
    ],
    tags: [
      'Python',
      'SQL',
      'Forecasting',
      'Data Quality',
      'Analytics',
    ],
    github:
      'https://github.com/liyakat-12/Market-Intelligence-Demand-Forecasting-Platform',
    accent: 'from-blue-500/15 to-indigo-700/10',
  },
  {
    title: 'Sales Performance Dashboard',
    subtitle: 'Power BI · DAX · Power Query',
    highlight: '15+ KPI visuals',
    description:
      'An interactive sales dashboard in Power BI that combines multiple Excel sources, cleans data in Power Query and models table relationships for business reporting.',
    points: [
      'Appended multiple Excel sources, cleaned data in Power Query and modelled table relationships.',
      'Wrote DAX measures (CALCULATE, SUMX, MTD/QTD/YTD) for revenue and profit KPIs across 15+ visuals with slicers and cross-filtering.',
    ],
    tags: ['Power BI', 'DAX', 'Power Query', 'Excel'],
    accent: 'from-amber-500/15 to-teal-700/10',
  },
  {
    title: 'FinanceHub',
    subtitle: 'Financial Services Database System',
    highlight: '15+ relational tables',
    description:
      'A relational banking database in MySQL covering customers, accounts, transactions, loans, credit cards and fraud alerts.',
    points: [
      'Designed 15+ interconnected tables with primary keys, foreign keys and normalization.',
      'Built SQL scripts for database creation and data management enforcing data integrity.',
    ],
    tags: [
      'MySQL',
      'Database Design',
      'Normalization',
      'ER Modeling',
    ],
    accent: 'from-slate-500/15 to-teal-600/10',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'SQL', 'C', 'C++'],
  },
  {
    category: 'Machine Learning',
    items: [
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'OpenCV',
      'NumPy',
      'Pandas',
      'XGBoost',
    ],
  },
  {
    category: 'Backend',
    items: ['FastAPI', 'Streamlit', 'LangChain', 'OpenAI API'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Analytics & BI',
    items: ['Power BI', 'DAX', 'Power Query', 'Excel'],
  },
]

export const spokenLanguages = [
  'English',
  'Hindi',
  'Kashmiri',
]

export const topSkills = [
  'Machine Learning',
  'Deep Learning',
  'Generative AI',
]

export const certifications = [
  {
    title: 'Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2026]',
    issuer: 'Udemy',
    image: '/certificates/udemy-ml-az.jpg',
    issued: 'Feb 2026',
    expires: 'Dec 2036',
    credentialId: 'UC-fe14b3df-a889-4f8d-b469-98035aa2524b',
    skills: [
      'Machine Learning Algorithms',
      'Supervised Learning',
      'Model Evaluation',
    ],
    description:
      'Comprehensive Machine Learning A-Z course covering AI fundamentals, data preprocessing, supervised and unsupervised learning, and model evaluation using Python and R with hands-on real-world projects.',
  },
  {
    title: 'Learn Microsoft Excel: From Zero to Hero',
    issuer: 'Udemy',
    image: '/certificates/udemy-excel.jpg',
    issued: 'Dec 2025',
    expires: 'Nov 2036',
    credentialId: 'UC-92940b5f-99d7-486a-ac90-83f18e910493',
    skills: ['Microsoft Excel', 'Data Analysis', 'Spreadsheets'],
    description:
      'Foundational Excel course covering spreadsheets, formulas, data organization, and basic data analysis for efficient data handling and productivity.',
  },
  {
    title: 'TECH SUMMIT 2025 — Coding Challenge',
    issuer: 'Islamic University of Science & Technology, Pulwama',
    image: '/certificates/tech-summit-2025.png',
    issued: 'Nov 2025',
    expires: 'Dec 2035',
    description:
      'Participated in the Tech Summit 2025 Coding Challenge organized by the Department of Computer Science & Engineering and Design and Innovation Centre, gaining experience in problem-solving, coding, and teamwork.',
  },
  {
    title: 'Mastering Python Pandas & NumPy for Absolute Beginners',
    issuer: 'Udemy',
    image: '/certificates/udemy-pandas-numpy.png',
    issued: 'Feb 2025',
    credentialId: 'UC-213df73d-0c32-4e65-b970-1abfff92e46b',
    skills: ['NumPy', 'Pandas'],
    description:
      'Hands-on training in Python data libraries for data manipulation, numerical computing, and preparing datasets for analysis and machine learning workflows.',
  },
  {
    title: 'Python Programming for the Total Beginners',
    issuer: 'Udemy',
    image: '/certificates/udemy-python-beginner.png',
    issued: 'Feb 2025',
    credentialId: 'UC-9a8ac274-9251-4a94-9f3c-14ce294661e5',
    skills: ['Python'],
    description:
      'Complete beginner-friendly Python programming course covering syntax, control flow, functions, and foundational programming concepts.',
  },
  {
    title: 'Introduction to Artificial Intelligence (2023)',
    issuer: 'LinkedIn Learning',
    image: '/certificates/linkedin-ai.png',
    issued: 'Jan 2025',
    credentialId: 'e9ccb9078715082968463703178710507957575835c96ab51cfd37fb7ef79957',
    skills: ['Artificial Intelligence'],
    description:
      'Introductory course on artificial intelligence concepts, applications, and the role of AI in modern technology and industry.',
  },
  {
    title: 'Java Training Complete Course for Java Beginners All in One',
    issuer: 'Udemy',
    image: '/certificates/udemy-java.png',
    issued: 'Jan 2025',
    credentialId: 'UC-68ce002e-c77c-4119-81b4-92d969e1e4b7',
    skills: ['Java'],
    description:
      'All-in-one Java training covering core language fundamentals, object-oriented programming, and practical coding exercises for beginners.',
  },
  {
    title: 'The Complete C Programming Course for Basic to Expert',
    issuer: 'Udemy',
    image: '/certificates/udemy-c.png',
    issued: 'Jan 2025',
    credentialId: 'UC-15ted36e-b4ad-4fc0-843e-04709097ce00',
    skills: ['C'],
    description:
      'Structured C programming course from basics through advanced topics including memory management, pointers, and problem-solving with C.',
  },
  {
    title: 'Robotics, Linux & Robot Operating System',
    issuer: 'RecimoTech Solutions · ROBONOX',
    image: '/certificates/recimotech-robotics.png',
    issued: 'Jan 2024',
    credentialId: 'T/24/0305',
    skills: ['Robotics', 'Linux', 'ROS'],
    description:
      'Robotics bootcamp covering robotics fundamentals, Linux environments, and the Robot Operating System (ROS) for building and controlling robotic systems.',
  },
]

export const achievements = [
  'Co-Organizer, Bit Byte 2025 (IUST)',
  'Campus Recruitment Coordinator, IUST',
  'Student Council Member, IUST',
  'Participant in Tech Summit (Organised by IUST)',
  'Participant in People10 Hackathons (Organised by People10 Technology)',
]

export const education = {
  institution: 'Islamic University of Science and Technology (IUST), Kashmir',
  degree: 'B.Tech, Computer Science Engineering',
  period: 'Aug 2022 – July 2026',
  cgpa: '8.01 / 10',
}
