//RRD imports
import { Form, useLoaderData } from "react-router-dom"

//assets
import anotherbg from "../assets/anotherbg.svg"

//lib imports
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/solid"






export const Intro = () => {

    const style = {
        backgroundImage: `url(${anotherbg})`,
        backgroundSize: "cover"
        
    }

    return (
        <div className="flex-lg intro-components" style={style}>
            <div className="flex-md intro-components" style={{
                backgroundColor: "#FFFFFF10",
                backdropFilter: "blur(20px)",
                height: "60%",
                maxHeight: "400px",
                padding: "40px",
                borderRadius: "0.2rem",
                flexDirection: "column",
                justifyContent: "center"

            }}>
                <h1 className="h2 text-off-white">Welcome back!</h1>
                <p className="text-off-white"><span style={{ color: "var(--gradient-two)" }}><strong>Login</strong></span> Your Account</p>


                <Form method="post">

                    <div className="input-login" style={{ marginBottom: "1rem" }}>
                        <div style={{
                            backgroundImage: "linear-gradient(to top right, #2879FF, #D048FF)",
                            color: "#E8E7EE",
                            display: "flex",
                            width: "50px",
                            padding: "8px 16px",
                            justifyContent: "center",
                            alignItems: "center",
                            // borderRadius: "0.2rem 0 0 0.2rem",
                        }}>
                            <span><UserIcon width={20} /></span>
                        </div>

                        <input
                            type="text"
                            name="userEmail"
                            required
                            placeholder="Email ID"
                            aria-label="Your e-mail"
                            style={{
                                width: "auto",
                                backgroundColor: "transparent",
                                border: "none",

                            }}
                        />
                    </div>

                    <div className="input-login">
                        <div style={{
                            // backgroundColor: "#3D2645",
                            backgroundImage: "linear-gradient(to top right, #2879FF, #D048FF)",
                            color: "#E8E7EE",
                            display: "flex",
                            width: "50px",
                            padding: "8px 16px",
                            justifyContent: "center",
                            alignItems: "center",
                            // borderRadius: "0.2rem 0 0 0.2rem"
                        }}>
                            <span><LockClosedIcon width={20} /></span>
                        </div>


                        <input
                            type="password"
                            name="userPassword"
                            required
                            placeholder="Password"
                            aria-label="Your e-mail"
                            style={{
                                width: "auto",
                                backgroundColor: "transparent",
                                border: "none",

                            }}
                        />
                    </div>

                    <input type="hidden" name="_action" value="userLogin" />
                    
                    <button
                        type="submit"
                        aria-label="login your account"
                        className="btn"
                    ><span>Login</span>
                    </button>
                </Form>
            </div>
        </div>
    )
}
