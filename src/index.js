import reportWebVitals from './reportWebVitals';
import state, {addMassage, addPost, subscribe, updateNewMassageText, updateNewPostText} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}
                 addMassage={addMassage}
                 newPostText={state.profilePage.newPostText}
                 updateNewPostText={updateNewPostText}
                 updateNewMassageText={updateNewMassageText}
                 newMassageText={state.dialogsPage.newMassageText}
            />
        </React.StrictMode>
    );
}

renderEntireTree(state);

subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
