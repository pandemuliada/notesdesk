import { atom, useRecoilState } from "recoil";

interface INote {
  id: String | Number | null;
  title: String;
  content: String;
}

const noteState = atom({
  key: "note",
  default: null as INote | null,
});

const noteTitleState = atom({
  key: "noteTitle",
  default: "",
});

const noteContentState = atom({
  key: "noteContent",
  default: "",
});

const useNote = () => {
  const [note, setNote] = useRecoilState(noteState);
  const [title, setTitle] = useRecoilState(noteTitleState);
  const [content, setContent] = useRecoilState(noteContentState);

  const loadNote = (noteId: String) => {
    // Load note from database
  };

  const addNote = (
    note: INote = { id: null, title: "New Note", content: "" }
  ) => {
    console.log(note.title, note.content);
    // Add new note into database
  };

  const saveNote = (noteId: String) => {
    // Save note (title, content, updated_at)
  };

  return {
    note, // Note obj
    setNote,

    title,
    setTitle,
    content,
    setContent,

    loadNote,
    addNote,
    saveNote,
  };
};

export default useNote;
