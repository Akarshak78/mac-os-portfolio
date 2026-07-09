import { useState, useRef, useEffect } from "react";

function Terminal({ commands, welcomeMessage }) {
  const [history, setHistory] = useState([
    { type: "output", text: welcomeMessage }
  ]);

  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e) => {
    // -----------------------------
    // ENTER
    // -----------------------------
    if (e.key === "Enter") {
      const command = input.trim();

      if (command === "") return;

      setCommandHistory((prev) => [...prev, command]);
      setHistoryIndex(-1);

      let output = "";

      const parts = command.split(" ");
      const cmd = parts[0];
      const args = parts.slice(1);

      // CLEAR
      if (cmd === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      // HELP
      if (cmd === "help") {
        output = `Available Commands

about        - About me
skills       - View technical skills
projects     - View projects
experience   - Work experience
contact      - Contact information
github       - Open GitHub
resume       - Download resume
social       - Social media links
echo         - Print text
clear        - Clear terminal
help         - Show this help menu`;
      }

      // OTHER COMMANDS
      else if (commands[cmd]) {
        output = commands[cmd].fn(...args);
      }

      // UNKNOWN
      else {
        output = `Command not found: ${cmd}

Type "help" to see available commands.`;
      }

      setHistory((prev) => [
        ...prev,
        { type: "input", text: command },
        { type: "output", text: output },
      ]);

      setInput("");
    }

    // -----------------------------
    // UP ARROW
    // -----------------------------
    else if (e.key === "ArrowUp") {
      e.preventDefault();

      if (commandHistory.length === 0) return;

      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);

      setHistoryIndex(newIndex);
      setInput(commandHistory[newIndex]);
    }

    // -----------------------------
    // DOWN ARROW
    // -----------------------------
    else if (e.key === "ArrowDown") {
      e.preventDefault();

      if (commandHistory.length === 0) return;

      if (historyIndex === -1) return;

      const newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    }
  };

  return (
    <div
      className="terminal"
      onClick={() => inputRef.current?.focus()}
    >
      {history.map((item, index) => (
        <div key={index}>
          {item.type === "input" ? (
            <p>
              <span className="prompt">
akarshak@portfolio:~$
</span>
              {item.text}
            </p>
          ) : (
            <pre>{item.text}</pre>
          )}
        </div>
      ))}

      <div className="input-line">
       <span className="prompt">
akarshak@portfolio:~$
</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          autoFocus
        />
      </div>

      <div ref={bottomRef}></div>
    </div>
  );
}

export default Terminal;