import { HomeTemplate } from "@/components/templates/Home/Home";
import { PostType } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get<PostType[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(response.data);
    };

    getPosts();
  }, []);

  return (
    <>
      <HomeTemplate posts={posts} />
    </>
  );
}
