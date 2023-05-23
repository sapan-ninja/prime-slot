import React from 'react'
import styles from './css/communityfund.module.css'
import useWindowSize from './utility/GetWindowSize'
export default function CommunityFunds() {

    const size = useWindowSize()
    console.log("🚀 ~ CommunityFunds ~ size", size)
    return (
        <>
            {size?.width > 600 ?
                <div className="row d-flex justify-content-center">
                    <h5 className='text-center text-white fw-bold'>Community funds</h5>

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
                                        <h5 className={styles.time}>24</h5>
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
                                        <h5 className={styles.time}>13</h5>
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
                                        <h5 className={styles.time}>08</h5>
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
                                        <h5 className={styles.time}>02</h5>
                                    </div>
                                    <div className="col-12">
                                        <p className={styles.timeFormat} >SEC</p>

                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                </div> :
                <>
                    <div className="row">
                        <div className="col">
                            <p className='text-light fs14 text-center'>Distributing <span className="pinkTextColor">8 SOL</span> in <span className="pinkTextColor">24d:13h:08m:02s</span> </p>
                        </div>
                    </div>

                </>}



        </>
    )
}
