import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import axios from "axios";
import Breadcrumb from "../components/Breadcrumb";
import useFetch from "../hooks/useFetch";

const bgColors = [
  "#a3dd93",
  "#8badf4",
  "#92d6e3",
  "#f0c7c5",
  "#f7dad2",
  "#ef989e",
];

const NotePage = () => {
  let { noteId } = useParams();

  const {
    data: note,
    error,
    loading,
  } = useFetch(`http://localhost:3030/notes/${noteId}`);

  const [color, setColor] = useState("#f7dad2");

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
  };

  // TODO: implement color customization
  useEffect(() => {
    setColor(getRandomColor());
  }, []);

  console.log("noteId");
  console.log(noteId);

  // TODO: create Breadcrumb component
  // TODO: search how other React apps implement breadcrumbs

  return (
    <PageLayout>
      <Breadcrumb />

      {note ? (
        <div
          className={`grid grid-cols-subgrid px-6 py-4 pb-8 text-[#0e1121] rounded-xl border border-black cursor-pointer hover:opacity-80 transition-all duration-150`}
          style={{ backgroundColor: color }}
        >
          {/* Note Title */}
          <div className="mb-3 truncate note-title">
            <h3 className="text-2xl font-bold">{note.title}</h3>
          </div>
          {/* Note Content */}
          <div className="/*bg-blue-50*/ text-ellipsis overflow-y-hidden pb-4 max-h-80">
            {note.content}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </PageLayout>
  );
};

export default NotePage;
