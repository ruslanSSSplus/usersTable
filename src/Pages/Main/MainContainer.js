import React, {useEffect} from "react";
import {getUsersThunkCreater} from "../../Redux/Reducers/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {MainPage} from "./MainPage";

export const MainContainer = () => {



    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getUsersThunkCreater())
    }, [])
    const {users} = useSelector((state) => state.users)

    let pickedUsers = users.filter((el) => {
        return el.picked === true;
    }).map(x => x.name).join(", ")


    return (users !== []
            ? < MainPage users={users} pickedUsers={pickedUsers}/>
            : <h1>loading...</h1>
    )
};
