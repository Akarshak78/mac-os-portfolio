import { createContext, useContext, useState } from "react";

const WindowContext = createContext();

const defaultWindow = (zIndex, width = "40vw", height = "40vh") => ({
  open: false,

  closing: false,

  minimized: false,

  maximized: false,

  zIndex,

  x: 300,

  y: 150,

  width,

  height,
});

export function WindowProvider({ children }) {
  const [windows, setWindows] = useState({
    github: defaultWindow(1),

    note: defaultWindow(2),

    resume: defaultWindow(3, "55vw", "70vh"),

    spotify: defaultWindow(4, "25vw", "420px"),

    cli: defaultWindow(5, "55vw", "60vh"),
  });

  const [highestZ, setHighestZ] = useState(5);

  const [activeWindow, setActiveWindow] = useState(null);

  const focusWindow = (windowName) => {
    setHighestZ((prev) => {
      const newZ = prev + 1;

      setWindows((old) => ({
        ...old,

        [windowName]: {
          ...old[windowName],

          zIndex: newZ,
        },
      }));

      return newZ;
    });

    setActiveWindow(windowName);
  };

  const openWindow = (windowName) => {
    setWindows((old) => ({
      ...old,

      [windowName]: {
        ...old[windowName],

        open: true,

        closing: false,

        minimized: false,
      },
    }));

    focusWindow(windowName);
  };

  const closeWindow = (windowName) => {
    setWindows((old) => ({
      ...old,

      [windowName]: {
        ...old[windowName],

        closing: true,
      },
    }));

    setTimeout(() => {
      setWindows((old) => ({
        ...old,

        [windowName]: {
          ...old[windowName],

          open: false,

          closing: false,
        },
      }));
    }, 220);
  };

  const updateWindow = (windowName, updates) => {
    setWindows((old) => ({
      ...old,

      [windowName]: {
        ...old[windowName],

        ...updates,
      },
    }));
  };

  return (
    <WindowContext.Provider
     value={{
    windows,
    setWindows,
    activeWindow,
    openWindow,
    closeWindow,
    updateWindow,
    focusWindow,
}}
    >
      {children}
    </WindowContext.Provider>
  );
}

export function useWindows() {
  return useContext(WindowContext);
}