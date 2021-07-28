export const clientId = "5c00ea31cb35430586e740b10596359f";
export const spotifyAuthorize = "https://accounts.spotify.com/authorize";
export const spotifyComplete = `${spotifyAuthorize}?client_id=${clientId}&response_type=token&redirect_uri=${window.location.origin}/`;
export const spotifyFeaturedPlaylist = "https://api.spotify.com/v1/browse/featured-playlists";
export const spotifySearchForAnItem = "https://api.spotify.com/v1/search";
export const spotifySearchAlbums = "https://api.spotify.com/v1/artists/{id}/albums";