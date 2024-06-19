import React, { useState } from "react";
import Transcription from "./Transcription";
import Translation from "./Translation";

const Information = () => {
  const [tab, setTab] = useState("transcription");
  return (
    <main className="flex-1 p-4 flex flex-col gap-3 sm:gap-4 text-center mx-auto w-full mx-w-prose pb-20 justify-center ">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap">
        Your <span className="text-blue-400 bold">Transcription</span>
      </h1>
      <div className="max-auto grid grid-cols-2 sm:mx-auto bg-white  rounded overflow-hidden items-center p-1 blueShadow border-[2px] border-solid border-blue-300">
        <button
          onClick={() => setTab("transcription")}
          className={
            "px-4 duration-200 py-2 font-medium" +
            (tab === "transcription"
              ? " bg-blue-300 text-white"
              : " text-blue-400 hover:text-blue-600")
          }
        >
          Transcription
        </button>
        <button
          onClick={() => setTab("translation")}
          className={
            "px-4 duration-200 py-2 font-medium" +
            (tab === "translation"
              ? " bg-blue-300 text-white"
              : " text-blue-400 hover:text-blue-600")
          }
        >
          Translation
        </button>
      </div>
      {tab === "transcription"? <Transcription textElement={"sameer"} /> : <Translation />}
    </main>
  );
};

export default Information;
