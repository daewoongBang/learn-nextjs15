import { Suspense } from 'react';
import MovieInfo, { getMovie } from '../../../../components/movie/info';
import MovieVideos from '../../../../components/movie/videos';
import Loading from '../../../../components/loading';

type Params = Promise<{ id: string }>;

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;

  const movie = await getMovie(id);

  return {
    title: movie.title
  };
}

export default async function MovieDetail(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;

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
