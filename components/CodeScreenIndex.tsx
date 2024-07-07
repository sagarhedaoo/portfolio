import React from "react";

const CodeScreenIndex = () => {
  return (
    <div className="w-full h-full p-2 font-sourceCodePro overflow-scroll">
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
      <span className="text-black">
        <span className="text-blue-500">const </span>
        <span className="text-blue-600">WelcomeComponent</span>
        <span className="text-black">:</span>{" "}
        <span className="text-green-500">REACT</span>.
        <span className="text-green-500">FC</span>
        <span className="text-yellow-500">{"<"}</span>
        <span className="text-green-500">WelcomeProps</span>
        <span className="text-yellow-500">{">"}</span>{" "}
        <span className="text-black">= </span>
        <span className="text-yellow-500">{"("}</span>
        <span className="text-deepPurple">{"{"}</span>
        <span className="text-blue-300"> message </span>
        <span className="text-deepPurple">{"}"}</span>
        <span className="text-yellow-500">{")"}</span>
        <span className="text-blue-300">{" => "}</span>
        <span className="text-yellow-500">{"{"}</span>
      </span>
      <br />
      <span className="ml-6 text-black">
        <span className="text-blue-500">const </span>
        <span className="text-deepPurple">{"["}</span>
        <span className="text-blue-500">loading</span>,{" "}
        <span className="text-orange-400">setLoading</span>
        <span className="text-deepPurple">{"]"}</span> ={" "}
        <span className="text-orange-400">useState</span>
        <span className="text-deepPurple">{"<"}</span>
        <span className="text-green-500">boolean</span>
        <span className="text-deepPurple">{">("}</span>
        <span className="text-blue-500">true</span>
        <span className="text-deepPurple">{")"}</span>;
      </span>
      <br />
      <br />
      <span className="ml-6 text-deepPurple">return {"("}</span>
      <br />
      <span className="ml-12 text-black">
        <span className="text-gray-300">{"<"}</span>
        <span className="text-blue-600">div </span>
        <span className="text-blue-500">className</span>=
        <span className="text-orange-400">
          &ldquo;p-4 bg-gray-100 rounded shadow&ldquo;
        </span>
        <span className="text-gray-300">{">"}</span>
      </span>{" "}
      <br />
      <span className="ml-16">
        <span className="text-gray-300">{"<"}</span>
        <span className="text-blue-600">h1 </span>
        <span className="text-blue-500">className</span>=
        <span className="text-orange-400">
          &ldquo;text-2xl font-bold&ldquo;
        </span>
        <span className="text-gray-300">{">"}</span>
      </span>{" "}
      <br />
      <span className="text-black ml-20">
        <span className="text-blue-600">{"{"} </span>
        <span className="text-blue-500">loading</span> ?
        <span className="text-yellow-500">{" ("}</span>
        <br />
        <span className="ml-24 text-black">
          <span className="text-gray-300">{"<"}</span>
          <span className="text-blue-600">p</span>
          <span className="text-gray-300">{">"}</span>Loading...
          <span className="text-gray-300">{"<"}</span>
          <span className="text-blue-600">p</span>
          <span className="text-gray-300">{"/>"}</span>
        </span>{" "}
      </span>
      <br />
      <span className="ml-24">
        <span className="text-yellow-500">{")"}</span> :{" "}
        <span className="text-yellow-500">{"("}</span>
      </span>{" "}
      <br />
      <span className="ml-28 text-black">
        <span className="text-gray-300">{"<"}</span>
        <span className="text-blue-600">div </span>
        <span className="text-blue-500">className</span>=
        <span className="text-orange-400">&ldquo;mt-4&ldquo;</span>
        <span className="text-gray-300">{">"}</span>
      </span>{" "}
      <br />
      <span className="ml-32">
        <span className="text-gray-300">{"<"}</span>
        <span className="text-blue-600">h2 </span>
        <span className="text-blue-500">className</span>=
        <span className="text-orange-400">&ldquo;text-xl&ldquo;</span>
        <span className="text-gray-300">{">"}</span>
      </span>{" "}
      <br />
      <span className="ml-40">
        <span className="text-deepPurple">{"{"}</span>
        <span className="text-blue-500">message</span>
        <span className="text-deepPurple">{"}"}</span>
      </span>
      <br />
      <span className="ml-32">
        <span className="text-gray-300">{"<"}</span>
        <span className="text-blue-600">h2</span>

        <span className="text-gray-300">{"/>"}</span>
      </span>{" "}
      <br />
      <span className="ml-28">
        <span className="text-gray-300">{"<"}</span>
        <span className="text-blue-600">div</span>

        <span className="text-gray-300">{"/>"}</span>
      </span>{" "}
      <br />
      <span className="ml-24">
        <span className="text-yellow-500">{")"}</span>
        <span className="text-blue-600">{"}"} </span>
      </span>
      <br />
      <span className="ml-12">
        <span className="text-gray-300">{"<"}</span>
        <span className="text-blue-600">div</span>

        <span className="text-gray-300">{"/>"}</span>
      </span>
      <br />
      <span className="ml-8 text-black">
        <span className="text-deepPurple">{")"}</span>;
      </span>
      <br />
      <span className="ml-4 text-black">
        <span className="text-yellow-500">{"}"}</span>;
      </span>
      <br />
      <br />
      <span>
        <span className="text-deepPurple">export default </span>
        <span className="text-blue-600">WelcomeComponent</span>;
      </span>
    </div>
  );
};

export default CodeScreenIndex;
