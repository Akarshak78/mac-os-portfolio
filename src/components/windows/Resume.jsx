import React from "react";
import MacWindow from "./MacWindow";
import "./resume.scss";

const Resume = ({
    windowName,
    setWindows,
    isActive,
    zIndex,
    onFocus,
}) => {
    return (
        <MacWindow
            windowName={windowName}
            setWindows={setWindows}
            isActive={isActive}
            zIndex={zIndex}
            onFocus={onFocus}
        >
           <div className="resume-window">
    <object
        data="/resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
    >
        <p>
            Your browser doesn't support PDF viewing.
            <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
            >
                Open Resume
            </a>
        </p>
    </object>
</div>
        </MacWindow>
    );
};

export default Resume;