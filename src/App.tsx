import "./App.css";
import Sidebar from "layouts/Sidebar";
import NoteContainer from "containers/NoteContainer";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <NoteContainer />
    </div>
  );
}

export default App;
