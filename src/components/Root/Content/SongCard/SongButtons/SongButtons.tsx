import { CaretRightOutlined } from "@ant-design/icons";
import React, { Component } from "react";

import styles from "./SongButtons.module.scss";

class SongButtons extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.playPause}>
                    <CaretRightOutlined color="#ffff"/>
                </div>          
            </div>
        );
    }
}

export default SongButtons;
