
//React Router Dom imports
import { Link, Outlet, useLoaderData } from "react-router-dom";

//Lib imports
import { toast } from "react-toastify";

//Components 
import { Intro } from "../components/Intro";
import { createExpense, fetchData } from "../../helpers";
import { Nav } from "../components/Nav";
import { Expenses } from "./Expenses";




//Loader
export function dashboardLoader() {
  const userEmail = fetchData("userEmail");
  const userPassword = fetchData("userPassword");
  const userLogged = fetchData("userLogged");
  const expenses = fetchData("expenses")
  return { userEmail, userPassword, userLogged, expenses};
}

export const validUser = {
  userName: "Henrique",
  userEmail: "valid@gmail.com",
  userPassword: "1234"
}

//Action
export async function dashboardAction({ request }) {

  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  //newUser submission
  if (_action === "userLogin") {
    try {
      // localStorage.setItem("userEmail", JSON.stringify(values.userEmail))
      // localStorage.setItem("userPassword", JSON.stringify(values.userPassword))


      if (JSON.stringify(values.userEmail) == JSON.stringify(validUser.userEmail)
        && JSON.stringify(values.userPassword) == JSON.stringify(validUser.userPassword)) {
        localStorage.setItem("userLogged", JSON.stringify("true"))
        return toast.success(`Welcome, ${validUser.userName}`)
      }

      else {
        return toast.error("Failled to login. Username or password invalid");
      }


    } catch (e) {
      throw new Error("There was a problem trying to login!")
    }
  }

  //Add expense
  if (_action === "createExpanse") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        date: values.newExpenseDate,
        category: values.newExpenseCategory
      })

      console.log(values.newExpenseDate)
      return toast.success("Expense added!")

    } catch (e) {
      throw new Error("There was a problem creating your expense. Try again!")
    }
  }



}


const Dashboard = () => {

  const {userLogged, expenses} = useLoaderData();
  return (

    <div>
      {

        userLogged ? (

          <div className="grid-lg small--screen" style={
            {
              gridTemplateColumns: "100px 1fr",
              minHeight: "100vh",
              backgroundColor: "var(--off-white)"

            }
          }>
              <div>
                <Nav userLogged={userLogged} userName={validUser.userName} />
              </div>
             
              <main style={{placeItems: "start", padding: "0"}}>
                <Expenses />
              </main>
          </div>
        )
          : <Intro />

      }
    </div>
  )
}

export default Dashboard