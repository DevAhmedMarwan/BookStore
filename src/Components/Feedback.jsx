import React, { useState } from "react";

const Feedback = () => {
  const [open, setOpen] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const emojis = ["😠", "🙁", "😐", "🙂", "😍"];
  return (
    <div>
      <div className="Feedback">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={`fixed top-91 -right-23 -rotate-90 cursor-pointer origin-bottom-left bg-blue-600 text-white transition-all duration-300 !px-3 !py-1 rounded-md shadow-lg z-50
              ${open ? "right-67 transition" : ""}`}
        >
          Feedback
        </button>

        <div
          className={`fixed top-1/2 -translate-y-1/2 right-0 w-90 h-45 rounded-l-lg !pl-6 !pt-3 bg-white shadow-xl transition-transform duration-300 z-40 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="">
            <h2 className="text-md font-bold !pb-3 text-black">
              How would you rate your experience?
            </h2>
            <div className="flex gap-9">
              {emojis.map((emoji, index) => (
                <span
                  key={index}
                  onClick={() => setSelectedEmoji(index)}
                  className={`cursor-pointer text-2xl transition-all
        ${
          selectedEmoji === null
            ? "hover:scale-125"
            : selectedEmoji === index
            ? "scale-125"
            : "opacity-30 grayscale"
        }
      `}
                >
                  {emoji}
                </span>
              ))}
            </div>
            <div className="flex justify-between text-sm text-black !mb-4 !pt-3">
              <span>Not good at all</span>
              <span className="!pr-7">Very good</span>
            </div>
            <div className="flex justify-end gap-4 !mr-4">
              <button
                className="text-black underline cursor-pointer"
                onClick={""}
              >
                Skip
              </button>
              <button
                className={`!py-1 !px-3 rounded text-white
  ${
    selectedEmoji === null
      ? "bg-gray-400 opacity-50 cursor-not-allowed"
      : "bg-blue-600 cursor-pointer hover:bg-blue-700"
  }
`}
                onClick={() => {
                  if (selectedEmoji === null) return;
                  setOpen(false);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
