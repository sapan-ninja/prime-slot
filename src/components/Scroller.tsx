import { useRef, useState } from 'react';

function Scroller() {
    const [fruit1, setFruit1] = useState("🍒");
    const [fruit2, setFruit2] = useState("🍒");
    const [fruit3, setFruit3] = useState("🍒");
    const [rolling, setRolling] = useState(false);
    let slotRef = [useRef(null), useRef(null), useRef(null)];
    const fruits = ["🍒", "🍉", "🍊", "🍓", "🍇", "🥝"]

    // to trigger roolling and maintain state
    const roll = () => {
        setRolling(true);
        setTimeout(() => {
            setRolling(false);
        }, 700);

        // looping through all 3 slots to start rolling
        slotRef.forEach((slot, i) => {
            // this will trigger rolling effect
            const selected = triggerSlotRotation(slot.current);
            if (i + 1 == 1)
                setFruit1(selected);
            else if (i + 1 == 2)
                setFruit2(selected);
            else
                setFruit3(selected);
        });
    };

    // this will create a rolling effect and return random selected option
    const triggerSlotRotation = (ref: any) => {
        function setTop(top: any) {
            ref.style.top = `${top}px`;
        }
        let options = ref.children;
        let randomOption = Math.floor(
            Math.random() * fruits.length
        );
        let choosenOption = options[randomOption];
        setTop(-choosenOption.offsetTop + 2);
        return fruits[randomOption];
    };

    return (

        <>
            <div className="row mt-5 p-0">
           
                {/* <div className="col-12 d-flex justify-content-center">
                    <span className="line">
                        <h2>

                                <img src="/assets/catHead.svg" alt="cat" />


                        </h2>
                    </span>
                </div> */}
            </div>
            <div className="row mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="slots">

                        <div className="col text-center">

                            <div className="slot">
                                <section>
                                    <div className="container" ref={slotRef[0]}>
                                        {fruits.map((fruit, i) => (
                                            <div key={i}>
                                                <span>{fruit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                            <div className="slot">
                                <section>
                                    <div className="container" ref={slotRef[1]}>
                                        {fruits.map((fruit,i )=> (
                                            <div key={i}>
                                                <span>{fruit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                            <div className="slot">
                                <section>
                                    <div className="container" ref={slotRef[2]}>
                                        {fruits.map((fruit,i )=> (
                                            <div key={i}>
                                                <span>{fruit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
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
                </div>
            </div>


        </>
    );
};

export default Scroller;