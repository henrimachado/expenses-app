//helper functions

import { Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "../../helpers";

//loader
export function mainLoader() {
    const userEmail = fetchData("userEmail");
    return { userEmail };

}

const Main = () => {
    const { userEmail } = useLoaderData();

    return (
        <div className="layout">
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Main