import React, { FunctionComponent } from "react";

import styles from "./Content.module.scss";
import SongCard from "./SongCard";

const Content: FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <div className={styles.root}>
                <SongCard />
            </div>
        </div>
    );
};

export default Content;
