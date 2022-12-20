import { PostItem } from "@/components/shared/PostItem";
import { PostType } from "@/types";

interface Props {
  posts: PostType[];
}

export const HomeTemplate = (props: Props) => {
  const { posts } = props;

  return (
    <div className="container mx-auto">
      <ul className="grid grid-cols-3 gap-3">
        {posts.map((item) => (
          <li key={item.id}>
            <PostItem post={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
