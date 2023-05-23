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
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
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
                <div className="row flex-nowrap">
                    {show ?
                        <div className={`col-8 col-md-1 col-lg-1 col-xl-1 col-sm-2 px-sm-0  px-0 blackColor mobileMenu`}>
                            <div className="d-flex flex-column align-items-start align-items-sm-center px-3 px-md-2 pt-2 text-white min-vh-100">
                                <a href="/" className="d-flex align-items-center pb-3  text-white text-decoration-none">
                                    <span className="fs-5 d-none d-sm-inline">
                                        <img src="/assets/navitems/icon.svg" alt="icon" />
                                    </span>
                                </a>
                                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start align-items-sm-center " id="menu">
                                    <li className="nav-item ">
                                        <a href="#" className="nav-link align-middle px-0 ">
                                            <span className="d-none d-sm-inline">
                                                <img src="/assets/navitems/wallet.svg" className='' alt="wallet" />
                                            </span>
                                            <span className={`d-sm-none ${style.connectBtn}`} >
                                                <span className="px-1 ">

                                                    <img src="/assets/navitems/connectWallet.svg" className='' alt="wallet" />
                                                </span>
                                                Connect Wallet</span>
                                        </a>
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
                        </div> : ''}
                    <div className="col py-3 mainContent px-0">
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