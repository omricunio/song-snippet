import React, { FunctionComponent, useContext } from "react";
import { appSettingsContext } from "../../../state/app-settings.context";
import { songContext } from "../../../state/song.context";

import styles from "./Content.module.scss";
import SongCard from "./SongCard";

const Content: FunctionComponent = () => {
    const songCtx = useContext(songContext);
    const appSettingsCtx = useContext(appSettingsContext);
    return (
        <div className={styles.root}>
            <div className={styles.root}>
                <SongCard
                    isLoading={appSettingsCtx.appSettings.isLoading}
                    song={songCtx.song.name}
                    artist={songCtx.song.artist}
                    image={songCtx.song.imageUrl}
                />
            </div>
        </div>
    );
};

export default Content;
