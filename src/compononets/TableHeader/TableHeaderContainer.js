import { useState} from "react";
import {dropUsersThunkCreater, pickUsersThunkCreater} from "../../Redux/Reducers/usersReducer";
import {useDispatch} from "react-redux";
import {TableHeader} from "./TableHeader";


export const TableHeaderContainer = () => {
    const [checked, setChecked] = useState(false);

    const dispatch = useDispatch()

    const check = () => {
        setChecked(!checked)
        !checked ?
            dispatch(pickUsersThunkCreater()) :
            dispatch(dropUsersThunkCreater())
    }

    return (
        <TableHeader check={check} checked={checked} />
    )
}