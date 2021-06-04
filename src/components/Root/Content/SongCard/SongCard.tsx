import React, { Component } from "react";
import SongButtons from "./SongButtons";

import styles from "./SongCard.module.scss";
import SongInfo from "./SongInfo";

class SongCard extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div>
                    <SongInfo/>
                </div>
                <img alt=""
                    className={styles.image}
                    src={"https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/5b/62/f1/5b62f156-49cc-2e7f-5deb-2f2cfa82a937/source/600x600bb.jpg"}/>
                <div>
                    <SongButtons/>
                </div>
            </div>
        );
    }
}

export default SongCard;
