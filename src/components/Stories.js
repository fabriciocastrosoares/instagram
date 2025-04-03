import Story from "./Story";

export default function Stories(){

  const objetoStory = [
    {nomeUsuario:"Roronoa", imagemUsuario : "assets/img/zoro.png"},
    {nomeUsuario:"Nami", imagemUsuario : "assets/img/nami.png"},
    {nomeUsuario:"Sanji", imagemUsuario : "assets/img/sanji.png"},
    {nomeUsuario:"Nico Robin", imagemUsuario : "assets/img/robin.png"},
    {nomeUsuario:"Toni Choper", imagemUsuario : "assets/img/choper.png"},
    {nomeUsuario:"Frank", imagemUsuario : "assets/img/frank.png"},
    {nomeUsuario:"SogeKing", imagemUsuario : "assets/img/ussop.png"},
    {nomeUsuario:"Brook", imagemUsuario : "assets/img/brook.png"}
];  

    return(
        <div className="stories">
          {objetoStory.map((obj) => <Story key={obj.nomeUsuario} imagem={obj.imagemUsuario} usuario={obj.nomeUsuario}/>)}

          <div className="setinha">
            <ion-icon name = "chevron-forward-circle"></ion-icon>
          </div>
        </div>
    );
}