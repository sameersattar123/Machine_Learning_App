import React from "react";

const HomePage = () => {
  return (
    <main className=" flex-1 flex flex-col justify-center gap-3 pb-20 text-center sm:gap-4 md:gap-5 p-4">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Free<span className="text-blue-400 bold">Scribe</span>
      </h1>
      <h3 className="font-medium md:text-lg">
        Record <span className="text-blue-400">&rarr;</span> Transcribe{" "}
        <span className="text-blue-400">&rarr;</span> Translate
      </h3>
      <button className="flex items-center justify-between specialBtn px-4 py-2 roundeed-xl text-base gap-4 w-72 max-w-full my-4 mx-auto">
        <p className="text-blue-400">Record</p>
        <i className="fa-solid duration-200 fa-microphone "></i>
      </button>
      <p className="text-base">
        Or <label className="text-blue-400 cursor-pointer hover:text-blue-600 duration-200">
          upload <input className="hidden" type="file" accept=".mp3,.wave" />
        </label>
        a mp3 file
      </p>
      <p className="italic text-slate-400">Free now free forever</p>
    </main>
  );
};

export default HomePage;
