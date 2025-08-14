import React from 'react';


function Stats() {
    return (
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-6'>
                    <h2 >Trust with Confidence</h2>
                    <h3 className='mt-5'>Customer-first Always</h3>
                    <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h3 className='mt-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href='www.philosophies.com'>Our philosophies.</a> </p>
                    <h3 className='mt-4'>The Zerodha universe</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className='mt-4'>Do better with money</h3>
                    <p className='text-muted'>With initiatives like <a href='www.nudge.com'>Nudge</a> and <a href='www.switch.com'>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>

                </div>
                <div className='col-6'>
                    <img src='resources/ecosystem.png' alt='resources/loading.png' style={{ height: "80%", width: "100%" }} />
                    <div className='container mx-5 px-5'>
                        <div className='row '>
                            <div className='col-6'>
                                <a href='www.products.com' style={{ textDecoration: "none" }}>Explore our products <i class="fa-solid fa-right-long"></i></a>
                            </div>
                            <div className='col-6'>
                                <a href='www.kite.com' style={{ textDecoration: "none" }}>Try Kite Demo  <i class="fa-solid fa-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col text-center'>
                <img src='resources/pressLogos.png' alt='resources/loading.png' style={{ width: "65%" }} />
            </div>
        </div>
    );
}

export default Stats;