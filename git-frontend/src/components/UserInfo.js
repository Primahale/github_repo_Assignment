import React from "react";

function UserInfo({ user }) {
  if (!user) {
    return <p style={{ textAlign: "center", marginTop: "20px" }}>Loading user information...</p>;
  }

  return (
    <div className="user-info" style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        style={{ borderRadius: "50%", width: "120px", height: "120px" }}
      />
      <h2>{user.login}</h2>
      <p>{user.bio || "No bio available."}</p>
      <p>Location: {user.location || "Not available."}</p>
    </div>
  );
}

export default UserInfo;
