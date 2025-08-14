import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='/resources/largestBroker.svg' alt='resources/loading.png' />
                </div>
                <div className='col-6'>
                    <h2 className='mb-5'>2nd Largest Stock Brocker in India</h2>
                    <p className='mb-5'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <div className='row mb-2'>
                        <div className='col-6'>
                            <ul>
                                <li className='mt-2'>Futures and Options</li>
                                <li className='mt-2'>Commodities and Derivatives</li>
                                <li className='mt-2'>Currency Derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li className='mt-2'>Stocks & IPO</li>
                                <li className='mt-2'>Direct Mutual Bonds</li>
                                <li className='mt-2'>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>
                    <img src='resources/pressLogos.png' alt='resources/loading.png' style={{ width: "90%" }} />
                </div>
            </div>
        </div>
    );
}

export default Awards;
