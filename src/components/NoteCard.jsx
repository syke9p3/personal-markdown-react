import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getDateFromTimestamp, getTimeFromTimestamp } from "../utils/date";

const bgColors = [
  '#a3dd93',
  '#8badf4',
  '#92d6e3',
  '#f0c7c5',
  '#f7dad2',
  '#ef989e',
]

const Note = (props) => {
  const [note, setNote] = useState(props.note)
  const [color, setColor] = useState('#f7dad2');

  // TODO: extract to color utility so other files can use it

  const getRandomColor = () => {
    const randomIndex =  Math.floor(Math.random() * bgColors.length)
    return bgColors[randomIndex]
  }

  const timestamp = note.updatedAt || note.timestamp;
  const date = getDateFromTimestamp(timestamp);
  const time = getTimeFromTimestamp(timestamp);

  // TODO: implement color customization
  useEffect(() => {
    setColor(getRandomColor())
  }, [])

  return (
    <NavLink to={`/notes/${note.id}`}>
      <div className={`grid grid-cols-subgrid px-6 py-4 pb-6 text-[#0e1121] rounded-xl border border-black cursor-pointer hover:opacity-80 transition-all duration-150`}
        style={{backgroundColor: color}}
      >
        {/* Note Title */}
        <div className="mb-3 truncate note-title">
          <h3 className="text-2xl font-bold">{note.title}</h3>
        </div>
        {/* Note Content */}
        <pre className="/*bg-blue-50*/ text-ellipsis overflow-y-hidden pb-8 max-h-80">
          {note.content}
        </pre>
      <p className="text-sm opacity-70">{`${date} (${time})`}</p>
      </div>
    </NavLink>
  );
};

export default Note;
