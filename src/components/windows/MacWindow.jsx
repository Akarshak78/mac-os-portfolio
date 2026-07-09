import React, { useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({
  children,
  width = "40vw",
  height = "40vh",
  windowName,
  setWindows,
  isActive,
  zIndex,
  onFocus,
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const [windowState, setWindowState] = useState({
    x: 300,
    y: 200,
    width,
    height,
  });

  const toggleMaximize = () => {
    setIsMaximized((prev) => !prev);
  };

  const toggleMinimize = () => {
    setIsMinimized((prev) => !prev);
  };

  return (
    <Rnd
    bounds="window"
      style={{ zIndex }}
      onMouseDown={onFocus}
      size={{
  width: isMinimized
    ? 260
   : isMaximized
    ? document.documentElement.clientWidth
    : windowState.width,

  height: isMinimized
    ? 40
   : isMaximized
    ? document.documentElement.clientHeight - 42
    : windowState.height,
}}
     position={{
    x: isMaximized ? 0 : windowState.x,
    y: isMaximized ? 41 : windowState.y,
}}
      disableDragging={isMaximized}
dragHandleClassName="nav"
      enableResizing={!isMaximized && !isMinimized}
      minWidth={260}
      minHeight={40}
      onDragStop={(e, d) => {
        setWindowState((prev) => ({
          ...prev,
          x: d.x,
          y: d.y,
        }));
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setWindowState({
          x: position.x,
          y: position.y,
          width: ref.style.width,
          height: ref.style.height,
        });
      }}
    >
      <div className={`window ${isActive ? "active" : ""}`}>
        <div className="nav" onDoubleClick={toggleMaximize}>
          <div className="dots">
            <div
              className="dot red"
              onClick={() =>
                setWindows((prev) => ({
                  ...prev,
                  [windowName]: {
                    ...prev[windowName],
                    open: false,
                  },
                }))
              }
            >
              <span>×</span>
            </div>

            <div className="dot yellow" onClick={toggleMinimize}>
              <span>−</span>
            </div>

            <div className="dot green" onClick={toggleMaximize}>
              <span>+</span>
            </div>
          </div>

          <div className="title">
            <p>akarshakguleria - zsh</p>
          </div>
        </div>

        {!isMinimized && (
          <div className="main-content">{children}</div>
        )}
      </div>
    </Rnd>
  );
};

export default MacWindow;