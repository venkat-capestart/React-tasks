import { useState, useEffect } from "react";

const WindowSize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    console.log("Component Mounted"); // Runs on mount

    // Function to update width and height on resize
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function: Remove event listener on unmount
    return () => {
      console.log("Component Unmounted"); // Runs on unmount
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array = Runs only once on mount/unmount

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Window Size Tracker</h2>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>
    </div>
  );
};

export default WindowSize;
