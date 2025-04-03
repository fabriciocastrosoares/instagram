import { useState } from "react";

export default function Usuario(props){

  const [usuarioInicial, setUsuarioInicial] = useState(props.usuarioInicial);
  const [imagem, setImagem] = useState(props.imagem);


    return(
      <div className="usuario">
      <img onClick = {pedirImagem} src={imagem} alt={usuarioInicial}/>
      <div className="texto">
        <span>
          <strong>{usuarioInicial}</strong>
          <ion-icon onClick = {pedirNome} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );

  function pedirNome(){  
    const novoUsuario = prompt("Qual é o seu nome?");
    if(novoUsuario !== null && novoUsuario !== undefined && novoUsuario !== ""){
      setUsuarioInicial(novoUsuario);
    }
  }

  function pedirImagem(){
    const novaImagem = prompt("Insira um link para mudar a foto do usuário");
    if(novaImagem !== null && novaImagem !== undefined && novaImagem !== "" ){
      setImagem(novaImagem);
    }
  }
}



