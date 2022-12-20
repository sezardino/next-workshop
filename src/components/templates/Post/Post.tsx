import { PostType } from "@/types";
import styles from "./Post.module.scss";

interface Props {
  post: PostType;
}

export const PostTemplate = (props: Props) => {
  const { post } = props;

  return (
    <div className={styles.container}>
      <article>
        <header className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          {/* AUTHOR */}
        </header>

        <p className={styles.body}>{post.body}</p>
      </article>
    </div>
  );
};
