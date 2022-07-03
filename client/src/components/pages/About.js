const About = () => {
    return(
        <div>
            <hr />
            <h2 className="text-center">About Us</h2>
            <hr />
            <div className="container">
                <div className="row">
                    <AboutSample />
                    <AboutSample />
                    <AboutSample />
                </div>
                <hr />
                <h2 className="text-center">More Facts!</h2>
                <hr />
                <div className="row">
                    <AboutSample />
                    <AboutSample />
                </div>
            </div>
        </div>
    )
}

const AboutSample = () => (
    
        <div className="col-md text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
        <p><button className="btn btn-danger p-2 align-center">Learn More</button></p>
        </div>
        
       
        
        
    
)

export default About;