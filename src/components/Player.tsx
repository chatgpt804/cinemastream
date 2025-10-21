import { useParams } from "react-router";

const Player = () => {
    const {playerId} = useParams();
    const movieURL = `https://embed.vidsrc.pk/movie/${movieId}`;
    return (
        <div>
            <iframe
            className="w-full h-screen"
            allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            src={movieURL}
            ></iframe>
        </div>
    )
}
export default Player;
