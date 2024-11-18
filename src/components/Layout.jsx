import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";


const Layout =() => {

    return (
        <>
            <div>
                <NavBar></NavBar>
            </div>
            <div className="mt-4 mb-4">
                <Outlet></Outlet>
            </div>
        </>
        
    );


}

export default Layout;