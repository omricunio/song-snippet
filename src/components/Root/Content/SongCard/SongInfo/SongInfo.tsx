import React, { FunctionComponent } from "react";

import styles from "./SongInfo.module.scss";

interface SongInfoProps {
    song: string,
    artist: string
}

const SongInfo: FunctionComponent<SongInfoProps> = (props) => {
    return (
        <div className={styles.root}>
            <div className={styles.songName}>{props.song}</div>
            <div className={styles.artistName}>{props.artist}</div>
        </div>
    );
};

export default SongInfo;
