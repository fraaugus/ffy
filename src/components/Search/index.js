import { useState } from 'react';

const Search = (props) => {
    // aqui eu criei um estado =>  search

    return (
        <div>
            {//toda x que eu tiver mudança no evento de search o setsearch vai definir o valor no useState
            }
            <input value={props.search} onChange={(event) => { props.setsearch(event.target.value) }}></input>
            <button onClick={props.clickSearch}>Search</button>
            {/* {search} */}
        </div>
    )
}

export default Search