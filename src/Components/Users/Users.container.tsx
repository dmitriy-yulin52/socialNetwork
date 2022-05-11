import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followThunkCreator,
  getUsersThunkCreator,
  unfollowThunkCreator,
} from "../../Redux/Users/users-reducer";
import { Users } from "./Users";
import { selectStateUsersPage } from "../../Redux/selectors";
import { Paginator } from "./Paginator/Paginator";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

const UsersContainer = () => {
  const { items, pageSize, totalCount, currentPage, followingInProgress } =
    useSelector(selectStateUsersPage);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsersThunkCreator(currentPage, pageSize));
  }, [currentPage, dispatch, pageSize]);

  const onPageChanged = useCallback(
    (pageNumber: number) => {
      dispatch(getUsersThunkCreator(pageNumber, pageSize));
    },
    [getUsersThunkCreator, pageSize]
  );
  const follow = useCallback(
    (userId: number) => {
      dispatch(followThunkCreator(userId));
    },
    [followThunkCreator]
  );
  const unfollow = useCallback(
    (userId: number) => {
      dispatch(unfollowThunkCreator(userId));
    },
    [unfollowThunkCreator]
  );

  let pagesCount = Math.ceil(totalCount / pageSize);

  const memomizePages = useMemo(() => {
    let pages: number[] = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return pages;
  }, [pagesCount]);

  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        pages={memomizePages}
      />
      <Users
        users={items}
        followingInProgress={followingInProgress}
        follow={follow}
        unfollow={unfollow}
      />
    </div>
  );
};

export default compose<React.ComponentType>(withAuthRedirect)(UsersContainer);
