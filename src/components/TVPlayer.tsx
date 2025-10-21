import { useParams } from "react-router-dom";

const TVPlayer = () => {
  // Get parameters from the route
  const { imdbId, season, episode } = useParams<{
    imdbId: string;
    season: string;
    episode: string;
  }>();

  const tvURL = `https://embed.vidsrc.pk/tv/${imdbId}/${season}-${episode}`;

  return (
    <div className="w-full h-screen">
      <iframe
        className="w-full h-full"
        src={tvURL}
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="TV Show Player"
      ></iframe>
    </div>
  );
};

export default TVPlayer;
