//RRD imports
import { ArrowLeftOnRectangleIcon, BoltIcon,  ChartPieIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { Form, NavLink } from "react-router-dom"

//assets
import anotherbg from "../assets/anotherbg.svg"

export const Nav = ({ userLogged, userName }) => {

    return (
        <nav style={{
            backgroundImage: `url(${anotherbg})`,
            backgroundSize: "cover",
            height: "100vh",
            width: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            position: "fixed",
            margin: "0",

        }}>

            <div
                className="flex-sm text-off-white"
                style={{
                    marginTop: "2rem",
                    marginBottom: "3rem",
                    display: "flex",
                    justifyContent: "center",
                }}>

                 <BoltIcon width={30} style={{color: "#D048FF"}}/>
                <h6>Expenses</h6>

            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "15%",
                alignItems: "space-between"
            }}>
                <div>
                    <NavLink
                        to="/"
                        aria-label="Go to my expenses"
                        className="nav--item"

                    >
                        <CurrencyDollarIcon width={30} />
                    </NavLink>
                </div>

                <div>
                    <NavLink
                        to="/overview"
                        aria-label="Go to overview"
                        className="nav--item"
                    >
                        <ChartPieIcon width={30} />
                    </NavLink>
                </div>

                

            </div>

            <div>
                {
                    userLogged && (
                        <Form
                            method="post"
                            action="/logout"
                            onSubmit={(event) => {
                                if (!confirm("Leave now?")) {
                                    event.preventDefault()
                                }
                            }} >

                            <button type="submit" className="btn btn--logout " style={{
                                width: "100%",
                                padding: "12px",
                                justifyContent: "center",
                                alignContent: "center",
                                display: "flex",
                                marginTop: "50px",
                            }}>
                                <ArrowLeftOnRectangleIcon width={20} />
                            </button>

                        </Form>
                    )
                }
            </div>
        </nav>
    )
}
