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
                        career, I've engaged with numerous startups, taking on
                        roles as a lead developer and a founding member. This
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
                      </div>
                    </div>
                  </section>
                  {/* End of Experience */}
                </div>
              </article>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Resume;
