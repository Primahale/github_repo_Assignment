import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchRepositories, fetchUserInfo } from "../api";
import { getCache, setCache } from "../catch";
import UserInfo from "../components/UserInfo";
import RepositoryList from "../components/RepositoryList";

function RepositoriesPage() {
  const { username } = useParams(); // Retrieve username from URL params
  const navigate = useNavigate(); // Helps to redirect or handle invalid URLs
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // Validate username param
    if (!username) {
      console.error("No username provided in URL.");
      navigate("/"); // Redirect to home page if username is missing
      return;
    }

    // Check cached data for user and repositories
    const cachedUser = getCache(`user_${username}`);
    const cachedRepos = getCache(`repos_${username}`);

    if (cachedUser) setUser(cachedUser);
    else {
      fetchUserInfo(username)
        .then((data) => {
          setUser(data);
          setCache(`user_${username}`, data);
        })
        .catch((error) => console.error("Error fetching user info:", error));
    }

    if (cachedRepos) setRepos(cachedRepos);
    else {
      fetchRepositories(username)
        .then((data) => {
          setRepos(data);
          setCache(`repos_${username}`, data);
        })
        .catch((error) => console.error("Error fetching repositories:", error));
    }
  }, [username, navigate]);

  return (
    <div>
      <UserInfo user={user} />
      <Link to={`/followers/${username}`} className="back-button">
        View Followers
      </Link>
      <RepositoryList repos={repos} />
    </div>
  );
}

export default RepositoriesPage;
