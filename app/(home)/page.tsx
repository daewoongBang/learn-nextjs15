import MoviePoster from '../../components/movie/poster';
import styles from '../../styles/home.module.css';

export const metadata = {
  title: 'Home'
};

async function getMovies() {
  const response = await fetch(process.env.NEXT_PUBLIC_MOVIES_URL);

  return await response.json();
}

export default async function Home() {
  const movies = await getMovies();

  return (
    <div className={styles.container}>
      {movies.map(movie => (
        <MoviePoster
          key={movie.id}
          title={movie.title}
          id={movie.id}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
