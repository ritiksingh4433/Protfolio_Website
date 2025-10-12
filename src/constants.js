// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import jspLogo from './assets/tech_logo/jsp.png';
import jdbcLogo from './assets/tech_logo/jdbc.png';
import djangoLogo from './assets/tech_logo/django.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import cipherLogo from './assets/company_logo/cipher_logo.png';
import outlierLogo from './assets/company_logo/outlier_logo.png';


// Education Section Logo's
import omssLogo from './assets/education_logo/omss_logo.png';
import lpuLogo from './assets/education_logo/lpu_logo.png';

// Project Section Logo's
import smartcityLogo from './assets/work_logo/smart_city.png';
import sudokuLogo from './assets/work_logo/sudoku.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'JSP', logo: jspLogo },

    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'JDBC', logo: jdbcLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Django', logo: djangoLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'C', logo: cLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: cipherLogo,
      role: "Java Full Stack",
      company: "Cipher Schools",
      date: "July 2025 - August 2025",
      desc: "I developed dynamic and efficient web applications using Java Full Stack technologies, working on both the frontend and backend during my training at CipherSchools. I gained practical experience and learned to build responsive and interactive user interfaces. This training enhanced my ability to design RESTful APIs, ensure smooth database integration, and optimize application performance following agile development practices.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Core Java",
        "Springboot",
        "JDBC",
        "JSP",
        "RESTful APIs",
        "MySQL",
        "Git",
        "GitHub",
      ],
    },
    {
      id: 1,
      img: outlierLogo,
      role: "AI Trainer",
      company: "Outlier AI",
      date: "September 2024 - January 2025",
      desc: "Developed and refined AI-generated content to improve clarity, correctness, and relevance, enhancing AI accuracy by 20%. Collaborated with AI researchers to enhance prompt engineering techniques, leading to a 15% improvement in response efficiency. Ensured consistency and accuracy in AI-generated mathematical solutions by applying domain expertise, validating 95%+ responses. ",
      skills: [
        "Prompt Engineering",
        "Analytical Thinking",
        "Mathematical Reasoning",
        "Content Optimization",
        "Attention to Detail",
        "Natural Language Processing (NLP)",
        "Performance Improvement & Evaluation",
      ],
    },
  ];
  
  export const education = [
  
    {
      id: 1,
      img: lpuLogo,
      school: "Lovely Professional University, Phagwara, Punjab",
      date: "2022 - 2026",
      grade: "7.4 CGPA",
      desc: "I am pursuing my Bachelor's degree in Computer Science (B.Tech) from Lovely Professional University, Phagwara, Punjab. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at LPU allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.Tech (Computer Science)",
    },
    {
      id: 2,
      img: omssLogo,
      school: "Oxford Model Sr. Sec. School, Shyam Nagar, Kanpur",
      date: "2020 - 2021",
      grade: "88%",
      desc: "I completed my class 12 education from Oxford Model Sr. Sec. School, Shyam Nagar, Kanpur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: omssLogo,
      school: "Oxford Model Sr. Sec. School, Shyam Nagar, Kanpur",
      date: "2018 - 2019",
      grade: "87%",
      desc: "I completed my class 10 education from Oxford Model Sr. Sec. School, Shyam Nagar, Kanpur, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    // {
    //   id: 0,
    //   title: "GitHub Profile Detective",
    //   description:
    //     "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    //   image: githubdetLogo,
    //   tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    //   github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    //   webapp: "https://githubprofiledetective.netlify.app/",
    // },
    {
      id: 1,
      title: "Smart City",
      description:
      "Built a responsive and user-friendly web application to help users search and explore detailed information about their city. Integrated modules for city overview, top-rated food places, smart medical assistance, and parking availability. Displayed EV charging stations, disaster alerts, and local emergency (SOS) features using JavaScript-based logic and mock data. Designed clean and intuitive UI using HTML5 and CSS3, ensuring mobile responsiveness and accessibility.",
      image: smartcityLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: " https://github.com/ritiksingh4433/SmartCity-Hackathon",
      webapp: "https://ritiksingh4433.github.io/SmartCity-Hackathon/",
    },
    {
      id: 2,
      title: "Sudoku Solver Visualizer",
      description:
      "Built an interactive Sudoku solver visualizer using a backtracking algorithm, completing puzzles in under 10 seconds for grids Added user-interactive color checks, ensuring only valid numbers could be input, leading to a 40% reduction in user errors. Designed multi-tab controls for speed adjustment and random puzzle generation, resulting in a 25% increase in user engagement.",
      image: sudokuLogo,
      tags: ["HTML", "CSS", "JavaScript","DSA"],
      github: "https://github.com/ritiksingh4433/Sudoko-Solver",
      webapp: "https://sudoko-solver-lyart.vercel.app/",
    },
  ];  