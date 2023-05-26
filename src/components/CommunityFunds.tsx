import React, { useEffect, useState } from 'react'
import styles from './css/communityfund.module.css'
import useWindowSize from './utility/GetWindowSize'
import { useWallet } from '@solana/wallet-adapter-react'
import { useCountdown } from './Time/useCountDown'

export default function CommunityFunds() {
    const { publicKey } = useWallet()
    const [endTime, setEndTime] = useState(1686109046);
    const [removeTime, setRemoveTime] = useState(true);
    const [hour, setHours] = useState('');
    const [min, setMin] = useState('');
    const [sec, setSec] = useState('');
    const [days, setDays] = useState('');


    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.floor(new Date().getTime() / 1000.0) > 1686109046) {
                setEndTime(0);

                setRemoveTime(false);
            } else {
                setEndTime((seconds) => seconds - 1);
            }
            handleHours(endTime)
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const size = useWindowSize()

    const handleHours = (val: any) => {
        var startDate = new Date();
        // console.log("syart date", startDate.getTime());
        var seconds = (val * 1000 - startDate.getTime()) / 1000;

        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor((seconds % (3600 * 24)) / 3600);
        var m = Math.floor((seconds % 3600) / 60);
        var s = Math.floor(seconds % 60);

        var dDisplay = d > 0 ? d : '';
        var hDisplay = h > 0 ? h  : '';
        var mDisplay = m > 0 ? m : '';
        var sDisplay = s > 0 ? s : '';
        // const timeHtml = dDisplay + hDisplay + mDisplay + sDisplay;
        setDays(dDisplay.toString())
        setHours(hDisplay.toString())
        setMin(mDisplay.toString())
        setSec(sDisplay.toString())
        // console.log("🚀 ~ handleHours ~ timeHtml", timeHtml)

        let da1 = `<div className='col-2 px-5 mx-5 border border-end '>${d} </br> <span> ${dDisplay}</span> </div>`;

        // let da2=`<div className='col-2 px-5 mx-5'>${h} </div>`
        // let da3=`<div className='col-2 text-success px-5 mx-5'>${m} </div>`
     
    };
    return (
        <>
         
            {size?.width > 600 ?
                <div className="container-fluid p-0">


                    <h5 className='text-center text-white fw-bold'>Community funds</h5>
                    <div className={`row g-0  justify-content-center communityRo ${styles.communityRow}`}>

                        <div className={`${styles.timeSolDiv}`}>

                            <div className="w-auto">
                                <div className={styles.communityContainer}>
                                    <div className="row  ">
                                        <div className="col d-flex justify-content-center py-3 ">
                                            <img src="/assets/sol.svg" alt="sol" className={styles.solLogo} />
                                            <h5 className='text-center text-white fw-bold px-1 mb-0'>12,786 SOL</h5>
                                        </div >

                                    </div>
                                </div>

                            </div>
                            <div className=''>
                                <div className={`${styles.communityContainer2} `}>


                                    <div className="col">
                                        <div className="col-12 ">
                                            <h5 className={styles.time}>{parseInt (days)>0?days:'0'}</h5>
                                        </div>
                                        <div className="col-12">
                                            <h5 className={styles.timeFormat} >DAY</h5>

                                        </div>

                                    </div>
                                    <div className="col-1">
                                        <div className="col-12">

                                            <h5 className={styles.timeColon} >:</h5>
                                        </div>

                                    </div>
                                    <div className="col">
                                        <div className="col-12 ">
                                            <h5 className={styles.time}>{hour}</h5>
                                        </div>
                                        <div className="col-12">
                                            <p className={styles.timeFormat} >HOUR</p>

                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div className="col-12">

                                            <h5 className={styles.timeColon} >:</h5>
                                        </div>

                                    </div>
                                    <div className="col">
                                        <div className="col-12 ">
                                            <h5 className={styles.time}>{min}</h5>
                                        </div>
                                        <div className="col-12">
                                            <p className={styles.timeFormat} >MIN</p>

                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div className="col-12">

                                            <h5 className={styles.timeColon} >:</h5>
                                        </div>

                                    </div>
                                    <div className="col">
                                        <div className="col-12 ">
                                            <h5 className={styles.time}>{sec}</h5>
                                        </div>
                                        <div className="col-12">
                                            <p className={styles.timeFormat} >SEC</p>

                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                        {publicKey ?
                            <div className={`${styles.walletFund} `}>
                                <span className={`${styles.line}`}>
                                    <h2>

                                        <span> Player Funds </span>
                                        <div className="">
                                            <p className="text-light">12,786 SOL  <img src="/assets/card.svg" className="px-1" alt="card" /> </p>
                                        </div>


                                    </h2>
                                </span>
                            </div> : ''}

                    </div>
                    <div className="row mt-0 mt-md-3 p-0">
                        <div className="col-12 d-flex justify-content-center">

                            <span className="line    ">
                                <h2>

                                    <img src="/assets/catHead.svg" className="img-fluid" alt="cat" />
                                    <div className="col primeSlotText">
                                        <p className='m-0'>Primes slot</p>
                                        <p className="pinkTextColor">Spin and win your prize</p>
                                    </div>


                                </h2>
                            </span>
                        </div>
                    </div>
                </div>
                :
                <>

                    <div className="row">
                        <div className="col-12">
                            <p className='text-light fs14 text-center'>Distributing <span className="pinkTextColor">8 SOL</span> in <span className="pinkTextColor">24d:13h:08m:02s</span> </p>
                        </div>

                        <div className="col-12">

                            <div className={`${styles.walletFund} `}>
                                <span className={`${styles.line}`}>
                                    <h2>

                                        <span> Player Funds </span>
                                        <div className="">
                                            <p className="text-light">12,786 SOL  <img src="/assets/card.svg" className="px-1" alt="card" /> </p>
                                        </div>


                                    </h2>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center">

                            <span className="line    ">
                                <h2>

                                    <img src="/assets/catHead.svg" className="img-fluid" alt="cat" />
                                    <div className="col primeSlotText">
                                        <p className='m-0'>Primes slot</p>
                                        <p className="pinkTextColor">Spin and win your prize</p>
                                    </div>


                                </h2>
                            </span>
                        </div>
                    </div>


                </>}



        </>
    )
}
