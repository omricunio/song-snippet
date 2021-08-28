import React, { FunctionComponent, useEffect, useRef } from "react";

import styles from "./AudioPlayer.module.scss";

interface AudioPlayerProps { 
    url: string,
    isPlaying: boolean
}

const AudioPlayer: FunctionComponent<AudioPlayerProps> = ({ isPlaying, url }) => {
    const player = useRef<HTMLAudioElement>(null);
    useEffect(() => {
        const currentPlayer = player.current;
        if(currentPlayer) {
            if(isPlaying) {
                currentPlayer.paused && currentPlayer.play()
            } else {
                !currentPlayer.paused && currentPlayer.pause()
            }            
        }
    }, [isPlaying])

    return (
        <audio ref={player} onCanPlay={(e)=>e.currentTarget.play()} autoPlay={true} src={url}></audio>
    );
};

export default AudioPlayer;
