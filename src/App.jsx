import { useContext, useState } from "react";
import Note from "./components/NoteCard";
import Notes from "./pages/Notes";
import Login from "./pages/Login";
import { AuthContext } from "./main";

function App() {
  const loggedUser = useContext(AuthContext);

  return (
    <>
      {/* Open notes when user is logged in */}
      {loggedUser ? <Notes /> : <Login />}
    </>
  );
}

export default App;
