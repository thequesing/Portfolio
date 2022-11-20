import Topbar from '../components/Topbar'
function Home() {
  return (
    <>
      <Topbar />
      <div id='header'>
        <img id='skin' src={'/img/skin.png'} alt='TheQuesing'></img>
        <div id='texts'>
          <h1>TheQuesing</h1>
          <h2>Fullstack Developer</h2>
          <h5>
            Soy un desarollador que vive en España, desarollo en el ambito
            web,minecraft,etc....
          </h5>
        </div>

        <div id='icons'>
          <a href='https://discord.com/users/949655344316043304'>
            <img id='icon' src={'/img/icons/discord.svg'} />
          </a>
          <a href='https://github.com/thequesing'>
            <img id='icon' src={'/img/icons/github.svg'} />
          </a>
          <a href='mailto:contact@thequesing.ga'>
            <img id='icon' src={'/img/icons/email.svg'} />
          </a>
          <a href='https://twitter.com/thequesing'>
            <img id='icon' src={'/img/icons/twitter.svg'} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
