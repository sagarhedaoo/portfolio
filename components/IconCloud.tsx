import IconCloud from "./magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "mongodb",
  "tailwindcss",
  "stripe",
  "sql",
];

export function IconCloudDemo() {
  return (
    <div className="relative dark:bg-black flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-10  ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
