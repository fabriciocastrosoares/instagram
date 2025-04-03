import Sugestao from "./Sugestao";

export default function Sugestoes(){

  const objetoSugestao = [
    {usuarioSugestao:"Portogas D'Ace", imagemSugestao : "assets/img/Ace.png"},
    {usuarioSugestao:"Edward Newgate", imagemSugestao : "assets/img/barba.png"},
    {usuarioSugestao:"Shanks (O Ruivo)", imagemSugestao : "assets/img/Shanks.png"},
    {usuarioSugestao:"Nefertari Vivi", imagemSugestao : "assets/img/Vivi.png"},
    {usuarioSugestao:"Arlong", imagemSugestao : "assets/img/Arlong.png"}  
  ];  
    return(
        <div className="sugestoes">
          <div className="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>
            {objetoSugestao.map((obj) => <Sugestao key={obj.usuarioSugestao} imagemSugestao = {obj.imagemSugestao} usuarioSugestao = {obj.usuarioSugestao}/> )}
        </div>
    );
}
