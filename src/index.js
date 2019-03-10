// import Header from './header'
// import Sidebar from './sidebar'
// import Content from './content'
import avatar from './avatar.jpg'
import './index.scss'

// new Header()
// new Sidebar()
// new Content()
let img = new Image()
img.src = avatar
img.classList.add('avatar')
let root =document.getElementById('root')
root.append(img)
