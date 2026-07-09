import { useWindows } from "./context/WindowContext";
import "./App.scss";

import Dock from "./components/Dock";
import Nav from "./components/Nav";

import Github from "./components/windows/Github";
import Note from "./components/windows/Note";
import Resume from "./components/windows/Resume";
import Spotify from "./components/windows/Spotify";
import Cli from "./components/windows/Cli";

function App() {
  const {
    windows,
    setWindows,
    activeWindow,
    focusWindow,
  } = useWindows();

  return (
    <main>
      <Nav />

      <Dock
        windows={windows}
        setWindows={setWindows}
      />

      {windows.github.open && (
        <Github
          windowName="github"
          setWindows={setWindows}
          isActive={activeWindow === "github"}
          zIndex={windows.github.zIndex}
          onFocus={() => focusWindow("github")}
        />
      )}

      {windows.note.open && (
        <Note
          windowName="note"
          setWindows={setWindows}
          isActive={activeWindow === "note"}
          zIndex={windows.note.zIndex}
          onFocus={() => focusWindow("note")}
        />
      )}

      {windows.resume.open && (
        <Resume
          windowName="resume"
          setWindows={setWindows}
          isActive={activeWindow === "resume"}
          zIndex={windows.resume.zIndex}
          onFocus={() => focusWindow("resume")}
        />
      )}

      {windows.spotify.open && (
        <Spotify
          windowName="spotify"
          setWindows={setWindows}
          isActive={activeWindow === "spotify"}
          zIndex={windows.spotify.zIndex}
          onFocus={() => focusWindow("spotify")}
        />
      )}

      {windows.cli.open && (
        <Cli
          windowName="cli"
          setWindows={setWindows}
          isActive={activeWindow === "cli"}
          zIndex={windows.cli.zIndex}
          onFocus={() => focusWindow("cli")}
        />
      )}
    </main>
  );
}

export default App;