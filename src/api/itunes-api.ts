import { itunesAPISearchInstance } from "./axios-instances";
import { iTunesAPIResponse } from "./data-types";

export async function searchTerm(searchTerm: string): Promise<iTunesAPIResponse> {
    const response = await itunesAPISearchInstance.get("/" ,{ params: { term: searchTerm }})
    return response.data
}