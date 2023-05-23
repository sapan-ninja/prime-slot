import React, { useState } from 'react'
import LandingPage from './LandingPage'

export default function Sidebar() {
    const [show, setShow] = useState(true)
    return (
        <>
            {/* <button onClick={() => setShow(!show)}>hide</button> */}
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    {show ?
                        <div className="col-auto col-md-1 col-xl-1 px-sm-2 px-0 blackColor">
                            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                    <span className="fs-5 d-none d-sm-inline">
                                        <img src="/assets/navitems/icon.svg" alt="icon" />
                                    </span>
                                </a>
                                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-center" id="menu">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link align-middle px-0">
                                            <img src="/assets/navitems/wallet.svg" alt="wallet" />
                                        </a>
                                    </li>
                                    <li className="nav-item text-center ">
                                        <a href="#" className="nav-link align-middle px-0 ">
                                            <img src="/assets/navitems/home.svg" alt="home" />

                                        </a>
                                    </li>
                                    <li className='whiteBorder'>
                                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline text-white fw-bold">Games</span> </a>
                                        <ul className="collapse show nav flex-column ms-1 text-center" id="submenu1" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link align-middle px-0">
                                                    <img src="/assets/navitems/dollar.svg" alt="dollar" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link align-middle px-0">
                                                    <img src="/assets/navitems/multiDollar.svg" alt="multiDollar" />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='whiteBorder mt-3'>
                                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline text-white fw-bold ">Utility</span>
                                        <ul className="nav nav-pills  flex-column mb-sm-auto mb-0 align-items-center align-items-sm-center pt-3" id="menu">

                                            <li>
                                                <a href="#" className="nav-link align-middle px-0">
                                                    <img src="/assets/navitems/utility1.svg" alt="utility1" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link align-middle px-0">
                                                    <img src="/assets/navitems/utility2.svg" alt="utility1" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link align-middle px-0">
                                                    <img src="/assets/navitems/utility3.svg" alt="utility1" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link align-middle px-0">
                                                    <img src="/assets/navitems/utility4.svg" alt="utility1" />
                                                </a>
                                            </li>
                                        </ul>
                                    </li>



                                </ul>
                                <hr />
                                {/* <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-center" id="menu">

                                    <li className='text-center'>
                                        <a href="#" className="nav-link align-middle px-0">
                                            <img src="/assets/navitems/utility5.svg" alt="utility1" />
                                        </a>
                                    </li>

                                </ul> */}
                            </div>
                        </div> : ''}
                    <div className="col py-3 mainContent">
                        <LandingPage />
                        {/* <h3>Left Sidebar with Submenus</h3>
                        <p className="lead">
                            An example 2-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single
                            menu is be open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width on smaller screens.</p>
                        <ul className="list-unstyled">
                            <li><h5>Responsive</h5> shrinks in width, hides text labels and collapses to icons only on mobile</li>
                        </ul> */}
                    </div>
                </div>
            </div>

        </>
    )
}