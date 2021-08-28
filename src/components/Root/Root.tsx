import React, { FunctionComponent } from "react";
import { useAppSettingContextValue } from "../../hooks/app-settings.hook";
import { useSongContextValue } from "../../hooks/song.hook";
import { appSettingsContext } from "../../state/app-settings.context";
import { songContext } from "../../state/song.context";
import AudioPlayer from "../AudioPlayer";
import Content from "./Content";
import Header from "./Header";

import styles from "./Root.module.scss";

const Root: FunctionComponent = () => {
    const songContextValue = useSongContextValue();
    const appSettingsContextValue = useAppSettingContextValue();
    return (
        <songContext.Provider value={songContextValue}>
            <appSettingsContext.Provider value={appSettingsContextValue}>
                <div className={styles.root}>
                    <Header />
                    <Content />
                    <AudioPlayer
                        url={songContextValue.song.playableUrl}
                        isPlaying={appSettingsContextValue.appSettings.isPlaying}
                    />
                </div>
            </appSettingsContext.Provider>
        </songContext.Provider>
    );
};

export default Root;
