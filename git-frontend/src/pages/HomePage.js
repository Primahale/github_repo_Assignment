import React from "react";
import { useNavigate } from "react-router-dom";
import UserInput from "../components/UserInput";

function HomePage() {
  const navigate = useNavigate();

  const handleSearch = (username) => {
    navigate(`/repositories/${username}`);
  };

  return (
    <div>
      <h1>GitHub Explorer</h1>
      <UserInput onSubmit={handleSearch} />
    </div>
  );
}

export default HomePage;
