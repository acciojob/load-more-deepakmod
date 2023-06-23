import React, { useState } from 'react';

const LoadMore = ({items}) => {

    const [list,setList]=useState([]);

    function displayItems(){
        let updatedList=items.splice(0,10);
        setList([...list,...updatedList]);
    }

    return (
        <div>     
            <ul>
                {
                    list.map((item)=><li key={item}>{item}</li>)
                }
            </ul>
            <button onClick={displayItems} >Load More</button>
        </div>
    );
};

export default LoadMore;