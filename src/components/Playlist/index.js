const Playlist = (props) => {

    return (
        <div className="listContent">
            {props.data && props.data.playlists.items.map(item => {
                return (
                    <a key={item.id} href={item.external_urls.spotify}>
                        <img
                            src={item.images[0].url}
                            alt={item.name}
                        />
                        <div>{item.description}</div>
                    </a>
                );
            })}
        </div>
    )
}

export default Playlist