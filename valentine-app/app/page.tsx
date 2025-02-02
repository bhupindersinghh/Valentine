"use client";
import { useState, useEffect } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure the component runs only on the client to avoid hydration mismatch
    setIsClient(true);
  }, []);

  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Aren,t you my sweetie? MUAHHHH",
      "Pretty please",
      "With a cheese cake?",
      "What about tiramisu?",
      "PLEASE SWEETIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to bhupinder's ghost",
      "please baby",
      ":((((",
      "PRETTY PLEASE WITH PUPPY EYES",
      "My baby girl",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  // Return null or loading UI while waiting for hydration to be complete
  if (!isClient) return null;

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! I like you so much my sweetie ♥️</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
