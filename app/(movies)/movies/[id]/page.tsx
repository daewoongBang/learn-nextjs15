import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie/info';
import MovieVideos from '../../../../components/movie/videos';
import Loading from '../../../../components/loading';

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params }: IParams) {
  const movie = await getMovie(params.id);

  return {
    title: movie.title
  };
}

export default async function MovieDetail({ params }: IParams) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<Loading text={'Loading Movie Info...'} />}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<Loading text={'Loading Movie Videos...'} />}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
