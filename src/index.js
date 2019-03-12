import Header from './header'
// import Sidebar from './sidebar'
// import Content from './content'
import createAvatar from './createAvatar'
import avatar from "./avatar.jpg";
import style from './index.scss'

// new Header()
// new Sidebar()
// new Content()
 createAvatar()
let img = new Image()
img.src = avatar
img.classList.add(style.avatar)
let root =document.getElementById('root')
root.append(img)
