import React from 'react';


function Item({name ,isPacked}) {
    // if(isPacked){
        
    //     return <li>{name} ✅ </li>
    
    // }else{
    //     return <li>{name}  </li>
    // }

    // 조건부로 null 반환하면 아무것도 반환하지 않는다
    // if(isPacked){
        
    //     return <li>{name} ✅ </li>
    
    // }else{
    //     return <li>{name}  </li>
    // }

    // && 연산자
    // && 기준으로 왼쪽이 true , 오른쪽이 반환 된다.
    // 참이면 표시 거짓이면 포시안함
    // return (
    //     <li> {name} {isPacked && '✅'} </li>

    // );

        let itemContent = name ;

    if(isPacked) {
        itemContent = name + "✅";
    }
    return (
        <li>{itemContent}</li>
    );
}

export default Item;