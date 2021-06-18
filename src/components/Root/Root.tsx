import React, { FunctionComponent } from "react";
import { defaultSong, SongContext } from "../../context/song-context";
import Content from "./Content";
import Header from "./Header";

import styles from "./Root.module.scss";

const Root: FunctionComponent = () => {
    return (
        <SongContext.Provider value={defaultSong}>
            <div className={styles.root}>
                <Header />
                <Content />
            </div>
        </SongContext.Provider>
    );
};

export default Root;
