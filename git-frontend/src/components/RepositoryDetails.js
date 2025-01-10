import React from "react";

function RepositoryDetails({ repo }) {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>{repo.name}</h1>
      <p>
        <strong>Description:</strong> {repo.description || "No description available."}
      </p>
      <p>
        <strong>Language:</strong> {repo.language || "N/A"}
      </p>
      <p>
        <strong>Stars:</strong> {repo.stargazers_count}
      </p>
      <p>
        <strong>Forks:</strong> {repo.forks_count}
      </p>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#0073e6", textDecoration: "underline" }}
      >
        Visit Repository on GitHub
      </a>
    </div>
  );
}

export default RepositoryDetails;
