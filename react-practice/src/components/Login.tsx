export const Login = () => {
  const isLoggedIn = false;
  return (
    <div>{isLoggedIn ? <h3>Welcome back!</h3> : <h3>Please login</h3>}</div>
  );
};
