import PreviousDemo from "./components/PreviousDemo";
import DebounceDemo from "./components/DebounceDemo";
import LocalStorageDemo from "./components/LocalStorageDemo";
import FetchDemo from "./components/FetchDemo";
import ClickOutsideDemo from "./components/ClickOutsideDemo";
import MediaQueryDemo from "./components/MediaQueryDemo";

function App() {
  return (
    <div>
      <h1>React Custom Hooks Library</h1>

      <PreviousDemo />

      <hr />

      <DebounceDemo />

      <hr />

      <LocalStorageDemo />

      <hr />

      <FetchDemo />

      <hr />

      <ClickOutsideDemo />

      <hr />

      <MediaQueryDemo />
    </div>
  );
}

export default App;