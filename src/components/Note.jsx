import React, { useState } from "react";

const Note = (props) => {
  const [title, setTitle] = useState(props.title || "");
  const [content, setContent] = useState(props.content || "");

  return (
    <div class="px-6 py-4 pb-8 rounded-lg border border-black">
      <div class="mb-3 note-title">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div class="/*bg-blue-50*/ note-content">{content}</div>
    </div>
  );
};

export default Note;
