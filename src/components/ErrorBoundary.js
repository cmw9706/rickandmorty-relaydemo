import React, { useState } from "react";

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  function handleError(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    setHasError(true);
  }

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return (
    <React.Fragment>
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { onError: handleError });
        }
        return child;
      })}
    </React.Fragment>
  );
}

export default ErrorBoundary;
