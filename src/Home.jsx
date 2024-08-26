import Aboutme from "./Aboutme"
import photo from './photo.jpeg'

function Home(){

    const onButtonClick = () => {
        const pdfUrl = "/resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const redirect = () =>{
        window.location.href ='https://www.linkedin.com/in/sam-l-4981112b9' 
    }


    

    return(
        <div className="Home">
            <div>
                <h1 className="Name">Hello, I'm Sam</h1>
                <h1 className="About">About Me</h1>
                <div>
                    <img src={photo} className="Photo"/>
                </div>
                <Aboutme/>
                <h1>Get in Touch!!</h1>
                <button onClick={redirect} className="LinkedinButton">LinkedIn</button>
                <button onClick={onButtonClick} className="ResumeButton">Resume</button>
                
                
            </div>
        </div>
    )
}
export default Home