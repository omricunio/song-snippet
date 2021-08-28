import React from 'react'

export interface Song {
    name: string,
    artist: string,
    imageUrl: string,
    playableUrl: string
}

interface SongContext {
    song: Song,
    setCurrentSong: (song: Song) => void
}

export const defaultSong: Song = {
    name: "Song",
    artist: "Artist",
    imageUrl: "https://etcanada.com/wp-content/uploads/2021/05/Leave-Before-You-Love-Me-Artwork.jpg?quality=80&strip=all&w=1024",
    playableUrl: ""
}

const defaultSongContext: SongContext = {
    song: defaultSong,
    setCurrentSong: () => {}
}

export const songContext = React.createContext<SongContext>(defaultSongContext)