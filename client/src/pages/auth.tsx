import { Outlet } from "react-router-dom";

const Auth: React.FC = () => {
  const handleLogin = () => {
    alert("login");
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>
        Auth
        <button
          onClick={() => {
            handleLogin();
          }}
        >
          login
        </button>
      </h1>
      <Outlet />
    </div>
  );
};
export default Auth;
