import { useRef, useState } from 'react';

function Scroller() {
    const [div, setDiv] = useState<number[]>([])
    const [solAmount, setSolAmount] = useState(0.05);
    const [fruit1, setFruit1] = useState("diamond");
    const [fruit2, setFruit2] = useState("mouse");
    const [fruit3, setFruit3] = useState("remote");
    const [fruit4, setFruit4] = useState("solCoin");
    const [fruit5, setFruit5] = useState("swords");
    const [rolling, setRolling] = useState(false);
    let slotRef = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
    const fruits = ["diamond", "mouse", "remote", "solCoin", "swords",]

    // to trigger roolling and maintain state
    const roll = () => {
        setRolling(true);
        setTimeout(() => {
            setRolling(false);
        }, 10000);

        // looping through all 3 slots to start rolling
        slotRef.forEach((slot, i) => {
            // this will trigger rolling effect
            const selected = triggerSlotRotation(slot.current);
            console.log("🚀 ~ slotRef.forEach ~ selected", selected)
            if (i + 1 == 1)
                setFruit1(selected);
            else if (i + 1 == 2)
                setFruit2(selected);
            else if (i + 1 == 3)
                setFruit3(selected);
            else if (i + 1 == 4)
                setFruit4(selected);
            else
                setFruit5(selected);
        });
    };

    // this will create a rolling effect and return random selected option
    const triggerSlotRotation = (ref: any) => {
        function setTop(top: any) {
            console.log("🚀 ~ setTop ~ top", top)
            ref.style.top = `${top}px`;
        }
        let options = ref.children;
        // console.log("🚀 ~ triggerSlotRotation ~ options", options)
        // console.log("🚀 ~ triggerSlotRotation ~ options", options[2].style.backgroundColor='white')
        let randomOption = Math.floor(
            Math.random() * fruits.length
        );
        let choosenOption = options[randomOption];




        let ab = [];
        ab.push(randomOption)
        setDiv(ab)
        setTop(-choosenOption.offsetTop + 2);
        return fruits[randomOption];
    };
    const amount = [
        0.05, 0.1, 0.25, 0.5, 1, 2
    ]

    return (

        <>
            <div className="row mt-0 mt-md-5 p-0">

                <div className="col-12 d-flex justify-content-center">
                    <span className="line    ">
                        <h2>

                            <img src="/assets/catHead.svg" className="img-fluid" alt="cat" />
                            <div className="col primeSlotText">
                                <p>Primes slot</p>
                                <p className="pinkTextColor">Spin and win your prize</p>
                            </div>


                        </h2>
                    </span>
                </div>
            </div>

            <div className="slots">
                <div className="row d-flex justify-content-center">

                    <div className="col-10 col-md-5 text-center slotsDiv">
                        <div className="handle">
                            <img src="/assets/items/handle.svg" alt="handle" />
                        </div>
                        <div className="slot">
                            <section className=''>
                                <div className="container p-0 myImgContainer " ref={slotRef[0]}>
                                    {fruits.map((fruit, i) => (
                                        <div key={i} className="h-50">
                                            <span className="myImgSpan">
                                                <img src={`/assets/items/${fruit}.svg`} className='itemsImg'  alt={fruit} />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                        <div className="slot">
                            <section className=' '>
                                <div className="container p-0 myImgContainer" ref={slotRef[1]}>
                                    {fruits.map((fruit, i) => (
                                        <div key={i}>
                                            <span>
                                                <img src={`/assets/items/${fruit}.svg`} className='itemsImg'  alt={fruit} />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                        <div className="slot">
                            <section className=''>
                                <div className="container p-0 myImgContainer" ref={slotRef[2]}>
                                    {fruits.map((fruit, i) => (
                                        <div key={i}>
                                            <span className='myImgSpan'>
                                                <img src={`/assets/items/${fruit}.svg`} className='itemsImg'  alt={fruit} />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                        <div className="slot">
                            <section className=''>
                                <div className="container p-0 myImgContainer" ref={slotRef[3]}>
                                    {fruits.map((fruit, i) => (
                                        <div key={i}>
                                            <span>
                                                <img src={`/assets/items/${fruit}.svg`} className='itemsImg'  alt={fruit} />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                        <div className="slot">
                            <section className=''>
                                <div className="container p-0 myImgContainer" ref={slotRef[4]}>
                                    {fruits.map((fruit, i) => (
                                        <div key={i} className={i == 1 ? 'blurImg' : ''}>
                                            <span>
                                                <img src={`/assets/items/${fruit}.svg`} className='itemsImg'  alt={fruit} />
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-center mt-1 mb-2 g-2">
                    {amount.map((e) => {
                        return (
                            <div className={`col-4 amountBox ${solAmount === e ? 'amountBoxSelected' : ''}`} onClick={() => setSolAmount(e)}>
                                <div className="col-12 text-center pt-2 pt-md-2">
                                    <img src="/assets/sol.svg" alt="sol" className='solImg' />
                                </div>
                                <div className="col-12 text-center pt-1 pt-md-1  fw-bold">

                                    {e}
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className="col text-center">
                    <button

                        className={!rolling ? "roll rolling" : "roll"}
                        // onClick={!rolling && roll}
                        onClick={roll}

                    >
                        Spin
                    </button>
                </div>


            </div>
            {console.log("aaa", solAmount)}


        </>
    );
};

export default Scroller;