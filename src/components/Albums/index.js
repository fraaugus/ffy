const Albums = (props) => {
    return (
        <div className="listContent">
            {props.data && props.data.items.map(item => {
                return (
                    <div key={item.id} onClick={() => props.searchAlbum(item.id)}>
                        <img
                            src={item.images && item.images.length && item.images[0].url}
                            alt={item.name}
                        />
                        <div>{item.name}</div>
                    </div>
                );
            })}
        </div>
    )
}

export default Albums