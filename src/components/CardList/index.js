import React, {useState, useEffect} from 'react';
import Card from '../Card';

const CardList = () => {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json()).then(data => setComments(data))
    },[]);



    console.log(comments);

    return (
        <div>
            {comments.map((comment) => <Card key={comment.id} title={comment.name} body={comment.username}/>)}
        </div>
    )
}

export default CardList

