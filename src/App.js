import React from "react";
import SearchBar from "./components/SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./components/VideoList";
import PlayVideo from "./components/PlayVideo";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onVideoSearch("cats");
  }

  onVideoSearch = async (video) => {
    const response = await youtube.get("/search", {
      params: {
        q: video,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div style={{ marginTop: "20px" }} className="ui container">
        <h2
          style={{
            fontFamily: "sans-serif",
            fontSize: "large",
            fontStyle: "bold",
          }}
        >
          Search Videos
        </h2>
        <SearchBar onVideoSearch={this.onVideoSearch} />
        <div className="ui grid">
          <div className="ten wide column">
            <PlayVideo video={this.state.selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
