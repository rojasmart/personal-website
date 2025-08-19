export interface FrontendProject {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  difficulty: "Newbie" | "Junior" | "Intermediate" | "Advanced" | "Guru";
  category?: "Frontend" | "Backend/Frontend" | "Styling" | "JavaScript" | "API Integration" | "Full Stack";
  demoUrl: string;
  repoUrl: string;
  challengeUrl: string;
  completed?: boolean;
}


export const FRONTEND_PROJECTS: FrontendProject[] = [
  {
    id: 1,
    title: "Hangman game",
    description: "Hangman game built with React and Chakra UI",
    image: "/og-images/frontend/hangman.jpg",
    tags: ["React", "Chakra UI", "React Router", "Grid"],
    difficulty: "Advanced",
    category: "Frontend",
    demoUrl: "https://hangman-game-taupe.vercel.app/",
    repoUrl: "https://github.com/rojasmart/hangman-game",
    challengeUrl: "https://www.frontendmentor.io/challenges/hangman-game-rsQiSVLGWn",
    completed: true
  },
  {
    id: 2,
    title: "Quizz App",
    description: "Interactive quiz app with multiple choice questions and score tracking",
    image: "/og-images/frontend/quizz.png",
    tags: ["React", "Chakra UI", "Redux", "Redux Persist"],
    difficulty: "Junior",
    category: "Frontend",
    demoUrl: "https://quizz-app-pearl-gamma.vercel.app/",
    repoUrl: "https://github.com/rojasmart/quizz-app",
    challengeUrl: "https://www.frontendmentor.io/challenges/frontend-quiz-app-BE7xkzXQnU",
    completed: true
  },
  {
    id: 3,
    title: "Newsletter Sign Up Form",
    description: "Form with real-time validation and success message",
    image: "/og-images/frontend/newsletter.png",
    tags: ["HTML", "CSS", "JavaScript", "Forms", "Validation"],
    difficulty: "Junior",
    category: "Frontend",
    demoUrl: "https://newsletter-sign-up-with-success-message-main-psi-ten.vercel.app/",
    repoUrl: "https://github.com/rojasmart/newsletter-sign-up-with-success-message-main?tab=readme-ov-file",
    challengeUrl: "https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv",
    completed: true
  },
  {
    id: 4,
    title: "Interactive Comments Section",
    description: "Interactive comments section with reply functionality and real-time updates",
    image: "/og-images/frontend/interactive-comments.png",
    tags: ["HTML", "CSS", "JavaScript", "API", "Fetch"],
    difficulty: "Intermediate",
    category: "JavaScript",
    demoUrl: "https://rojasmart.github.io/interactive-comments-section/",
    repoUrl: "https://github.com/rojasmart/interactive-comments-section",
    challengeUrl: "https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9",
    completed: true
  },
  {
    id: 5,
    title: "Job listings with Filtering",
    description: "Job listings page with filtering options and responsive design",
    image: "/og-images/frontend/joblisting.png",
    tags: ["HTML", "CSS", "JavaScript", "Date Validation"],
    difficulty: "Intermediate",
    category: "JavaScript",
    demoUrl: "https://job-listings-with-filtering-gold-phi.vercel.app/",
    repoUrl: "https://github.com/rojasmart/job-listings-with-filtering?tab=readme-ov-file",
    challengeUrl: "https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt",
    completed: true
  },
  {
    id: 6,
    title: "Dictionary Web App",
    description: "Dictionary web app with search functionality and lightbox for word details",
    image: "/og-images/frontend/dictionary.png",
    tags: ["HTML", "CSS", "JavaScript", "E-commerce", "Lightbox"],
    difficulty: "Intermediate",
    category: "API Integration",
    demoUrl: "https://dictionary-web-app-ebon.vercel.app/",
    repoUrl: "https://github.com/rojasmart/dictionary-web-app",
    challengeUrl: "https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL",
    completed: true
  },
  {
    id: 7,
    title: "Entertainment Web App",
    description: "Entertainment web app search movies, series and more with dropdown navigation",
    image: "/og-images/frontend/entertainment-app.png",
    tags: ["HTML", "CSS", "JavaScript", "Navigation", "Dropdown"],
    difficulty: "Advanced",
    category: "Full Stack",
    demoUrl: "https://entertainment-web-app-two-gamma.vercel.app/",
    repoUrl: "https://github.com/rojasmart/entertainment-web-app?tab=readme-ov-file",
    challengeUrl: "https://www.frontendmentor.io/challenges/entertainment-web-app-J-UhgAW1X",
    completed: true
  },
  {
    id: 8,
    title: "Kanban Task Management Web App",
    description: "A Kanban board for task management with drag & drop functionality",
    image: "/og-images/frontend/kanban.png",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage", "Drag & Drop"],
    difficulty: "Guru",
    category: "Full Stack",
    demoUrl: "https://kanban-task-management-web-app-1-cvto.onrender.com/",
    repoUrl: "https://github.com/rojasmart/kanban-task-management-web-app",
    challengeUrl: "https://www.frontendmentor.io/challenges/kanban-task-management-web-app-wgQLt-HlbB",
    completed: true
  },
  {
    id: 9,
    title: "Note Taking Web App",
    description: "A note taking web app with rich text editing and organization features",
    image: "/og-images/frontend/note-taking.png",
    tags: ["HTML", "CSS", "JavaScript", "API", "Search", "Filter"],
    difficulty: "Advanced",
    category: "Full Stack",
    demoUrl: "",
    repoUrl: "https://github.com/rojasmart/note-taking-app",
    challengeUrl: "https://www.frontendmentor.io/challenges/note-taking-web-app-773r7bUfOG",
    completed: false
  },
  {
    id: 10,
    title: "Time Tracking Web App",
    description: "A time tracking web app with rich text editing and organization features",
    image: "/og-images/frontend/timetrack.png",
    tags: ["HTML", "CSS", "JavaScript", "API", "Search", "Filter"],
    difficulty: "Junior",
    category: "JavaScript",
    demoUrl: "https://rojasmart.github.io/frontend-mentor-projects/time-tracking-dashboard-main/",
    repoUrl: "https://github.com/rojasmart/note-taking-app",
    challengeUrl: "https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw",
    completed: true
  },
  {
    id: 11,
    title: "Todo App",
    description: "A todo app with search and filter functionality",
    image: "/og-images/frontend/todo.png",
    tags: ["HTML", "CSS", "JavaScript", "API", "Search", "Filter"],
    difficulty: "Intermediate",
    category: "JavaScript",
    demoUrl: "https://todo-app-main-xi-mauve.vercel.app/",
    repoUrl: "https://github.com/rojasmart/frontend-mentor-projects/tree/main/todo-app-main",
    challengeUrl: "https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW",
    completed: true
  },
  {
    id: 12,
    title: "Interactive Card Details",
    description: "An interactive card details component with hover effects",
    image: "/og-images/frontend/interactive-card.png",
    tags: ["HTML", "CSS", "JavaScript", "API", "Search", "Filter"],
    difficulty: "Junior",
    category: "Frontend",
    demoUrl: "https://interactive-card-details-form-binary.netlify.app/",
    repoUrl: "https://github.com/rojasmart/frontend-mentor-projects/tree/main/interactive-card-details-form-main",
    challengeUrl: "https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw",
    completed: true
  },
  {
    id: 13,
    title: "Working Landing Page",
    description: "A landing page with responsive design and overlay effects",
    image: "/og-images/frontend/landingpage.png",
    tags: ["HTML", "CSS", "JavaScript", "API", "Search", "Filter"],
    difficulty: "Junior",
    category: "Styling",
    demoUrl: "https://rojasmart.github.io/frontend-mentor-projects/workit-landing-page/",
    repoUrl: "https://github.com/rojasmart/frontend-mentor-projects/tree/main/workit-landing-page",
    challengeUrl: "https://www.frontendmentor.io/challenges/workit-landing-page-2fYnyle5lu",
    completed: true
  },
  {
    id: 14,
    title: "Dine Restaurant Landing Page",
    description: "A restaurant landing page with responsive design and overlay effects",
    image: "/og-images/frontend/landingpage-dine.png",
    tags: ["HTML", "CSS", "JavaScript", "API", "Search", "Filter"],
    difficulty: "Intermediate",
    category: "Styling",
    demoUrl: "https://dine-restaurant-website-kohl.vercel.app/",
    repoUrl: "https://github.com/rojasmart/frontend-mentor-projects/tree/main/dine-restaurant-website",
    challengeUrl: "https://www.frontendmentor.io/challenges/dine-restaurant-website-yAt7Vvxt7",
    completed: true
  },
  {
    id: 15,
    title: "Notifications Page",
    description: "A notifications page with real-time updates and filtering options",
    image: "/og-images/frontend/notifications.png",
    tags: ["HTML", "CSS", "JavaScript", "API", "Search", "Filter"],
    difficulty: "Junior",
    category: "Frontend",
    demoUrl: "https://rojasmart.github.io/frontend-mentor-projects/notifications-page/",
    repoUrl: "https://github.com/rojasmart/frontend-mentor-projects/tree/main/notifications-page",
    challengeUrl: "https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC",
    completed: true
  },
  {
    id: 16,
    title: "Advice Generator App",
    description: "A advice generator app that generates random advice",
    image: "/og-images/frontend/advice-generator.png",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    difficulty: "Junior",
    category: "API Integration",
    demoUrl: "https://rojasmart.github.io/frontend-mentor-projects/advice-generator/",
    repoUrl: "https://github.com/rojasmart/frontend-mentor-projects/tree/main/advice-generator-app",
    challengeUrl: "https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db",
    completed: true
  },
  {
    id: 17,
    title: "Expenses Chart Component",
    description: "A expenses chart component that displays weekly expenses",
    image: "/og-images/frontend/chart-expenses.png",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    difficulty: "Junior",
    category: "JavaScript",
    demoUrl: "https://rojasmart.github.io/frontend-mentor-projects/expenses-chart-component/",
    repoUrl: "https://github.com/rojasmart/frontend-mentor-projects/tree/main/expenses-chart-component",
    challengeUrl: "https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db",
    completed: true
  },
  {
    id: 18,
    title: "FAQ Accordion Card",
    description: "A FAQ accordion card that displays frequently asked questions",
    image: "/og-images/frontend/faq-accordion.png",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    difficulty: "Junior",
    category: "Frontend",
    demoUrl: "https://rojasmart.github.io/frontend-mentor-projects/faq-accordion-card-main/",
    repoUrl: "https://github.com/rojasmart/frontend-mentor-projects/tree/main/faq-accordion-card-main",
    challengeUrl: "https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam",
    completed: true
  },
   {
    id: 19,
    title: "GitHub User Search App",
    description: "A GitHub user search app that allows users to search for GitHub users",
    image: "/og-images/frontend/github-app.png",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    difficulty: "Junior",
    category: "API Integration",
    demoUrl: "https://rojasmart.github.io/frontend-mentor-projects/github-user-search-app/",
    repoUrl: "https://github.com/rojasmart/frontend-mentor-projects/tree/main/github-user-search-app",
    challengeUrl: "https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6",
    completed: true
  },
  {
    id: 20,
    title: "Interactive Pricing Component",
    description: "An interactive pricing component that allows users to select different pricing plans",
    image: "/og-images/frontend/interactive-pricing-component.png",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    difficulty: "Junior",
    category: "Frontend",
    demoUrl: "https://interactive-pricing-component-khaki.vercel.app/",
    repoUrl: "https://github.com/rojasmart/frontend-mentor-projects/tree/main/interactive-pricing-component",
    challengeUrl: "https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8",
    completed: true
  }
];

export const FRONTEND_STATS = {
  totalProjects: FRONTEND_PROJECTS.length,
  completedProjects: FRONTEND_PROJECTS.filter(p => p.completed).length,
  difficulties: {
    newbie: FRONTEND_PROJECTS.filter(p => p.difficulty === "Newbie").length,
    junior: FRONTEND_PROJECTS.filter(p => p.difficulty === "Junior").length,
    intermediate: FRONTEND_PROJECTS.filter(p => p.difficulty === "Intermediate").length,
    advanced: FRONTEND_PROJECTS.filter(p => p.difficulty === "Advanced").length,
    guru: FRONTEND_PROJECTS.filter(p => p.difficulty === "Guru").length,
  },
  categories: {
    frontend: FRONTEND_PROJECTS.filter(p => p.category === "Frontend").length,
    backendFrontend: FRONTEND_PROJECTS.filter(p => p.category === "Backend/Frontend").length,
    styling: FRONTEND_PROJECTS.filter(p => p.category === "Styling").length,
    javascript: FRONTEND_PROJECTS.filter(p => p.category === "JavaScript").length,
    apiIntegration: FRONTEND_PROJECTS.filter(p => p.category === "API Integration").length,
    fullStack: FRONTEND_PROJECTS.filter(p => p.category === "Full Stack").length,
  }
};
