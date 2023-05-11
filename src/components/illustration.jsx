import green from "../assets/plant_lady_green.svg"
import hotPink from "../assets/plant_lady_hot_pink.svg"
import pink from "../assets/plant_lady_pink.svg"

export default function illustration() {
    return(
        <div className="main--info_drawing_wrap">
            <img className="main--info_drawing is-dark" src={pink} />
            <img className="main--info_drawing is-light" src={green} />
        </div>
    )
}