import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { loggedIn, username } = useSelector((state) => state.user);

  if (!loggedIn) {
    return <div>Please log in.</div>;
  }

  return (
    <div>
      <h2>Welcome, {username}!</h2>
    </div>
  );
};

export default Profile;
