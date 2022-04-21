
import ReactPlayer from 'react-player';

function ResponsivePlayer(props) {
/*
    useEffect(() => {
        setTimeout(() => {
            setIsAutoPlay(true);
        }, 1000)
        fetchHomeVideo();
    }, []);
    */
   
      return (
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={props.url}
            width="100%"
            height="100%"
            playing={true} 
          />
        </div>
      )
}

export default ResponsivePlayer;