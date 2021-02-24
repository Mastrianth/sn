import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 4},
                {id: 2, message: 'It\'s my first post', likesCount: 23},
                {id: 3, message: 'Yo', likesCount: 0},
                {id: 4, message: 'Yo', likesCount: 0},
                {id: 5, message: 'Yo', likesCount: 0}
            ],
            newPostText: `samurai`
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Kikita'},
                {id: 2, name: 'Stas'},
                {id: 3, name: 'Gena'},
                {id: 4, name: 'Turbo'},
                {id: 5, name: 'DushaMetelkin'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageBody: ''
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log(`state changed`);
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);


    }
}

export default store;
window.store = store;