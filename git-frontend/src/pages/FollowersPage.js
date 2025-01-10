import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFollowers } from "../api";
import { getCache, setCache } from "../catch";
import FollowersList from "../components/FollowersList";

function FollowersPage() {
  const { username } = useParams();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const cachedFollowers = getCache(`followers_${username}`);
    if (cachedFollowers) {
      setFollowers(cachedFollowers);
    } else {
      fetchFollowers(username).then((data) => {
        setFollowers(data);
        setCache(`followers_${username}`, data);
      });
    }
  }, [username]);

  return <FollowersList followers={followers} />;
}

export default FollowersPage;
