import React, { useEffect, useState } from 'react'
import LandingPage from './LandingPage'
import useWindowSize from './utility/GetWindowSize'
import style from './css/sidebar.module.css'
export default function Sidebar() {
    const [show, setShow] = useState(true)
    const size = useWindowSize()
    console.log("🚀 ~ Sidebar ~ size", size)
    useEffect(() => {

        if (size?.width > 600) {

            setShow(true)
        }
        else {
            setShow(false)
        }
        return () => {

        }
    }, [size?.width])


    return (
        <>
            {/* <button onClick={() => setShow(!show)}>hide</button> */}
            <div className="container-fluid">
                <div className="row blackColor py-2 border border-bottom border-light  d-sm-none ">
                    <div className={`col-2 `}>
                        <svg
                            onClick={() => setShow(!show)}
                            xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-list text-white" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                    <div className="col-10 text-center">
                        <span>

                            <img src="/assets/navitems/icon.svg" width="28" height="30" alt="icon" />
                        </span>
                        <span className={style.heading1}>
                            THE PRIMES
                        </span>

                    </div>
                </div>
                <div className="row flex-nowrap position-relative">
                    {show ?
                        <div className={`col-8  col-md-1 col-lg-1 col-xl-1 col-sm-2 px-sm-0  px-0 blackColor mobileMenu`} style={{ height: '100%' }}>
                            <div className="d-flex flex-column align-items-start align-items-sm-center px-3 px-md-2 pt-2 text-white " >
                                <a href="/" className="d-flex align-items-center pb-3  text-white text-decoration-none">
                                    <span className="fs-5 d-none d-sm-inline">
                                        <img src="/assets/navitems/icon.svg" alt="icon" />
                                    </span>
                                </a>
                                <ul className="nav  nav-pills flex-column mb-sm-auto mb-0 align-items-start align-items-sm-center " id="menu">
                                    <li className="nav-item " >
                                        <p className="nav-link align-middle px-0 ">
                                            <span className="d-none d-sm-inline">
                                                <img src="/assets/navitems/wallet.svg" className='' alt="wallet" />
                                            </span>
                                            <span className={`d-sm-none ${style.connectBtn}`} >
                                                <span className="px-1 ">

                                                    <img src="/assets/navitems/connectWallet.svg" className='' alt="wallet" />
                                                </span>
                                                Connect Wallet</span>
                                        </p>
                                    </li>
                                    <li className="  whiteBorder w-100 mt-2 text-md-center">
                                        <a href="#" className="nav-link align-middle px-0  my-sm-0">
                                            <span className="">

                                                <img src="/assets/navitems/home.svg" alt="home" />
                                            </span>
                                            <span className="d-inline d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none ps-3 "> Home</span>

                                        </a>
                                    </li>

                                    <li className=' whiteBorder w-100 text-md-center'>
                                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1  d-sm-inline text-white fw-bold">Games</span> </a>
                                        <ul className="collapse show nav flex-column ms-1 " id="submenu1" data-bs-parent="#menu">
                                            <li className="w-100">
                                                <a href="#" className="nav-link align-middle px-0  my-sm-0">
                                                    <span className="">

                                                        <img src="/assets/navitems/dollar.svg" alt="dollar" />
                                                    </span>
                                                    <span className="d-inline d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none ps-3 "> Coinflips</span>

                                                </a>

                                            </li>
                                            <li className="w-100">
                                                <a href="#" className="nav-link align-middle px-0  my-sm-0">
                                                    <span className="">

                                                        <img src="/assets/navitems/multiDollar.svg" alt="dollar" />
                                                    </span>
                                                    <span className="d-inline d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none ps-3 "> Slots</span>

                                                </a>

                                            </li>

                                        </ul>
                                    </li>
                                    <li className='whiteBorder w-100 mt-2'>
                                        <i className="fs-4 bi-table"></i> <span className="ms-1  d-sm-inline text-white fw-bold ">Utility</span>
                                        <ul className="nav nav-pills  flex-column mb-sm-auto mb-0 align-items-start align-items-sm-center pt-3" id="menu">

                                            <li>
                                                <a href="#" className="nav-link align-middle px-0  my-sm-0">
                                                    <span className="">

                                                        <img src="/assets/navitems/utility1.svg" alt="betcord" />
                                                    </span>
                                                    <span className="d-inline d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none ps-3 "> BetCord</span>

                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link align-middle px-0  my-sm-0">
                                                    <span className="">

                                                        <img src="/assets/navitems/utility2.svg" alt="NFT Backed Lending" />
                                                    </span>
                                                    <span className="d-inline d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none ps-3 "> NFT Backed Lending</span>

                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link align-middle px-0  my-sm-0">
                                                    <span className="">

                                                        <img src="/assets/navitems/utility3.svg" alt="Raffle Aggregator" />
                                                    </span>
                                                    <span className="d-inline d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none ps-3 "> Raffle Aggregator</span>

                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="nav-link align-middle px-0  my-sm-0">
                                                    <span className="">

                                                        <img src="/assets/navitems/utility4.svg" alt="White paper" />
                                                    </span>
                                                    <span className="d-inline d-sm-none d-md-none d-lg-none d-xl-none d-xxl-none ps-3 "> Whitepaper</span>

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
                            <div className="d-flex d-block d-sm-none flex-column align-items-start align-items-sm-center px-3 px-md-2 pt-2 text-white  position-absolute bottom-0 border-top w-100">
                                <div className="row w-100 ">
                                    <div className="col-6 d-flex justify-content-center">
                                        <button className='navIcon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-twitter" viewBox="0 0 16 16">
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="col-6">
                                        <button className='navIcon'>

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-discord" viewBox="0 0 16 16">
                                                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                            </svg>
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div> : ''}
                    <div className="col-12 py-3 mainContent px-0" style={{ height: '100vh' }}>
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