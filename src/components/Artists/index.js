const Artists = (props) => {
    return (
        <div className="listContent">
            {props.data && props.data.artists.items.map(item => {
                return (
                    <a key={item.id} href={item.external_urls.spotify}>
                        <img
                            src={item.images && item.images.length && item.images[0].url}
                            alt={item.name}
                        />
                        <div>{item.name}</div>
                    </a>
                );
            })}
        </div>
    )
}

export default Artists