import React from "react";
import "./Player.css";

const Player = props => {
  const backgroundStyles = {
    backgroundImage: props.item ? `url(${ props.item.album.images[0].url })` : ' '
  };

  const progressBarStyles = {
    width: props ? (props.progress_ms * 100 / props.item.duration_ms) + '%' : '0%'
  };

  const albumImage = props.item.album.images[0].url;
  const artistName = props.item.artists[0].name;

  return (
    <div className="App" >
      <div className="main-wrapper">
        <div className="now-playing__img">
          <img src={albumImage} alt="" />
        </div>
        <div className="now-playing__side">
          <div className="now-playing__name">{props.item.name}</div>
          <div className="now-playing__artist">
            {artistName}
          </div>
          <div className="now-playing__status">
            {props.is_playing ? "Playing" : "Paused"}
          </div>
          <div className="progress">
            <div className="progress__bar" style={progressBarStyles} />
          </div>
        </div>
        <div className="background" alt={props.progress_ms} style={backgroundStyles} />{" "}
      </div>
    </div>
  );
}

export default Player;
