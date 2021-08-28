import { CaretRightFilled, PauseCircleOutlined } from "@ant-design/icons";
import React, { FunctionComponent } from "react";
import Bubble from "../../../../Bubble";

import styles from "./SongButtons.module.scss";

interface SongButtonsProps {
    onPlayPause?: () => void,
    isPlaying: boolean
}

const SongButtons: FunctionComponent<SongButtonsProps> = ({ onPlayPause, isPlaying }) => {
    return (
        <div className={styles.root}>
            <div className={styles.playPause} onClick={() => onPlayPause && onPlayPause()}>
                <Bubble isCircle={true} isHoverEffect={true}>
                    { isPlaying ?  <PauseCircleOutlined className={styles.playPauseIcon}/> : <CaretRightFilled className={styles.playPauseIcon} /> }
                </Bubble>
            </div>
        </div>
    );
};

export default SongButtons;
