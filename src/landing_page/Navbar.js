import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    function toggleMenu(){
        setMenuOpen((currMenuOpen)=>{
            return !currMenuOpen;
        })
    }

    return (
        <>
        <header>
            <nav className="navbar">
                <div className="icon">
                    <Link to="/"><img src="resources/logo (1).svg"/></Link>  
                </div>
                <div className="items">
                    <div><Link to="/signup">Signup</Link></div>
                    <div><Link to="/about">About</Link></div>
                    <div><Link to="/products">Products</Link></div>
                    <div><Link to="/pricing">Pricing</Link></div>
                    <div><Link to="/support">Support</Link></div>
                    <div >
                    <i className="fa-solid fa-bars menu-toggle" onClick={toggleMenu} style={{fontSize: "larger"}}></i>
                </div>
            </div>   
            </nav>
        </header>
    {menuOpen && <div className="floating-menu">
                <div className="products">
                    <div className="kite">
                        <img src="resources/kite-logo.svg" className="kite-logo"/>
                        <h2>Kite</h2>
                        <p>Trading Platform</p>
                    </div>
                    <div className="console">
                        <img src="resources/console.svg" className="console-logo"/>
                        <h2>Console</h2>
                        <p>BackOffice</p>
                    </div>
                    <div className="kite-connect">
                        <img src="resources/kite-connect.svg" className="kite-connect-logo"/>
                        <h2>Kite Connect</h2>
                        <p>Trading APIs</p>
                    </div>
                    <div className="Coin">
                        <img src="resources/coin.svg" className="coin-logo"/>
                        <h2>Coin</h2>
                        <p>Mutual Funds</p>
                    </div>
                </div>
                <div className="extras">
                    <div className="Utilities">
                        <h2>Utilities</h2>
                        <p>Calculators</p>
                        <p>Brokerage Calculator</p>
                        <p>Margin Calculator</p>
                        <p>SIP Calculator</p>
                    </div>
                    <div className="Updates">
                        <h2>Updates</h2>
                        <p>Z-Connect Blog</p>
                        <p>Circulars/Bulletin</p>
                        <p>IPOs</p>
                        <p>Markets</p>
                    </div>
                    <div className="education">
                        <h2 style={{textAlign: "left !important"}}>Education</h2>
                        <div className="education-content">
                            <div className="varsity" >
                                <img src="resources/varsity.png"/>
                                <p>Varsity</p>
                            </div>
                            <div className="qna">
                                <img src="resources/tqna.png"/>
                                <p>Trading Q&A</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>}

        </>    
    );
}

export default Navbar;