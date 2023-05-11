import mail from "../assets/mail.png"
import li from "../assets/li.png"

function InfoButtons (){
    return (
        <div className="main--info_buttons">
            <a className="main--info_mail" href="mailto:contact@jessjudd.dev" target="_blank">
                <img src={mail} alt="email envelope icon" />
                Email
            </a>
            {/* <a className="main--info_linkedIn" href="https://www.linkedin.com/in/jessjudd/" target="_blank">
                <img src={li} alt="LinkedIn icon" />
                LinkedIn
            </a> */}
        </div>
    )
}

export default function CardInfo() {
    return (
        <section className="main--info">
            <h1 className="main--info_name">Jessica Judd</h1>
            <h5 className="main--info_title">Frontend Developer / Engineer</h5>
            <h6 className="main--info_url"><a href="http://jessjudd.dev" target="_blank">jessjudd.dev</a></h6>
            <InfoButtons />
        </section>
    )
}