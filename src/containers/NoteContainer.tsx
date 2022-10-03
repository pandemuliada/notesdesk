import { useNote } from "hooks";
import { format } from "date-fns";

const NoteContainer = () => {
  const note = useNote();

  if (!note.note) {
    return (
      <div className="px-3 py-4">
        {!note.title && <p>Select or add new note to start!</p>}
      </div>
    );
  }

  return (
    <div className="py-4 w-full">
      <div className="flex justify-between items-center border-b pb-3 px-6">
        <p>Updated at {format(new Date(), "MMMM dd yyyy hh:mma")}</p>
        <button
          type="button"
          onClick={() => {
            console.log("Save note");
          }}
          className="px-2 h-[40px] flex items-center justify-center text-sm border rounded-lg font-bold w-[130px] hover:bg-gray-100"
        >
          Save
        </button>
      </div>
      <div className="mt-6 px-6">
        <input
          className="font-bold text-xl w-full outline-none"
          value={note.title}
          onChange={(e) => note.setTitle(e.target.value)}
        />
        {/* {note.title} */}

        <div
          className="w-full block mt-5 outline-none"
          contentEditable
          // dangerouslySetInnerHTML={{ __html: note.content }} // Still error
          onKeyDown={(e) => {
            // note.setContent(e.currentTarget.innerHTML);
            console.log(e.currentTarget.innerHTML);
          }}
        >
          {note.content}
        </div>
      </div>
    </div>
  );
};

export default NoteContainer;
