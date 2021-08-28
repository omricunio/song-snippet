export interface iTunesAPIResponse {
    resultCount: number,
    results: iTunesAPIItem[]
}

export interface iTunesAPIItem {
    artistName: string,
    collectionName: string,
    trackName: string,

    artworkUrl30: string,
    artworkUrl60: string,
    artworkUrl100: string,

    previewUrl: string,
}