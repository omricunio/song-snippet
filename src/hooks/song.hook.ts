import { useState } from 'react'
import { defaultSong, Song } from '../state/song.context';


export const useSongContextValue = () => {
    const [song, setSong] = useState<Song>(defaultSong);
    // const setCurrentSong = useCallback((currentSong: Song): void => {
    //     setSong(currentSong)
    // }, []);

    return {
        song,
        setCurrentSong: setSong
    }
}