import Corpo from "./Corpo";
import Topo from "./Topo";
import SideBar from "./SideBar";

export default function App(){
    return(
        <div class = "root">
            <Topo/>
              <Corpo>
                <SideBar/>
              </Corpo>           
        </div>
    
    );
}