import { Rodape } from "./Rodape";
import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";


export default function SideBar(){
    return(
        <div className="sidebar">
            <Usuario usuarioInicial = "Monkey D' Luffy" imagem = "assets/img/luffy.png"/>   
            <Sugestoes/>      
            <Rodape/>
        </div>
    );
}