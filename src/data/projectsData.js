import HomePress from "./../assets/portfolioImages/HomePress.png";
import Legal from "./../assets/portfolioImages/Legal.png";
import Silon from "./../assets/portfolioImages/Silon.png";
// import AWS from "./../assets/portfolioImages/s3.PNG";
import Evento from "./../assets/portfolioImages/Evento.png";
import LibraryManagement from "./../assets/portfolioImages/Library-Management-Home.png";

// in progress projects

import ArtAndCraft from "./../assets/portfolioImages/ArtAndCraft.png";
import landingPage from "./../assets/portfolioImages/url.jpg";

const ProjectsData = [
  {
    id: "vanlife",
    img: LibraryManagement,
    name: "Library Management System",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://library-6eb65.web.app/",
    source:
      "https://github.com/farjanasabiha/library-management?tab=readme-ov-file",
    description:
      "A Library Management System website built with HTML, Tailwind CSS, and React offers a sleek, modern, and highly responsive user experience.It facilitates the organization, storage, and retrieval of books and other resources.",
  },
  {
    id: "fyp",
    img: ArtAndCraft,
    name: "Art And Craft",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://artandcraft-187a1.web.app/",
    source: "https://github.com/farjanasabiha/art-and-craft",
    description:
      "An Art and Craft website serves as a platform to showcase and explore a wide range of creative projects, handmade goods, and DIY tutorials. These websites often highlight various artistic mediums, such as painting, pottery, knitting, woodworking, and jewelry making.",
  },
  {
    id: "rest-countries",
    img: HomePress,
    name: "HomePress",
    stack: ["< RESTful API />", "< Bootstrap v5 />", "< React.js />"],
    live: "https://real-estate-96953.web.app/",
    source: "https://github.com/farjanasabiha/real-estate",
    description:
      "HomePress website is typically associated with real estate or property management platforms that allow users to search for, list, and manage properties. It often provides a user-friendly interface for buyers, sellers, and agents to navigate through real estate listings, view property details, compare prices, and even schedule visits.",
  },

  {
    id: "space-tourism",
    img: Legal,
    name: "Legal",
    stack: ["< React.js />", "< CSS3 />"],
    live: "https://farjanasabiha.github.io/legal/",
    source: "https://github.com/farjanasabiha/legal",
    description:
      "Multi-page Low website provides relevent information for users. It has a responsive design and navigation. A large and complex project that required me to plan ahead and break down the work into smaller chunks. I used React.js to build the website and CSS3 for styling.",
  },
  {
    id: "advice-generator",
    img: Silon,
    name: "Silon",
    stack: ["< HTML5 />", "< CSS3 />", "< JavaScript />"],
    live: "https://farjanasabiha.github.io/silon/",
    source: "https://github.com/farjanasabiha/silon",
    description:
      "A modern, stylish website name for girls with Silon could evoke a sense of elegance, trendiness, and individuality.which suggests a cutting-edge, stylish platform for fashion-forward girls. The name could reflect a blog, e-commerce platform, or community hub for girls interested in fashion, lifestyle, beauty tips, or empowerment.You could build on these ideas based on whether you’re aiming for a fashion platform, a lifestyle blog, or a community site for girls.",
  },

  {
    id: "todo",
    img: Evento,
    name: "Evento",
    stack: ["< JavaScript />  ", "< Sass />"],
    live: "https://farjanasabiha.github.io/evento/",
    source: "https://github.com/farjanasabiha/evento",
    description:
      "Responsive JS todo app with color theme switcher. Enables users to add, delete, filter, and clear day-to-day tasks. It has user-friendly interface and navigation. I was able to practice my JavaScript and Sass skills in this project.",
  },

  // {
  //   id: "dropdown-nav",
  //   img: Page,
  //   name: "Homepage with dropdown navigation / Figma to React",
  //   stack: ["< React.js />   ", "< CSS3 />"],
  //   live: "https://rimshub.github.io/figma-design-to-reactjs/",
  //   source: "https://github.com/rimshub/figma-design-to-reactjs",
  //   description:
  //     "This challenge from frontendmentor tested my skills to create dropdown navigation menus, a common pattern on larger sites. It also has some nice basic layout challenge. As a front-end developer, I was able to practice my React.js and CSS3 skills in this project.",
  // },
];

const InprogressProjectsData = [
  {
    id: "url-short",
    img: landingPage,
    name: "URL shortening API landing page",
    stack: ["< JavaScript />", "< NodeJS />"],
    live: "",
    source: "https://github.com/rimshub/URL-shortening-API-landing-page",
    description:
      "Integrate with the shrtcode URL shortening API and play with browser storage in this landing page challenge",
  },
];

export default { ProjectsData, InprogressProjectsData };
