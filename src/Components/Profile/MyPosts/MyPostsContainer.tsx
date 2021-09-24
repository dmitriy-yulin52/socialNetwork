import React, {useCallback} from 'react';
import {
    addPostActionCreator,
} from "../ProfileReducer";
import {useDispatch, useSelector} from "react-redux";
import {MessagePostType, MyPosts} from "./MyPosts";
import {AppStateType} from "../../../Redux/reduxStore";


export const MyPostsContainer = React.memo(()=> {

    const selector = (state:AppStateType)=> state.profilePage

    const {
        posts,

    }= useSelector(selector)
    const dispatch = useDispatch()

    const addPost = useCallback((formData:MessagePostType)=> {
        dispatch(addPostActionCreator(formData.message))
    },[addPostActionCreator])


    return(
        <MyPosts
            posts={posts}
            addPost={addPost}
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

