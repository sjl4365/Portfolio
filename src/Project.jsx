function Project(){
    
    return(
            <div className="Projects">
                <h2 className="Project">Projects</h2>
                <div >
                    <div className="ProjectOne">
                        <a href="https://github.com/sjl4365/weather" className="SpecialOne">Weather Mobile App</a>
                        {/* <h3 className="Weather">Weather Mobiel App</h3> */}
                    </div>
                    
                    <ul className="ProjectListOne">
                        <li>Designed and developed a weather app displaying min, max, and current temperature along with date and time of the
specific location input into the app</li>
                        <li>Utilized React Native, React, Node, Express</li>
                    </ul>
                </div>
                <div >
                    <div className="ProjectTwo">
                        <h3 className="DiscordBot">Discord Bot</h3>
                    </div>
                   
                    <ul className="ProjectListTwo">
                        <li>Designed and developed a discord bot featuring a semi-functional Pokedex, enabling users to seamlessly retrieve
detailed information about any Pokemon of their choice</li>
                        <li>Used Python, Discord Bot application, and Poke-API</li>
                    </ul>
                </div>
                
                <div>
                    <div className="ProjectThree">
                        <a href="https://tspace.library.utoronto.ca/handle/1807/99735" className="SpecialTwo">Research Paper @University of Toronto</a>
                    </div>
                    <ul className="ProjectListThree">
                        <li>Draft research paper called A comparative assessment of the health condition recently planted native and non-native
soft fruit-bearing and non-soft fruit-bearing tree species in Brampton, Ontario.</li>
                        <li>Collected and analyzed raw data during a summer internship with the city of Brampton by using R.</li>
                    </ul>
                </div>
            </div>

        
    );
}
export default Project