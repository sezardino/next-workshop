import { PostTemplate } from "@/components/templates/Post/Post";
import { PostType } from "@/types";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get<PostType>(
        "https://jsonplaceholder.typicode.com/posts/1"
      );

      setPost(response.data);
    };

    getPost();
  }, []);

  return <>{post && <PostTemplate post={post} />}</>;
}
