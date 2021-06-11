import { Spin } from "antd";
import React, { FunctionComponent } from "react";
import Bubble from "../../../Bubble";
import SongButtons from "./SongButtons";

import styles from "./SongCard.module.scss";
import SongImage from "./SongImage";
import SongInfo from "./SongInfo";

const SongCard: FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <Spin spinning={false} delay={500}>
                <Bubble>
                    <div className={styles.cardItems}>
                        <SongInfo />
                        <SongImage />
                        <SongButtons />
                    </div>
                </Bubble>
            </Spin>
        </div>
    );
};

export default SongCard;
