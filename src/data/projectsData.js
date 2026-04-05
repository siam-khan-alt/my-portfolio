export const projectsData = [
  {
    id: 1,
    title: "Flexify",
    tagline: "Smart Fitness Planning Platform",
    description: "A comprehensive fitness ecosystem built with Next.js 16 and TypeScript, connecting users with personalized AI workout plans and professional coaches.",
    imageUrl: "https://i.ibb.co.com/7J4zrVxG/image.png", 
    imageAlt: "Flexify fitness platform interface",
    
    fullDescription: "Flexify is a cutting-edge MERN stack application featuring a smart fitness planner. It uses Next.js (App Router) for high performance and SEO. The platform bridges the gap between fitness enthusiasts and professional coaches, offering AI-driven suggestions, real-time tracking, and a robust role-based dashboard system for Admins, Coaches, and Users.",
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS 4", "MongoDB", "Mongoose", "NextAuth.js", "Pusher", "Socket.io", "Chart.js"],
    githubLink: "https://github.com/dev-golamrabbi-222005-mern/FLEXIFY",
    liveLink: "https://flexify-my-fitness-planner.vercel.app/",
    
    keyFeatures: [
      "AI-powered personalized workout and nutrition suggestions.",
      "Real-time communication via Chat and Zoom integration for coach-user interaction.",
      "Comprehensive dashboards for Admin, Coach, and User roles.",
      "Gamified 28-day challenges with daily streak and consistency tracking.",
      "Secure payment integration via SSLCommerz for premium plans.",
    ],
    
    technicalLearnings: [
      "Implementing real-time data synchronization using Socket.io and Pusher.",
      "Advanced state management and form handling with React Hook Form and Zod.",
      "Designing complex role-based access control (RBAC) in a Next.js environment.",
    ],
    
    deploymentProcess: "Deployed on Vercel with optimized serverless functions and integrated MongoDB Atlas for scalable database management.",
    
    challenges: [
      "Synchronizing real-time video sessions and chat across different user roles.",
      "Building a dynamic workout generator logic that adapts to user BMI and goals.",
      "Managing complex data visualizations for progress tracking using Recharts and Chart.js.",
    ],
    
    futurePlans: [
      "Integrate real-time health monitoring via wearable devices (IoT).",
      "Develop an AI-driven virtual coaching assistant for live form correction.",
      "Expand the marketplace for fitness equipment and supplements.",
    ],
  },
  {
    id: 2,
    title: "Travel Ease",
    tagline: "High-Performance Vehicle Booking Ecosystem",
    description: "A sophisticated MERN stack travel management web app featuring multi-role dashboards and real-time booking analytics.",
    imageUrl: "https://i.ibb.co.com/RGPY1cQF/image.png",
    imageAlt: "Travel Ease vehicle booking application screenshot",
    
    fullDescription: "Travel Ease is a premium vehicle rental platform built with React 19 and Vite. It offers a seamless experience for travelers to book vehicles and for hosts to manage their fleet. The system includes an orchestrator (Admin) role to oversee quality and revenue through detailed analytics.",
    techStack: ["React 19", "Node.js", "Express.js", "MongoDB", "Firebase Admin SDK", "Stripe API", "TanStack Query v5", "Framer Motion"],
    githubLink: "https://github.com/siam-khan-alt/travel-ease-client.git",
    liveLink: "https://travel-ease-drab.vercel.app/",
    
    keyFeatures: [
      "Advanced filtering and dynamic date-blocking to prevent double bookings.",
      "Secure Stripe payment gateway integration for safe transactions.",
      "Multi-role dashboards: Admin (Orchestrator), Host (Provider), and User (Traveler).",
      "Real-time event-driven notifications for bookings and inquiries.",
      "Premium glassmorphism UI with persistent Dark/Light mode support.",
    ],
    
    technicalLearnings: [
      "Mastering server-side identity and RBAC using Firebase Admin SDK.",
      "Optimizing high-frequency data fetching with TanStack Query v5 caching.",
      "Integrating interactive calendar systems with complex date range logic.",
    ],
    
    deploymentProcess: "Client hosted on Netlify for global CDN delivery; Server API deployed on Vercel using serverless architecture.",
    
    challenges: [
      "Managing complex booking relationships and availability logic in MongoDB.",
      "Ensuring fluid UI transitions across nested dashboard layouts using Framer Motion.",
      "Implementing a secure, server-side verified payment flow with Stripe.",
    ],
    
    futurePlans: [
      "Add Google Maps/Leaflet integration for real-time vehicle location tracking.",
      "Develop a host-to-user direct messaging system for booking coordination.",
      "Implement an AI-based dynamic pricing model based on demand.",
    ],
  },
  {
    id: 3,
    title: "ClubSphere",
    tagline: "Membership & Event Management Platform",
    description: "A community-focused MERN application for discovering, joining, and managing local clubs and events.",
    imageUrl: "https://i.ibb.co.com/8gbYZFTj/image.png", 
    imageAlt: "ClubSphere platform interface",
    
    fullDescription: "ClubSphere is a comprehensive membership management portal that allows local communities (Tech, Photography, Sports) to thrive. It facilitates interaction between Club Managers and Members, while providing Admins with the tools to monitor platform growth and approve new clubs.",
    techStack: ["React 19", "MongoDB", "Express.js", "TanStack Query", "Stripe", "JWT", "Tailwind CSS", "Recharts"],
    githubLink: "https://github.com/siam-khan-alt/clubsphere-client", 
    liveLink: "https://clubsphere-client.vercel.app/", 
    
    keyFeatures: [
      "Role-Based Access Control for Admin, Club Manager, and Member roles.",
      "Secure membership fee collection via integrated Stripe payment system.",
      "Full CRUD operations for club profiles, event creation, and participant lists.",
      "Data visualization using Recharts for monitoring revenue and membership trends.",
      "Server-side search and category-based filtering for efficient club discovery.",
    ],
    
    technicalLearnings: [
      "Implementing JWT-based authentication and secure API communication.",
      "Building complex server-side search and filtering logic for large datasets.",
      "Managing participant registration workflows with status updates and payment logging.",
    ],
    
    deploymentProcess: "Automated continuous deployment (CI/CD) via GitHub and Netlify for the frontend, with MongoDB Atlas as the cloud database.",
    
    challenges: [
      "Balancing private route protection while maintaining a smooth user experience.",
      "Designing a flexible database schema to handle diverse club and event types.",
      "Ensuring real-time synchronization of membership status after successful payments.",
    ],
    
    futurePlans: [
      "Add an automated email notification system for upcoming event reminders.",
      "Develop a discussion forum or community wall for each individual club.",
      "Integrate digital membership cards with QR code verification for events.",
    ],
  },
];