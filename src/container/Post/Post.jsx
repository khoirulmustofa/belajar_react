import React from 'react'
import '../BlogPost/BlogPost.css'

const Post = (props) => {
    return (
        <div>
            <img src="https://placeimg.com/200/150/tech" alt="" />
            <button onClick={()=> props.remove(props.data.id)}>Remove</button>
            <button onClick={()=> props.update(props.data)}>Update</button>
            <p className='judul'>{props.data.title}</p>
            <p>{props.data.body}</p>
            <hr />
        </div>
    )

};

export default Post;