import { CaretRightFilled } from "@ant-design/icons";
import React, { FunctionComponent } from "react";
import Bubble from "../../../../Bubble";

import styles from "./SongButtons.module.scss";

const SongButtons: FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <div className={styles.playPause}>
                <Bubble isCircle={true} isHoverEffect={true}>
                    <CaretRightFilled className={styles.playPauseIcon} />
                </Bubble>
            </div>
        </div>
    );
};

export default SongButtons;
