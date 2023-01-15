import './App.scss';
import logo from "./images/logo.png"
import back1 from "./images/back1.svg"
import back2 from "./images/back2.svg"
import back3 from "./images/background.svg"

import img1 from "./images/img1.svg"

function App() {
  return (
    <main className='Landing'>
      
      <section className='Page1'>
        <header className='cabecalho'>
          <img className='logo' src={logo} alt="logo" />

            <div className='links'>

            <a className='link' href="">Download</a>
            <a className='link' href="">Nitro</a>
            <a className='link' href="">Discover</a>
            <a className='link' href="">Safety</a>
            <a className='link' href="">Support</a>
            <a className='link' href="">Blog</a>
            <a className='link' href="">Careers</a>
            
            </div>

          <button className='abrir'>Open Discord</button>
        </header>


        <img className='back3' src={back3} />
        <img className='back1' src={back1} />
        <img className='back2' src={back2} />
        

        <div className='textos'>
          <h1 className='titulo'>IMAGINE UM LUGAR...</h1>

        <div className='sub'>
          <h5 className='subtitulo'>…onde você possa pertencer a um clube escolar, um grupo de gamers, ou uma comunidade artística mundial. Onde você e alguns amigos possam passar um tempo juntos. Um lugar que torna fácil conversar todos os dias e socializar com mais frequência.</h5>
        </div>

        <div className='botoes'>
          <button className='botao1'>Baixar para Windows</button>
          <button className='botao2'>Abra o Discord no seu navegador</button>
        </div>
        </div>
      </section>

      <section className='Page2'>
        <div className='image'>
          <img src={img1} alt="" />
        </div>
        <div className='texto'>
          <h1 className='titulo1'>Crie um espaço controlado por convite onde você se sinta em casa</h1>

          <h5 className='subtitulo1'>Os servidores Discord são organizados em canais com assuntos para vocês colaborarem, compartilharem ou simplesmente falarem do dia sem entupir um chat geral.</h5>
        </div>
      </section>
    </main>
  );
}

export default App;
