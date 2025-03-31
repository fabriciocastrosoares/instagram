export default function Posts(){
    return(
        <div class="posts">
          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src="assets/img/zoro.png" alt="Zoro"/>
                Roronoa
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="assets/img/zoro-procurado.jpg" alt="gato-telefone"/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/ussop.png" alt="ussop"/>
                <div class="texto">
                  Curtido por <strong>SogeKing</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src="assets/img/sanji.png" alt="Sanji"/>
                Sanji
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src="assets/img/sanji-procurado.jpg" alt="SAnji" />
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src="assets/img/choper.png" alt="choper"/>
                <div class="texto">
                  Curtido por <strong>Toni Choper</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}