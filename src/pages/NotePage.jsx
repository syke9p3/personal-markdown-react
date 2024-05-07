import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

// TODO: implement color customization

const NotePage = () => {
  let { noteId } = useParams();
  const navigateTo = useNavigate();

  const {
    data: note,
    error,
    loading,
  } = useFetch(`http://localhost:3030/notes/${noteId}`);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("#f7dad2");

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
  };

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }

    setColor(getRandomColor());
  }, [note]);

  console.log("noteId: " + noteId);

  // TODO: create Breadcrumb component
  // TODO: search how other React apps implement breadcrumbs

  const handleEditNote = async (e) => {
    e.preventDefault();
    const editedNoteData = {
      title: title,
      content: content,
    };

    try {
      await axios.put(`http://localhost:3030/notes/${noteId}`, editedNoteData);
      console.log("Note saved");
      navigateTo('/')
    } catch (error) {
      console.error("Failed to save note:", error);
    }
  };

  return (
    <PageLayout>
      <Breadcrumb />

      {note ? (
        <div className="overflow-hidden pb-4 rounded-xl bg-[#252032]">
          <div className="cursor-pointer">
            {/* Note Title */}
            <div className="note-title">
              <input
                type="text"
                className="px-6 py-4 w-full text-2xl font-bold border-b outline-none border-b-black"
                placeholder="Create New Note"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            {/* Note Content */}
            <textarea
              type="text"
              className="px-6 py-4 w-full h-80 outline-none resize-none"
              placeholder="Take a note..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="flex justify-between px-3">
            <div></div>
            <button
              onClick={handleEditNote}
              className="mt-3 rounded-md py-2 font-bold bg-[#777cca] hover:bg-[#7d84e7] px-3 "
            >
              Save Note
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div>
        <p>Note title: {title}</p>
        <p>Note content: {content}</p>
      </div>
    </PageLayout>
  );
};

export default NotePage;
