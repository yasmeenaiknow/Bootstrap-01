import React from "react";

const Navigation = () => {
    return (
        <div className='m-3'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <a className='navbar-brand font-weight-bold text-info' href='/'>
                    <h2 className='font-weight-bold mt-0'>colors</h2>
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controLs='navbarSupportedContent'
                    area-expanded='false'
                    area-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    class='collapse text-end navbar-collapse d-flex justify-content-end'
                    id='navbarSupportedContent'>
                    <ul className=' navbar-nav fontzise m1-1'>
                        <li className='nav-item p-3'>Home</li>
                        <li className='nav-item p-3'>Our client </li>
                        <li className='nav-item p-3'>About us</li>
                        <li className='nav-item p-3'>Careers</li>
                        <li className='nav-item p-3'>Contact us</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;
