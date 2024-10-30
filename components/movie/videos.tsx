async function getVideos(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_MOVIES_URL}/${id}/videos`
  );

  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return (
    <div>
      {videos.map(video => (
        <li key={video.id}>{video.name}</li>
      ))}
    </div>
  );
}
