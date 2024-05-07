import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const bgColors = [
  '#a3dd93',
  '#8badf4',
  '#92d6e3',
  '#f0c7c5',
  '#f7dad2',
  '#ef989e',
]

const Note = (props) => {
  const [noteId, setNoteId] = useState(props.note.id || "");
  const [noteTitle, setNoteTitle] = useState(props.note.title || "");
  const [noteContent, setContent] = useState(props.note.content || "");
  const [color, setColor] = useState('#f7dad2');

  // TODO: extract to color utility so other files can use it
  // TODO: display date and time - add timestamp to json

  const getRandomColor = () => {
    const randomIndex =  Math.floor(Math.random() * bgColors.length)
    return bgColors[randomIndex]
  }

  // TODO: implement color customization
  useEffect(() => {
    setColor(getRandomColor())
  }, [])

  return (
    <NavLink to={`/notes/${noteId}`}>
      <div className={`grid grid-cols-subgrid px-6 py-4 pb-8 text-[#0e1121] rounded-xl border border-black cursor-pointer hover:opacity-80 transition-all duration-150`}
        style={{backgroundColor: color}}
      >
        {/* Note Title */}
        <div className="mb-3 truncate note-title">
          <h3 className="text-2xl font-bold">{noteTitle}</h3>
        </div>
        {/* Note Content */}
        <pre className="/*bg-blue-50*/ text-ellipsis overflow-y-hidden pb-4 max-h-80">
          {noteContent}
        </pre>
      </div>
    </NavLink>
  );
};

export default Note;
