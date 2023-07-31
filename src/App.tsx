import { ArrowPathIcon, ClipboardIcon } from "@heroicons/react/24/outline";
import { v4 as uuidv4 } from "uuid";

import { useCallback, useState } from "react";

const App = () => {
  return (
    <div className="h-screen bg-charcoal-900 flex flex-col">
      <div className="flex gap-4 p-4">
        <div className="text-5xl">🧰</div>
        <h1 className="text-5xl text-green-500 underline underline-offset-2">
          developer.toolbox
        </h1>
      </div>
      <div className="h-screen w-full flex justify-center items-center">
        <GuidGenerator />
      </div>
    </div>
  );
};

export default App;

const Toast = () => {
  return (
    <div className="fixed bottom-4 right-4 bg-green-500 p-4 w-60 rounded-lg shadow-lg text-center text-green-900 flex gap-1">
      <ClipboardIcon className="h-6 w-6" />
      Copied to clipboard
    </div>
  );
};

const GuidGenerator = () => {
  const [generatedGuid, setGeneratedGuid] = useState<string>(uuidv4());
  const [showToast, setShowToast] = useState<boolean>();

  const onRegenerate = useCallback(() => {
    setGeneratedGuid(uuidv4());
  }, []);

  const onCopy = useCallback(async () => {
    setShowToast(true);
    await navigator.clipboard.writeText(generatedGuid);

    const timerId = setTimeout(() => {
      setShowToast(false);
    }, 2000);
    return () => clearTimeout(timerId);
  }, [generatedGuid]);

  return (
    <div className="w-full lg:w-1/4">
      <form className="w-full">
        <div className="flex items-center border-b border-green-500 py-2 w-full">
          <input
            type="text"
            disabled={true}
            className="appearance-none bg-transparent border-none text-gray-400 mr-3 py-1 px-2 leading-tight focus:outline-none w-full"
            value={generatedGuid}
          />
          <button
            type="button"
            className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700 text-sm border-4 text-white py-1 px-2 rounded"
            onClick={onRegenerate}
          >
            <ArrowPathIcon className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="flex-shrink-0 border-transparent border-4 text-green-500 hover:text-green-800 text-sm py-1 px-2 rounded"
            onClick={onCopy}
          >
            <ClipboardIcon className="h-6 w-6" />
          </button>
        </div>
      </form>
      {showToast && <Toast />}
    </div>
  );
};
