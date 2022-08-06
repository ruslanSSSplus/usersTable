import classes from '../../App.module.css'

export const TableCell = ({ item }) => {

    return (
        <div className={classes.table__cell}>
            {item}
        </div>
    )
}