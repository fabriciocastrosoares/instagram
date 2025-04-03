import { useState } from "react";

export default function Post(props){
  const [iconeSalvo, setIconeSalvo] = useState("bookmark-outline");
  const [ionCurtida, setIonCurtida] = useState("heart-outline");
  const [acao, setAcao] = useState("");
  const [qtdeCurtida, setQtdeCurtidas] = useState(props.quantidadeCurtidas);
  const [animacao, setAnimacao] = useState(false);

  function marcarSalvo(){
    if(iconeSalvo === "bookmark-outline"){
      setIconeSalvo("bookmark");
    }else {
      setIconeSalvo("bookmark-outline");
    }
  }

  function curtida(){
    if(ionCurtida === "heart-outline"){
      setIonCurtida("heart");
      setAcao("curtida");
      setQtdeCurtidas(qtdeCurtida + 1);
    }else {
      setIonCurtida("heart-outline");
      setAcao("");
      setQtdeCurtidas(qtdeCurtida - 1);
    }
  }

  function curtirPelaFoto(){
    if(ionCurtida === "heart-outline"){
      setIonCurtida("heart");
      setAcao("curtida");
      setQtdeCurtidas(qtdeCurtida + 1);
    }
    setAnimacao(true);
    
    setTimeout(() => {
      setAnimacao(false);
    },500);
  }
  
    return (
        <div className="post">
            <div className="topo">
              <div className="usuario">
                <img src={props.imagem} alt={props.usuario}/>
                {props.usuario}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
              <ion-icon name="heart" class={`animcao-coracao ${animacao ? "aumentar-escala" : "invisivel"}`}></ion-icon>
              <img onDoubleClick={curtirPelaFoto} src={props.imagemPost} alt={props.usuario}/>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon onClick = {curtida} class = {acao} name={ionCurtida}></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon onClick = {marcarSalvo} name={iconeSalvo}></ion-icon>
                </div>
              </div>

              <div className="curtidas">
                <img src={props.imagemCurtiu} alt={props.usuarioCurtiu}/>
                <div className="texto">
                  Curtido por <strong>{props.usuarioCurtiu}</strong> e <strong>outras {qtdeCurtida} pessoas</strong>
                </div>
              </div>
            </div>
        </div>
    );   
}


