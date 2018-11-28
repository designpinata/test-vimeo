import React, { Component } from 'react';
import styles from './App.module.css';
import Player from '@vimeo/player';


class App extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
  }
  play() {
    var overlay = document.querySelector('#overlay');
    var style = styles.app__overlay_not;
    overlay.classList.add(style);
    var iframe = document.querySelector('#video');
    var player = new Player(iframe);
    player.play();
    player.setVolume(1);
  } 
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.app__portrait}>
          rotate to landscape
        </div>
        <div id="overlay" className={styles.app__overlay}>
          <button onClick={this.play}>Start exploring</button>
        </div>
        <div className={styles.slide} data-timestart="14">
          <iframe id="video"
            title="Video" 
            src="https://player.vimeo.com/video/249749574?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            frameBorder="0" 
            webkitallowfullscreen="true" 
            mozallowfullscreen="true" 
            allowFullScreen 
            className={styles.fullscreen_bg__video}></iframe>
        </div>
      </div>
    );
  }
}

export default App;
