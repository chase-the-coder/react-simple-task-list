import React from 'react';

export default function List(props) {
	return (
        <>
            <ul>{props.listItems.map((item) => {
             return   <>
                 <li key={item}>{item} <button onClick={() => props.onItemDelete(item)}>delete</button></li>
               
                </>
            })}
            </ul>
        </>
)

}
