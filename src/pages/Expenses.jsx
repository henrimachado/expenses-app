import { AdjustmentsHorizontalIcon, UserIcon } from "@heroicons/react/24/solid"
import { validUser } from "./Dashboard"
import { AddExpenseForm } from "../components/addExpenseForm"
import { fetchData } from "../../helpers"
import { Table } from "../components/Table"



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
          <p><small>Hi, {validUser.userName}! Good morning. </small></p>
        </div>

        <div
          className="filter--icon"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center"
          }}>
          <a href="#" className = "general-btn" onClick={() => alert("Sorry, this function is not working right now!") }>
            <AdjustmentsHorizontalIcon width={30} />
          </a>

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
