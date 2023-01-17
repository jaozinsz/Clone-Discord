import "./Landing_Page.scss";
import logo from "./images/logo.png";
import back1 from "./images/back1.svg";
import back2 from "./images/back2.svg";
import back3 from "./images/background.svg";

import img1 from "./images/img1.svg";
import img2 from "./images/img2.svg";
import img3 from "./images/img3.svg";
import img4 from "./images/img4.svg";
import estrelas from "./images/estrelas download.svg"
import idioma from "./images/idioma.png"

//* Redes Sociais //*
import twitter from "./images/Twitter.png"
import instagram from "./images/Instagram.png"
import facebook from "./images/Facebook.png"
import youtube from "./images/Youtube.png"


function App() {
  return (
    <main className="Landing">
      <section className="Page1">
        <header className="cabecalho">
          <img className="logo" src={logo} />

          <div className="links">
            <a className="link" href="">Download</a>
            <a className="link" href="">Nitro</a>
            <a className="link" href="">Discover</a>
            <a className="link" href="">Safety</a>
            <a className="link" href="">Support</a>
            <a className="link" href="">Blog</a>
            <a className="link" href="">Careers</a>
          </div>

          <button className="abrir">Open Discord</button>
        </header>

        <img className="back3" src={back3} />
        <img className="back1" src={back1} />
        <img className="back2" src={back2} />

        <div className="textos">
          <h1 className="titulo">IMAGINE UM LUGAR...</h1>

          <div className="sub">
            <h5 className="subtitulo">
              …onde você possa pertencer a um clube escolar, um grupo de gamers,
              ou uma comunidade artística mundial. Onde você e alguns amigos
              possam passar um tempo juntos. Um lugar que torna fácil conversar
              todos os dias e socializar com mais frequência.
            </h5>
          </div>

          <div className="botoes">
            <button className="botao1">Baixar para Windows</button>
            <button className="botao2">Abra o Discord no seu navegador</button>
          </div>
        </div>
      </section>

      <section className="Page2">
        <div className="image">
          <img src={img1}  />
        </div>
        <div className="texto">
          <h1 className="titulo1">
            Crie um espaço controlado por convite onde você se sinta em casa
          </h1>

          <h5 className="subtitulo1">
            Os servidores Discord são organizados em canais com assuntos para
            vocês colaborarem, compartilharem ou simplesmente falarem do dia sem
            entupir um chat geral.
          </h5>
        </div>
      </section>

      <section className="Page3">
        <div className="image2">
          <img src={img2}  />
        </div>
        <div className="texto2">
          <h1 className="titulo2">Aqui é fácil se encontrar</h1>

          <h5 className="subtitulo2">
            Os servidores Discord são organizados em canais com assuntos para
            vocês colaborarem, compartilharem ou simplesmente falarem do dia sem
            entupir um chat geral.
          </h5>
        </div>
      </section>

      <section className="Page4">
        <div className="image3">
          <img src={img3}  />
        </div>
        <div className="texto3">
          <h1 className="titulo3">Para poucos e muitos amigos</h1>

          <h5 className="subtitulo3">
            Organize qualquer comunidade com ferramentas de moderação e acesso
            personalizado a membros. Dê poderes especiais aos membros, monte
            canais privados e muito mais.
          </h5>
        </div>
      </section>

      <section className="Page5">
        <div className="texto4">
          <h1 className="titulo4">TECNOLOGIA DE CONEXÃO CONFIÁVEL</h1>

          <h5 className="subtitulo4">
            Voz e vídeo de baixa latência, para você conversar como se estivesse
            na mesma sala. Dê um joinha por vídeo, veja amigos transmitirem a
            jogatina do dia ou junte uma galera pra desenhar na tela
            compartilhada.
          </h5>
        </div>

        <img className="image4" src={img4}  />


        <h1 className="titulo5">Vamos começar sua jornada?</h1>
        <img className="stars" src={estrelas}  />

        <button className="botao3">Baixar para Windows</button>

      </section>

      <section className="Rodape">
        <div className="coluna1">
         

          <div className="linha1">
          <h5 className="titulo6">IMAGINE UM LUGAR</h5>
          <img className="bandeira" src={idioma}  />
          <select className="idioma">
            <option value="" key="">Português do Brasil</option>
          </select>

          <div className="redes_sociais">
            <img className="twitter" src={twitter}  />
            <img className="instagram" src={instagram}/>
            <img className="facebook" src={facebook}/>
            <img className="youtube" src={youtube}/>
          </div>
          </div>
       </div>

       <div className="coluna2">
        <h5 className="titulo7">Produto</h5>

        <div className="links">
        <a className="link2" href="">Baixar</a>
        <a className="link2" href="">Nitro</a>
        <a className="link2" href="">Status</a>
        </div>
       </div>

       <div className="coluna3">
        <h5 className="titulo8">Empresa</h5>

        <div className="links">
        <a className="link3" href="">Sobre</a>
        <a className="link3" href="">Empregos</a>
        <a className="link3" href="">Marca</a>
        <a className="link3" href="">Sala da imprensa</a>
        </div>
       </div>

       <div className="coluna4">
        <h5 className="titulo9">Produto</h5>

        <div className="links">
        <a className="link4" href="">Faculdade</a>
        <a className="link4" href="">Suporte</a>
        <a className="link4" href="">Segurança</a>
        <a className="link4" href="">Blog</a>
        <a className="link4" href="">Comentários</a>
        <a className="link4" href="">Desenvolvedores</a>
        <a className="link4" href="">StreamKit</a>
        <a className="link4" href="">Creators</a>
        </div>
       </div>

       <div className="coluna5">
        <h5 className="titulo10">Produto</h5>

        <div className="links">
        <a className="link5" href="">Termos</a>
        <a className="link5" href="">Privacidade</a>
        <a className="link5" href="">Configurações de Cookies</a>
        <a className="link5" href="">Diretrizes</a>
        <a className="link5" href="">Reconhecimentos</a>
        <a className="link5" href="">Licenças</a>
        <a className="link5" href="">Moderação</a>
        </div>
        </div>
      </section>
      <section className="Rodape2">

        <div className="quebra_de_linha"></div>


        
        <div className="final">
        <img className="logo" src={logo} alt="" />
        <button className="Registro">Registrar</button>
        </div>

      </section>
    </main>
  );
}

export default App;
