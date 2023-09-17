
// rrd imports
import { redirect } from "react-router-dom";


//helpers
import { deleteItem } from "../../helpers";

//lib imports
import { toast } from "react-toastify";


export async function logoutAction(){

    //Delete de user
    deleteItem({
        key: "userLogged"
    })
    deleteItem({
        key: "expenses"
    })

    toast.success("You've successfully logged out!")

    //Return redirect
    return redirect("/")
}