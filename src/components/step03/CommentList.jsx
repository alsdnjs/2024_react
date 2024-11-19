import React from 'react';
import Comment from './Comment';

// 이것은 배열 , 나즁애 DB
const comments = [
    {
        name : "홍길동",
        comment : "방가 방가"
    },
    {
        name : "둘리",
        comment : "호잇"
    },
    {
        name : "뚜비",
        comment : "하이"
    },
    {
        name : "희동이",
        comment : "안녕하세요"
    },

] 

function CommentList(props) {
    return (
        <div>
            {
                comments.map((k) => {
                    return (
                        <Comment name ={k.name} comment={k.comment} />
                    );
                })

            }
        </div>
    );
}

export default CommentList;