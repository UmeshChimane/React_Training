import { Link } from "react-router-dom";
import "../ErrorPage.css";

export const NotFound = () => {
  return (
    <div className="error-container">
      <div className="error-content">

        <div className="error-code">404</div>

        <h1>Oops! Page Not Found</h1>

        <p>
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        <div className="error-actions">
          <Link to="/" className="home-btn">
            ← Back to Home
          </Link>

          <button
            className="back-btn"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>

      </div>
    </div>
  );
};