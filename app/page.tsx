"use client";

import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const [file, setFile] = useState("about");

  const renderFile = () => {
    switch (file) {
      case "about":
        return (
          <>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-green-400">aboutMe</span> = {"{"}
            <br />
            &nbsp;&nbsp;name: <span className="text-yellow-300">"Jabu"</span>,
            <br />
            &nbsp;&nbsp;role:{" "}
            <span className="text-yellow-300">"Full Stack Developer"</span>,
            <br />
            &nbsp;&nbsp;focus:{" "}
            <span className="text-yellow-300">
              "Web, Data, Cloud"
            </span>,
            <br />
            {"}"};
          </>
        );

      case "projects":
        return (
          <>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-green-400">projects</span> = [
            <br />
            &nbsp;&nbsp;
            <span className="text-yellow-300">"Beauty Platform"</span>,
            <br />
            &nbsp;&nbsp;
            <span className="text-yellow-300">"Student Portal"</span>,
            <br />
            &nbsp;&nbsp;
            <span className="text-yellow-300">"Data Dashboards"</span>,
            <br />
            ];
          </>
        );

      case "contact":
        return (
          <>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-green-400">contact</span> = {"{"}
            <br />
            &nbsp;&nbsp;email:{" "}
            <span className="text-yellow-300">"you@email.com"</span>,
            <br />
            &nbsp;&nbsp;github:{" "}
            <span className="text-yellow-300">
              "github.com/Jabutec"
            </span>,
            <br />
            {"}"};
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-[#0d1117] text-white">
      
      {/* Sidebar */}
      <div className="w-56 bg-[#161b22] p-4 border-r border-gray-800">
        <h3 className="text-sm text-gray-400 mb-4">EXPLORER</h3>

        <p
          onClick={() => setFile("about")}
          className="cursor-pointer hover:bg-gray-700 p-1 rounded"
        >
          📄 about.ts
        </p>

        <p
          onClick={() => setFile("projects")}
          className="cursor-pointer hover:bg-gray-700 p-1 rounded"
        >
          📄 projects.ts
        </p>

        <p
          onClick={() => setFile("contact")}
          className="cursor-pointer hover:bg-gray-700 p-1 rounded"
        >
          📄 contact.ts
        </p>
      </div>

      {/* Editor */}
      <div className="flex-1 p-6">
        <div className="bg-[#161b22] h-full rounded-xl shadow-lg p-6 border border-gray-800">
          
          {/* Fake tabs */}
          <div className="mb-4 text-sm text-gray-400">
            {file}.ts
          </div>
          {/* Terminal */}
<div className="bg-black text-green-400 font-mono text-sm p-3 rounded mb-4 border border-gray-800">
  <span className="text-gray-500">$ </span>
  <Typewriter
    words={["npm run dev", "Starting server...", "Portfolio ready 🚀"]}
    loop={false}
    cursor
    cursorStyle="_"
    typeSpeed={50}
    deleteSpeed={30}
    delaySpeed={1000}
  />
</div>

          {/* Code */}
          <pre className="font-mono text-sm leading-6">
            {renderFile()}
          </pre>
        </div>
      </div>

    </div>
  );
}