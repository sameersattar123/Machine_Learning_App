import React from "react";
import { LANGUAGES } from "../utils/presets";

const Translation = ({
  toLanguage,
  textElement,
  translating,
  generateTranslation,
  setToLanguage,
}) => {
  return (
    <>
      {(textElement && !translating) && <p>{textElement}</p>}
      {!translating && (
        <div className="flex flex-col gap-1 mb-4">
          <p className="text-xs sm:text-sm font-medium text-slate-500 mr-auto">
            To Language
          </p>
          <div className="flex items-stretch gap-2 sm:gap-4">
            <select
              value={toLanguage}
              onChange={(e) => setToLanguage(e.target.value)}
              className="flex-1 outline-none w-full focus:outline-none bg-white duration-200 p-2  rounded"
            >
              <option value={"Select Language"}>Select language</option>
              {Object.entries(LANGUAGES).map(([key, value]) => {
                return (
                  <option key={key} value={value}>
                    {key}
                  </option>
                );
              })}
            </select>
            <button
              className="pecialBtn px-3 py-2 rounded-lg text-blue-400 hover:text-blue-600 duration-200"
              onClick={generateTranslation}
            >
              Translate
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Translation;
