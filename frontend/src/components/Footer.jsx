function Footer() {


    return (

        <footer className="footer">


            <div className="footer-container">


                <h3>
                    Online Quiz Platform
                </h3>


                <p>
                    Test your knowledge and improve your skills.
                </p>



                <div className="footer-links">


                    <span>
                        Home
                    </span>


                    <span>
                        Quiz
                    </span>


                    <span>
                        Leaderboard
                    </span>


                </div>




                <p className="footer-copy">


                    © {new Date().getFullYear()} Online Quiz Platform.
                    All rights reserved.


                </p>



            </div>


        </footer>

    );


}


export default Footer;