import useMediaQuery from "../hooks/useMediaQuery";

function MediaQueryDemo() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <h2>useMediaQuery</h2>

      {isMobile ? (
        <p>Mobile screen</p>
      ) : (
        <p>Desktop screen</p>
      )}
    </div>
  );
}

export default MediaQueryDemo;