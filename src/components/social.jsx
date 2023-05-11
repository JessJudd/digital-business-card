import fb from "../assets/fb.png"
import gh from "../assets/gh.png"
import ig from "../assets/ig.png"
import li from "../assets/li-2.png"
import tw from "../assets/tw.png"

export default function CardSocial() {
    return (
        <div className="main--social">
            <ul className="main--social_icons">
                <li>
                    <a href="" target="_blank">
                        <img src={gh} alt="GitHub Icon" />
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">
                        <img src={li} alt="LinkedIn Icon" />
                    </a>
                </li>
            </ul>
        </div>
    )
}