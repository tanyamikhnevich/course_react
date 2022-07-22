import profileReducer, {actions} from "./profile-reducer";
import {ProfileType} from "../Types/types";

let state = {
  posts: [
    { id: 1, massage: "Yo!", likesCount: 67 },
    { id: 2, massage: "My first post", likesCount: 34 },
    { id: 3, massage: "Wow!!", likesCount: 45 },
    { id: 4, massage: "Yo", likesCount: 38 },
    { id: 5, massage: "Hello", likesCount: 98 },
  ],
  profile: null,
  status: "",
};

it ('length of post should be incremented', () => {
  let action = actions.addPostActionCreator('kukuku');

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(6);

});
it ('message should be kukuku', () => {
  let action = actions.addPostActionCreator('kukuku');

  let newState = profileReducer(state, action);

  expect(newState.posts[5].massage).toBe('kukuku');

});

it ('after deleting of message should be decrement', () => {
  let action = actions.deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(4);

});
it ('after deleting of message should not be decrement', () => {
  let action = actions.deletePost(1000);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(5);

});

