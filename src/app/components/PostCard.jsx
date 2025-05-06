import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <a>
        <h3>{post.title}</h3>
      </a>
    </Link>
  );
}