import React, {useCallback} from 'react';
import {
    addPostActionCreator, PostType, removePostAc,
} from "../ProfileReducer";
import {useDispatch} from "react-redux";
import {MessagePostType, MyPosts} from "./MyPosts";

type MyPostsContainerType = {
    posts: Array<PostType>
}

export const MyPostsContainer: React.FC<MyPostsContainerType> = React.memo((props) => {

    const {
        posts
    } = props

    const dispatch = useDispatch()

    const addPost = useCallback((formData: MessagePostType) => {
        dispatch(addPostActionCreator(formData.message))
    }, [addPostActionCreator])

    const removePost = (userId:string)=> {
        dispatch(removePostAc(userId))
    }

    return (
        <MyPosts
            posts={posts}
            addPost={addPost}
            removePost={removePost}
        />
    )
})


// export const MyPostsContainer = (store: AppStateType) => {
//     // const {store} = props;
//
//
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//             let state = store.getState()
//
//             const addPost = (message: string) => {
//                 const action = addPostActionCreator(message)
//                 store.dispatch(action)
//             }
//             const updateNewPostText = (event: string) => {
//                 let action = updateNewPostTextActionCreator(event)
//                 store.dispatch(action)
//             }
//
//             return(
//                 <MyPosts updateNewPostText={updateNewPostText}
//                          addPost={addPost}
//                          messageForNewPost={state.profilePage.messageForNewPost}
//                          posts={state.profilePage.posts}
//                 />
//             )
//         }
//         }
//         </StoreContext.Consumer>
//     )
// }

// type MapStateToPropsType = {
//     posts: Array<PostType>
//     messageForNewPost: string
// }
//
// type MapDispatchToPropsType = {
//     updateNewPostText: (message: string)=> void
//     addPost:(messagePost: string)=> void
// }
//
// let mapStateToProps = (state:AppStateType):MapStateToPropsType => {
//     return {
//         posts: state.profilePage.posts,
//         messageForNewPost: state.profilePage.messageForNewPost
//     }
// }
//
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType=> {
//     return {
//         updateNewPostText: (message: string)=> {
//             dispatch(updateNewPostTextActionCreator(message))
//         },
//         addPost: (messagePost: string)=> {
//             dispatch(addPostActionCreator(messagePost))
//         }
//     }
// }
//
//
// const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts);
//
// export default MyPostsContainer

