import React, { FunctionComponent, useContext } from "react";
import { appSettingsContext } from "../../../state/app-settings.context";
import { songContext } from "../../../state/song.context";

import styles from "./Content.module.scss";
import SongCard from "./SongCard";

const Content: FunctionComponent = () => {
    const songCtx = useContext(songContext);
    const appSettingsCtx = useContext(appSettingsContext);
    const onPlayPause = () => {
        appSettingsCtx.setCurrentAppSettings({ ...appSettingsCtx.appSettings, isPlaying: !appSettingsCtx.appSettings.isPlaying })
    }

    return (
        <div className={styles.root}>
            <div className={styles.root}>
                <SongCard
                    isLoading={appSettingsCtx.appSettings.isLoading}
                    isPlaying={appSettingsCtx.appSettings.isPlaying}
                    song={songCtx.song.name}
                    artist={songCtx.song.artist}
                    image={songCtx.song.imageUrl}
                    onPlayPause={onPlayPause}
                />
            </div>
        </div>
    );
};

export default Content;
