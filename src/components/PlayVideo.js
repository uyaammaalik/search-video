import React from "react";

const PlayVideo = ({ video }) => {
  if (!video) {
    return <div>Loding..</div>;
  }

  const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="Video Player" src={videoURL} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default PlayVideo;
