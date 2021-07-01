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
    isLoading: boolean
}

const SongCard: FunctionComponent<SongCardProps> = (props) => {
    return (
        <div className={styles.root}>
            <Spin spinning={props.isLoading} delay={500}>
                <Bubble>
                    <div className={styles.cardItems}>
                        <SongInfo song={props.song} artist={props.artist}/>
                        <SongImage url={props.image}/>
                        <SongButtons />
                    </div>
                </Bubble>
            </Spin>
        </div>
    );
};

export default SongCard;
