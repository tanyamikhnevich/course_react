import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={store.addPost.bind(store)}
                 addMassage={store.addMassage.bind(store)}
                 newPostText={store._state.profilePage.newPostText}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 updateNewMassageText={store.updateNewMassageText.bind(store)}
                 newMassageText={store._state.dialogsPage.newMassageText}
            />
        </React.StrictMode>
    );
}

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
