import { ExpenseItem } from "./ExpenseItem"

export const Table = ({ expenses }) => {
    return (
        <div >
            {
                expenses.map((expense) => (
                    <div key={expense.id}>
                        <ExpenseItem expense={expense} />
                    </div>
                ))
            }
        </div>
    )
}
