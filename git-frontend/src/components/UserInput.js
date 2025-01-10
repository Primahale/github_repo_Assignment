import React, { useState } from "react";

function UserInput({ onSubmit }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) onSubmit(username.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="user-input">
      <input
        type="text"
        placeholder="Enter GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default UserInput;
