import React from 'react';
import Category from './catetory'

function Categories(props){
    return(
        <div>
            {
                props.categories.map((item)=>{
                    return(
                        <Category key={item.id} {...item}/>
                    )
                })
            }
        </div>
    )
}

export default Categories;