import avatar from './avatar.jpg'
import './index.scss'
export default function createAvatar() {
    let img = new Image()
    img.src = avatar
    img.classList.add('avatar')
    let root =document.getElementById('root')
    root.append(img)
}