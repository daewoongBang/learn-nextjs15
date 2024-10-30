import { Suspense } from 'react';
import MovieInfo from '../../../../components/movie/info';
import MovieVideos from '../../../../components/movie/videos';
import Loading from '../../../../components/loading';

export default async function MovieDetail({ params }) {
  const { id } = await params;

  return (
    <div>
      <h3>Movie Detail</h3>

      <Suspense fallback={<Loading text={'Loading Movie Info...'} />}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<Loading text={'Loading Movie Videos...'} />}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
