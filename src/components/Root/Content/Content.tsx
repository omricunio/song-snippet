import React, { FunctionComponent, useContext } from "react";
import { SongContext } from "../../../context/song-context";

import styles from "./Content.module.scss";
import SongCard from "./SongCard";

const Content: FunctionComponent = () => {
    const song = useContext(SongContext);
    
    return (
        <div className={styles.root}>
            <div className={styles.root}>
                <SongCard
                    song={song.name}
                    artist={song.artist}
                    image={song.imageUrl}
                />
            </div>
        </div>
    );
};

export default Content;
