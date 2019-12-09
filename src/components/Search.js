import React from 'react';

function Search(props) {
return(
    <div>
     <input onChange ={props.searchHandler} type = "text "/>
    </div>
)
	}

export default Search
