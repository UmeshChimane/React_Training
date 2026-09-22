function BuggyComponent({ shouldThrow }) {
  if (shouldThrow) {
    throw new Error("Something went wrong!");
  }

  return <h3>Component is working correctly</h3>;
}

export default BuggyComponent;