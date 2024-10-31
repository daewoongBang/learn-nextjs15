'use client';

import Link from 'next/link';
import styles from '../../styles/movie.module.css';
import { useRouter } from 'next/navigation';

interface IMoviePoster {
  title: string;
  id: string;
  poster_path: string;
}

export default function MoviePoster({ title, id, poster_path }: IMoviePoster) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
