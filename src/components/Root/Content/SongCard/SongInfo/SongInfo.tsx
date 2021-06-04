import React, { Component } from "react";

import styles from "./SongInfo.module.scss";

class SongInfo extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.songName}>Kill em with kindness</div>
                <div className={styles.artistName}>Selena Gomez</div>          
            </div>
        );
    }
}

export default SongInfo;
