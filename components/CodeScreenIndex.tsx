import React, { useEffect, useRef } from "react";
import "highlight.js/styles/xcode.css";
// import "highlight.js/styles/monokai.css";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

const CodeScreenIndex = () => {
  // const codeRef = useRef(null);

  // useEffect(() => {
  //   hljs.highlightBlock(codeRef.current);
  // }, []);

  return (
    <div className="w-full h-full p-2 font-sourceCodePro overflow-hidden">
      <span>
        <span className="text-deepPurple">import</span>{" "}
        <span className="text-blue-600">
          {" "}
          React<span className="text-black">,</span>{" "}
          <span className="text-yellow-500">{"{"} </span>useState
          <span className="text-black">,</span> useEffect{" "}
          <span className="text-yellow-500">{"}"} </span>
        </span>
        <span className="text-purple1"> from </span>
        <span className="text-orange-500"> &apos;react&apos;;</span>
      </span>
      <br />
      <span>
        <span className="text-deepPurple">import</span>{" "}
        <span className="text-blue-600">axios </span>
        <span className="text-deepPurple">from </span>
        <span className="text-orange-500">&apos;axios&apos;;</span>
      </span>
      <br />
      <br />
      <span className="text-blue-600">
        interface <span className="text-green-500">WelcomeProps </span>
        <span className="text-yellow-500">{"{"}</span>
      </span>{" "}
      <br />
      <span className="ml-6 text-blue-400">
        {" "}
        message: <span className="text-green-500">string;</span>{" "}
      </span>{" "}
      <br />
      <span className="text-yellow-500">{"}"}</span>
      <br />
      <br />
      <span>
        const WelcomeComponent: REACT.FC{"<WelcomeProps>"}={" "}
        {"({ message }) => {"}{" "}
      </span>
      <br />
      <span className="ml-6">
        const {"["}loading, setLoading{"]"} = useState{"<boolean>(true)"};
      </span>
      <br />
      <br />
      <span className="ml-6">return {"("}</span>
      <br />
      <span className="ml-12">
        {"<"}div className=&ldquo;p-4 bg-gray-100 rounded shadow&ldquo;{">"}
      </span>{" "}
      <br />
      <span className="ml-16">
        {"<"}h1 className=&ldquo;text-2xl font-bold&ldquo;{">"}
        {"{message}"}
        {"</h1>"}
      </span>{" "}
      <br />
      <span className="ml-16">{"{"}loading ? (</span> <br />
      <span className="ml-20">
        {"<"}p{">"}Loading...{"</p>"}
      </span>{" "}
      <br />
      <span className="ml-16">) : {"("}</span> <br />
      <span className="ml-18">
        <span className="ml-24">
          {"<"}div className=&ldquo;mt-4&ldquo;{">"}
          <br />
          <span className="ml-28">
            {"<"}h2 className=&ldquo;text-xl&ldquo;{">"}
            {"Welcome to my Page"}
            {"</h2>"}
          </span>{" "}
          <br />
          <span className="ml-24">{"</div>"}</span>
        </span>
        <br />
        <span className="ml-16">{")}"}</span>
      </span>{" "}
      <br />
      <span className="ml-12">{"</div>"}</span> <br />
      <br />
      <br />
      <span>export default WelcomeComponent;</span>
    </div>
  );
};

export default CodeScreenIndex;
