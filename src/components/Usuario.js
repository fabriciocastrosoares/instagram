import { useState } from "react";

export default function Usuario(){

  const [usuarioInicial, setUsuarioInicial] = useState("Monkey D' Luffy");
  const [imagem, setImagem] = useState("assets/img/luffy.png")


    return(
      <div class="usuario">
      <img onClick = {pedirImagem} src={imagem} alt={usuarioInicial}/>
      <div class="texto">
        <span>
          <strong>{usuarioInicial}</strong>
          <ion-icon onClick = {pedirNome} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );

  function pedirNome(){  
    const novoUsuario = prompt("Qual o seu nome?");
    setUsuarioInicial(novoUsuario);
  }

  function pedirImagem(){
    const novaImagem = prompt("Insira um link para mudar a foto do usuário");
    setImagem(novaImagem);
  }

}
