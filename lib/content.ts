// Everything the site shows lives in this file. The graph is built from it too:
// every role and project links to the skills listed in its `stack`.

export type SkillGroup =
  | "Languages"
  | "Frontend"
  | "Backend and APIs"
  | "AI and knowledge"
  | "Data and lakehouse"
  | "Cloud and delivery"
  | "Domain";

export type Skill = { id: string; label: string; group: SkillGroup; note: string };

export const skills: Skill[] = [
  { id: "python", label: "Python", group: "Languages", note: "My main language for backend and data work: FastAPI services, PySpark jobs, LangChain agents and model training scripts." },
  { id: "typescript", label: "TypeScript", group: "Languages", note: "Default for anything in the browser. Typed API clients and shared types keep front ends honest about what the backend returns." },
  { id: "javascript", label: "JavaScript", group: "Languages", note: "Where I started on the web. Still the glue for quick tools, Node scripts and older React code bases." },
  { id: "rust", label: "Rust", group: "Languages", note: "Used where speed and memory control matter, like a small vector index with Python bindings for local retrieval during evaluation." },
  { id: "sql", label: "SQL", group: "Languages", note: "Daily. Databricks SQL for reporting, Postgres for apps, and plenty of ad hoc queries to check what a pipeline actually wrote." },
  { id: "java", label: "Java", group: "Languages", note: "Spring Boot services with layered architecture, plus the testing discipline that comes with them." },
  { id: "swift", label: "Swift", group: "Languages", note: "Small iOS experiments and prototypes; enough to read and ship a native screen when a project needs one." },

  { id: "react", label: "React", group: "Frontend", note: "My front-end default. Component libraries, data-heavy dashboards and editors that sit on top of AI and data systems." },
  { id: "nextjs", label: "Next.js", group: "Frontend", note: "App Router, server components and server actions for full-stack apps that deploy straight to Vercel." },
  { id: "tailwind", label: "Tailwind CSS", group: "Frontend", note: "Fast, consistent styling with design tokens, so a UI stays coherent as it grows." },
  { id: "radix", label: "Radix UI and shadcn", group: "Frontend", note: "Accessible primitives for menus, dialogs and forms. I contributed a radio group update upstream." },
  { id: "dataviz", label: "Data visualisation", group: "Frontend", note: "Charts and graph views that make complex data readable, from portfolio dashboards to ontology maps like this one." },

  { id: "node", label: "Node.js", group: "Backend and APIs", note: "APIs and background workers in JavaScript land, mostly with Express." },
  { id: "express", label: "Express", group: "Backend and APIs", note: "Lightweight REST APIs for MERN apps, with auth, validation and tests." },
  { id: "fastapi", label: "FastAPI", group: "Backend and APIs", note: "My go-to for Python APIs: typed request models, async endpoints and auto-generated docs, often fronting AI pipelines." },
  { id: "flask", label: "Flask", group: "Backend and APIs", note: "Smaller services and internal tools where a minimal framework is enough." },
  { id: "spring", label: "Spring Boot", group: "Backend and APIs", note: "Spring MVC REST services with CRUD, in-memory stores and full unit and integration test suites." },
  { id: "websocket", label: "WebSocket", group: "Backend and APIs", note: "Real-time layers for streaming agent output and live updates to the browser." },
  { id: "oauth", label: "OAuth", group: "Backend and APIs", note: "Sign-in and session handling for production apps, including Azure-hosted services." },
  { id: "stripe", label: "Stripe", group: "Backend and APIs", note: "Checkout, subscriptions and webhooks for paid features in several of my apps." },

  { id: "rag", label: "RAG", group: "AI and knowledge", note: "Retrieval-augmented generation over documents and structured data: chunking, embedding, retrieval tuning and answer citations." },
  { id: "agents", label: "Multi-agent systems", group: "AI and knowledge", note: "Multi-agent pipelines that split ingestion, schema mapping and anomaly checks into steps that can each be traced and retried." },
  { id: "langchain", label: "LangChain", group: "AI and knowledge", note: "Orchestration for chains, tools and agents, with model routing so each step uses the right model." },
  { id: "langsmith", label: "LangSmith", group: "AI and knowledge", note: "Tracing and evaluation for LLM apps, so a bad answer can be replayed, inspected and fixed." },
  { id: "vectors", label: "Vector search", group: "AI and knowledge", note: "Vector stores and similarity search tuned for recall and latency, the retrieval half of every RAG system I build." },
  { id: "kg", label: "Knowledge graphs", group: "AI and knowledge", note: "Graphs of entities and relationships that give LLMs structured context and let analysts ask connected questions." },
  { id: "ontology", label: "Ontology management", group: "AI and knowledge", note: "Designing and versioning the classes, properties and relations a knowledge graph is built on, and keeping them in sync with the data." },
  { id: "training", label: "Model training", group: "AI and knowledge", note: "Fine-tuning and evaluating models for classification and extraction, tracked end to end in MLflow." },
  { id: "mlflow", label: "MLflow", group: "AI and knowledge", note: "Experiment tracking, model registry and tracing for both classic ML and LLM workflows." },
  { id: "gemini", label: "Gemini", group: "AI and knowledge", note: "Used Gemini 1.5 Flash to turn plain-English prompts into structured form definitions." },

  { id: "databricks", label: "Databricks", group: "Data and lakehouse", note: "Where most of my data and AI work runs: notebooks, jobs, SQL warehouses and model serving." },
  { id: "lakehouse", label: "Lakehouse", group: "Data and lakehouse", note: "Designing medallion-style lakehouse layers so raw, cleaned and reporting data each have a clear home." },
  { id: "delta", label: "Delta Lake", group: "Data and lakehouse", note: "Delta tables with schema evolution, time travel and merge-based upserts for reliable pipelines." },
  { id: "pyspark", label: "PySpark", group: "Data and lakehouse", note: "Large-scale transformations over credit portfolio data, written to handle changing schemas." },
  { id: "unity", label: "Unity Catalog", group: "Data and lakehouse", note: "Governance for tables, models and access across Databricks workspaces." },
  { id: "postgres", label: "PostgreSQL", group: "Data and lakehouse", note: "Relational backbone for apps that need strong consistency, from form builders to REST APIs." },
  { id: "mongodb", label: "MongoDB", group: "Data and lakehouse", note: "Document storage for app data and sessions where the shape changes often." },
  { id: "redis", label: "Redis", group: "Data and lakehouse", note: "Caching and short-lived state to keep APIs fast." },

  { id: "azure", label: "Azure", group: "Cloud and delivery", note: "Production hosting for APIs and AI services, including App Services and Azure-integrated Databricks." },
  { id: "aws", label: "AWS", group: "Cloud and delivery", note: "S3, EC2, RDS and Lambda for storage and deployment across several projects." },
  { id: "gcp", label: "GCP", group: "Cloud and delivery", note: "Cloud services and model APIs where a project calls for Google's stack." },
  { id: "docker", label: "Docker", group: "Cloud and delivery", note: "Containerised services so local, CI and production environments match." },
  { id: "cicd", label: "CI/CD", group: "Cloud and delivery", note: "Automated tests and deploys on every push, so shipping is routine rather than an event." },
  { id: "cloudinary", label: "Cloudinary", group: "Cloud and delivery", note: "Image hosting and on-the-fly transforms for listing photos." },

  { id: "finance", label: "Credit and finance data", group: "Domain", note: "Credit portfolios, facilities and covenants: the domain my current AI and data pipelines are built for." },
  { id: "sap", label: "SAP ERP", group: "Domain", note: "Requirements, testing and data migration for SAP finance, HR and materials modules across 500+ sites." },
];

export type Role = {
  id: string;
  org: string;
  short?: string; // label on the map when the full name is long
  title: string;
  period: string;
  points: string[];
  stack: string[];
};

export const roles: Role[] = [
  {
    id: "scalata",
    org: "Scalata AI",
    title: "Senior Full Stack and Databricks Engineer",
    period: "Aug 2024 – now",
    points: [
      "Design and ship multi-agent pipelines that ingest credit data, align schemas and flag anomalies, using RAG over vector stores and LLM orchestration on Databricks.",
      "Build PySpark and Delta Lake pipelines that handle schema evolution and feed unified reporting across credit portfolios.",
      "Own the API and real-time layer in FastAPI, Flask and WebSocket, with OAuth sign-in and sessions on Azure App Services and MongoDB.",
      "Trace and route agent calls with LangChain, LangSmith and MLflow so each model decision can be inspected.",
    ],
    stack: [
      "python", "agents", "rag", "vectors", "langchain", "langsmith", "mlflow",
      "databricks", "lakehouse", "delta", "pyspark", "unity", "fastapi", "flask",
      "websocket", "oauth", "azure", "mongodb", "finance", "kg", "ontology", "react",
    ],
  },
  {
    id: "cloudcraft",
    org: "CloudCraft Technologies",
    short: "CloudCraft",
    title: "Software Developer Intern",
    period: "Aug 2021 – Mar 2022",
    points: [
      "Built and deployed three client web apps on the MERN stack, cutting manual operations work by about 20%.",
      "Stored assets on AWS S3 at 99.99% uptime and wrote unit and integration tests to 85% coverage.",
      "Raised organic traffic 10% through technical SEO fixes.",
    ],
    stack: ["mongodb", "express", "react", "node", "javascript", "aws"],
  },
  {
    id: "ongc",
    org: "Oil and Natural Gas Corporation",
    short: "ONGC",
    title: "Software Analyst Intern",
    period: "May 2020 – Jul 2020",
    points: [
      "Gathered requirements for Project ICE, which rolled SAP finance, HR and materials modules out to more than 500 sites.",
      "Wrote functional test cases and cleaned and migrated data for the ERP cut-over.",
    ],
    stack: ["sap", "sql"],
  },
];

export type Project = {
  id: string;
  title: string;
  kind: "project" | "oss";
  summary: string;
  points?: string[];
  stack: string[];
  links: { label: string; href: string }[];
  image?: string;
};

export const projects: Project[] = [
  {
    id: "credit-kg",
    title: "Credit portfolio knowledge graph",
    kind: "project",
    summary:
      "An ontology-backed graph of borrowers, facilities and covenants that analysts can question in plain English.",
    points: [
      "Ontology versioned alongside code, with migrations when a concept changes.",
      "Graph RAG answers cite the exact facility and clause they came from.",
    ],
    stack: ["kg", "ontology", "rag", "langchain", "python", "finance", "databricks", "vectors"],
    links: [],
  },
  {
    id: "ingest-agents",
    title: "Lakehouse ingestion agents",
    kind: "project",
    summary:
      "Agents that read a new data drop, map it to the target schema and open a reviewable change instead of a broken job.",
    points: [
      "Each step is traced in LangSmith, so a bad mapping can be replayed and fixed.",
      "Writes land in Delta tables governed by Unity Catalog.",
    ],
    stack: ["agents", "langchain", "langsmith", "databricks", "delta", "unity", "pyspark", "lakehouse"],
    links: [],
  },
  {
    id: "risk-model",
    title: "Covenant breach classifier",
    kind: "project",
    summary:
      "A fine-tuned text classifier that flags likely covenant breaches in quarterly filings before an analyst reads them.",
    stack: ["training", "python", "mlflow", "databricks", "finance"],
    links: [],
  },
  {
    id: "ontology-studio",
    title: "Ontology studio",
    kind: "project",
    summary:
      "A browser editor for classes, properties and relations, with a live graph view and diff before publish.",
    stack: ["react", "typescript", "nextjs", "radix", "ontology", "kg", "dataviz"],
    links: [],
  },
  {
    id: "rust-index",
    title: "Embedded vector index",
    kind: "project",
    summary:
      "A small Rust HNSW index with Python bindings, used to keep retrieval local during evaluation runs.",
    stack: ["rust", "vectors", "rag", "python"],
    links: [],
  },
  {
    id: "form-builder",
    title: "AI Form Builder",
    kind: "project",
    summary:
      "Describe a form in a sentence and get a working one: Gemini drafts the fields, you edit, share and export responses to Excel.",
    points: [
      "Gemini 1.5 Flash turns a prompt into a structured form definition.",
      "Response collection, editing, deletion and Excel export, with Stripe for paid plans.",
    ],
    stack: ["nextjs", "javascript", "tailwind", "postgres", "stripe", "gemini", "react"],
    links: [
      { label: "Live site", href: "https://form-mint.vercel.app/" },
      { label: "Source code", href: "https://github.com/sagarhedaoo/form-mint/" },
    ],
    image: "/AiFormBuilder.webp",
  },
  {
    id: "explorehub",
    title: "ExploreHub",
    kind: "project",
    summary:
      "A trip planner that pulls flights, hotels, weather and attractions into one itinerary and takes payment with Stripe.",
    points: [
      "Built on FastAPI, React and MongoDB with OAuth 2.0 sign-in.",
      "Server components read straight from purpose-built API endpoints.",
    ],
    stack: ["fastapi", "react", "mongodb", "python", "typescript", "aws", "stripe", "oauth"],
    links: [{ label: "Live site", href: "https://www.explorehub.lol/" }],
    image: "/explorehub.webp",
  },
  {
    id: "ecommerce",
    title: "Full-stack store",
    kind: "project",
    summary:
      "An end-to-end shop with accounts, product images on S3 and Stripe checkout.",
    stack: ["nextjs", "react", "javascript", "node", "mongodb", "stripe", "aws"],
    links: [{ label: "Source code", href: "https://github.com/sagarhedaoo/E-Commerce" }],
    image: "/ecommerce.webp",
  },
  {
    id: "airbnb",
    title: "Airbnb clone",
    kind: "project",
    summary:
      "List a home, favourite other listings and manage reservations, with images served from Cloudinary.",
    stack: ["react", "tailwind", "typescript", "mongodb", "cloudinary"],
    links: [{ label: "Source code", href: "https://github.com/sagarhedaoo/Airbnb-clone" }],
    image: "/airbnb.webp",
  },
  {
    id: "activity-api",
    title: "Activity API",
    kind: "project",
    summary:
      "A Spring MVC REST service with full CRUD, containerised, and covered by unit and integration tests.",
    stack: ["java", "spring", "docker", "postgres", "cicd"],
    links: [{ label: "Source code", href: "https://github.com/sagarhedaoo/WebAPI-Springboot" }],
    image: "/activity.webp",
  },
  {
    id: "responsively",
    title: "Responsively App",
    kind: "oss",
    summary: "Added scroll-to-top to the device preview so long pages are quicker to move through.",
    stack: ["react", "typescript"],
    links: [{ label: "Repository", href: "https://github.com/responsively-org/responsively-app" }],
  },
  {
    id: "twenty",
    title: "Twenty CRM",
    kind: "oss",
    summary: "Found and fixed several UI bugs in the open-source CRM.",
    stack: ["react", "typescript"],
    links: [{ label: "Repository", href: "https://github.com/twentyhq/twenty" }],
  },
  {
    id: "radio-group",
    title: "Radio group component",
    kind: "oss",
    summary: "Rebuilt a radio group component on top of the current Radix UI primitive.",
    stack: ["react", "radix", "typescript"],
    links: [],
  },
];

export const education = [
  {
    school: "Stevens Institute of Technology",
    degree: "MS, Computer Software Engineering",
    year: "2024",
    note: "Merit graduate scholarship",
  },
  {
    school: "Savitribai Phule Pune University",
    degree: "BE, Computer Science and Engineering",
    year: "2022",
  },
];

export const certificates = [
  { issuer: "Oracle", title: "OCI 2024 Generative AI Certified Professional", year: "2024", image: "/OCI_Cert.webp" },
  { issuer: "Walmart Global Tech", title: "Advanced Software Engineering Job Simulation", year: "2024", image: "/Walmart_Cert.webp" },
  { issuer: "IBM", title: "Full Stack Software Developer", year: "2023", image: "/IBM_Cert.webp" },
  { issuer: "JPMorgan Chase", title: "Software Engineering Virtual Experience", year: "2020", image: "/JPMorgan_Cert.webp" },
  { issuer: "Microsoft", title: "Technology Associate: Introduction to Programming using Python", year: "2019", image: "/MTA_Cert.webp" },
];

export const contact = {
  email: "sagarhedaoo@gmail.com",
  github: "https://github.com/sagarhedaoo",
  linkedin: "https://www.linkedin.com/in/sagarhedaoo/",
  resume: "/files/resume.pdf",
};
