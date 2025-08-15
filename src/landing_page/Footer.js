import React from 'react';


function Footer() {
    return (
        <footer>
            <div className='container p-5 ' style={{color:"gray", backgroundColor:"whitesmoke", width:"auto", borderRadius:"20px" }}>
            <div className='row p-5'>
                <div className='col-3'>
                    <img src='resources/logo.svg' style={{width:"180px", minWidth:"180px"}}/>
                    <p>© 2010 - 2025, Zerodha Broking Ltd.</p>
                    <p className='mt-0'>All rights reserved.</p>
                    <i className="fa-brands fa-facebook m-2"></i>
                    <i className="fa-brands fa-youtube m-2"></i>
                    <i className="fa-brands fa-instagram m-2"></i>
                    <i className="fa-brands fa-telegram m-2"></i>  
                </div>
                <div className='col-2'>
                    <h2>Account</h2>
                    <p>Open demat account</p>
                    <p>Minor demat account</p>
                    <p>NRI demat account</p>
                    <p>Commodity</p>
                    <p>Dematerialisation</p>
                    <p>Fund transfer</p>
                    <p>MTF</p>
                    <p>Referral program</p>
                </div>
                <div className='col-3'>
                    <h2>Support</h2>
                    <p>Contact us</p>
                    <p>Support portal</p>
                    <p>How to file a complaint?</p>
                    <p>Status of your complaints</p>
                    <p>Bulletin</p>
                    <p>Circular</p>
                    <p>Z-Connect blog</p>
                    <p>Downloads</p>
                    
                </div>
                <div className='col-2'>
                    <h2>Company</h2>
                    <p>About</p>
                    <p>Philosophy</p>
                    <p>Press & media</p>
                    <p>Careers</p>
                    <p>Zerodha Cares (CSR)</p>
                    <p>Zerodha.tech</p>
                    <p>Open source</p>
                </div> 
                <div className='col-2'>
                    <h2>Quick Links</h2>
                    <p>Upcoming IPOs</p>
                    <p>Brokerage Charges</p>
                    <p>Market Holidays</p>
                </div>
            </div>
        </div>
        </footer>
        
    );
}

export default Footer;