import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid"
import { deleteItem, formatCurrency, formatDateToLocaleString } from "../../helpers"
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";




export const ExpenseItem = ({ expense }) => {

     function deleteExpense () {
        try {
            deleteItem ({
                key: "expenses",
                id: expense.id
            })
            toast.success("Expense delete sucessfully")
        }
        catch (e) {
            throw new Error ("There was a problem deleting this expense. Try again")
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
            <div className="actions" style={{display: "flex", justifyContent: "space-around", gap: "20px"}}>
                <a href="#" className="general-btn" ><PencilSquareIcon width={20}/></a>
                
                
        
                <a href="#" className="delete-btn" onClick={(event) => {
                    if(!confirm("Are you sure you want to delete this expense?")){
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

//No click do edit, jogar os dados da expanse em outro lugar
//jogar pro autocomplete = valor no form
// se tiver valor diferente, deleta a antiga e adiciona a nova se for igual, não faz nada