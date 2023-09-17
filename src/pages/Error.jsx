//RRD imports
import { Link, useNavigate, useRouteError } from "react-router-dom"

//Lib imports
import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid"

export const Error = () => {

    const error = useRouteError();
    const navigate = useNavigate();
    console.log(error)

    return (
        <div
            className="error"
            style={{
                backgroundColor: "var(--off-white)",
                height: "100vh", 
                padding: "50px"
            }}
        >
            <h1 >Uh oh! We've got a problem.</h1>
            {
                !error.status === 404 ? (
                    <p>{error.message || error.statusText}</p>
                ) : (
                    <p>Sorry, this page either doesn't exist or it's under construction.</p>
                )
            }

            <div className="grid-xs" style={{
                gridTemplateColumns: "30% 30%",
                maxWidth: "800px",
                alignContent: "center", 
                justifyContent: "center",
                padding: "0 20%"
                
            }}>
                
                <button className="btn"
                aria-label="Go to the previous page"
                style={{
                    display: "flex",
                    justifyContent: "center", 
                    alignContent: "center", 
                    color: "var(--off-white)",
                    textDecoration: "none",
                    gap: "0.4rem",
  

                }}
                onClick={() => navigate(-1)}>
                     <ArrowUturnLeftIcon width={20}/>
                     {/* <span>Go back</span> */}
                </button>

                <Link className="btn"
                aria-label="Go to the home page"
                    style={{
                        display: "flex",
                        justifyContent: "center", 
                        alignContent: "center", 
                        color: "var(--off-white)",
                        textDecoration: "none",
                        gap: "0.4rem",
    
                    }}
                    to="/"> 
                        <HomeIcon width={20}/>
                        {/* <span>Go home</span> */}
                    </Link>
            </div>
            
            
        </div>
    )
}
