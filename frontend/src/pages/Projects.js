import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cards from "../components/Cards";
import Card from "../components/Card";

const baseURL = "http://localhost:4000/projects/";

export default function Projects() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPosts(response.data);
    });
  }, []);

  if (!posts) return null;
else
  return (
    <div>
      <Cards>
     {posts && posts.map(post => (
          <Card data={post} key={post._id} />
        ))}
        </Cards>
      </div>
  );
}