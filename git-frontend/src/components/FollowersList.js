import React from "react";
import { Link } from "react-router-dom";

function FollowersList({ followers }) {
  return (
    <ul className="followers-list">
      {followers.map((follower) => (
        <li key={follower.id}>
          <Link to={`/repositories/${follower.login}`}>
            <img src={follower.avatar_url} alt={`${follower.login}'s avatar`} />
            {follower.login}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default FollowersList;
