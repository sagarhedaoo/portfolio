import React from "react";
import "tailwindcss/tailwind.css";

const Resume = () => {
  return (
    <div className="min-h-screen print:!mx-auto print:!w-[1024px]">
      <table className="margin-0 padding-0 relative block min-h-screen appearance-none border-none text-gray-900 print:!table [&_td]:p-0">
        <tbody className="block print:table-row-group print:!h-screen print:!min-h-screen">
          <tr className="block print:!table-row">
            <td className="block print:!table-cell">
              <article className="relative mx-auto mb-16 grid max-w-6xl gap-12 px-4 py-16 print:!flex print:!py-0 print:!pl-24 md:px-8 lg:grid-cols-[1fr_200px] print:[&_*]:![-webkit-print-color-adjust:exact] print:[&_*]:![color-adjust:exact] print:[&_*]:![print-color-adjust:exact]">
                <div className="snap-y snap-normal spacing-10">
                  <section className="relative -mx-4 scroll-mt-[122px] overflow-hidden px-4 spacing-4 print:!overflow-visible md:overflow-visible break-inside-avoid print:!max-w-3xl">
                    <header className="spacing-3 print:!-ml-24 ">
                      <h2 className="flex items-baseline">
                        <span className="flex items-baseline text-3xl font-bold tracking-tight text-gray-800 d:text-gray-100 print:!flex-1 print:!text-xl">
                          <span className="min-w-[105px]">Summary</span>
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
                      <hr className="h-px border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] print:!hidden" />
                    </header>
                    <div className="relative transition-all duration-200 ease-linear print:!max-h-max">
                      <div className="transition-[all,height] delay-[0s,0.2s]"></div>
                      <p className="text-[15px] leading-relaxed text-gray-500 d:text-gray-300 print:!-ml-24 print:!max-w-3xl print:!text-base">
                        I am a passionate self-taught software developer and a
                        young entrepreneur looking for a new challenge. I
                        specialize in front-end and backend development using
                        Typescript, React.js, Node.js & AWS. Throughout my
                        career, I&apos;ve engaged with numerous startups, taking
                        on roles as a lead developer and a founding member. This
                        experience has not only sharpened my technical skills
                        but also honed my ability to build products from scratch
                        and thrive in environments that challenge me to learn
                        and grow.
                      </p>
                    </div>
                  </section>
                  {/* Start of Exp */}
                  <section className="relative -mx-4 scroll-mt-[122px] overflow-hidden px-4 spacing-4 print:!overflow-visible md:overflow-visible">
                    <header className="spacing-3 print:!-ml-24 ">
                      <h2 className="flex items-baseline">
                        <span className="flex items-baseline text-3xl font-bold tracking-tight text-gray-800 d:text-gray-100 print:!flex-1 print:!text-xl">
                          <span className="min-w-[105px]">Experience</span>
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
                      <hr className="h-px border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] print:!hidden" />
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
                                    Apr 2023{" "}
                                    <span className="hidden print:!inline xl:inline" />
                                  </div>
                                  <div className="whitespace-nowrap">
                                    Present
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
                                  SDE
                                </strong>
                                <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
                                  <span className="font-semibold text-gray-600 d:text-gray-400">
                                    Company Name
                                  </span>
                                  <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                    -
                                  </span>
                                  <span className="text-gray-500/80 print:!text-gray-500">
                                    India
                                  </span>
                                </span>
                                <div className="flex gap-2 whitespace-nowrap text-xs font-semibold text-gray-500 d:text-gray-400 print:!hidden md:hidden">
                                  <span>Apr 2023</span>
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
                                  Handling client relations from first contact
                                  to project delivery, ensuring customer
                                  satisfaction
                                </li>
                                <li className="pl-3">
                                  Handling client relations from first contact
                                  to project delivery, ensuring customer
                                  satisfaction
                                </li>
                                <li className="pl-3">
                                  Handling client relations from first contact
                                  to project delivery, ensuring customer
                                  satisfaction
                                </li>
                              </ul>
                            </div>
                          </div>
                        </section>
                        {/* End of First Exp */}
                        {/* Second Exp */}
                        <section className="relative mb-auto break-inside-avoid-page">
                          <div className="relative flex">
                            <aside className="absolute left-[4.5rem] top-1 hidden h-full print:!left-4 print:!block md:block xl:left-6 2xl:left-4 ">
                              <h3 className="absolute right-full top-0 pr-6 text-right text-xs font-medium leading-[16px] text-gray-400 print:!pr-8 print:!text-sm print:!text-gray-600 xl:pr-8">
                                <div className="spacing-1">
                                  <div className="whitespace-nowrap print:!mr-0 xl:mr-2">
                                    Apr 2023{" "}
                                    <span className="hidden print:!inline xl:inline" />
                                  </div>
                                  <div className="whitespace-nowrap">
                                    Present
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
                                  SDE
                                </strong>
                                <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
                                  <span className="font-semibold text-gray-600 d:text-gray-400">
                                    Company Name
                                  </span>
                                  <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                    -
                                  </span>
                                  <span className="text-gray-500/80 print:!text-gray-500">
                                    India
                                  </span>
                                </span>
                                <div className="flex gap-2 whitespace-nowrap text-xs font-semibold text-gray-500 d:text-gray-400 print:!hidden md:hidden">
                                  <span>Apr 2023</span>
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
                                  Handling client relations from first contact
                                  to project delivery, ensuring customer
                                  satisfaction
                                </li>
                                <li className="pl-3">
                                  Handling client relations from first contact
                                  to project delivery, ensuring customer
                                  satisfaction
                                </li>
                                <li className="pl-3">
                                  Handling client relations from first contact
                                  to project delivery, ensuring customer
                                  satisfaction
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
                  <section className="relative -mx-4 scroll-mt-[122px] overflow-hidden px-4 spacing-4 print:!overflow-visible md:overflow-visible break-inside-avoid">
                    <header className="spacing-3 print:!-ml-24 ">
                      <h2 className="flex items-baseline">
                        <span className="flex items-baseline text-3xl font-bold tracking-tight text-gray-800 d:text-gray-100 print:!flex-1 print:!text-xl">
                          <span className="min-w-[105px]">Projects</span>
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
                      <hr className="h-px border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] print:!hidden" />
                    </header>
                    <div className="relative transition-all duration-200 ease-linear print:!max-h-max">
                      <div className="transition-[all,height] delay-[0s,0.2s]"></div>
                      <div className="spacing-8 print:!spacing-3">
                        {/* First Project Start */}
                        <section className="ml-0 spacing-1 print:!-ml-24">
                          <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                              Project Name 1
                            </strong>
                            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
                              <span className="font-semibold text-gray-600 d:text-gray-400">
                                Details
                              </span>
                              <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                -
                              </span>
                              <span className="text-gray-400/80 print:!text-gray-500">
                                <span className="hidden print:!inline sm:inline">
                                  MERN + AWS
                                </span>
                              </span>
                            </span>
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-600 d:text-gray-300">
                            Description
                          </p>
                        </section>
                        {/* First Project End */}
                        {/* Second Project Start */}
                        <section className="ml-0 spacing-1 print:!-ml-24">
                          <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                              Project Name 2
                            </strong>
                            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
                              <span className="font-semibold text-gray-600 d:text-gray-400">
                                Details
                              </span>
                              <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                -
                              </span>
                              <span className="text-gray-400/80 print:!text-gray-500">
                                <span className="hidden print:!inline sm:inline">
                                  MERN + AWS
                                </span>
                              </span>
                            </span>
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-600 d:text-gray-300">
                            Description
                          </p>
                        </section>
                        {/* Second Project End */}
                        {/* Third Project Start */}
                        <section className="ml-0 spacing-1 print:!-ml-24">
                          <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                              Project Name 1
                            </strong>
                            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
                              <span className="font-semibold text-gray-600 d:text-gray-400">
                                Details
                              </span>
                              <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                -
                              </span>
                              <span className="text-gray-400/80 print:!text-gray-500">
                                <span className="hidden print:!inline sm:inline">
                                  MERN + AWS
                                </span>
                              </span>
                            </span>
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-600 d:text-gray-300">
                            Description
                          </p>
                        </section>
                        {/* Third Project End */}
                        {/* Fourth Project Start */}
                        <section className="ml-0 spacing-1 print:!-ml-24">
                          <h3 className="items-baseline text-sm tracking-normal spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-[16px] print:!font-bold">
                              Project Name 1
                            </strong>
                            <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0 print:!text-[16px]">
                              <span className="font-semibold text-gray-600 d:text-gray-400">
                                Details
                              </span>
                              <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                -
                              </span>
                              <span className="text-gray-400/80 print:!text-gray-500">
                                <span className="hidden print:!inline sm:inline">
                                  MERN + AWS
                                </span>
                              </span>
                            </span>
                          </h3>
                          <p className="text-sm leading-relaxed text-gray-600 d:text-gray-300">
                            Description
                          </p>
                        </section>
                        {/* Fourth Project End */}
                      </div>
                    </div>
                  </section>
                  <section className="relative -mx-4 scroll-mt-[122px] overflow-hidden px-4 spacing-4 print:!overflow-visible md:overflow-visible break-inside-avoid">
                    <header className="spacing-3 print:!-ml-24 ">
                      <h2 className="flex items-baseline">
                        <span className="flex items-baseline text-3xl font-bold tracking-tight text-gray-800 d:text-gray-100 print:!flex-1 print:!text-xl">
                          <span className="min-w-[105px]">Education</span>
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
                      <hr className="h-px border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] print:!hidden" />
                    </header>
                    <div className="relative transition-all duration-200 ease-linear print:!max-h-max">
                      <div className="transition-[all,height] delay-[0s,0.2s]"></div>
                      <div className="spacing-8">
                        {/* Start of Stevens */}
                        <section className="relative flex">
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
                            <i className="absolute left-0 top-6 h-[calc(100%-2px)] w-0.5 -translate-x-1/2 bg-gradient-to-b from-gray-200 to-transparent d:from-gray-800 print:!via-gray-200"></i>
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
                                Coursework
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
                                As Treasurer of Pradnyan ACM Student Chapter
                                DYPCOE, led event management and contributed to
                                technical workshops on Java, Python, and
                                ReactJS.
                              </li>
                              <li className="pl-3">
                                As Treasurer of Pradnyan ACM Student Chapter
                                DYPCOE, led event management and contributed to
                                technical workshops on Java, Python, and
                                ReactJS.
                              </li>
                            </ul>
                          </div>
                        </section>
                        {/* End Stevens */}
                        {/* Start of SPPU */}
                        <section className="relative flex">
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
                                Coursework
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
                                As Treasurer of Pradnyan ACM Student Chapter
                                DYPCOE, led event management and contributed to
                                technical workshops on Java, Python, and
                                ReactJS.
                              </li>
                              <li className="pl-3">
                                As Treasurer of Pradnyan ACM Student Chapter
                                DYPCOE, led event management and contributed to
                                technical workshops on Java, Python, and
                                ReactJS.
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
                  <section className="relative -mx-4 scroll-mt-[122px] overflow-hidden px-4 spacing-4 print:!overflow-visible md:overflow-visible break-inside-avoid">
                    <header className="spacing-3 print:!-ml-24 ">
                      <h2 className="flex items-baseline">
                        <span className="flex items-baseline text-3xl font-bold tracking-tight text-gray-800 d:text-gray-100 print:!flex-1 print:!text-xl">
                          <span className="min-w-[105px]">Skills</span>
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
                      <hr className="h-px border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] print:!hidden" />
                    </header>
                    <div className="relative transition-all duration-200 ease-linear print:!max-h-max">
                      <div className="transition-[all,height] delay-[0s,0.2s]"></div>
                      <div className="spacing-8 print:!-ml-24 print:!spacing-3">
                        <section className="relative max-w-prose spacing-1 print:!grid print:!max-w-3xl print:!grid-cols-[175px_1fr]">
                          <h3 className="items-baseline text-sm tracking-tight spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-sm print:!font-semibold ">
                              Languages
                            </strong>
                          </h3>
                          <p className="text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!mt-0">
                            English - Fluent, Hindi - Fluent
                          </p>
                        </section>
                        <section className="relative max-w-prose spacing-1 print:!grid print:!max-w-3xl print:!grid-cols-[175px_1fr]">
                          <h3 className="items-baseline text-sm tracking-tight spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-sm print:!font-semibold ">
                              Programming Lnagauges
                            </strong>
                          </h3>
                          <p className="text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!mt-0">
                            TypeScript, JavaScript, Python, HTML, CSS, SQL, C++,
                            Markdown
                          </p>
                        </section>
                        <section className="relative max-w-prose spacing-1 print:!grid print:!max-w-3xl print:!grid-cols-[175px_1fr]">
                          <h3 className="items-baseline text-sm tracking-tight spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-sm print:!font-semibold ">
                              Libraries & Frameworks
                            </strong>
                          </h3>
                          <p className="text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!mt-0">
                            React, Next.js, Node.js, Express, Angular, Redux,
                            React Query, Redux Toolkit, Styled Components,
                            Mantine, Bootstrap, Material-UI, Tailwindcss, Prisma
                          </p>
                        </section>
                        <section className="relative max-w-prose spacing-1 print:!grid print:!max-w-3xl print:!grid-cols-[175px_1fr]">
                          <h3 className="items-baseline text-sm tracking-tight spacing-1 ">
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
                          <h3 className="items-baseline text-sm tracking-tight spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-sm print:!font-semibold ">
                              Databases
                            </strong>
                          </h3>
                          <p className="text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!mt-0">
                            MongoDB, PostgreSQL, MySQL, Firebase, Supabase
                          </p>
                        </section>
                        <section className="relative max-w-prose spacing-1 print:!grid print:!max-w-3xl print:!grid-cols-[175px_1fr]">
                          <h3 className="items-baseline text-sm tracking-tight spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100 print:!text-sm print:!font-semibold ">
                              Tools & Platforms
                            </strong>
                          </h3>
                          <p className="text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600 print:!mt-0">
                            Figma, Canva, Illustrator, Photoshop, Yarn, NPM,
                            Postman, Dev Tools, MS Office, Shopify, WordPress
                          </p>
                        </section>
                      </div>
                    </div>
                  </section>
                  {/* Certifications */}
                  <section className="relative -mx-4 scroll-mt-[122px] overflow-hidden px-4 spacing-4 print:!overflow-visible md:overflow-visible break-inside-avoid">
                    <header className="spacing-3 print:!-ml-24 ">
                      <h2 className="flex items-baseline">
                        <span className="flex items-baseline text-3xl font-bold tracking-tight text-gray-800 d:text-gray-100 print:!flex-1 print:!text-xl">
                          <span className="min-w-[105px]">Certifications</span>
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
                      <hr className="h-px border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] print:!hidden" />
                    </header>
                    <div className="relative transition-all duration-200 ease-linear print:!max-h-max">
                      <div className="transition-[all,height] delay-[0s,0.2s]"></div>
                      <div className="spacing-6 print:!-ml-24">
                        <section>
                          <ul className="text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600">
                            <li>
                              <span className="inline-flex items-baseline gap-2">
                                <span className="text-xs font-medium leading-[16px] text-gray-400 d:text-gray-500 print:!text-sm">
                                  2023
                                </span>
                                <span className="select-none text-sm text-gray-300 print:!text-gray-500">
                                  -
                                </span>
                                <span className="print:!text-base">
                                  Certification Name
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
                                  Certification Name
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
                                  Certification Name
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
                                  Certification Name
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
                                  Certification Name
                                </span>
                              </span>
                            </li>
                          </ul>
                        </section>
                        {/* Achievement */}
                        <section className="relative max-w-prose spacing-1">
                          <h3 className="items-baseline text-sm tracking-tight spacing-1 ">
                            <strong className="text-[17px] font-bold text-gray-900 d:text-gray-100">
                              Achievements
                            </strong>
                          </h3>
                          <ul className="list-outside list-disc pl-4 text-sm text-gray-500 marker:text-gray-400 d:text-gray-300/80 d:marker:text-gray-600">
                            <li className="pl-3">
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
                            </li>
                            <li className="pl-3">
                              Awarded the Top Rated & Rising Talent Badge on
                              Upwork for exceptional client satisfaction and
                              maintaining a 100% job success score.
                            </li>
                          </ul>
                        </section>
                      </div>
                    </div>
                  </section>
                  {/* References */}
                  <section className="relative -mx-4 scroll-mt-[122px] overflow-hidden px-4 spacing-4 print:!overflow-visible md:overflow-visible break-inside-avoid print:!hidden">
                    <header className="spacing-3 print:!-ml-24 ">
                      <h2 className="flex items-baseline">
                        <span className="flex items-baseline text-3xl font-bold tracking-tight text-gray-800 d:text-gray-100 print:!flex-1 print:!text-xl">
                          <span className="min-w-[105px]">References</span>
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
                      <hr className="h-px border-none bg-[linear-gradient(90deg,var(--line-color),var(--line-color)_50%,transparent_0,transparent)] bg-[length:8px_1px] [--line-color:theme(colors.gray.300/40)] d:[--line-color:theme(colors.gray.700/20)] print:!hidden" />
                    </header>
                    <div className="relative transition-all duration-200 ease-linear print:!max-h-max">
                      <div className="transition-[all,height] delay-[0s,0.2s]"></div>
                      <div className="spacing-10">
                        <figure className="max-w-prose spacing-2">
                          <div className="text-[15px] leading-relaxed text-gray-500 d:text-gray-300/90">
                            Reference 1
                          </div>
                          <figcaption>
                            <div className="font-semibold text-gray-600 d:text-gray-300/90">
                              Name
                            </div>
                            <div className="text-sm text-gray-400">
                              Designation
                            </div>
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </section>
                </div>
                <aside className="top-[144px] mb-auto hidden max-h-min print:!hidden lg:sticky lg:spacing-8">
                  <figure className="relative -top-2 z-0 ml-2 h-48 w-[9.5rem] rotate-6 print:!absolute print:!left-40 print:!top-6">
                    <div className="absolute -inset-x-10 top-0 h-0.5 bg-gray-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] d:bg-gray-50/20"></div>
                    <div className="absolute -inset-y-10 right-0 w-0.5 bg-gray-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] d:bg-gray-50/20"></div>
                    <div className="absolute -inset-x-10 bottom-0 h-0.5 bg-gray-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] d:bg-gray-50/20"></div>
                    <div className="absolute -inset-y-10 left-0 w-0.5 bg-gray-900/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)] d:bg-gray-50/20"></div>
                    <div className="absolute bottom-full right-0 -mb-px flex h-8 items-end overflow-hidden">
                      <div className="-mb-px flex h-[2px] w-44 -scale-x-100">
                        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      </div>
                    </div>
                    <div className="absolute left-2 top-[calc(100%-1px)] -mb-px flex h-8 items-start overflow-hidden">
                      <div className="-mt-px flex h-[2px] w-44 -scale-x-100">
                        <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                        <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                      </div>
                    </div>
                    <div className="flex h-full items-center justify-center px-2">
                      <img
                        src="/sagar-image.jpg"
                        width={352}
                        height={448}
                        className="rounded-sm shadow-xl shadow-sky-400/10"
                      />
                    </div>
                  </figure>
                  <section className="spacing-6 print:!hidden">
                    <div className="relative whitespace-nowrap text-[15px] font-medium text-gray-300 spacing-0">
                      <div
                        className="button-border /*-translate-y-1/2*/ pointer-events-none absolute -z-10 select-none d:border-gray-300/50 border-none border-transparent bg-gray-100"
                        // style="opacity: 0 width: 0px height: 0px left: 0px top: 0px transition: opacity 0.1s ease 0s border-radius: 0px"
                      ></div>
                      {/* <a
                        className="-ml-2 w-min rounded-md px-2 py-1 outline-none transition-all duration-75 hfa:outline-none hf:text-gray-700"
                        href="/resume#summary"
                      >
                        Summary
                      </a> */}
                    </div>
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
