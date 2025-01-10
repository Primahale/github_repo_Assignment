import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchRepositories } from "../api";
import { getCache, setCache } from "../catch"; // Corrected to "cache"
import RepositoryDetails from "../components/RepositoryDetails";

function RepositoryDetailsPage() {
  const { username, repoName } = useParams(); // Get username and repoName from URL params
  const [repo, setRepo] = useState(null); // Store the repository details

  useEffect(() => {
    // Ensure username and repoName are valid
    if (!username || !repoName) {
      console.error("Invalid username or repoName provided.");
      return;
    }

    // Check cache for repositories
    const cachedRepos = getCache(`repos_${username}`);
    if (cachedRepos) {
      const repository = cachedRepos.find((repo) => repo.name === repoName);
      if (repository) {
        setRepo(repository);
        return;
      }
    }

    // Fetch repositories from API if not in cache
    fetchRepositories(username)
      .then((repos) => {
        setCache(`repos_${username}`, repos); // Store repositories in cache
        const repository = repos.find((repo) => repo.name === repoName);
        setRepo(repository || null); // Set repo to null if not found
      })
      .catch((error) => {
        console.error("Error fetching repository details:", error);
        setRepo(null); // Handle API errors gracefully
      });
  }, [username, repoName]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Link to={`/repositories/${username}`} className="back-button" style={{ marginBottom: "20px", display: "inline-block", textDecoration: "none", padding: "10px 20px", backgroundColor: "#0073e6", color: "white", borderRadius: "5px" }}>
        Back to Repositories
      </Link>
      {repo ? (
        <RepositoryDetails repo={repo} />
      ) : (
        <p>
          Repository not found or no details available.
        </p>
      )}
    </div>
  );
}

export default RepositoryDetailsPage;
