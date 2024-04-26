import { useState } from "react";
import Note from "./components/Note";

let notes = [
  {
    title: "New Note 1",
    content: "New Content 1",
  },
  {
    title: "New Note 2",
    content: "New Content 2",
  },
  {
    title: "New Note 3",
    content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eos? Laborum natus adipisci at enim blanditiis neque vel molestias aliquam nulla consequuntur distinctio incidunt asperiores porro id illo velit culpa aspernatur, perspiciatis vitae ipsa! Dolorem architecto vero corporis at corrupti similique temporibus ab obcaecati ipsam facere velit suscipit aliquid et iure, commodi delectus itaque quaerat voluptatem alias neque iusto voluptatum repudiandae! Recusandae similique accusantium veniam, praesentium, sit dolorem dicta voluptatum eum iusto est pariatur nemo placeat at, porro quam rerum non facere optio. Excepturi sint beatae itaque iste vero nihil ipsa eligendi ducimus, cupiditate eveniet facilis autem amet, et corporis.",
  },
  
  {
    title: "New Note 4",
    content: "New Content 4",
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="m-10">
        <header className="mb-7">
          <h1 className="text-3xl font-bold">Personal Markdown Notes</h1>
        </header>

        <div id="note-list" className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {notes.map((note, i) => (
            <Note key={i} title={note.title} content={note.content} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
