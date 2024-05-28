export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "/resume" },
];

export const gridItems = [
  {
    id: 1,
    title: "MS Computer Software Engineering",
    description: "Just Graduated",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/stevens.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm open to relocation anywhere across the globe",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "F1 OPT",
    description: "Visa Status",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning about Passkeys for secure authentication",
    description: "The Inside News",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "ExploreHub",
    des: "ExploreHub is a comprehensive travel planning system that empowers users to create customized itineraries with ease.It aims to be the ultimate travel planning companion, transforming trip planning from a chore into an exciting adventure.",
    img: "/explorehub.svg",
    iconLists: ["/re.svg", "/mongo.svg", "/ts.svg", "/python.svg", "/aws.svg"],
    link: "https://www.explorehub.lol/",
  },
  {
    id: 2,
    title: "E-Commerce Full Stack",
    des: "Architected a robust, end-to-end e-commerce website utilizing JavaScript, Node.js, React, NextJS, Tailwind CSS and MongoDB with user authentication and user privacy. Employed Amazon S3 to store project images and AWS to deploy website seamlessly. ",
    img: "/ecommerce.svg",
    iconLists: ["/next.svg", "/re.svg", "/js.svg", "/node.svg", "/stripe.svg"],
    link: "https://e-commerce-eta-rosy.vercel.app",
  },
  {
    id: 3,
    title: "Airbnb Clone",
    des: "Airbnb your home is the menu where users can list their places. Users can favorite using the like option and then those listings will be displayed in seperate favorites page. Reservations Page displays the reservations that users did",
    img: "/airbnb.svg",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongo.svg",
      "/cloudinary.svg",
    ],
    link: "https://github.com/sagarhedaoo/Airbnb-clone",
  },
  {
    id: 4,
    title: "Activity API - Springboot",
    des: "Implemented a REST API using Spring MVC with CRUD operations, in-memory data handling, and comprehensive testing including unit and integration tests to ensure robust backend services",
    img: "/activity.jpg",
    iconLists: [
      "/docker.svg",
      "/java.svg",
      "/restapi.svg",
      "/postgresql.svg",
      "/spring.svg",
    ],
    link: "https://github.com/sagarhedaoo/WebAPI-Springboot",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer Intern",
    desc: "Utilized MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack to develop and deployed 3 web applications for clients use, improving operational efficiency by 20%. Increased website traffic by 10% through SEO optimization techniques. Leveraged AWS S3 for cloud storage, ensuring 99.99% uptime for all executed applications. Delivered unit and integration testing frameworks, achieving 85% code coverage and minimizing bugs.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Analyst Intern",
    desc: "Analyzed and documented business requirements for Project ICE, contributing to integration of specific SAP modules (Finance, HR, Material management) across 500+ locations. Designed test cases and conducted functional testing of SAP functionalities. Performed data migration and cleansing tasks for ERP integration.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/sagarhedaoo",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sagarhedaoo/",
  },
];
