import Post from "./Post";

export default function Posts(){

  const objetoPosts = [
    {nomeUsuario:"Roronoa", imagemUsuario : "assets/img/zoro.png", imagemPost: "assets/img/zoro-procurado.jpg", imagemCurtiu: "assets/img/ussop.png", usuarioCurtiu: "SogeKing"},
    {nomeUsuario:"Sanji", imagemUsuario : "assets/img/sanji.png", imagemPost: "assets/img/sanji-procurado.jpg", imagemCurtiu: "assets/img/choper.png", usuarioCurtiu: "Toni Choper"}
  ]

    return(
  

        <div class="posts">

          {objetoPosts.map((obj) => <Post imagem={obj.imagemUsuario} usuario={obj.nomeUsuario} imagemPost={obj.imagemPost} imagemCurtiu={obj.imagemCurtiu} usuarioCurtiu={obj.usuarioCurtiu}/>)}
        
        </div>
    );
}