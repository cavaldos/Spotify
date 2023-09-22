import { Outlet } from "react-router-dom";

const Profile: React.FC = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>Profile</h1>

      <h3>asfsdfsdf</h3>
      <br style={{ color: "red" }} />
      <Outlet />
    </>
  );
};
export default Profile;
