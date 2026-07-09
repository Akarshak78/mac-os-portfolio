import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MacWindow from "./MacWindow";
import "./note.scss";

const Note = ({
    windowName,
    setWindows,
    isActive,
    zIndex,
    onFocus,
}) => {

    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch("/note.txt")
            .then((res) => res.text())
            .then((text) => setMarkdown(text))
            .catch(() => {
                setMarkdown("Unable to load note.txt");
            });
    }, []);

    return (
        <MacWindow
            windowName={windowName}
            setWindows={setWindows}
            isActive={isActive}
            zIndex={zIndex}
            onFocus={onFocus}
        >
            <div className="note-window">
                {markdown ? (
                    <SyntaxHighlighter
                        language="markdown"
                        style={atelierDuneDark}
                    >
                        {markdown}
                    </SyntaxHighlighter>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </MacWindow>
    );
};

export default Note;