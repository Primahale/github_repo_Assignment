import React from "react";
import { Link } from "react-router-dom";

function RepositoryList({ repos }) {
  return (
    <ul className="repo-list">
      {repos.map((repo) => (
        <li key={repo.id}>
          <Link to={`/repository/${repo.owner.login}/${repo.name}`}>{repo.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default RepositoryList;
