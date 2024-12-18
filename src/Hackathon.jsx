function Hackathon(){

    return(
    <div className="Hackathons">
        <h2 className="Hackathon" >Hackathons</h2>
        <div >
            <div className="HackOne">
                <h3 className="Roborama">Roborama</h3>
            </div>
            <ul className="HackListOne">
                <li>Designed and developed a Line Bot which through chassis design, electronics assembly, and software programming
through Arduino</li>
                <li>Presented our product to judges and ~80 participants</li>
            </ul>
        </div>
        <div>
            <div className="HackTwo">
                <h3 className="CSHub">CSHub Local Hackday</h3>
            </div> 
            <ul className="HackListTwo">
                <li>Developed a sophisticated search engine that enables students to efficiently retrieve contact information for various
university services and departments based on user input / keywords, including portion of known name, phone number, or
email address</li>
                <li>Leveraged Python and harnessed power of libraries: PySimpleGUI, pandas, and tabulate to build a user-friendly and
robust application</li>
                <li>Presented our solution to 3 judging panels and ~100 participants, showcasing effective communication, teamwork, and
presentation skills</li>
            </ul>
        </div>
        </div>
    );
}
export default Hackathon