import { useEffect, useState } from "react";
import cursorImg from "../../assets/cursor.png";

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <img
      src={cursorImg}
      className="custom-cursor"
      style={{
        left: position.x,
        top: position.y
      }}
      alt=""
    />
  );
}

export default CustomCursor;