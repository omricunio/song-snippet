import React from 'react'

interface Song {
    name: string,
    artist: string,
    imageUrl: string,
    playableUrl: string
}

export const defaultSong: Song = {
    name: "Song",
    artist: "Artist",
    imageUrl: "https://etcanada.com/wp-content/uploads/2021/05/Leave-Before-You-Love-Me-Artwork.jpg?quality=80&strip=all&w=1024",
    playableUrl: ""
}

export const SongContext = React.createContext<Song>(defaultSong)