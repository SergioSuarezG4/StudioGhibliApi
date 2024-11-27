import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";


const Layout =() => {

    return (
        <>
            <div>
              <header>
                <NavBar></NavBar>
              </header>
              <main className="mt-4 mb-4">
                <Outlet />  
              </main>
            </div>
          
        
        </>

        
                
        
    );


}

export default Layout;