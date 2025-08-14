import React from 'react';


function Hero() {
    return (
        <div className='container p-5 mb-4'>
            <div className='row text-center'>
                <img src='resources/homeHero.png' alt='resources/loading.png' className='mb-5' />
                <h1 className='mt-2'>Invest in Everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual fund and more...</p>
                <button className='btn btn-primary col-2 m-auto lh-lg fs-5' >Signup Now</button>
            </div>

        </div>
    );
}

export default Hero;