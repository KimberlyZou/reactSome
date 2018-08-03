import React from "react";
import styles from "./UserMedia.css";
class UserMedia extends React.Component {
  constructor(props) {
    super(props);
    this.handleonClick = this.handleonClick.bind(this);
  }
  handleonClick() {
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia;

    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        { audio: true, video: { width: 1280, height: 720 } },
        function(stream) {
          var video = document.querySelector("video");
          video.src = window.URL.createObjectURL(stream);
          video.onloadedmetadata = function(e) {
            video.play();
          };
        },
        function(err) {
          console.log("The following error occurred: " + err.name);
        }
      );
    } else {
      console.log("getUserMedia not supported");
    }
  }
  render() {
    return (
      <div className={styles.container}>
        <input type="button" value="UserMedia" onClick={this.handleonClick} />
        <video controls />
      </div>
    );
  }
}
export default UserMedia;
