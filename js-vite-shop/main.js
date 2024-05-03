import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.js'
import { Header } from './components/Header.js'
import { Nav } from './components/Nav.js'
import { Content } from './components/Content.js'
import { Footer } from './components/Footer.js'


document.querySelector('#app').innerHTML = ` 
     <div id="nav"></div>  
     <div id="header"></div>
     <div id="content"></div>      
     <div id="footer"></div>  
`
Nav(document.querySelector('#nav'))
Header(document.querySelector('#header'))
Content(document.querySelector('#content'))
Footer(document.querySelector('#footer'))


