import { Outlet } from "react-router-dom";
const Auth: React.FC = () => {
    return (
      <div>
        <h1 style={{ color: "red" }}>Auth</h1>
        <Outlet />
      </div>
    );
}
export default Auth