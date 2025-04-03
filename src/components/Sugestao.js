export default function Sugestao(props){
    return(
        <div className="sugestao">
        <div className="usuario">
          <img src={props.imagemSugestao} alt={props.usuarioSugestao}/>
          <div className="texto">
            <div className="nome">{props.usuarioSugestao}</div>
            <div className="razao">Segue você</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>
    );
}