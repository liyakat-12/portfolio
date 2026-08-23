export const profile = {
  name: 'Liyakat Hussain',
  role: 'Data Science & Machine Learning',
  location: 'Srinagar, Jammu & Kashmir, India',
  phone: '+91 7889448874',
  email: 'liyakatakhoon@gmail.com',
  linkedin: 'https://www.linkedin.com/in/liyakathussain12/',
  github: 'https://github.com/liyakat-12',
  resume: '/Liyakat-Hussain-Resume.pdf',
  tagline:
    'Final-year (8th semester) Computer Science Engineering student specializing in Data Science and Machine Learning, with hands-on experience building ML and deep learning models for real-world applications.',
  summary:
    'Data Scientist at Sabudh Foundation and final-year Computer Science Engineering student at IUST, Pulwama. Skilled in data preprocessing, exploratory data analysis, SQL and machine learning algorithms with hands-on experience in deep learning, computer vision and RAG-based applications. Active in student council and campus recruitment coordination.',
}

export const stats = [
  { value: '99.97%', label: 'Best model accuracy' },
  { value: '140K+', label: 'Images trained on' },
  { value: '13', label: 'Experiments run' },
  { value: '5+', label: 'Major projects' },
]

export const experiences = [
  {
    role: 'Data Scientist',
    company: 'Sabudh Foundation',
    period: 'Jul 2025 – Present',
    current: true,
    points: [
      'Built and optimized Machine Learning, Deep Learning and Computer Vision models using Python, Scikit-learn, TensorFlow and PyTorch for real-world applications.',
      'Performed data preprocessing, feature engineering and exploratory data analysis, then documented experiments and presented technical findings to the team.',
    ],
  },
  {
    role: 'Python & Data Science Intern',
    company: 'Neuron Internship Program',
    period: 'Jan 2025 – Feb 2025',
    current: false,
    points: [
      'Analyzed datasets using Python, NumPy, Pandas, Matplotlib and Scikit-learn to support data-driven decision making.',
      'Implemented machine learning algorithms and gained hands-on experience in predictive modeling.',
    ],
  },
  {
    role: 'AI/ML Intern',
    company: 'InternPe',
    period: 'Dec 2024',
    current: false,
    points: [
      'Completed a focused AI/ML internship building and evaluating machine learning models on practical datasets.',
      'Strengthened skills in data handling, model training and performance evaluation.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Cognifyz Technologies',
    period: 'Jul 2024 – Aug 2024',
    current: false,
    points: [
      'Built and styled responsive web pages with hands-on front-end development experience.',
      'Collaborated with the team to deliver tasks and improve development workflow.',
    ],
  },
]

export const projects = [
  {
    title: 'Deepfake Image Detection',
    subtitle: 'Machine Learning & Deep Learning',
    highlight: '99.97% test accuracy',
    description:
      'A multi-method deepfake detection framework running 13 experiments across 5 model families including SVM, MLP, ResNet50, InceptionV3, EfficientNet-B0 and Vision Transformer (ViT-B16).',
    points: [
      'Applied handcrafted feature extraction (LBP, GLCM, FFT) combined with transfer learning.',
      'Trained on 140,000+ facial images, achieving 99.97% test accuracy with EfficientNet-B0.',
    ],
    tags: ['EfficientNet-B0', 'ViT', 'ResNet50', 'Transfer Learning', 'OpenCV'],
    accent: 'from-teal-500/15 to-teal-700/10',
  },
  {
    title: 'Pothole Detection System',
    subtitle: 'YOLO Object Detection & Stereo Vision',
    highlight: 'Real-time road safety',
    description:
      'A real-time pothole detection system built on the YOLO object detection model combined with stereo vision, designed for intelligent road safety and hazard mitigation.',
    points: [
      'Trained a YOLO model for fast, accurate pothole detection from live road imagery.',
      'Fused stereo-vision depth estimation with GPS localization and driver alerts for real-time hazard notification.',
    ],
    tags: ['YOLO', 'Deep Learning', 'Stereo Vision', 'Object Detection', 'GPS', 'OpenCV'],
    accent: 'from-teal-600/15 to-cyan-700/10',
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
    tags: ['MySQL', 'Database Design', 'Normalization', 'ER Modeling'],
    accent: 'from-slate-500/15 to-teal-600/10',
  },
  {
    title: 'Movie Recommendation System',
    subtitle: 'Content-Based Filtering',
    highlight: 'Personalized results',
    description:
      'A content-based recommendation system using cosine similarity and feature vectorization on processed movie metadata.',
    points: [
      'Generated personalized movie recommendations from processed metadata.',
      'Implemented feature vectorization and similarity scoring for relevance.',
    ],
    tags: ['Python', 'Cosine Similarity', 'NLP', 'Scikit-learn'],
    accent: 'from-teal-500/10 to-slate-600/10',
  },
  {
    title: 'RAG Document Chatbot',
    subtitle: 'Retrieval-Augmented Generation (RAG)',
    highlight: 'PDF Q&A with citations',
    description:
      'A RAG-based document chatbot built with Python, FastAPI, LangChain, OpenAI API and Streamlit for intelligent PDF-based question answering.',
    points: [
      'Developed document ingestion, text chunking, vector embeddings and semantic retrieval for accurate context-aware search.',
      'Implemented LLM-powered responses with source citations using Retrieval-Augmented Generation (RAG).',
    ],
    tags: ['Python', 'FastAPI', 'LangChain', 'OpenAI API', 'Streamlit', 'RAG'],
    accent: 'from-violet-500/15 to-teal-700/10',
  },
]

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Python', 'C', 'C++', 'SQL'],
  },
  {
    category: 'Machine Learning',
    items: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Scikit-learn',
      'Feature Engineering',
      'Model Evaluation',
    ],
  },
  {
    category: 'Deep Learning',
    items: [
      'CNN',
      'Transfer Learning',
      'EfficientNet-B0',
      'ResNet50',
      'InceptionV3',
      'TensorFlow',
      'PyTorch',
      'Vision Transformer (ViT)',
    ],
  },
  {
    category: 'Natural Language Processing',
    items: ['Text Preprocessing', 'Tokenization', 'TF-IDF', 'Word Embeddings'],
  },
  {
    category: 'Computer Vision',
    items: ['OpenCV', 'Image Classification', 'Object Detection', 'LBP', 'GLCM', 'FFT'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'SQL', 'Database Design', 'Normalization', 'ER Modeling', 'MongoDB'],
  },
  {
    category: 'Libraries',
    items: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'OpenCV', 'Scikit-learn'],
  },
  {
    category: 'Tools & Frameworks',
    items: ['Git', 'GitHub', 'FastAPI', 'LangChain', 'Streamlit', 'Jupyter Notebook', 'Google Colab', 'Kaggle', 'Excel'],
  },
]

export const topSkills = ['SQL', 'Deep Learning', 'Machine Learning Algorithms']

export const certifications = [
  {
    title: 'Machine Learning A-Z: AI, Python & R + ChatGPT Prize [2026]',
    issuer: 'Udemy',
    image: '/certificates/udemy-ml-az.jpg',
    issued: 'Feb 2026',
    expires: 'Dec 2036',
    credentialId: 'UC-fe14b3df-a889-4f8d-b469-98035aa2524b',
    skills: ['Machine Learning Algorithms', 'Supervised Learning', 'Model Evaluation'],
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
  'Campus Recruitment Coordinator, IUST',
  'Student Council Member, IUST',
  'Co-Organizer, Bit Byte 2025',
  'Participant, Tech Summit 2025',
  'Participant, People10 Hackathon',
]

export const education = {
  institution: 'Islamic University of Science & Technology (IUST), Pulwama',
  degree: 'Bachelor of Technology in Computer Science Engineering',
  period: 'Aug 2022 – Jul 2026',
  cgpa: '7.8 / 10',
}
