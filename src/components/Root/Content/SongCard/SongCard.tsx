import { Spin } from "antd";
import React, { FunctionComponent } from "react";
import Bubble from "../../../Bubble";
import SongButtons from "./SongButtons";

import styles from "./SongCard.module.scss";
import SongImage from "./SongImage";
import SongInfo from "./SongInfo";

interface SongCardProps {
    song: string,
    artist: string,
    image: string,
    isLoading: boolean,
    isPlaying: boolean,
    onPlayPause?: () => void
}

const SongCard: FunctionComponent<SongCardProps> = ({ song, artist, image, isLoading, isPlaying, onPlayPause}) => {
    return (
        <div className={styles.root}>
            <Spin spinning={isLoading} delay={500}>
                <Bubble>
                    <div className={styles.cardItems}>
                        <SongInfo song={song} artist={artist}/>
                        <SongImage url={image}/>
                        <SongButtons onPlayPause={onPlayPause} isPlaying={isPlaying}/>
                    </div>
                </Bubble>
            </Spin>
        </div>
    );
};

export default SongCard;
