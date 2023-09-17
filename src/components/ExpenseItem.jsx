
//Lib imports
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"
import { toast } from "react-toastify";

//Helpers
import { deleteItem, formatCurrency, formatDateToLocaleString } from "../../helpers"






export const ExpenseItem = ({ expense }) => {

    function deleteExpense() {
        try {
            deleteItem({
                key: "expenses",
                id: expense.id
            })
            toast.success("Expense deleted.")
        }
        catch (e) {
            throw new Error("There was a problem deleting this expense. Try again")
        }

    }

    return (
        <div className="card">

            <div className="nome">
                <p>{expense.name}</p>
                <p>Name</p>
            </div>

            <div className="amount">
                <p>{formatCurrency(expense.amount)}</p>
                <p>Amount</p>
            </div>

            <div className="category">
                <p>{expense.category}</p>
                <p>Category</p>
            </div>

            <div className="date">
                <p>{formatDateToLocaleString(expense.date)}</p>
                <p>Date</p>
            </div>


            {/* Buttons */}
            <div className="actions" style={{ display: "flex", justifyContent: "space-around", gap: "20px" }}>
                <a href="#" className="general-btn" onClick={() => alert("Sorry, this feature is still under development!")} ><PencilSquareIcon width={20} /></a>



                <a href="#" className="delete-btn" onClick={(event) => {
                    if (!confirm("Are you sure you want to delete this expense?")) {
                        event.preventDefault()
                    }
                    else {
                        deleteExpense()

                    }
                }} ><TrashIcon width={20} /></a>
            </div>


        </div>

    )
}

