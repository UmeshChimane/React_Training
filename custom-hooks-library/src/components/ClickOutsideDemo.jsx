import { useRef, useState } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";

function ClickOutsideDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const boxRef = useRef();

  useOnClickOutside(boxRef, () => {
    setIsOpen(false);
  });

  return (
    <div>
      <h2>useOnClickOutside</h2>

      <button onClick={() => setIsOpen(true)}>
        Open Box
      </button>

      {isOpen && (
        <div
          ref={boxRef}
          style={{
            border: "1px solid black",
            padding: "20px",
            marginTop: "10px",
          }}
        >
          <p>Click outside this box to close it.</p>
        </div>
      )}
    </div>
  );
}

export default ClickOutsideDemo;