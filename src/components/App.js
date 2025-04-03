import Corpo from "./Corpo";
import Topo from "./Topo";
import SideBar from "./SideBar";

export default function App(){
    return(
        <div className = "root">
            <Topo/>
              <Corpo>
                <SideBar/>
              </Corpo>           
        </div>
    
    );
}