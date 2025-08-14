import React from 'react';


function Pricing() {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-4'>
                    <h3 className='mb-5'>Unbeatable pricing</h3>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='www.pricing.com' style={{ textDecoration: "none" }}>See Pricing <i class="fa-solid fa-right-long"></i></a>
                </div>

                <div className='col-8 mt-5 h-100'>
                    <div className='row'>
                        <div className='col-2'>
                            <img src='resources/pricing-eq.svg' alt='resources/loading.png' />
                        </div>
                        <div className='col-2 mt-3'>
                            <p className='small'>Free Account Opening</p>
                        </div>
                        <div className='col-2 '>
                            <img src='resources/pricing-eq.svg' alt='resources/loading.png' />
                        </div>
                        <div className='col-2 mt-3'>
                            <p className='small'>Free equity delivery
                                and direct mutual funds</p>
                        </div>
                        <div className='col-2'>
                            <img src='resources/other-trades.svg' alt='resources/loading.png' />
                        </div>
                        <div className='col-2 mt-3'>
                            <p className='small'>Intraday and <br /> F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;