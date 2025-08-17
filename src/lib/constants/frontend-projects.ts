export interface FrontendProject {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  difficulty: "Newbie" | "Junior" | "Intermediate" | "Advanced";
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
    demoUrl: "https://hangman-game-taupe.vercel.app/",
    repoUrl: "https://github.com/rojasmart/hangman-game",
    challengeUrl: "https://www.frontendmentor.io/challenges/hangman-game-rsQiSVLGWn",
    completed: true
  },
  {
    id: 2,
    title: "Tip Calculator App",
    description: "Calculadora de gorjeta interativa com divisão de conta entre pessoas",
    image: "/og-images/projects/tip-calculator.png",
    tags: ["HTML", "CSS", "JavaScript", "Calculator"],
    difficulty: "Junior",
    demoUrl: "https://seu-demo.netlify.app/tip-calculator",
    repoUrl: "https://hangman-game-taupe.vercel.app/",
    challengeUrl: "https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX",
    completed: true
  },
  {
    id: 3,
    title: "Interactive Card Details Form",
    description: "Formulário interativo de cartão de crédito com validação em tempo real",
    image: "/og-images/projects/card-details.png",
    tags: ["HTML", "CSS", "JavaScript", "Forms", "Validation"],
    difficulty: "Junior",
    demoUrl: "https://seu-demo.netlify.app/card-details",
    repoUrl: "https://github.com/Louai-Zokerburg/interactive-card-details",
    challengeUrl: "https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw",
    completed: true
  },
  {
    id: 4,
    title: "Advice Generator App",
    description: "Aplicativo que gera conselhos aleatórios usando API externa",
    tags: ["HTML", "CSS", "JavaScript", "API", "Fetch"],
    difficulty: "Junior",
    demoUrl: "https://seu-demo.netlify.app/advice-generator",
    repoUrl: "https://github.com/rojasmart/hangman-game",
    challengeUrl: "https://www.frontendmentor.io/challenges/hangman-game-rsQiSVLGWn",
    completed: true
  },
  {
    id: 5,
    title: "Age Calculator App",
    description: "Calculadora de idade precisa com validação de data e animações",
    tags: ["HTML", "CSS", "JavaScript", "Date Validation"],
    difficulty: "Junior",
    demoUrl: "https://seu-demo.netlify.app/age-calculator",
    repoUrl: "https://github.com/Louai-Zokerburg/age-calculator",
    challengeUrl: "https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q",
    completed: true
  },
  {
    id: 6,
    title: "E-commerce Product Page",
    description: "Página de produto com galeria de imagens, lightbox e funcionalidade de carrinho",
    tags: ["HTML", "CSS", "JavaScript", "E-commerce", "Lightbox"],
    difficulty: "Junior",
    demoUrl: "https://seu-demo.netlify.app/ecommerce-product",
    repoUrl: "https://github.com/Louai-Zokerburg/ecommerce-product-page",
    challengeUrl: "https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9_vYp",
    completed: true
  },
  {
    id: 7,
    title: "Intro Section with Dropdown Navigation",
    description: "Seção de introdução com navegação dropdown responsiva",
    tags: ["HTML", "CSS", "JavaScript", "Navigation", "Dropdown"],
    difficulty: "Junior",
    demoUrl: "https://seu-demo.netlify.app/intro-dropdown",
    repoUrl: "https://github.com/Louai-Zokerburg/intro-dropdown-navigation",
    challengeUrl: "https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5",
    completed: true
  },
  {
    id: 8,
    title: "Todo App",
    description: "Aplicativo de tarefas com filtros, drag & drop e armazenamento local",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage", "Drag & Drop"],
    difficulty: "Intermediate",
    demoUrl: "https://seu-demo.netlify.app/todo-app",
    repoUrl: "https://github.com/Louai-Zokerburg/todo-app",
    challengeUrl: "https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW",
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
  }
};
