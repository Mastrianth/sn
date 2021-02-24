import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 4},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
        {id: 3, message: 'Yo', likesCount: 0},
        {id: 4, message: 'Yo', likesCount: 0},
        {id: 5, message: 'Yo', likesCount: 0}
    ]
}

test('length of post should be incremented', () => {
    let action = addPostActionCreator("karfagen will be destroyed");

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(6);
});

test('text of post must be correct', () => {
    let action = addPostActionCreator("karfagen will be destroyed");

    let newState = profileReducer(state, action);

    expect(newState.posts[5].message).toBe("karfagen will be destroyed");
});

test('after deleting length of message should be decrement', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

test(`after deleting length shouldn't be decrement if id is incorrect` , () => {
    let action = deletePost(1000);

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5);
});