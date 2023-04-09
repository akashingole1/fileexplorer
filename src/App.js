import "./App.css";
import Folder from "./components/Folder";
import { dir } from "./data/folderData";

function App() {
  console.log("dir", dir);
  return (
    <div style={{ margin: 25 }}>
      <Folder dir={dir} />
    </div>
  );
}

export default App;
