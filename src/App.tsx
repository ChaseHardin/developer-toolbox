import { ArrowPathIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";

import { useCallback, useState } from "react";

const App = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-zinc-800">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col gap-1 items-center">
          <div className="text-8xl">🧰</div>
          <h1 className="text-5xl font-bold text-zinc-400">
            developer.toolbox
          </h1>
        </div>
        <div className="w-1/4">
          <GuidGenerator />
        </div>
      </div>
    </div>
  );
};

export default App;

const GuidGenerator = () => {
  const [generatedGuid, setGeneratedGuid] = useState<string>(uuidv4());

  const onRegenerate = useCallback(() => {
    setGeneratedGuid(uuidv4());
  }, []);

  const onCopy = useCallback(async () => {
    await navigator.clipboard.writeText(generatedGuid);
  }, [generatedGuid]);

  return (
    <form className="w-full">
      <div className="flex items-center border-b border-teal-500 py-2 w-full">
        <input
          type="text"
          disabled={true}
          className="appearance-none bg-transparent border-none text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none w-full"
          value={generatedGuid}
        />
        <button
          type="button"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          onClick={onRegenerate}
        >
          <ArrowPathIcon className="h-6 w-6" />
        </button>
        <button
          type="button"
          className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded"
          onClick={onCopy}
        >
          <ClipboardIcon className="h-6 w-6" />
        </button>
      </div>
    </form>
  );
};
