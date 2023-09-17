import { Form } from "react-router-dom"
import { PlusIcon } from "@heroicons/react/24/solid"
export const AddExpenseForm = () => {
    return (
        <div className="wrapper">
            <h2 className="h3">Add expense</h2>

            <Form
                method="post"
                className="grid-sm card-add-expense"
                >

                <div className="grid-xs">
                    <label htmlFor="newExpense">Name</label>
                    <input className="expense--forms"
                    type="text"
                        style={{
                            border: "none"
                        }}
                        name="newExpense"
                        id="newExpense"
                        required
                        placeholder="e.g., Coffee" />
                </div>

                <div className="grid-xs">
                    <label htmlFor="newExpenseAmount">Amount (R$)</label>
                    <input className="expense--forms"
                    type="number"
                        step="0.01"
                        style={{
                            border: "none"
                        }}
                        name="newExpenseAmount"
                        id="newExpenseAmount"
                        required
                        placeholder="e.g., R$2,50"
                        inputMode="decimal" />
                </div>

                <div className="grid-xs">
                    <label htmlFor="newExpenseDate">Date</label>
                    <input className="expense--forms"
                    type="date"
                        style={{
                            border: "none"
                        }}
                        name="newExpenseDate"
                        id="newExpenseDate"
                        required />
                </div>

                <div className="grid-xs">
                    <label htmlFor="newExpenseCategory">Category</label>
                    <select className="expense--forms"
                        name="newExpenseCategory"
                        id="newExpenseCategory"
                        required style={{ border: "none" }}>

                        <option value="Clothing">Clothing</option>
                        <option value="Debts and Loans">Debts and Loans</option>
                        <option value="Education">Education</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Housing">Housing</option>
                        <option value="Miscellaneous">Miscellaneous</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Travel">Travel</option>
                        <option value="Personal Care">Personal Care</option>
                        <option value="Utilities">Utilities</option>
                    </select>
                </div>
                <input type="hidden" name="_action" value="createExpanse" />

                <button type="submit" className="btn" style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center"
                }}>
                    <PlusIcon width={20} />
                    <span>Add new expense</span>
                </button>
            </Form>
        </div>
    )
}
