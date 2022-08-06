import {TableCell} from "../TableCell/TableCell";
import classes from '../../App.module.css'
import {useDispatch} from "react-redux";
import {pickDropExactUsersThunkCreater} from "../../Redux/Reducers/usersReducer";


export const TableRow = ({id, name, userName, email, picked}) => {


    const dispatch = useDispatch()

    const check = (id) => {
            dispatch(pickDropExactUsersThunkCreater(id))
    }

    return (

        <div className={picked ? classes.table__rowPicked : classes.table__row}>
            <TableCell item={ <input type="checkbox" id="topping" name="topping" checked={picked} onChange={() => check(id)} />} />
            <TableCell item={name} />
            <TableCell item={userName} />
            <TableCell item={email} />
        </div>
    )
}