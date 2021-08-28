import React, { FunctionComponent, useContext } from "react";

import styles from "./Header.module.scss";
import SearchBar from "./SearchBar";
import { searchTerm } from "../../../api/itunes-api";
import { songContext } from "../../../state/song.context";
import { Song } from "../../../state/song.context";
import { appSettingsContext } from "../../../state/app-settings.context";

const Header: FunctionComponent = () => {
    const songCtx = useContext(songContext);
    const appSettingsCtx = useContext(appSettingsContext);
    const onSearch = async (value: string) => {
        //TODO: Move to an hook + add an error toster
        appSettingsCtx.setCurrentAppSettings({ ...appSettingsCtx.appSettings, isLoading: true })
        const response = await searchTerm(value);
        const firstItem = response.results[0];
        if (firstItem) {
            const song: Song = {
                name: firstItem.trackName,
                artist: firstItem.artistName,
                imageUrl: firstItem.artworkUrl100.replace(
                    "100x100bb.jpg",
                    "400x400bb.jpg"
                ),
                playableUrl: firstItem.previewUrl,
            };
            songCtx.setCurrentSong(song);
        }
        appSettingsCtx.setCurrentAppSettings({ ...appSettingsCtx.appSettings, isLoading: false })
    };

    return (
        <div className={styles.root}>
            <span className={styles.searchBar}>
                <SearchBar onSearch={onSearch} />
            </span>
        </div>
    );
};

export default Header;
