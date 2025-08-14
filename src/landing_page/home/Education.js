import React from 'react';

function Education() {
    return (

        <div className='container p-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='resources/index-education.svg' alt='resources/loading.svg' />
                </div>
                <div className='col-6'>
                    <h3 className='mt-5'>Free and open market education</h3>
                    <p className='mt-5'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='https://zerodha.com/varsity/' className='mt-5' style={{ textDecoration: "none" }}>Varsity <i class="fa-solid fa-arrow-right-long" ></i></a>
                    <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='https://tradingqna.com/' className='mt-5' style={{ textDecoration: "none" }}>TradingQnA <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>

    );
}

export default Education;