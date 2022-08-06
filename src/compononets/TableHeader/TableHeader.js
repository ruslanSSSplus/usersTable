import classes from '../../App.module.css'

export const TableHeader = ({check, checked}) => {

    return (
            <div className={classes.header}>
                <input type="checkbox" id="topping" name="topping" checked={checked} onChange={() => check()} />
                <div className="table__cell">Имя</div>
                <div className="table__cell">Фамилия</div>
                <div className="table__cell">Почта</div>
            </div>
    )
}