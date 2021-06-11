import React, { FunctionComponent } from "react";

import styles from "./SongInfo.module.scss";

const SongInfo: FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <div className={styles.songName}>Kill em with kindness</div>
            <div className={styles.artistName}>Selena Gomez</div>
        </div>
    );
};

export default SongInfo;
