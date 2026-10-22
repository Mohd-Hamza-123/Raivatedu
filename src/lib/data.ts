export const categories = [
  { name: "Development", icon: "💻", count: 42 },
  { name: "Design", icon: "🎨", count: 28 },
  { name: "Data Science", icon: "📊", count: 19 },
  { name: "Marketing", icon: "📈", count: 34 },
  { name: "Business", icon: "💼", count: 25 },
  { name: "Photography", icon: "📷", count: 15 },
];


export const courses = [
  {
    id: "1",
    slug: "full-stack-web-development",
    title: "Full-Stack Web Development",
    summary:
      "Build production-ready apps with React, Node.js, and PostgreSQL.",
    category: "Development",
    price: 14999,
    duration: "12 weeks",
    level: "Beginner",
    instructor: {
      name: "Ananya Sharma",
      role: "Ex-Google Engineer",
      bio: "Ananya has over 8 years of experience building scalable web applications. She loves breaking down complex topics into simple, digestible lessons.",
      initials: "AS",
    },
    syllabus: [
      {
        q: "Week 1-2: HTML, CSS & Tailwind",
        a: "Master the fundamentals of responsive web design using modern CSS and utility-first frameworks.",
      },
      {
        q: "Week 3-5: React Fundamentals",
        a: "Understand components, state, hooks, and routing to build dynamic user interfaces.",
      },
      {
        q: "Week 6-8: Node.js & Express",
        a: "Build robust REST APIs, handle authentication, and connect to databases.",
      },
      {
        q: "Week 9-12: Capstone Project",
        a: "Build a full-stack application from scratch and deploy it to production.",
      },
    ],
    reviews: [
      {
        name: "Rohit K.",
        rating: 5,
        text: "Ananya is an amazing teacher. The capstone project gave me a real portfolio piece.",
      },
      {
        name: "Priya M.",
        rating: 4,
        text: "Great content, but it moves fast. Make sure you have some basic JavaScript knowledge first.",
      },
    ],
  },
  {
    id: "2",
    slug: "ui-ux-design-bootcamp",
    title: "UI/UX Design Bootcamp",
    summary:
      "Master Figma, user research, and prototyping to land your first design role.",
    category: "Design",
    price: 11999,
    duration: "8 weeks",
    level: "Intermediate",
    instructor: {
      name: "Riya Kapoor",
      role: "Senior Product Designer",
      bio: "Riya has 7 years of experience designing digital products. She specializes in user-centered design, usability testing, and interactive prototypes.",
      initials: "RK",
    },
    syllabus: [
      {
        q: "Week 1-2: UI/UX Fundamentals",
        a: "Learn design principles, visual hierarchy, typography, color theory, and UX fundamentals.",
      },
      {
        q: "Week 3-4: User Research",
        a: "Conduct user interviews, create personas, map user journeys, and identify usability problems.",
      },
      {
        q: "Week 5-6: Figma & Prototyping",
        a: "Create wireframes, reusable components, interactive prototypes, and responsive layouts in Figma.",
      },
      {
        q: "Week 7-8: Portfolio Project",
        a: "Design a complete product experience and prepare a case study for your design portfolio.",
      },
    ],
    reviews: [
      {
        name: "Neha S.",
        rating: 5,
        text: "The Figma exercises helped me understand the complete design process.",
      },
      {
        name: "Arjun P.",
        rating: 4,
        text: "Useful practical lessons and a strong final portfolio project.",
      },
    ],
  },
  {
    id: "3",
    slug: "data-science-fundamentals",
    title: "Data Science Fundamentals",
    summary:
      "Learn Python, Pandas, and machine learning basics through real-world projects.",
    category: "Data Science",
    price: 16999,
    duration: "10 weeks",
    level: "Advanced",
    instructor: {
      name: "Dr. Vikram Mehta",
      role: "Senior Data Scientist",
      bio: "Vikram has 9 years of experience in analytics and machine learning. He enjoys turning complex datasets into practical business insights.",
      initials: "VM",
    },
    syllabus: [
      {
        q: "Week 1-2: Python for Data Science",
        a: "Review Python fundamentals, functions, data structures, NumPy, and notebook workflows.",
      },
      {
        q: "Week 3-4: Data Analysis with Pandas",
        a: "Clean, transform, explore, and visualize datasets to identify meaningful patterns.",
      },
      {
        q: "Week 5-7: Statistics & Machine Learning",
        a: "Explore probability, statistical analysis, regression, classification, and model evaluation.",
      },
      {
        q: "Week 8-10: Real-World Data Project",
        a: "Build an end-to-end data science project, evaluate your model, and present your findings.",
      },
    ],
    reviews: [
      {
        name: "Karan M.",
        rating: 5,
        text: "The projects helped me connect Python concepts with real data analysis.",
      },
      {
        name: "Sneha R.",
        rating: 4,
        text: "Good explanations of machine learning concepts. Some Python experience is helpful.",
      },
    ],
  },
  {
    id: "4",
    slug: "digital-marketing-masterclass",
    title: "Digital Marketing Masterclass",
    summary:
      "SEO, social media, and paid ads. Learn how to drive real growth for brands.",
    category: "Marketing",
    price: 8999,
    duration: "6 weeks",
    level: "Beginner",
    instructor: {
      name: "Meera Joshi",
      role: "Digital Marketing Strategist",
      bio: "Meera has 6 years of experience growing online brands. Her expertise includes SEO, content strategy, campaign analytics, and paid advertising.",
      initials: "MJ",
    },
    syllabus: [
      {
        q: "Week 1: Digital Marketing Basics",
        a: "Understand digital marketing channels, customer journeys, audience research, and campaign goals.",
      },
      {
        q: "Week 2-3: SEO & Content Marketing",
        a: "Learn keyword research, on-page SEO, content planning, and organic traffic optimization.",
      },
      {
        q: "Week 4-5: Social Media & Paid Ads",
        a: "Plan social media campaigns and understand paid advertising, targeting, and budget allocation.",
      },
      {
        q: "Week 6: Analytics & Campaign Project",
        a: "Measure campaign performance, interpret marketing metrics, and build a practical campaign plan.",
      },
    ],
    reviews: [
      {
        name: "Aman T.",
        rating: 5,
        text: "A practical introduction to SEO and digital marketing campaigns.",
      },
      {
        name: "Pooja G.",
        rating: 4,
        text: "The campaign exercises made marketing analytics easier to understand.",
      },
    ],
  },
  {
    id: "5",
    slug: "react-native-mobile-apps",
    title: "React Native Mobile Apps",
    summary:
      "Build iOS and Android apps from scratch using React Native and Expo.",
    category: "Development",
    price: 12999,
    duration: "8 weeks",
    level: "Intermediate",
    instructor: {
      name: "Rahul Verma",
      role: "Mobile Application Engineer",
      bio: "Rahul has 7 years of experience building cross-platform mobile applications. He focuses on React Native, Expo, app architecture, and performance optimization.",
      initials: "RV",
    },
    syllabus: [
      {
        q: "Week 1-2: React Native & Expo Basics",
        a: "Set up your development environment and build mobile interfaces using components, styles, and layouts.",
      },
      {
        q: "Week 3-4: Navigation & State Management",
        a: "Implement screen navigation, reusable components, forms, and application state.",
      },
      {
        q: "Week 5-6: APIs & Device Features",
        a: "Connect to REST APIs and integrate device capabilities, persistent storage, and authentication.",
      },
      {
        q: "Week 7-8: Mobile App Project",
        a: "Build, test, and prepare a cross-platform mobile app for deployment.",
      },
    ],
    reviews: [
      {
        name: "Dev S.",
        rating: 5,
        text: "The Expo workflow made mobile development approachable and enjoyable.",
      },
      {
        name: "Ishita B.",
        rating: 4,
        text: "Good hands-on content with useful API integration examples.",
      },
    ],
  },
  {
    id: "6",
    slug: "product-management-essentials",
    title: "Product Management Essentials",
    summary:
      "Learn how to roadmap, launch, and scale products like a Silicon Valley PM.",
    category: "Business",
    price: 13999,
    duration: "10 weeks",
    level: "Advanced",
    instructor: {
      name: "Karan Malhotra",
      role: "Senior Product Manager",
      bio: "Karan has 10 years of experience working with product and engineering teams. He specializes in product strategy, roadmaps, prioritization, and product analytics.",
      initials: "KM",
    },
    syllabus: [
      {
        q: "Week 1-2: Product Management Foundations",
        a: "Understand product discovery, product lifecycles, stakeholder management, and the product manager's role.",
      },
      {
        q: "Week 3-4: User Research & Product Strategy",
        a: "Identify customer problems, analyze competitors, define product vision, and validate ideas.",
      },
      {
        q: "Week 5-7: Roadmaps & Execution",
        a: "Prioritize features, write product requirements, define success metrics, and collaborate with engineering teams.",
      },
      {
        q: "Week 8-10: Launch & Product Analytics",
        a: "Plan a product launch, analyze performance metrics, and present a product strategy case study.",
      },
    ],
    reviews: [
      {
        name: "Nikhil D.",
        rating: 5,
        text: "The product case studies helped me understand prioritization and roadmap planning.",
      },
      {
        name: "Simran A.",
        rating: 4,
        text: "A useful overview of product strategy, execution, and analytics.",
      },
    ],
  },
];

export const mentors = [
  { name: "Ananya Sharma", role: "Ex-Google Engineer", subject: "Full-Stack Dev", initials: "AS" },
  { name: "Rahul Verma", role: "Lead Product Designer", subject: "UI/UX Design", initials: "RV" },
  { name: "Dr. Priya Patel", role: "Data Scientist", subject: "Machine Learning", initials: "PP" },
  { name: "Karan Singh", role: "Growth Marketer", subject: "Digital Marketing", initials: "KS" },
];

export const testimonials = [
  {
    name: "Rohit K.",
    role: "Frontend Developer at Zomato",
    text: "The Full-Stack course completely changed my career trajectory. The mentors were incredibly supportive, and the real-world projects gave me a portfolio that actually got me interviews.",
    initials: "RK"
  },
  {
    name: "Sneha M.",
    role: "UI/UX Designer at Swiggy",
    text: "I loved the practical approach. Instead of just watching videos, we were designing from day one. The feedback from industry mentors was the highlight.",
    initials: "SM"
  },
  {
    name: "Amit P.",
    role: "Data Analyst at TCS",
    text: "The Data Science program is intense but worth it. The placement team helped me polish my resume and prep for interviews. I landed a role within a month of graduating.",
    initials: "AP"
  },
];

export const faqs = [
  {
    q: "Do I need prior coding experience to join?",
    a: "For beginner courses, no experience is needed. We start from the absolute basics. For advanced courses, we list the prerequisites on the course detail page."
  },
  {
    q: "Are the courses live or recorded?",
    a: "Most courses combine both. You get access to high-quality recorded lectures to learn at your own pace, plus weekly live doubt-clearing sessions with mentors."
  },
  {
    q: "Will I get a certificate upon completion?",
    a: "Yes, every course comes with a verified digital certificate that you can share on LinkedIn and add to your resume."
  },
  {
    q: "Do you offer placement assistance?",
    a: "Yes, our career programs include resume reviews, mock interviews, and direct connections to our hiring partner network."
  }
];