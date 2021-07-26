import './App.css';
import Search from "./components/Search"
import Playlist from "./components/Playlist"
import { useState } from 'react';
import { spotifyComplete, spotifyFeaturedPlaylist, spotifySearchForAnItem } from "./urls"
import Artists from './components/Artists';

function App() {
  const accessToken = window.location.hash && window.location.hash.split('=')[1];
  console.log(accessToken);
  const [data, setData] = useState(null);
  const [search, setsearch] = useState("");
  const [artistData, setArtistData] = useState(null);


  if (accessToken && !data) {
    const options = {
      method: 'get',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
    };
    const url = new URL(spotifyFeaturedPlaylist);
    fetch(url, options).then(response => response).then(response => response.json()).then(jsonResponse => setData(jsonResponse));
  }

  function clickSearch() {
    const options = {
      method: 'get',
      headers: new Headers({
        Authorization: `Bearer ${accessToken}`,
      }),
    };
    const url = new URL(spotifySearchForAnItem);
    url.search = new URLSearchParams({
      q: search,
      type: "artist"
    })
    fetch(url, options).then(response => response).then(response => response.json()).then(jsonResponse => setArtistData(jsonResponse));
  }

  return (
    <div className="App">
      {// aqui eu fiz a importacao do componente Search
      }
      <Search search={search} setsearch={setsearch} clickSearch={clickSearch}></Search>
      {!accessToken && <div className="authorizeLink">
        <a
          href={spotifyComplete}
        >
          Authorize with spotify
        </a>
      </div>}
      {data && !artistData && <Playlist data={data}></Playlist>}
      {artistData && <Artists data={artistData}></Artists>}
    </div>
  );
}

export default App;
