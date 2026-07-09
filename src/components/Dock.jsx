import React from "react";
import "./dock.scss";

const Dock = ({ windows, setWindows }) => {
  const openWindow = (windowName) => {
    setWindows((prev) => ({
      ...prev,
      [windowName]: {
        ...prev[windowName],
        open: true,
        minimized: false,
      },
    }));
  };

  return (
    <footer className="dock">
      <div
        onClick={() => openWindow("github")}
        className="icon github"
      >
        <img src="/doc-icons/github.svg" alt="" />
      </div>

      <div
        onClick={() => openWindow("note")}
        className="icon note"
      >
        <img src="/doc-icons/note.svg" alt="" />
      </div>

      <div
        onClick={() => openWindow("resume")}
        className="icon pdf"
      >
        <img src="/doc-icons/pdf.svg" alt="" />
      </div>

      <div
        onClick={() =>
          window.open("https://calendar.google.com/", "_blank")
        }
        className="icon calender"
      >
        <img src="/doc-icons/calender.svg" alt="" />
      </div>

      <div
        onClick={() => openWindow("spotify")}
        className="icon spotify"
      >
        <img src="/doc-icons/spotify.svg" alt="" />
      </div>

      <div
        onClick={() =>
          window.open("mailto:akarshak@example.com", "_blank")
        }
        className="icon mail"
      >
        <img src="/doc-icons/mail.svg" alt="" />
      </div>

      <div
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/akarshak-guleria-ak47/",
            "_blank"
          )
        }
        className="icon link"
      >
        <img src="/doc-icons/link.svg" alt="" />
      </div>

      <div
        onClick={() => openWindow("cli")}
        className="icon cli"
      >
        <img src="/doc-icons/cli.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;