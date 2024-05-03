import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { header } from './header.js'

document.querySelector('#app').innerHTML = ` 
  <div>
     <div id="header"></div>
  </div> 
`
header(document.querySelector('#header'))