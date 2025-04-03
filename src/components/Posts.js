import Post from "./Post";

export default function Posts(){

  const objetoPosts = [
    {nomeUsuario:"Roronoa", imagemUsuario : "assets/img/zoro.png", imagemPost: "assets/img/zoro-procurado.jpg", imagemCurtiu: "assets/img/ussop.png", usuarioCurtiu: "SogeKing", quantidadeCurtidas: 101523},
    {nomeUsuario:"Sanji", imagemUsuario : "assets/img/sanji.png", imagemPost: "assets/img/sanji-procurado.jpg", imagemCurtiu: "assets/img/choper.png", usuarioCurtiu: "Toni Choper", quantidadeCurtidas: 99155}
  ]

    return(
        <div className="posts">
          {objetoPosts.map((obj) => <Post key={obj.nomeUsuario} imagem={obj.imagemUsuario} usuario={obj.nomeUsuario} imagemPost={obj.imagemPost} imagemCurtiu={obj.imagemCurtiu} usuarioCurtiu={obj.usuarioCurtiu} quantidadeCurtidas = {obj.quantidadeCurtidas}/>)}
        </div>
    );
}