import { useState } from "react";
import { format } from "date-fns";
import { useNote } from "hooks";

const defaultNotes = [
  {
    id: 1,
    title: "New Notes",
    content: "A new notes content",
    created_at: format(new Date(), "MMM dd yyyy"),
  },
  {
    id: 2,
    title: "Anoter Notes",
    content: "Another notes content",
    created_at: format(new Date(), "MMM dd yyyy"),
  },
];

const Sidebar = () => {
  const note = useNote();
  const [notes, setNotes] = useState(defaultNotes);

  return (
    <div className="p-4 w-[250px] max-h-screen flex-none border-r relative">
      <h2 className="font-bold mb-4">Notes</h2>

      {notes.map((item, index) => (
        <div
          key={`${item.title}_${index}`}
          onClick={() => {
            // Load note from database
            // Set note obj using `note.setNote(...values)`
            note.setNote({
              id: item.id,
              title: item.title,
              content: item.content,
            });
            note.setTitle(item.title);
            note.setContent(item.content);
          }}
          className="p-4 border rounded-lg cursor-pointer hover:bg-gray-100 mb-3 last:mb-0"
        >
          <h5>{item.title}</h5>
        </div>
      ))}

      <button
        type="button"
        onClick={() => {
          console.log("Add notes");
        }}
        className="px-2 h-[40px] flex items-center justify-center text-sm border rounded-lg font-bold bottom-[10px] left-[10px] fixed w-[230px] hover:bg-gray-100"
      >
        Add Notes
      </button>
    </div>
  );
};

export default Sidebar;
