//Components
import { Table } from "../components/Table"
import AddExpenseForm from "../components/AddExpenseForm"

//User
import { validUser } from "./Dashboard"

//Helpers
import { fetchData } from "../../helpers"

//Lib imports
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid"





export const Expenses = () => {
  const expenses = fetchData("expenses");

  return (
    <div className="grid-lg grid--expenses"
      style={{
        width: "100%",
        gridTemplateRows: "100px 1fr",
        gap: "3rem",
        padding: "0 3rem",

      }}>

      <header
        style={{
          marginTop: "4rem",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>

        <div>
          <h2 className="h3"><strong>My expenses</strong></h2>
          <p><small>Hi, {validUser.userName}!  </small></p>
        </div>
      </header>

      <div className="grid-lg grid--cards" style={{
        gridTemplateColumns: "0.3fr 0.7fr",
        height: "100%",
        gap: "2rem"

      }}>

        <div style={{ height: "60%" }}>
          <AddExpenseForm />
        </div>



        <div >
          {expenses && expenses.length > 0 &&
            (
              <div className="list--expenses" style={{ alignContent: "start" }}>
                <h2 className="h3">Expenses</h2>
                <div className="expenses--listing">
                  <Table expenses={expenses.sort((a, b) => b.createdAt - a.createdAt)} />
                </div>
              </div>
            )
          }
        </div>

      </div>
    </div>




  )
}
