export const projectsData = {
  goodkart: {
    id: "goodkart",
    title: "Goodkart",
    tagline: "Multi-vendor B2B & B2C E-commerce Platform",
    category: "Full Stack",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "Firebase Firestore", "JWT", "Razorpay", "Cloudinary", "Shiprocket", "PDFKit", "Google Gemini API"],
    image: "/goodkart project screenshot.png",
    liveDemo: null,
    github: null,
    
    overview: {
      what: "Goodkart is a comprehensive multi-vendor e-commerce platform that supports both B2B (Business-to-Business) and B2C (Business-to-Consumer) transactions. The platform enables multiple vendors to sell their products while providing a seamless shopping experience for both individual customers and business clients.",
      why: "Built to address the growing need for a unified platform that can handle both retail and wholesale operations, allowing businesses to expand their reach while maintaining separate workflows for different customer types.",
      who: "Designed for multi-vendor marketplaces, retail businesses, wholesalers, and entrepreneurs looking to establish an online presence with support for both individual and bulk purchases."
    },
    
    features: [
      {
        icon: "🛒",
        title: "Multi-vendor Support",
        description: "Complete vendor management system with individual dashboards, product listings, and order management"
      },
      {
        icon: "🔐",
        title: "Authentication & Authorization",
        description: "Secure JWT-based authentication with role-based access control for customers, vendors, and admins"
      },
      {
        icon: "📦",
        title: "Complete Purchase Flow",
        description: "End-to-end shopping experience from product browsing to checkout, payment, and order tracking"
      },
      {
        icon: "💳",
        title: "Payment Integration",
        description: "Integrated Razorpay payment gateway supporting multiple payment methods including UPI, cards, and wallets"
      },
      {
        icon: "🚚",
        title: "Shipping & Logistics",
        description: "Shiprocket integration for automated shipping label generation and real-time tracking"
      },
      {
        icon: "📄",
        title: "Invoice Generation",
        description: "Automated PDF invoice generation using PDFKit for all completed orders"
      },
      {
        icon: "🤖",
        title: "AI-Powered Features",
        description: "Google Gemini API integration for product recommendations and customer support"
      },
      {
        icon: "📊",
        title: "Admin Dashboard",
        description: "Comprehensive admin panel for managing vendors, products, orders, and platform analytics"
      }
    ],
    
    screenshots: [
      { url: "/goodkart project screenshot.png", caption: "Goodkart Platform Interface" }
    ],
    
    video: "https://drive.google.com/file/d/1yG0GDbnoe30qPFME8Qo74mMR7S6ABTA0/view?usp=drive_link",
    
    technicalDetails: {
      frontend: {
        title: "Frontend Architecture",
        description: "Built with React and Vite for optimal performance and developer experience. Tailwind CSS provides a modern, responsive design system.",
        stack: ["React 18+", "Vite", "Tailwind CSS", "React Router", "Axios"]
      },
      backend: {
        title: "Backend Infrastructure",
        description: "Node.js with Express.js powers the REST API, handling authentication, business logic, and third-party integrations.",
        stack: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Middleware Architecture"]
      },
      database: {
        title: "Database & Storage",
        description: "Firebase Firestore provides real-time NoSQL database capabilities with Cloudinary handling media assets.",
        stack: ["Firebase Firestore", "Cloudinary (Image Storage)", "Real-time Data Sync"]
      },
      integrations: {
        title: "Third-Party Services",
        description: "Multiple service integrations for payments, shipping, AI features, and document generation.",
        stack: ["Razorpay (Payments)", "Shiprocket (Logistics)", "Google Gemini API (AI)", "PDFKit (Invoices)"]
      }
    },
    
    architecture: "The application follows a modern three-tier architecture: React frontend communicates with Express.js backend via REST APIs, which interfaces with Firebase Firestore for data persistence. Authentication is handled through JWT tokens, while file uploads are managed by Cloudinary. Payment processing flows through Razorpay, and shipping logistics are automated via Shiprocket integration. The system supports role-based access with separate interfaces for customers, vendors, and administrators.",
    
    challenges: [
      {
        problem: "Complex Multi-vendor Logic",
        solution: "Implemented a robust vendor management system with isolated product catalogs, order routing, and commission calculations. Each vendor has their own dashboard while maintaining platform-wide consistency."
      },
      {
        problem: "Payment & Order Synchronization",
        solution: "Developed a state machine for order processing that handles payment confirmations, inventory updates, and vendor notifications atomically to prevent data inconsistencies."
      },
      {
        problem: "Performance Optimization",
        solution: "Reduced API response time by ~35% through query optimization, implementing Redis caching for frequently accessed data, and lazy loading for product images."
      },
      {
        problem: "B2B vs B2C Workflows",
        solution: "Created separate checkout flows with bulk pricing, quote requests, and credit terms for B2B customers while maintaining a streamlined experience for B2C users."
      }
    ],
    
    learnings: [
      "Gained deep understanding of e-commerce workflows including inventory management, payment processing, and order fulfillment",
      "Learned to integrate multiple third-party services and handle their webhooks reliably",
      "Improved skills in state management for complex applications with multiple user roles",
      "Understood the importance of transaction handling and data consistency in financial applications"
    ],
    
    meta: {
      duration: "3 months (Feb 2026 - May 2026)",
      role: "SDE Intern - Frontend & Backend Developer",
      team: "4 members",
      company: "Madhwa Infotech (SS Infinite Group)",
      status: "Completed",
      year: "2026",
      responsibilities: "Developed complete consumer-facing pages from landing page to checkout, integrated payment and shipping APIs, optimized performance, and collaborated with team on backend modules"
    }
  },
  
  goodgide: {
    id: "goodgide",
    title: "Goodgide",
    tagline: "Expert Consultation Platform with Real-time Communication",
    category: "Full Stack",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Socket.IO", "Agora SDK", "Razorpay", "Firebase Auth", "JWT"],
    image: "/goodgide project screenshot.png",
    liveDemo: null,
    github: null,
    
    overview: {
      what: "Goodgide is a comprehensive consultation platform that connects users with domain experts across various fields. The platform facilitates real-time video consultations, chat messaging, appointment scheduling, and secure payment processing.",
      why: "Created to bridge the gap between people seeking expert advice and professionals offering consultation services. The platform makes expert knowledge accessible through seamless video calls and messaging.",
      who: "Designed for professionals offering consultation services (lawyers, doctors, business consultants, career counselors) and individuals seeking expert guidance in various domains."
    },
    
    features: [
      {
        icon: "👥",
        title: "Expert Profiles",
        description: "Comprehensive expert profiles with specializations, ratings, availability, and pricing information"
      },
      {
        icon: "📅",
        title: "Appointment Scheduling",
        description: "Smart booking system with calendar integration, time slot management, and automated reminders"
      },
      {
        icon: "🎥",
        title: "Video Consultations",
        description: "High-quality video calls powered by Agora SDK with screen sharing and recording capabilities"
      },
      {
        icon: "💬",
        title: "Real-time Chat",
        description: "Socket.IO-powered instant messaging for quick queries and follow-up discussions"
      },
      {
        icon: "💰",
        title: "Secure Payments",
        description: "Razorpay integration for consultation fees with support for multiple payment methods"
      },
      {
        icon: "🔒",
        title: "Authentication System",
        description: "Firebase Authentication combined with JWT for secure, scalable user management"
      },
      {
        icon: "⭐",
        title: "Rating & Reviews",
        description: "User feedback system to maintain service quality and help users choose the right expert"
      },
      {
        icon: "📊",
        title: "Analytics Dashboard",
        description: "Insights for experts on consultation history, earnings, and user engagement metrics"
      }
    ],
    
    screenshots: [
      { url: "/goodgide project screenshot.png", caption: "Goodgide Platform Interface" }
    ],
    
    video: "https://drive.google.com/file/d/1mBJVXgHOKPGM-_Gog1CdOhJ5ZSYlWy4o/view?usp=drive_link",
    
    technicalDetails: {
      frontend: {
        title: "Frontend Architecture",
        description: "Built with React and TypeScript for type-safe, maintainable code. Tailwind CSS ensures responsive design across devices.",
        stack: ["React 18+", "TypeScript", "Tailwind CSS", "React Router", "Socket.IO Client", "Agora React SDK"]
      },
      backend: {
        title: "Backend Infrastructure",
        description: "Node.js with Express.js handles API requests, WebSocket connections, and real-time communication orchestration.",
        stack: ["Node.js", "Express.js", "TypeScript", "Socket.IO Server", "REST APIs", "WebSocket"]
      },
      database: {
        title: "Database & ORM",
        description: "PostgreSQL provides robust relational data storage with Prisma ORM for type-safe database queries and migrations.",
        stack: ["PostgreSQL", "Prisma ORM", "Database Migrations", "Relational Schema Design"]
      },
      realtime: {
        title: "Real-time Communication",
        description: "Agora SDK powers video consultations while Socket.IO handles instant messaging and presence detection.",
        stack: ["Agora Video SDK", "Socket.IO", "WebRTC", "Real-time Events"]
      },
      auth: {
        title: "Authentication & Security",
        description: "Multi-layered security with Firebase Authentication for user management and JWT for API authorization.",
        stack: ["Firebase Authentication", "JWT Tokens", "Role-based Access Control", "Secure Sessions"]
      }
    },
    
    architecture: "The platform uses a modern full-stack architecture with React/TypeScript frontend and Node.js/Express backend. PostgreSQL with Prisma ORM manages relational data including user profiles, appointments, and transactions. Real-time features are split between Socket.IO for chat and Agora SDK for video calls. Firebase handles initial authentication, while JWT tokens secure API endpoints. Payment processing is handled through Razorpay webhooks integrated with the backend.",
    
    challenges: [
      {
        problem: "Real-time Communication Reliability",
        solution: "Implemented connection recovery mechanisms, message queuing for offline users, and fallback strategies when video quality degrades. Added heartbeat monitoring to detect and handle disconnections gracefully."
      },
      {
        problem: "Scheduling Conflicts",
        solution: "Built a robust booking system with optimistic locking to prevent double-bookings, timezone handling for international consultations, and automated conflict detection."
      },
      {
        problem: "Video Call Quality",
        solution: "Integrated Agora's adaptive bitrate streaming, implemented network quality indicators, and provided audio-only fallback for poor connections."
      },
      {
        problem: "Type Safety Across Stack",
        solution: "Used TypeScript on both frontend and backend with shared type definitions, Prisma for type-safe database queries, and comprehensive validation middleware."
      }
    ],
    
    learnings: [
      "Mastered real-time communication technologies including WebSocket, WebRTC, and video streaming protocols",
      "Gained experience with TypeScript for building large-scale, maintainable applications",
      "Learned PostgreSQL database design and optimization with Prisma ORM",
      "Understood the complexities of scheduling systems, timezone handling, and calendar integrations",
      "Improved skills in handling concurrent users and managing WebSocket connections at scale"
    ],
    
    meta: {
      duration: "3 months (Feb 2026 - May 2026)",
      role: "SDE Intern - Full Stack Developer",
      team: "4 members",
      company: "Madhwa Infotech (SS Infinite Group)",
      status: "Completed",
      year: "2026",
      responsibilities: "Developed complete user-facing pages including expert discovery, booking flow, video consultation interface, and chat system. Integrated real-time communication features and payment processing."
    }
  },
  
  "xbox-analytics": {
    id: "xbox-analytics",
    title: "Xbox Sales Analytics Real Time Dashboard",
    tagline: "Interactive Data Visualization for Gaming Industry Insights",
    category: "Data Analytics",
    tech: ["Power BI", "Data Analysis", "DAX", "Data Modeling", "Excel"],
    image: "/xbox projecct screenshot.jpeg",
    liveDemo: null,
    github: null,
    
    overview: {
      what: "An interactive Power BI dashboard analyzing Xbox sales data across multiple dimensions including regional performance, game categories, platform distribution, and temporal trends. The dashboard provides actionable insights for business decision-making.",
      why: "Created to demonstrate data analytics capabilities and provide meaningful insights from gaming industry data. The project showcases skills in data cleaning, modeling, visualization, and storytelling with data.",
      who: "Designed for business analysts, marketing teams, and executives in the gaming industry who need to understand sales patterns, identify growth opportunities, and make data-driven decisions."
    },
    
    features: [
      {
        icon: "📊",
        title: "Sales Performance Metrics",
        description: "Key metrics including total revenue, units sold, year-over-year growth, and market share analysis"
      },
      {
        icon: "🌍",
        title: "Regional Analysis",
        description: "Geographic breakdown of sales performance across North America, Europe, Asia, and other regions"
      },
      {
        icon: "🎮",
        title: "Game Category Insights",
        description: "Performance analysis by game genres, publishers, and platform exclusives"
      },
      {
        icon: "📈",
        title: "Trend Analysis",
        description: "Time-series visualizations showing seasonal patterns, launch impacts, and growth trajectories"
      },
      {
        icon: "🔍",
        title: "Interactive Filters",
        description: "Dynamic filtering by date range, region, game category, and platform for deep-dive analysis"
      },
      {
        icon: "💡",
        title: "Predictive Insights",
        description: "Trend forecasting and what-if analysis for strategic planning"
      }
    ],
    
    screenshots: [
      { url: "/xbox projecct screenshot.jpeg", caption: "Xbox Analytics Dashboard Overview" }
    ],
    
    technicalDetails: {
      tools: {
        title: "Analytics Tools",
        description: "Power BI Desktop for dashboard creation with DAX for complex calculations and data modeling.",
        stack: ["Power BI Desktop", "DAX (Data Analysis Expressions)", "Power Query", "Excel"]
      },
      dataProcessing: {
        title: "Data Processing",
        description: "ETL pipeline for cleaning, transforming, and loading sales data from multiple sources.",
        stack: ["Power Query M", "Data Cleaning", "Data Transformation", "Data Validation"]
      },
      visualization: {
        title: "Visualization Techniques",
        description: "Mix of charts, maps, and custom visuals to tell compelling data stories.",
        stack: ["Bar Charts", "Line Graphs", "Geographic Maps", "KPI Cards", "Slicers", "Custom Visuals"]
      }
    },
    
    architecture: "Data flows from raw Excel/CSV files through Power Query for cleaning and transformation. The data model uses star schema with fact tables for sales transactions and dimension tables for products, regions, and time periods. DAX measures calculate KPIs, growth rates, and aggregations. The dashboard layer presents insights through interactive visualizations with drill-through capabilities.",
    
    challenges: [
      {
        problem: "Data Quality Issues",
        solution: "Implemented comprehensive data cleaning pipeline to handle missing values, duplicates, and inconsistent formatting. Created validation rules to ensure data integrity."
      },
      {
        problem: "Performance with Large Datasets",
        solution: "Optimized data model by removing unnecessary columns, using appropriate data types, and creating aggregated tables for common queries. Reduced dashboard load time by 60%."
      },
      {
        problem: "Complex Calculations",
        solution: "Developed reusable DAX measures for year-over-year comparisons, moving averages, and market share calculations. Created calculation groups for time intelligence."
      }
    ],
    
    learnings: [
      "Mastered Power BI for creating professional, interactive dashboards",
      "Learned advanced DAX for complex business calculations and time intelligence",
      "Understood data modeling best practices including star schema design",
      "Gained experience in data storytelling and presenting insights to non-technical audiences",
      "Improved skills in identifying patterns and deriving actionable insights from data"
    ],
    
    meta: {
      duration: "1 month",
      role: "Data Analyst",
      team: "Solo Project",
      company: "Academic Project",
      status: "Completed",
      year: "2025"
    }
  },
  
  "os-gestures": {
    id: "os-gestures",
    title: "OS Navigation Using Hand Gestures",
    tagline: "Computer Vision System for Touchless OS Control",
    category: "Computer Vision",
    tech: ["Python", "OpenCV", "MediaPipe", "Machine Learning", "NumPy"],
    image: null,
    liveDemo: null,
    github: null,
    
    overview: {
      what: "A real-time hand gesture recognition system that enables touchless control of operating system functions. Using computer vision and machine learning, the system tracks hand movements and translates them into OS commands like mouse control, scrolling, and application switching.",
      why: "Developed to explore human-computer interaction alternatives and demonstrate computer vision capabilities. The project addresses accessibility needs and provides a foundation for touchless interfaces.",
      who: "Useful for accessibility applications, touchless kiosks, presentations, and anyone interested in alternative input methods for computers."
    },
    
    features: [
      {
        icon: "✋",
        title: "Real-time Hand Tracking",
        description: "MediaPipe-powered hand landmark detection with 21-point tracking at 30+ FPS"
      },
      {
        icon: "🖱️",
        title: "Mouse Control",
        description: "Gesture-based cursor movement, clicking, and dragging functionality"
      },
      {
        icon: "📜",
        title: "Scroll & Zoom",
        description: "Pinch gestures for zooming and swipe gestures for scrolling"
      },
      {
        icon: "🎯",
        title: "Custom Gestures",
        description: "Configurable gesture mapping for different OS commands and applications"
      },
      {
        icon: "🤖",
        title: "ML-based Recognition",
        description: "Machine learning classifier for accurate gesture identification"
      },
      {
        icon: "⚡",
        title: "Low Latency",
        description: "Optimized processing pipeline for minimal input lag"
      }
    ],
    
    screenshots: [],
    
    technicalDetails: {
      vision: {
        title: "Computer Vision Pipeline",
        description: "OpenCV captures webcam feed, MediaPipe detects hand landmarks, and custom algorithms interpret gestures.",
        stack: ["OpenCV", "MediaPipe Hands", "Image Processing", "Real-time Video Processing"]
      },
      ml: {
        title: "Machine Learning",
        description: "Trained classifier on gesture dataset for accurate recognition across different hand sizes and lighting conditions.",
        stack: ["Scikit-learn", "Feature Extraction", "Classification Algorithms", "Model Training"]
      },
      integration: {
        title: "OS Integration",
        description: "PyAutoGUI and platform-specific APIs translate recognized gestures into system commands.",
        stack: ["PyAutoGUI", "OS APIs", "Event Simulation", "System Control"]
      }
    },
    
    architecture: "The system operates in a pipeline: webcam input → OpenCV frame capture → MediaPipe hand detection → landmark extraction → feature calculation → ML classifier → gesture recognition → OS command mapping → system action execution. A separate calibration module adapts to different users and environments.",
    
    challenges: [
      {
        problem: "Lighting Variations",
        solution: "Implemented adaptive preprocessing with histogram equalization and automatic brightness adjustment. Added calibration step for different lighting conditions."
      },
      {
        problem: "False Positive Gestures",
        solution: "Introduced gesture confirmation logic requiring consistent detection over multiple frames. Added confidence thresholds and temporal smoothing."
      },
      {
        problem: "Performance Optimization",
        solution: "Reduced frame processing resolution, implemented frame skipping for non-critical operations, and optimized NumPy operations. Achieved 30+ FPS on standard hardware."
      }
    ],
    
    learnings: [
      "Gained hands-on experience with computer vision libraries and real-time video processing",
      "Learned MediaPipe framework for hand tracking and pose estimation",
      "Understood the challenges of building robust gesture recognition systems",
      "Improved Python programming skills and algorithm optimization techniques",
      "Learned to balance accuracy and performance in real-time applications"
    ],
    
    meta: {
      duration: "2 months",
      role: "Developer & Researcher",
      team: "Academic Team Project (4 members)",
      company: "BMSIT&M",
      status: "Completed",
      year: "2025"
    }
  },
  
  "library-management": {
    id: "library-management",
    title: "Library Management System",
    tagline: "Full-featured Digital Library Administration Platform",
    category: "Full Stack",
    tech: ["Python", "MySQL", "Flask", "Authentication", "REST APIs"],
    image: "/Library project screenshot.png",
    liveDemo: null,
    github: "https://github.com/Lokeshs-2005/Library_Management_System",
    
    overview: {
      what: "A comprehensive library management system with complete CRUD operations for books, members, and transactions. Features include book cataloging, member management, borrowing/returning workflows, fine calculation, and administrative reporting.",
      why: "Built to digitize library operations and demonstrate full-stack development skills with database design, backend APIs, and authentication systems.",
      who: "Designed for educational institutions, public libraries, and organizations managing book lending operations."
    },
    
    features: [
      {
        icon: "📚",
        title: "Book Management",
        description: "Complete catalog system with ISBN, author, category, availability tracking, and search functionality"
      },
      {
        icon: "👤",
        title: "Member Management",
        description: "User registration, profile management, borrowing history, and membership status tracking"
      },
      {
        icon: "🔄",
        title: "Transaction System",
        description: "Book issue and return workflows with due date tracking and automated notifications"
      },
      {
        icon: "💰",
        title: "Fine Calculation",
        description: "Automated late fee calculation based on overdue days with payment tracking"
      },
      {
        icon: "🔐",
        title: "Secure Authentication",
        description: "Role-based access control for librarians, staff, and members with password hashing"
      },
      {
        icon: "📊",
        title: "Reports & Analytics",
        description: "Generate reports on popular books, member activity, overdue items, and revenue"
      },
      {
        icon: "🔍",
        title: "Advanced Search",
        description: "Multi-criteria search by title, author, ISBN, category, and availability"
      },
      {
        icon: "📱",
        title: "REST API",
        description: "Well-documented APIs for potential mobile app or third-party integrations"
      }
    ],
    
    screenshots: [],
    
    technicalDetails: {
      backend: {
        title: "Backend Framework",
        description: "Flask provides lightweight, flexible web framework with RESTful API design.",
        stack: ["Python 3.x", "Flask", "Flask-SQLAlchemy", "Flask-Login", "REST APIs"]
      },
      database: {
        title: "Database Design",
        description: "MySQL with normalized schema for books, members, transactions, and fines. Includes indexes for performance.",
        stack: ["MySQL", "Relational Database Design", "SQL Queries", "Database Indexing"]
      },
      security: {
        title: "Security Features",
        description: "Password hashing, session management, CSRF protection, and SQL injection prevention.",
        stack: ["Werkzeug Security", "Session Management", "Input Validation", "Secure Password Storage"]
      }
    },
    
    architecture: "Three-tier architecture with Flask backend serving REST APIs, MySQL database for persistence, and potential for multiple frontend clients. The system uses SQLAlchemy ORM for database operations, Flask-Login for session management, and follows MVC pattern for code organization.",
    
    challenges: [
      {
        problem: "Complex Transaction Logic",
        solution: "Implemented database transactions to ensure atomicity when issuing/returning books. Added rollback mechanisms for failed operations to maintain data consistency."
      },
      {
        problem: "Concurrent Access",
        solution: "Used database locking mechanisms to prevent race conditions when multiple users try to borrow the same book simultaneously."
      },
      {
        problem: "Fine Calculation Accuracy",
        solution: "Developed robust date handling logic accounting for holidays, grace periods, and different membership types. Created automated daily jobs for fine updates."
      }
    ],
    
    learnings: [
      "Mastered relational database design with proper normalization and relationships",
      "Learned Flask framework for building scalable web applications",
      "Gained experience with authentication, authorization, and security best practices",
      "Understood the importance of transaction management in database operations",
      "Improved skills in API design and documentation"
    ],
    
    meta: {
      duration: "2 months",
      role: "Full Stack Developer & Team Lead",
      team: "Academic Team Project (6 members)",
      company: "BMSIT&M",
      status: "Completed",
      year: "2024"
    }
  },
  
  "sentiment-analysis": {
    id: "sentiment-analysis",
    title: "Sentiment Analysis of Product Reviews",
    tagline: "NLP-powered Customer Feedback Analysis System",
    category: "Machine Learning",
    tech: ["Python", "NLP", "Machine Learning", "Scikit-learn", "NLTK", "Pandas"],
    image: "/sentiment analysis project screenshots/main photo.png",
    liveDemo: null,
    github: "https://github.com/Lokeshs-2005/Product_Sentiment_Analysis",
    
    overview: {
      what: "A machine learning project that analyzes customer sentiment from product reviews using natural language processing. The system classifies reviews as positive, negative, or neutral and extracts key insights about product features and customer concerns.",
      why: "Developed to demonstrate NLP and machine learning capabilities while solving a real business problem. Helps companies understand customer feedback at scale and identify areas for improvement.",
      who: "Useful for e-commerce platforms, product managers, marketing teams, and businesses wanting to analyze customer feedback systematically."
    },
    
    features: [
      {
        icon: "🎯",
        title: "Sentiment Classification",
        description: "Accurate classification of reviews into positive, negative, or neutral categories"
      },
      {
        icon: "📝",
        title: "Text Preprocessing",
        description: "Comprehensive cleaning including tokenization, stopword removal, and lemmatization"
      },
      {
        icon: "🔤",
        title: "Feature Extraction",
        description: "TF-IDF and word embeddings for converting text to numerical features"
      },
      {
        icon: "🤖",
        title: "Multiple ML Models",
        description: "Comparison of Naive Bayes, SVM, Random Forest, and Logistic Regression"
      },
      {
        icon: "📊",
        title: "Performance Metrics",
        description: "Detailed evaluation with accuracy, precision, recall, F1-score, and confusion matrix"
      },
      {
        icon: "💡",
        title: "Insight Extraction",
        description: "Identify frequently mentioned features and common complaints/praises"
      },
      {
        icon: "📈",
        title: "Trend Analysis",
        description: "Track sentiment changes over time and identify emerging issues"
      },
      {
        icon: "🔍",
        title: "Aspect-based Analysis",
        description: "Sentiment analysis for specific product aspects like quality, price, delivery"
      }
    ],
    
    screenshots: [
      { url: "/sentiment analysis project screenshots/main photo.png", caption: "Sentiment Analysis Dashboard - Main Interface" },
      { url: "/sentiment analysis project screenshots/screenshot1.png", caption: "Model Performance Metrics and Evaluation" },
      { url: "/sentiment analysis project screenshots/screenshot2.png", caption: "Text Processing and Analysis Results" }
    ],
    
    video: null,
    
    technicalDetails: {
      nlp: {
        title: "Natural Language Processing",
        description: "NLTK and spaCy for text processing, tokenization, and linguistic analysis.",
        stack: ["NLTK", "spaCy", "Text Preprocessing", "Tokenization", "Lemmatization", "POS Tagging"]
      },
      ml: {
        title: "Machine Learning Pipeline",
        description: "Scikit-learn for model training, evaluation, and hyperparameter tuning.",
        stack: ["Scikit-learn", "Naive Bayes", "SVM", "Random Forest", "Logistic Regression", "Cross-validation"]
      },
      features: {
        title: "Feature Engineering",
        description: "TF-IDF vectorization, n-grams, and word embeddings for text representation.",
        stack: ["TF-IDF", "Word2Vec", "N-grams", "Feature Selection", "Dimensionality Reduction"]
      },
      data: {
        title: "Data Processing",
        description: "Pandas for data manipulation and analysis with visualization using Matplotlib and Seaborn.",
        stack: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Data Cleaning"]
      }
    },
    
    architecture: "The pipeline consists of: data collection → text preprocessing (cleaning, tokenization, stopword removal) → feature extraction (TF-IDF/embeddings) → model training → evaluation → prediction. The system supports batch processing for large datasets and real-time prediction for individual reviews.",
    
    challenges: [
      {
        problem: "Handling Sarcasm and Negation",
        solution: "Implemented negation handling by detecting negation words and inverting sentiment of following words. Added context window analysis for better sarcasm detection."
      },
      {
        problem: "Imbalanced Dataset",
        solution: "Used SMOTE for oversampling minority class, applied class weights in model training, and evaluated with appropriate metrics like F1-score instead of just accuracy."
      },
      {
        problem: "Domain-specific Language",
        solution: "Created custom stopword lists and domain-specific dictionaries. Fine-tuned preprocessing pipeline for product review language patterns."
      },
      {
        problem: "Model Performance",
        solution: "Experimented with multiple algorithms, performed hyperparameter tuning using GridSearchCV, and implemented ensemble methods. Achieved 87% accuracy on test set."
      }
    ],
    
    learnings: [
      "Gained practical experience with NLP techniques and text preprocessing",
      "Learned to train, evaluate, and compare multiple machine learning models",
      "Understood the challenges of working with unstructured text data",
      "Improved skills in feature engineering for text classification tasks",
      "Learned to handle imbalanced datasets and choose appropriate evaluation metrics",
      "Gained experience with Python data science libraries (NLTK, Scikit-learn, Pandas)"
    ],
    
    meta: {
      duration: "1.5 months",
      role: "ML Engineer & Data Scientist",
      team: "Academic Team Project (4 members)",
      company: "BMSIT&M",
      status: "Completed",
      year: "2025"
    }
  }
};

export const projectsList = [
  projectsData.goodkart,
  projectsData.goodgide,
  projectsData["os-gestures"],
  projectsData["library-management"],
  projectsData["xbox-analytics"],
  projectsData["sentiment-analysis"]
];
