export const projectsData = [
  {
    id: 1,
    title: "SkillSwap Hub",
    tagline: "Skill Sharing and Learning Platform",
    description: "A modern skill sharing platform built with Next.js (App Router) and NextAuth.js. Users can manage and share skills on protected routes.",
    imageUrl: "https://i.ibb.co.com/GQ3sSmWj/Screenshot-2025-12-05-100555.png",
    imageAlt: "SkillSwap Hub platform interface screenshot",
    
    fullDescription: "SkillSwap Hub is a full-stack MERN platform utilizing the Next.js App Router for server-side capabilities and enhanced performance. The platform allows authenticated users to share, browse, and manage their skills seamlessly. Key features include a robust authentication system using NextAuth.js and dynamic data fetching.",
    techStack: ["Next.js (App Router)", "NextAuth.js", "MongoDB", "Tailwind CSS", "Vercel"],
    githubLink: "https://github.com/siam-khan-alt/skill-swap-hub.git",
    liveLink: "https://skillswap-hub-nine.vercel.app/",
    
    keyFeatures: [
      "User Authentication (Google + Credentials) via NextAuth.js.",
      "Protected routes for skill management.",
      "Dynamic skill listing with search/filter functionality.",
      "Responsive and polished UI using Tailwind CSS.",
      "CRUD operations on MongoDB for skill data.",
    ],
    
    technicalLearnings: [
      "Mastering Next.js 14 App Router's server components and data fetching patterns.",
      "Implementing JWT session management and OAuth providers using NextAuth.js.",
      "Integrating MongoDB directly with Next.js API routes (now using Route Handlers).",
    ],
    
    deploymentProcess: "Deployed on Vercel, utilizing Vercel's Edge Functions for serverless API routes and seamless integration with the Next.js framework.",
    
    challenges: [
      "Integrating NextAuth.js with MongoDB for secure credential and OAuth management.",
      "Implementing server-side rendering (SSR) for initial data fetching while maintaining client-side interactivity.",
      "Managing complex form state and validation for the 'Add Skill' page.",
    ],
    
    futurePlans: [
      "Add real-time chat functionality between skill sharers and learners.",
      "Implement a rating and review system for skills and users.",
      "Integrate Stripe for payment processing for paid courses/skills.",
    ],
  },
  {
    id: 2,
    title: "Travel Ease",
    tagline: "Vehicle Booking & Travel Management Web App",
    description: "A Full Stack (MERN) vehicle booking application featuring Firebase Auth and smooth Framer Motion animations.",
    imageUrl: "https://i.ibb.co.com/pBFLYnYJ/travel-each-Screenshot-2025-12-05-100712.png",
    imageAlt: "Travel Ease vehicle booking application screenshot",
    
    fullDescription: "Travel Ease is a comprehensive MERN stack application focusing on vehicle rental and travel management. It features a separate client (React) and server (Node/Express) architecture. User authentication is handled securely by Firebase, and the UI provides a smooth, interactive experience using Framer Motion and Tailwind/DaisyUI.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Firebase Auth", "Framer Motion", "Tailwind CSS"],
    githubLink: "https://github.com/siam-khan-alt/travel-ease-client.git",
    liveLink: "https://monumental-licorice-6fb8c3.netlify.app",
    
    keyFeatures: [
      "Full CRUD functionality for vehicle listings and user bookings.",
      "Dark & Light theme toggle using Tailwind CSS and DaisyUI.",
      "User authentication via Firebase (Email/Password + Google).",
      "Interactive UI transitions managed by Framer Motion.",
      "Protected routes for managing personal bookings and listings.",
    ],
    
    technicalLearnings: [
      "Building and securing RESTful APIs using Node.js and Express.js.",
      "State management in React for handling complex vehicle data filtering.",
      "Implementing and managing user sessions and authentication logic using Firebase Hooks.",
    ],
    
    deploymentProcess: "Client hosted on Netlify for fast global CDN delivery. Server API hosted on Vercel for serverless function capabilities.",
    
    challenges: [
      "Successfully integrating Firebase authentication with a custom MERN backend API.",
      "Ensuring proper routing protection for all private user pages (My Bookings, Add Vehicle).",
      "Implementing a functional dark/light theme toggle that persists across sessions.",
    ],
    
    futurePlans: [
      "Add real-time map integration (Google Maps/Leaflet) to show vehicle locations.",
      "Implement booking date conflict validation on the server side.",
      "Introduce a user dashboard for managing profile and payment history.",
    ],
  },
  {
    id: 3,
    title: "Lotus Play Store",
    tagline: "Modern Game Discovery and Download Portal",
    description: "A gaming library built with React and Vite. Features Google/Email Auth, protected routes, and Framer Motion for smooth transitions.",
    imageUrl: "https://i.ibb.co.com/CsKmY5tH/Lotos-playstoree-Screenshot-2025-12-05-100836.png",
    imageAlt: "Lotus Play Store game library interface",
    
    fullDescription: "Lotus Play Store serves as a dynamic, front-end heavy gaming portal built on React and Vite. It focuses on providing a clean UI for game discovery, featuring category filtering, rating, and a profile management system secured by Firebase. Framer Motion is heavily used for the enhanced user experience.",
    techStack: ["React", "Vite", "Firebase Auth", "Framer Motion", "React Router", "Swiper", "Tailwind CSS"],
    githubLink: "https://github.com/siam-khan-alt/lotus-play-store.git",
    liveLink: "https://imaginative-cendol-d33611.netlify.app",
    
    keyFeatures: [
      "Email/Password & Google Sign-In via Firebase.",
      "Protected Game Details route requiring authentication.",
      "Advanced filtering and sorting of game catalogue.",
      "Dynamic banner slider using Swiper.js.",
      "Profile update functionality for logged-in users.",
    ],
    
    technicalLearnings: [
      "Implementing efficient global state management for filtering and sorting large datasets in React.",
      "Optimizing complex UI animations using Framer Motion for cross-browser compatibility.",
      "Securing client-side routes using custom Firebase authentication hooks and components.",
    ],
    
    deploymentProcess: "Hosted on Netlify for reliable continuous deployment and high-speed asset loading.",
    
    challenges: [
      "Managing complex global state for sorting and filtering the game catalogue.",
      "Optimizing the Swiper carousel and Framer Motion animations for high performance across devices.",
      "Implementing robust password validation during user registration.",
    ],
    
    futurePlans: [
      "Integrate a third-party gaming API (e.g., RAWG) for dynamic and up-to-date data.",
      "Develop a persistent wishlist/favourites feature for authenticated users.",
      "Create a user comments and social sharing system on game details pages.",
    ],
  },
];