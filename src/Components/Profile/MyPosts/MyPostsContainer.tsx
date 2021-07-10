import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import StoreContext  from '../../../StoreContext';


// type PropsType = {
//     store: StoreType
// }




export const MyPostsContainer = (props: any) => {
    // const {store} = props;




    return (
        <StoreContext.Consumer>
            {(store) => {
            let state = store.getState()

            const addPost = (message: string) => {
                const action = addPostActionCreator(message)
                store.dispatch(action)
            }
            const updateNewPostText = (event: string) => {
                let action = updateNewPostTextActionCreator(event)
                store.dispatch(action)
            }

            return(
                <MyPosts updateNewPostText={updateNewPostText}
                         addPost={addPost}
                         messageForNewPost={state.profilePage.messageForNewPost}
                         posts={state.profilePage.posts}
                />
            )
        }
        }
        </StoreContext.Consumer>
    )
}

