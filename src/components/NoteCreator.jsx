import React from "react";

// TODO: add Add New Note button
const NoteCreator = () => {

  const handleAddNote = () => {
    const note = note;
  }

  return (
    <div className="overflow-hidden pb-4 rounded-xl bg-[#252032]">
      <div className="cursor-pointer">
        {/* Note Title */}
        <div className="note-title">
          <input
            type="text"
            className="px-6 py-4 w-full text-2xl font-bold border-b outline-none border-b-black"
            placeholder="Create New Note"
          />
        </div>
        {/* Note Content */}
        <textarea
          type="text"
          className="px-6 py-4 w-full h-24 outline-none resize-none"
          placeholder="Take a note..."
        />
      </div>
      <div className="flex justify-between px-3">
        <div></div>
        <button onClick={handleAddNote} className="mt-3 rounded-md py-2 font-bold bg-[#777cca] hover:bg-[#7d84e7] px-3 ">
          Add New Note
        </button>
      </div>
    </div>
  );
};

export default NoteCreator;
