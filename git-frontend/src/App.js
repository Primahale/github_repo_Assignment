import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RepositoriesPage from "./pages/RepositoriesPage";
import RepositoryDetailsPage from "./pages/RepositoryDetails";
import FollowersPage from "./pages/FollowersPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/repositories/:username" element={<RepositoriesPage />} />
        <Route path="/repository/:username/:repoName" element={<RepositoryDetailsPage />} />
        <Route path="/followers/:username" element={<FollowersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
