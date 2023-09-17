//RRD imports
import { Link, useNavigate } from "react-router-dom";

//Lib imports
import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid"

export const Overview = () => {

  const navigate = useNavigate();

  return (
    <div
      className="error"
      style={{
        backgroundColor: "var(--off-white)",
        width: "100%",
        height: "100vh",
      }}
    >

      <h1>Uh oh! We've got a problem.</h1>
      <p>This page is still under construction. We're working on making this better for you.</p>


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
