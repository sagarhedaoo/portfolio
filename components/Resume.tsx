import React from "react";
import "tailwindcss/tailwind.css";
import { FloatingNav } from "./ui/FloatingNav";
import { navItems } from "@/data";
import Link from "next/link";
import { BackgroundGradient } from "./ui/CardBackground";

const Resume = () => {
  const downloadResume = () => {
    const filePath = "/files/resume.pdf";
    const date = new Date();
    const formattedDate =
      date.getMonth() + 1 + "-" + date.getDate() + "-" + date.getFullYear();
    fetch(filePath)
      .then((response) => {
        if (response.ok) return response.blob();
        throw new Error("Network response was not ok.");
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const element = document.createElement("a");
        element.href = url;
        element.download = "SagarHedaoo_resume-" + formattedDate + ".pdf";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };

  return (
    <div className="min-h-screen print:!mx-auto print:!w-full">
      <table className="margin-0 padding-10 relative block min-h-screen appearance-none border-none text-gray-900 print:!table [&_td]:p-0">
        <tbody className="block print:table-row-group  print:!min-h-screen">
          <tr className="block print:!table-row">
            <td className="block print:!table-cell">
              <article className="relative mx-auto mb-16 grid max-w-7xl gap-12 px-4 py-16 print:!flex print:!py-0 print:!pl-24 md:px-8 lg:grid-cols-[1fr_200px] print:[&_*]:![-webkit-print-color-adjust:exact] print:[&_*]:![color-adjust:exact] print:[&_*]:![print-color-adjust:exact]">
                <div className="snap-y snap-normal spacing-10">
                  <div className="flex justify-between space-x-2 ">
                    <a
                      className="flex items-center space-x-2 hover:text-red-400"
                      href="/"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-undo-2"
                      >
                        <path d="M9 14 4 9l5-5" />
                        <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
                      </svg>
                      <span>Back to Portfolio</span>
                    </a>

                    <div className="hover:text-red-400">
                      <button
                        id="downloadBtn"
                        value="download"
                        onClick={downloadResume}
                        className="flex items-center justify-center space-x-2 shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
                      >
                        <span>Resume</span>
                        <svg
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#000000"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <title></title>
                            <g id="Complete">
                              <g id="download">
                                <g>
                                  <path
                                    d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7"
                                    fill="none"
                                    stroke="#000000"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                  ></path>
                                  <g>
                                    <polyline
                                      data-name="Right"
                                      fill="none"
                                      id="Right-2"
                                      points="7.9 12.3 12 16.3 16.1 12.3"
                                      stroke="#000000"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                    ></polyline>
                                    <line
                                      fill="none"
                                      stroke="#000000"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      x1="12"
                                      x2="12"
                                      y1="2.7"
                                      y2="14.2"
                                    ></line>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <section
                    id="summary"
                    className="relative -mx-4 scroll-mt-[122px] overflow-hidden px-4 spacing-4 print:!overflow-visible md:overflow-visible break-inside-avoid print:!max-w-3xl"
                  >
                    <header className="spacing-3 print:!-ml-24 ">
                      <h2 className="flex items-baseline">
                        <span className="flex items-baseline text-3xl font-bold tracking-tight text-gray-800 d:text-gray-100 print:!flex-1 print:!text-xl">
                          <span className="min-w-[105px] mb-4">Summary</span>
                        </span>
                        <button className="group ml-auto mr-2 rounded p-2 text-gray-400/90 transition-colors hfa:outline-none hf:bg-gray-100 hf:text-gray-900 print:!hidden">
                          <span className="sr-only">
                            Toggle Section Visibility
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4 transition-all"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <hr className="h-px border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] print:!hidden mb-2 " />
                    </header>
                    <div className="relative transition-all duration-200 ease-linear print:!max-h-max">
                      <div className="transition-[all,height] delay-[0s,0.2s]"></div>
                      <p className="text-[15px] leading-relaxed text-gray-500 d:text-gray-300 print:!-ml-24 print:!max-w-3xl print:!text-base">
                        I am a passionate self-taught software developer. I
                        specialize in front-end and back-end development using
                        Typescript, React.js, Node.js & AWS. Throughout my
                        career, My journey in computer science has been rich and
                        diverse, beginning with a Bachelor of Engineering in
                        India and advancing through a Master&apos;s at Stevens
                        Institute of Technology, where I earned a scholarship
                        for my academic excellence. Currently, I am open to
                        roles and contributing to Open source projects.
                      </p>
                    </div>
                  </section>
                  {/* OSS Start */}
                  <section
                    id="OpenSourceContributions"
                    className="relative -mx-4 scroll-mt-[122px] overflow-hidden px-4 spacing-4 print:!overflow-visible md:overflow-visible break-inside-avoid mt-4"
                  >
                    <header className="spacing-3 print:!-ml-24 ">
                      <h2 className="flex items-baseline">
                        <span className="flex items-baseline text-3xl font-bold tracking-tight text-gray-800 d:text-gray-100 print:!flex-1 print:!text-xl">
                          <span className="min-w-[105px] mb-2 ">
                            Open Source Contributions
                          </span>
                          <hr className="ml-6 mr-24 hidden border-dashed border-gray-400 print:block print:!flex-1" />
                        </span>
                        <button className="group ml-auto mr-2 rounded p-2 text-gray-400/90 transition-colors hfa:outline-none hf:bg-gray-100 hf:text-gray-900 print:!hidden">
                          <span className="sr-only">
                            Toggle Section Visibility
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4 transition-all"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <hr className="h-px border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] print:!hidden mb-2 " />
                    </header>
                    <div className="relative transition-all duration-200 ease-linear print:!max-h-max">
                      <div className="transition-[all,height] delay-[0s,0.2s]"></div>
                      <div className="spacing-8 print:!spacing-3">
                        {/* First OSS Start */}
                        <section className="ml-0 spacing-1 print:!-ml-24 mt-3">
                          <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                              Responsively{" "}
                            </strong>
                            <span>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] font-bold text-red-400 d:text-gray-100 print:!text-[16px] print:!font-bold  cursor-pointer"
                                href="https://responsively.app"
                              >
                                [Website]{" "}
                              </a>
                            </span>
                            <br />
                            <span className="select-none text-sm text-gray-600 print:!text-gray-500">
                              Technologies -{" "}
                            </span>
                            <span className="text-gray-400/80 print:!text-gray-500">
                              <span className="hidden print:!inline sm:inline">
                                Electron, JavaScript, TypeScript, HTML, CSS
                              </span>
                            </span>
                            <ul className="list-outside font-semibold list-disc pl-6 text-sm text-gray-600 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!text-base">
                              <li className="pl-0">
                                Implemented a Scroll to Top feature in
                                Responsively app, improving navigation
                                efficiency and user engagement{" "}
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[14px] font-bold text-red-400 d:text-gray-100 print:!text-[16px] print:!font-bold  cursor-pointer"
                                  href="https://github.com/responsively-org/responsively-app/pull/1244"
                                >
                                  [Github-PR]
                                </a>
                              </li>
                            </ul>
                          </h3>
                        </section>
                        {/* First OSS End */}
                        {/* Second OSS Start */}
                        <section className="ml-0 spacing-1 print:!-ml-24 mt-3">
                          <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                              Twenty CRM{" "}
                            </strong>
                            <span>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] font-bold text-red-400 d:text-gray-100 print:!text-[16px] print:!font-bold  cursor-pointer"
                                href="https://twenty.com"
                              >
                                [Website]{" "}
                              </a>
                            </span>
                            <br />
                            <span className="select-none text-sm text-gray-600 print:!text-gray-500">
                              Technologies -{""}
                            </span>
                            <span className="text-gray-400/80 print:!text-gray-500">
                              <span className="hidden print:!inline sm:inline">
                                TypeScript, GraphQL, PostgreSQL, Docker
                              </span>
                            </span>
                            <ul className="list-outside font-semibold list-disc pl-6 text-sm text-gray-600 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!text-base">
                              <li className="pl-0">
                                Resolved Snackbar bugs in Twenty CRM Software as
                                per Figma file. Enhancing stability and user
                                interaction{" "}
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[14px] font-bold text-red-400 d:text-gray-100 print:!text-[16px] print:!font-bold  cursor-pointer"
                                  href="https://github.com/twentyhq/twenty/pull/5700"
                                >
                                  [Github-PR]
                                </a>
                              </li>
                            </ul>
                          </h3>
                        </section>
                        {/* Second OSS End */}
                        {/* Third OSS Start */}
                        <section className="ml-0 spacing-1 print:!-ml-24 mt-3">
                          <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                              Reflex{" "}
                            </strong>
                            <span>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] font-bold text-red-400 d:text-gray-100 print:!text-[16px] print:!font-bold  cursor-pointer"
                                href="https://reflex.dev"
                              >
                                [Website]{" "}
                              </a>
                            </span>
                            <br />
                            <span className="select-none text-sm text-gray-600 print:!text-gray-500">
                              Technologies -{" "}
                            </span>
                            <span className="text-gray-400/80 print:!text-gray-500">
                              <span className="hidden print:!inline sm:inline">
                                Python, Jinja, Docker, JavaScript
                              </span>
                            </span>
                            <ul className="list-outside font-semibold list-disc pl-6 text-sm text-gray-600 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!text-base">
                              <li className="pl-0">
                                Updated Radio group component wrapping it with
                                latest Radix UI component{" "}
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[14px] font-bold text-red-400 d:text-gray-100 print:!text-[16px] print:!font-bold  cursor-pointer"
                                  href="https://github.com/reflex-dev/reflex/pull/3474"
                                >
                                  [Github-PR]
                                </a>
                              </li>
                              <li className="pl-0">
                                Updated and refined the documentation for
                                Reflex, facilitating easier adoption and
                                understanding for new users{" "}
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[14px] font-bold text-red-400 d:text-gray-100 print:!text-[16px] print:!font-bold  cursor-pointer"
                                  href="https://github.com/reflex-dev/reflex/pull/3333"
                                >
                                  [Github-PR]
                                </a>
                              </li>
                            </ul>
                          </h3>
                        </section>
                        {/* Third OSS End */}
                      </div>
                    </div>
                  </section>
                  {/* Start of Exp */}
                  <section
                    id="experience"
                    className="relative -mx-4 scroll-mt-[122px] overflow-hidden px-4 spacing-4 print:!overflow-visible md:overflow-visible mt-4"
                  >
                    <header className="spacing-3 print:!-ml-24 ">
                      <h2 className="flex items-baseline">
                        <span className="flex items-baseline text-3xl font-bold tracking-tight text-gray-800 d:text-gray-100 print:!flex-1 print:!text-xl">
                          <span className="min-w-[105px] mb-4">Experience</span>
                          <hr className="ml-6 mr-24 hidden border-dashed border-gray-400 print:block print:!flex-1" />
                        </span>
                        <button className="group ml-auto mr-2 rounded p-2 text-gray-400/90 transition-colors hfa:outline-none hf:bg-gray-100 hf:text-gray-900 print:!hidden">
                          <span className="sr-only">
                            Toggle Section Visibility
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4 transition-all"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <hr className="h-px border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] print:!hidden mb-2 " />
                    </header>
                    <div className="relative transition-all duration-200 ease-linear print:!max-h-max">
                      <div className="transition-[all,height] delay-[0s,0.2s]"></div>
                      <div className="spacing-8">
                        {/* First Exp */}
                        <section className="relative mb-auto break-inside-avoid-page">
                          <div className="relative flex">
                            <aside className="absolute left-[4.5rem] top-1 hidden h-full print:!left-4 print:!block md:block xl:left-6 2xl:left-4 ">
                              <h3 className="absolute right-full top-0 pr-6 text-right text-xs font-medium leading-[16px] text-gray-400 print:!pr-8 print:!text-sm print:!text-gray-600 xl:pr-8">
                                <div className="spacing-1">
                                  <div className="whitespace-nowrap print:!mr-0 xl:mr-2">
                                    Aug 2021 -
                                    <span className="hidden print:!inline xl:inline" />
                                  </div>
                                  <div className="whitespace-nowrap">
                                    Mar 2022
                                  </div>
                                </div>
                              </h3>
                              <div className="absolute left-0 top-0 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-gray-200 d:bg-gray-400">
                                <div className="h-2 w-2 rounded-full bg-gray-400 d:bg-gray-700"></div>
                              </div>
                              <i className="absolute left-0 top-6 h-[calc(100%-2px)] w-0.5 -translate-x-1/2 bg-gray-200 d:bg-gray-800"></i>
                            </aside>
                            <div className="ml-0 spacing-1 print:!ml-12 md:ml-24 xl:ml-14 2xl:ml-12">
                              <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                                <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                                  Software Developer Intern
                                </strong>
                                <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
                                  <span className="font-semibold text-gray-600 d:text-gray-400">
                                    CloudCraft Technologies Pvt Ltd
                                  </span>
                                  <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                    -
                                  </span>
                                  <span className="text-gray-500/80 print:!text-gray-500">
                                    India
                                  </span>
                                </span>
                                <div className="flex gap-2 whitespace-nowrap text-xs font-semibold text-gray-500 d:text-gray-400 print:!hidden md:hidden">
                                  <span>Aug 2021</span>
                                  <span>-</span>
                                  <span>India</span>
                                </div>
                              </h3>
                              <ul className="list-outside list-disc pl-4 text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!text-base">
                                <li className="pl-3">
                                  Utilized MERN (MongoDB, ExpressJS, ReactJS,
                                  NodeJS) stack to develop and deployed 3 web
                                  applications for clients use, improving
                                  operational efficiency by 20%
                                </li>
                                <li className="pl-3">
                                  Increased website traffic by 10% through SEO
                                  optimization techniques
                                </li>
                                <li className="pl-3">
                                  Leveraged AWS S3 for cloud storage, ensuring
                                  99.99% uptime for all executed applications
                                </li>
                                <li className="pl-3">
                                  Delivered unit and integration testing
                                  frameworks, achieving 85% code coverage and
                                  minimizing bugs
                                </li>
                              </ul>
                            </div>
                          </div>
                        </section>
                        {/* End of First Exp */}
                        {/* Second Exp */}
                        <section className="relative mb-auto break-inside-avoid-page mt-6">
                          <div className="relative flex">
                            <aside className="absolute left-[4.5rem] top-1 hidden h-full print:!left-4 print:!block md:block xl:left-6 2xl:left-4 ">
                              <h3 className="absolute right-full top-0 pr-6 text-right text-xs font-medium leading-[16px] text-gray-400 print:!pr-8 print:!text-sm print:!text-gray-600 xl:pr-8">
                                <div className="spacing-1">
                                  <div className="whitespace-nowrap print:!mr-0 xl:mr-2">
                                    May 2020{" "}
                                    <span className="hidden print:!inline xl:inline" />
                                  </div>
                                  <div className="whitespace-nowrap">
                                    July 2020
                                  </div>
                                </div>
                              </h3>
                              <div className="absolute left-0 top-0 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-gray-200 d:bg-gray-400">
                                <div className="h-2 w-2 rounded-full bg-gray-400 d:bg-gray-700"></div>
                              </div>
                              <i className="absolute left-0 top-6 h-[calc(100%-2px)] w-0.5 -translate-x-1/2 bg-gradient-to-b from-gray-200 to-transparent d:from-gray-800 print:!via-gray-200"></i>
                            </aside>
                            <div className="ml-0 spacing-1 print:!ml-12 md:ml-24 xl:ml-14 2xl:ml-12">
                              <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                                <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                                  Software Analyst Intern
                                </strong>
                                <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
                                  <span className="font-semibold text-gray-600 d:text-gray-400">
                                    Oil and Natural Gas Corporation Ltd
                                  </span>
                                  <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                    -
                                  </span>
                                  <span className="text-gray-500/80 print:!text-gray-500">
                                    India
                                  </span>
                                </span>
                                <div className="flex gap-2 whitespace-nowrap text-xs font-semibold text-gray-500 d:text-gray-400 print:!hidden md:hidden">
                                  <span>May 2020</span>
                                  <span>-</span>
                                  <span>India</span>
                                </div>
                              </h3>
                              <ul className="list-outside list-disc pl-4 text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!text-base">
                                <li className="pl-3">
                                  Handling client relations from first contact
                                  to project delivery, ensuring customer
                                  satisfaction
                                </li>
                                <li className="pl-3">
                                  Analyzed and documented business requirements
                                  for Project ICE, contributing to integration
                                  of specific SAP modules (Finance, HR, Material
                                  management) across 500+ locations
                                </li>
                                <li className="pl-3">
                                  Designed test cases and conducted functional
                                  testing of SAP functionalities
                                </li>
                                <li className="pl-3">
                                  Performed data migration and cleansing tasks
                                  for ERP integration
                                </li>
                              </ul>
                            </div>
                          </div>
                        </section>
                        {/* End of Second Exp */}
                      </div>
                    </div>
                  </section>
                  {/* End of Experience */}
                  <section
                    id="projects"
                    className="relative -mx-4 scroll-mt-[122px] overflow-hidden px-4 spacing-4 print:!overflow-visible md:overflow-visible break-inside-avoid mt-4"
                  >
                    <header className="spacing-3 print:!-ml-24 ">
                      <h2 className="flex items-baseline">
                        <span className="flex items-baseline text-3xl font-bold tracking-tight text-gray-800 d:text-gray-100 print:!flex-1 print:!text-xl">
                          <span className="min-w-[105px] mb-4 ">Projects</span>
                          <hr className="ml-6 mr-24 hidden border-dashed border-gray-400 print:block print:!flex-1" />
                        </span>
                        <button className="group ml-auto mr-2 rounded p-2 text-gray-400/90 transition-colors hfa:outline-none hf:bg-gray-100 hf:text-gray-900 print:!hidden">
                          <span className="sr-only">
                            Toggle Section Visibility
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4 transition-all"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <hr className="h-px border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] print:!hidden mb-2 " />
                    </header>
                    <div className="relative transition-all duration-200 ease-linear print:!max-h-max">
                      <div className="transition-[all,height] delay-[0s,0.2s]"></div>
                      <div className="spacing-8 print:!spacing-3">
                        {/* AI Form Project Start */}
                        <section className="ml-0 spacing-1 print:!-ml-24 mt-3">
                          <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                              AI Form Builder SaaS Application{" "}
                            </strong>
                            <span>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] font-bold text-red-400 d:text-gray-100 print:!text-[16px] print:!font-bold  cursor-pointer animate-pulse"
                                href="https://form-mint.vercel.app/"
                              >
                                [Live]{" "}
                              </a>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] font-bold text-red-400 d:text-gray-100 print:!text-[16px] print:!font-bold  cursor-pointer"
                                href="https://github.com/sagarhedaoo/form-mint"
                              >
                                [Github]
                              </a>
                            </span>
                            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
                              <span className="font-semibold text-gray-600 d:text-gray-400">
                                Personal Project
                              </span>
                              <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                -
                              </span>
                              <span className="text-gray-400/80 print:!text-gray-500">
                                <span className="hidden print:!inline sm:inline">
                                  NextJS, JavaScript, PostgreSQL, Tailwind CSS
                                </span>
                              </span>
                            </span>
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-600 d:text-gray-300">
                            Developed a SaaS AI Form builder using NextJS,
                            JavaScript, Tailwind CSS, PostgreSQL, and various
                            Web UI Components. Deployed Google’s Gemini 1.5
                            flash model to fetch responses according to users
                            requests. Users can take responses, edit forms,
                            delete forms, customize forms and export the
                            responses to Excel.
                          </p>
                        </section>
                        {/* AI Form Project End */}
                        {/* First Project Start */}
                        <section className="ml-0 spacing-1 print:!-ml-24 mt-3">
                          <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                              Explore-Hub Web Application{" "}
                            </strong>
                            <span>
                              {/* <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] font-bold text-red-400 d:text-gray-100 print:!text-[16px] print:!font-bold  cursor-pointer animate-pulse"
                                href="https://explorehub.lol/"
                              >
                                [Live]{" "}
                              </a> */}
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] font-bold text-red-400 d:text-gray-100 print:!text-[16px] print:!font-bold  cursor-pointer"
                                href="https://github.com/Explore-Hub-Capstone-Project"
                              >
                                [Github]
                              </a>
                            </span>
                            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
                              <span className="font-semibold text-gray-600 d:text-gray-400">
                                Final Semester Project
                              </span>
                              <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                -
                              </span>
                              <span className="text-gray-400/80 print:!text-gray-500">
                                <span className="hidden print:!inline sm:inline">
                                  FARM (FastAPI, React, MongoDB), Python
                                </span>
                              </span>
                            </span>
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-600 d:text-gray-300">
                            Developed a travel booking website with FARM
                            (FastAPI, ReactJS, MongoDB) stack, Google OAuth2.0
                            and RapidAPI. Fetched data in server react
                            components by directly accessing database with
                            created API Endpoints. Implemented Flight Search,
                            Hotel Search, Weather Search, Attraction Search, and
                            payment integration with Stripe.
                          </p>
                        </section>
                        {/* First Project End */}
                        {/* Second Project Start */}
                        <section className="ml-0 spacing-1 print:!-ml-24 mt-3">
                          <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                              Full Stack E-Commerce Web Application{" "}
                            </strong>
                            <span>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] font-bold text-red-400 d:text-gray-100 print:!text-[16px] print:!font-bold  cursor-pointer animate-pulse"
                                href="https://e-commerce-eta-rosy.vercel.app"
                              >
                                [Live]{" "}
                              </a>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] font-bold text-red-400 d:text-gray-100 print:!text-[16px] print:!font-bold  cursor-pointer"
                                href="https://github.com/sagarhedaoo/E-Commerce"
                              >
                                [Github]
                              </a>
                            </span>
                            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
                              <span className="font-semibold text-gray-600 d:text-gray-400">
                                Personal Project
                              </span>
                              <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                -
                              </span>
                              <span className="text-gray-400/80 print:!text-gray-500">
                                <span className="hidden print:!inline sm:inline">
                                  JavaScript, NodeJs, ReactJS, NextJS, MongoDB
                                </span>
                              </span>
                            </span>
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-600 d:text-gray-300">
                            Architected a robust, end-to-end e-commerce website
                            using JavaScript, NodeJs, ReactJS, NextJS, CSS and
                            MongoDB with user authentication and user privacy.
                            Employed Amazon S3 to store project images and AWS
                            to support website seamlessly. Configured Stripe for
                            secure payment processing, resulting in a seamless
                            and reliable payment system.
                          </p>
                        </section>
                        {/* Second Project End */}
                        {/* Third Project Start */}
                        <section className="ml-0 spacing-1 print:!-ml-24 mt-3">
                          <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                              Spring Boot Application{" "}
                            </strong>
                            <span>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[14px] font-bold text-orange-400 d:text-gray-100 print:!text-[16px] print:!font-bold  cursor-pointer"
                                href="https://github.com/sagarhedaoo/WebAPI-Springboot"
                              >
                                [Github]
                              </a>
                            </span>
                            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
                              <span className="font-semibold text-gray-600 d:text-gray-400">
                                Personal Learning Project
                              </span>
                              <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                -
                              </span>
                              <span className="text-gray-400/80 print:!text-gray-500">
                                <span className="hidden print:!inline sm:inline">
                                  Java, GraphQL, Spring MVC, Restful API
                                </span>
                              </span>
                            </span>
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-600 d:text-gray-300">
                            Implemented a REST API using Spring MVC with CRUD
                            operations, in-memory data handling, and
                            comprehensive testing including unit and integration
                            tests to ensure robust backend services. Utilized
                            Docker Compose and PostgreSQL for database
                            management and data persistence, integrating H2 and
                            Spring Data for efficient data operations and
                            testing using Junit and Mockito. Created a dynamic
                            web client using Rest Template and WebClient, and
                            implemented GraphQL client operations.
                          </p>
                        </section>
                        {/* Third Project End */}
                        {/* Fourth Project Start */}
                        <section className="ml-0 spacing-1 print:!-ml-24 mt-3">
                          <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                              Food Delivery Website{" "}
                            </strong>
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[14px] font-bold text-red-400 d:text-gray-100 print:!text-[16px] print:!font-bold  cursor-pointer"
                              href="https://github.com/sagarhedaoo/food-app"
                            >
                              [Github]
                            </a>
                            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
                              <span className="font-semibold text-gray-600 d:text-gray-400">
                                Personal Project
                              </span>
                              <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                -
                              </span>
                              <span className="text-gray-400/80 print:!text-gray-500">
                                <span className="hidden print:!inline sm:inline">
                                  React Redux, Typescript, Tailwind CSS,
                                  Firebase
                                </span>
                              </span>
                            </span>
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-600 d:text-gray-300">
                            Crafted a robust food delivery application
                            furnishing React Redux, TypeScript, HTML, Tailwind
                            CSS, and Firebase. Designed application empowering
                            users to explore restaurants, place orders and track
                            deliveries. Leveraged Firebase and Stripe
                            integration to facilitate seamless payments,
                            real-time order tracking, and enhanced user
                            experience.
                          </p>
                        </section>
                        {/* Fourth Project End */}
                      </div>
                    </div>
                  </section>
                  <section
                    id="education"
                    className="relative -mx-4 scroll-mt-[122px] overflow-hidden px-4 spacing-4 print:!overflow-visible md:overflow-visible break-inside-avoid mt-5"
                  >
                    <header className="spacing-3 print:!-ml-24 ">
                      <h2 className="flex items-baseline">
                        <span className="flex items-baseline text-3xl font-bold tracking-tight text-gray-800 d:text-gray-100 print:!flex-1 print:!text-xl">
                          <span className="min-w-[105px] mb-4">Education</span>
                          <hr className="ml-6 mr-24 hidden border-dashed border-gray-400 print:block print:!flex-1" />
                        </span>
                        <button className="group ml-auto mr-2 rounded p-2 text-gray-400/90 transition-colors hfa:outline-none hf:bg-gray-100 hf:text-gray-900 print:!hidden">
                          <span className="sr-only">
                            Toggle Section Visibility
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4 transition-all"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <hr className="h-px border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] print:!hidden mb-2" />
                    </header>
                    <div className="relative transition-all duration-200 ease-linear print:!max-h-max">
                      <div className="transition-[all,height] delay-[0s,0.2s]"></div>
                      <div className="spacing-8">
                        {/* Start of Stevens */}
                        <section className="relative flex mt-5">
                          <aside className="absolute left-[4.5rem] top-1 hidden h-full print:!left-4 print:!block md:block xl:left-6 2xl:left-4 ">
                            <h3 className="absolute right-full top-0 pr-6 text-right text-xs font-medium leading-[16px] text-gray-400 print:!pr-8 print:!text-sm print:!text-gray-600 xl:pr-8">
                              <div className="spacing-1">
                                <div className="whitespace-nowrap print:!mr-0 xl:mr-2">
                                  Aug 2022
                                  <span className="hidden print:!inline xl:inline">
                                    -
                                  </span>
                                </div>
                                <div className="whitespace-nowrap">
                                  May 2024
                                </div>
                              </div>
                            </h3>
                            <div className="absolute left-0 top-0 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-gray-200 d:bg-gray-400">
                              <div className="h-2 w-2 rounded-full bg-gray-400 d:bg-gray-700"></div>
                            </div>
                            <i className="absolute left-0 top-6 h-[calc(100%-2px)] w-0.5 -translate-x-1/2 bg-gray-200 d:bg-gray-800"></i>
                          </aside>
                          <div className="ml-0 spacing-1 print:!ml-12 md:ml-24 xl:ml-14 2xl:ml-12">
                            <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                              <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                                Masters of Science: Computer Software
                                Engineering (GPA: 3.44/4.0)
                              </strong>
                              <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
                                <span className="font-semibold text-gray-600 d:text-gray-400">
                                  Stevens Institute of Technology
                                </span>
                                <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                  -
                                </span>
                                <span className="text-gray-500/80 print:!text-gray-500">
                                  <span className="hidden print:!inline sm:inline">
                                    New Jersey,{" "}
                                  </span>
                                  USA
                                </span>
                              </span>
                              <div className="flex gap-2 whitespace-nowrap text-xs font-semibold text-gray-500 d:text-gray-400 print:!hidden md:hidden">
                                <span>Aug 2022</span>
                                <span>-</span>
                                <span>May 2024</span>
                              </div>
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-500 d:text-gray-300/80 print:!text-base">
                              <span className="font-medium text-gray-600 d:text-gray-400">
                                Honors: Merit Graduate Scholarship $3000 through
                                exemplary academic performance
                              </span>
                              <br />
                              <span className="font-medium text-gray-600 d:text-gray-400">
                                Coursework:{" "}
                              </span>
                              <span>
                                Agile Methods for Software Development, Software
                                Requirements Analysis and Engineering, Software
                                Testing, Quality Assurance and Maintenance,
                                Object Oriented Design and Analysis, Software
                                Architecture
                              </span>
                            </p>
                          </div>
                        </section>
                        {/* End Stevens */}
                        {/* Start of SPPU */}
                        <section className="relative flex mt-5">
                          <aside className="absolute left-[4.5rem] top-1 hidden h-full print:!left-4 print:!block md:block xl:left-6 2xl:left-4 ">
                            <h3 className="absolute right-full top-0 pr-6 text-right text-xs font-medium leading-[16px] text-gray-400 print:!pr-8 print:!text-sm print:!text-gray-600 xl:pr-8">
                              <div className="spacing-1">
                                <div className="whitespace-nowrap print:!mr-0 xl:mr-2">
                                  July 2018
                                  <span className="hidden print:!inline xl:inline">
                                    -
                                  </span>
                                </div>
                                <div className="whitespace-nowrap">
                                  Apr 2022
                                </div>
                              </div>
                            </h3>
                            <div className="absolute left-0 top-0 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full bg-gray-200 d:bg-gray-400">
                              <div className="h-2 w-2 rounded-full bg-gray-400 d:bg-gray-700"></div>
                            </div>
                            <i className="absolute left-0 top-6 h-[calc(100%-2px)] w-0.5 -translate-x-1/2 bg-gradient-to-b from-gray-200 to-transparent d:from-gray-800 print:!via-gray-200"></i>
                          </aside>
                          <div className="ml-0 spacing-1 print:!ml-12 md:ml-24 xl:ml-14 2xl:ml-12">
                            <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                              <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                                Bachelor of Engineering: Computer Engineering
                                (GPA: 9.54/10)
                              </strong>
                              <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
                                <span className="font-semibold text-gray-600 d:text-gray-400">
                                  Savitribai Phule Pune University
                                </span>
                                <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                  -
                                </span>
                                <span className="text-gray-500/80 print:!text-gray-500">
                                  <span className="hidden print:!inline sm:inline">
                                    Pune,{" "}
                                  </span>
                                  India
                                </span>
                              </span>
                              <div className="flex gap-2 whitespace-nowrap text-xs font-semibold text-gray-500 d:text-gray-400 print:!hidden md:hidden">
                                <span>July 2018</span>
                                <span>-</span>
                                <span>Apr 2022</span>
                              </div>
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-500 d:text-gray-300/80 print:!text-base">
                              <span className="font-medium text-gray-600 d:text-gray-400">
                                Coursework:{" "}
                              </span>
                              Data Structures and Algorithms, Object Oriented
                              Programming, Machine Learning, Database Management
                              Systems, Software Engineering and Project
                              Management, Artificial Intelligence and Robotics,
                              Operating Systems, Web Technology, Computer
                              Networks
                            </p>
                            <ul className="list-outside list-disc pl-4 text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!text-base">
                              <li className="pl-3">
                                As the Technical Head of Association of Computer
                                Science Students, I Led and managed events,
                                which increased attendance and participation by
                                20%. I also received widespread acclaim from
                                students, faculty for outstanding leadership and
                                performance.
                              </li>
                              <li className="pl-3">
                                As the Vice President of Institute of Engineers,
                                India (DY Patil), I partnered with colleges to
                                formulate and execute a strategic plan for
                                expanding chapter&apos;s network. I also
                                attained the IEI Chapter College
                                President&apos;s Award for demonstrating
                                exceptional leadership.
                              </li>
                            </ul>
                          </div>
                        </section>
                        {/* End SPPU */}
                      </div>
                    </div>
                  </section>
                  {/* End of Education */}
                  {/* Skills */}
                  <section
                    id="skills"
                    className="relative -mx-4 scroll-mt-[122px] overflow-hidden px-4 spacing-4 print:!overflow-visible md:overflow-visible break-inside-avoid mt-6"
                  >
                    <header className="spacing-3 print:!-ml-24 ">
                      <h2 className="flex items-baseline">
                        <span className="flex items-baseline text-3xl font-bold tracking-tight text-gray-800 d:text-gray-100 print:!flex-1 print:!text-xl">
                          <span className="min-w-[105px] mb-4">Skills</span>
                          <hr className="ml-6 mr-24 hidden border-dashed border-gray-400 print:block print:!flex-1" />
                        </span>
                        <button
                          type="button"
                          className="group ml-auto mr-2 rounded p-2 text-gray-400/90 transition-colors hfa:outline-none hf:bg-gray-100 hf:text-gray-900 print:!hidden"
                        >
                          <span className="sr-only">
                            Toggle Section Visibility
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4 transition-all"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <hr className="h-px border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] print:!hidden mb-2" />
                    </header>
                    <div className="relative transition-all duration-200 ease-linear print:!max-h-max">
                      <div className="transition-[all,height] delay-[0s,0.2s]"></div>
                      <div className="spacing-10 print:!-ml-24 print:!spacing-3 ">
                        <section className="relative max-w-prose spacing-1 print:!grid print:!max-w-3xl print:!grid-cols-[175px_1fr]">
                          <h3 className="items-baseline text-sm tracking-tight spacing-1 mt-4">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-sm print:!font-semibold ">
                              Languages
                            </strong>
                          </h3>
                          <p className="text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!mt-0">
                            English - Fluent, Hindi - Fluent
                          </p>
                        </section>
                        <section className="relative max-w-prose spacing-1 print:!grid print:!max-w-3xl print:!grid-cols-[175px_1fr]">
                          <h3 className="items-baseline text-sm tracking-tight mt-4 spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-sm print:!font-semibold ">
                              Programming Languages
                            </strong>
                          </h3>
                          <p className="text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!mt-0">
                            TypeScript, JavaScript, JAVA, Python, HTML, CSS,
                            SQL, C++, Markdown
                          </p>
                        </section>
                        <section className="relative max-w-prose spacing-1 print:!grid print:!max-w-3xl print:!grid-cols-[175px_1fr]">
                          <h3 className="items-baseline text-sm tracking-tight mt-4 spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-sm print:!font-semibold ">
                              Libraries & Frameworks
                            </strong>
                          </h3>
                          <p className="text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!mt-0">
                            React, Next.js, Node.js, Express, Redux, React
                            Query, Redux Toolkit, Styled Components, Bootstrap,
                            Material-UI, Tailwind CSS
                          </p>
                        </section>
                        <section className="relative max-w-prose spacing-1 print:!grid print:!max-w-3xl print:!grid-cols-[175px_1fr]">
                          <h3 className="items-baseline text-sm tracking-tight mt-4 spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-sm print:!font-semibold ">
                              Deployment & Cloud
                            </strong>
                          </h3>
                          <p className="text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!mt-0">
                            Git, GitHub Actions, Docker, Heroku, Vercel, Amazon
                            Web Services (AWS)
                          </p>
                        </section>
                        <section className="relative max-w-prose spacing-1 print:!grid print:!max-w-3xl print:!grid-cols-[175px_1fr]">
                          <h3 className="items-baseline text-sm tracking-tight mt-4 spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-sm print:!font-semibold ">
                              Databases
                            </strong>
                          </h3>
                          <p className="text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!mt-0">
                            MongoDB, PostgreSQL, MySQL, Firebase
                          </p>
                        </section>
                        <section className="relative max-w-prose spacing-1 print:!grid print:!max-w-3xl print:!grid-cols-[175px_1fr]">
                          <h3 className="items-baseline text-sm tracking-tight mt-4 spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-sm print:!font-semibold ">
                              Tools & Platforms
                            </strong>
                          </h3>
                          <p className="text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!mt-0">
                            Figma, Canva, Yarn, NPM, Postman, Dev Tools, MS
                            Office
                          </p>
                        </section>
                      </div>
                    </div>
                  </section>
                  {/* Certifications */}
                  <section
                    id="certifications"
                    className="relative -mx-4 scroll-mt-[122px] overflow-hidden px-4 spacing-4 print:!overflow-visible md:overflow-visible break-inside-avoid mt-5"
                  >
                    <header className="spacing-3 print:!-ml-24 ">
                      <h2 className="flex items-baseline">
                        <span className="flex items-baseline text-3xl font-bold tracking-tight text-gray-800 d:text-gray-100 print:!flex-1 print:!text-xl">
                          <span className="min-w-[105px] mb-4">
                            Certifications
                          </span>
                          <hr className="ml-6 mr-24 hidden border-dashed border-gray-400 print:block print:!flex-1" />
                        </span>
                        <button
                          type="button"
                          className="group ml-auto mr-2 rounded p-2 text-gray-400/90 transition-colors hfa:outline-none hf:bg-gray-100 hf:text-gray-900 print:!hidden"
                        >
                          <span className="sr-only">
                            Toggle Section Visibility
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4 transition-all"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <hr className="h-px border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] print:!hidden mb-2" />
                    </header>
                    <div className="relative transition-all duration-200 ease-linear print:!max-h-max">
                      <div className="transition-[all,height] delay-[0s,0.2s]"></div>
                      <div className="spacing-6 print:!-ml-24">
                        <section>
                          <ul className="text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600">
                            <li>
                              <span className="inline-flex items-baseline gap-2">
                                <span className="text-xs font-medium leading-[16px] text-gray-400 d:text-gray-500 print:!text-sm">
                                  2024
                                </span>
                                <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                  -
                                </span>
                                <span className="print:!text-base">
                                  Walmart USA - Advanced Software Engineering
                                  Job Simulation
                                </span>
                              </span>
                            </li>
                            <li>
                              <span className="inline-flex items-baseline gap-2">
                                <span className="text-xs font-medium leading-[16px] text-gray-400 d:text-gray-500 print:!text-sm">
                                  2023
                                </span>
                                <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                  -
                                </span>
                                <span className="print:!text-base">
                                  IBM Full Stack Software Developer
                                </span>
                              </span>
                            </li>
                            <li>
                              <span className="inline-flex items-baseline gap-2">
                                <span className="text-xs font-medium leading-[16px] text-gray-400 d:text-gray-500 print:!text-sm">
                                  2020
                                </span>
                                <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                  -
                                </span>
                                <span className="print:!text-base">
                                  J.P. Morgan - Software Engineering Job
                                  Simulation
                                </span>
                              </span>
                            </li>
                            <li>
                              <span className="inline-flex items-baseline gap-2">
                                <span className="text-xs font-medium leading-[16px] text-gray-400 d:text-gray-500 print:!text-sm">
                                  2020
                                </span>
                                <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                  -
                                </span>
                                <span className="print:!text-base">
                                  Preparing for Google Cloud Certification:
                                  Cloud Architect
                                </span>
                              </span>
                            </li>
                            <li>
                              <span className="inline-flex items-baseline gap-2">
                                <span className="text-xs font-medium leading-[16px] text-gray-400 d:text-gray-500 print:!text-sm">
                                  2019
                                </span>
                                <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                  -
                                </span>
                                <span className="print:!text-base">
                                  Introduction to Programming using Python -
                                  Microsoft Technology Associate
                                </span>
                              </span>
                            </li>
                          </ul>
                        </section>
                        {/* Achievement */}
                        <section
                          id="achievements"
                          className="relative max-w-prose spacing-1"
                        >
                          <h3 className="items-baseline text-sm tracking-tight mt-4 spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100">
                              Achievements
                            </strong>
                          </h3>
                          <ul className="list-outside list-disc pl-4 text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 mt-2">
                            <li className="pl-3">
                              I led the development of an award-winning mobile
                              app suite for a college campus, demonstrating your
                              capability to innovate and implement technology
                              solutions that have a significant impact on
                              community engagement and communication.
                            </li>
                            {/* <li className="pl-3">
                              Awarded the Top Rated & Rising Talent Badge on
                              Upwork for exceptional client satisfaction and
                              maintaining a 100% job success score.
                            </li>
                            <li className="pl-3">
                              Awarded the Top Rated & Rising Talent Badge on
                              Upwork for exceptional client satisfaction and
                              maintaining a 100% job success score.
                            </li>
                            <li className="pl-3">
                              Awarded the Top Rated & Rising Talent Badge on
                              Upwork for exceptional client satisfaction and
                              maintaining a 100% job success score.
                            </li> */}
                          </ul>
                        </section>
                      </div>
                    </div>
                  </section>
                  {/* References */}
                  <section
                    id="references"
                    className="relative -mx-4 scroll-mt-[122px] overflow-hidden px-4 spacing-4 print:!overflow-visible md:overflow-visible break-inside-avoid print:!hidden mt-5"
                  >
                    <header className="spacing-3 print:!-ml-24 ">
                      <h2 className="flex items-baseline">
                        <span className="flex items-baseline text-3xl font-bold tracking-tight text-gray-800 d:text-gray-100 print:!flex-1 print:!text-xl">
                          <span className="min-w-[105px] mb-4">References</span>
                          <hr className="ml-6 mr-24 hidden border-dashed border-gray-400 print:block print:!flex-1" />
                        </span>
                        <button
                          type="button"
                          className="group ml-auto mr-2 rounded p-2 text-gray-400/90 transition-colors hfa:outline-none hf:bg-gray-100 hf:text-gray-900 print:!hidden"
                        >
                          <span className="sr-only">
                            Toggle Section Visibility
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            className="h-4 w-4 transition-all"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      <hr className="h-px border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] print:!hidden mb-2" />
                    </header>
                    <div className="relative transition-all duration-200 ease-linear print:!max-h-max">
                      <div className="transition-[all,height] delay-[0s,0.2s]"></div>
                      <div className="spacing-10">
                        <figure className="max-w-prose spacing-2">
                          <div className="text-[15px] leading-relaxed text-gray-500 d:text-gray-300/90">
                            Sagar Hedaoo is a highly competent full-stack
                            developer. During his time in my Software
                            Requirements Analysis and Engineering class at
                            Stevens Institute of Technology, Sagar excelled
                            academically and practically, earning an A and
                            demonstrating meticulous attention to detail. He
                            independently developed an e-commerce website using
                            technologies such as JavaScript, React, NextJS, and
                            MongoDB, and showcased his proficiency with AWS and
                            Google Services. Sagar&apos;s ability to navigate
                            complex challenges, especially with Stripe’s API,
                            and his effective use of debugging tools like
                            Postman, distinguish him as both thoughtful and
                            resourceful. Sagar&apos;s enthusiasm and depth of
                            knowledge make him well-suited for challenging
                            programming roles. For more details, please contact
                            me at dmuresan@stevens.edu or 703.439.0067.
                          </div>
                          <figcaption>
                            <div className="font-semibold text-gray-600 d:text-gray-300/90">
                              David Darian Muresan
                            </div>
                            <div className="text-sm text-gray-400">
                              Founder & CTO at DMMD
                            </div>
                            <div className="text-sm text-gray-400">
                              Teaching Professor at Stevens Institute of
                              Technology
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </section>
                </div>
                <aside className="top-[144px] mb-auto max-h-min print:!hidden lg:sticky lg:spacing-8">
                  <figure className="relative -top-2 z-0 h-70 w-50 print:!absolute print:!left-40 print:!top-6">
                    <div className="flex h-full items-center justify-center px-2">
                      <BackgroundGradient className="rounded-[22px] max-w-sm bg-white dark:bg-zinc-900">
                        <img
                          src="/sagar-image.jpg"
                          width={402}
                          height={498}
                          className="rounded-[22px] shadow-xl shadow-sky-400/10"
                        />
                      </BackgroundGradient>
                    </div>
                  </figure>
                  <section className="spacing-6 print:!hidden">
                    <nav className="relative text-[15px] font-medium text-black-100 spacing-0 flex flex-col space-y-2">
                      <div className="button-border pointer-events-none absolute -z-10 select-none d:border-gray-300/50 border-none border-transparent bg-gray-100"></div>
                      <Link
                        className="rounded-md px-2 py-1 outline-none transition-all duration-75 hfa:outline-none hf:text-gray-700 hover:text-red-400"
                        href="/resume#summary"
                      >
                        Summary
                      </Link>
                      <Link
                        className="rounded-md px-2 py-1 outline-none transition-all duration-75 hfa:outline-none hf:text-gray-700 hover:text-red-400"
                        href="/resume#OpenSourceContributions"
                      >
                        OSS Contribution
                      </Link>
                      <Link
                        className="rounded-md px-2 py-1 outline-none transition-all duration-75 hfa:outline-none hf:text-gray-700 hover:text-red-400"
                        href="/resume#experience"
                      >
                        Experience
                      </Link>
                      <Link
                        className="rounded-md px-2 py-1 outline-none transition-all duration-75 hfa:outline-none hf:text-gray-700 hover:text-red-400"
                        href="/resume#projects"
                      >
                        Projects
                      </Link>
                      <Link
                        className="rounded-md px-2 py-1 outline-none transition-all duration-75 hfa:outline-none hf:text-gray-700 hover:text-red-400"
                        href="/resume#education"
                      >
                        Education
                      </Link>
                      <Link
                        className="rounded-md px-2 py-1 outline-none transition-all duration-75 hfa:outline-none hf:text-gray-700 hover:text-red-400"
                        href="/resume#skills"
                      >
                        Skills
                      </Link>
                      <Link
                        className="rounded-md px-2 py-1 outline-none transition-all duration-75 hfa:outline-none hf:text-gray-700 hover:text-red-400"
                        href="/resume#certifications"
                      >
                        Certifications
                      </Link>
                      <Link
                        className="rounded-md px-2 py-1 outline-none transition-all duration-75 hfa:outline-none hf:text-gray-700 hover:text-red-400"
                        href="/resume#references"
                      >
                        References
                      </Link>
                    </nav>
                  </section>
                  <section className="mt-2 spacing-1 print:!hidden ml-2">
                    <nav className="flex flex-wrap gap-2">
                      <a
                        target="_blank"
                        href="mailto:sagarhedaoo@gmail.com"
                        className="rounded p-1 text-gray-400 transition-all duration-75 hf:bg-gray-100 hf:text-gray-700 d:text-gray-300 d:hf:bg-gray-800/80 d:hf:text-gray-200"
                        data-tip="sagarhedaoo@gmail.com"
                      >
                        <span className="sr-only">Email Me</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#000000"
                          aria-hidden="true"
                          className="h-4 w-4"
                        >
                          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                        </svg>
                      </a>
                      <a
                        target="_blank"
                        href="https://github.com/sagarhedaoo"
                        rel="noopener noreferrer"
                        className="rounded p-1 text-gray-400 transition-all duration-75 hf:bg-gray-100 hf:text-gray-700 d:text-gray-300 d:hf:bg-gray-800/80 d:hf:text-gray-200"
                        data-tip="sagarhedaoo@gmail.com"
                      >
                        <span className="sr-only">GitHub</span>
                        <svg
                          stroke="currentColor"
                          fill="#000000"
                          stroke-width="0"
                          role="img"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title></title>
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                        </svg>
                      </a>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/sagarhedaoo/"
                        rel="noopener noreferrer"
                        className="rounded p-1 text-gray-400 transition-all duration-75 hf:bg-gray-100 hf:text-gray-700 d:text-gray-300 d:hf:bg-gray-800/80 d:hf:text-gray-200"
                        data-tip="LinkedIn"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg
                          stroke="#000000"
                          fill="#000000"
                          stroke-width="0"
                          role="img"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title></title>
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                        </svg>
                      </a>
                    </nav>
                  </section>
                </aside>
              </article>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Resume;
