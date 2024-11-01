import styles from '../../styles/movie-videos.module.css';

async function getVideos(id: string) {
  const response = await fetch(
    `${
      process.env.NEXT_PUBLIC_MOVIES_URL ||
      'https://nomad-movies.nomadcoders.workers.dev/movies'
    }/${id}/videos`
  );

  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return (
    <div className={styles.container}>
      {videos.map(video => (
        <iframe
          key={video.id}
          src={`https://www.youtube-nocookie.com/embed/${video.key}`}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title={video.name}
        />
      ))}
    </div>
  );
}
