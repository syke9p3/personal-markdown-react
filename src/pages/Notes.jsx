import React, { useContext, useEffect, useState } from "react";
import Note from "../components/NoteCard";
import PageLayout from "../components/PageLayout";
import { AuthContext } from "../main";
import { NavLink } from "react-router-dom";
import NoteCreator from "../components/NoteCreator";
import Counter from "../components/Counter";
import axios from "axios";
import { BsGrid } from "react-icons/bs";
import { MdTableRows } from "react-icons/md";
import useFetch from "../hooks/useFetch";
import Breadcrumb from "../components/Breadcrumb";

// TODO: make Nav component
const Notes = () => {
  const {
    data: notes,
    error,
    loading,
  } = useFetch(`http://localhost:3030/notes`);

  const [view, setView] = useState("list");

  const handleToggleView = (view) => {
    setView(view);
  };

  // if (loading || !notes) {
  //   return <PageLayout>Loading...</PageLayout>;
  // }

  console.log("notes");
  console.log(notes);

  // TODO: Toggle view grid, flex
  return (
    <PageLayout>
      <Breadcrumb />
      <main className="flex flex-col gap-10">
        <>
          <NoteCreator />
        </>

        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">My Notes</h1>
          <div className="flex rounded border border-gray-500">
            <button
              onClick={() => handleToggleView("grid")}
              className={`p-2 ${
                view == "grid" ? "border-gray-400 border-[0.5px]" : ""
              }`}
            >
              <BsGrid />
            </button>
            <button
              onClick={() => handleToggleView("list")}
              className={`p-2 ${
                view == "list" ? "border-gray-400 border-[0.5px]" : ""
              }`}
            >
              <MdTableRows />
            </button>
          </div>
        </header>

        {/* TODO: UI when notes are empty */}

        {notes ? (
          <div
            id="note-list"
            className={`${
              view === "grid"
                ? `grid grid-cols-1 items-center sm:grid-cols-2 lg:grid-cols-3`
                : `flex flex-col`
            } gap-3 transition-all duration-150`}
          >
            {notes.map((note, i) => (
              // <div key={i} className="grid grid-cols-subgrid">
              <Note key={i} note={note} />
              // </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}

        {/* Notes List */}
      </main>
    </PageLayout>
  );
};

export default Notes;
