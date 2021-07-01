import React, { FunctionComponent } from "react";

import styles from "./AudioPlayer.module.scss";

interface AudioPlayerProps { 
    url: string,
    isPlaying: boolean
}

const AudioPlayer: FunctionComponent<AudioPlayerProps> = (props) => {
    return (
        <audio onCanPlay={(e)=>e.currentTarget.play()} autoPlay={true} src={props.url}></audio>
    );
};

export default AudioPlayer;
