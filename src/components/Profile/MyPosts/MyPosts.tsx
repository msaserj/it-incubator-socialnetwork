import React from "react";
import classes from './MyPosts.module.css'
import {MessageType, Post} from "./Post/Post";



export const MyPosts = () => {

    const postData: Array<MessageType>  = [
        {id: 1, message: "Hi", likesCount: 5},
        {id: 2, message: "How is your it-kamasutra", likesCount: 6},
        {id: 3, message: "Yo", likesCount: 10},
        {id: 4, message: "Yo", likesCount: 20},
        {id: 5, message: "Yo", likesCount: 30}

    ]
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea>Add post</textarea></div>
                <div><button>Add post</button></div>
                <div className={classes.item}>
                    New Post
                </div>
                <div className={classes.item}>
                    <Post id={1} message={postData[0].message} likesCount={postData[0].likesCount} />
                    <Post id={2} message={postData[1].message} likesCount={postData[1].likesCount} />

                </div>
            </div>
        </div>
    )
}