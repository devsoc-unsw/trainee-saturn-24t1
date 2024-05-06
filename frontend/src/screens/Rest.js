import React, { useState } from 'react';

function Rest() {
    const foodAffirmations = [
        "You are what you eat. Choose foods that nourish your body and soul.",
        "Enjoying a delicious meal is a form of self care. Take your time and savor every bite.",
        "Feeling like you could eat a horse? Trot over to Yallah Eats.",
        "Soul Origin's iced coffee is like a cold splash of motivation",
        "Food is fuel for your body. Choose meals that give you energy and vitality.",
        "Eating mindfully can help you appreciate the taste, texture, and aroma of your food."
    ];

    const outdoorAffirmations = [
        "Nature has a way of refreshing your mind, body, and spirit.",
        "Take a stroll on the UNSW walking track and soak up some Vitamin D",
        "Breathing in fresh air can invigorate your senses and clear your mind.",
        "Step outside and take a deep breath.",
        "Connecting with nature can inspire creativity and reduce stress. ",
        "Spending time outdoors can improve your mood and boost your immune system.",
    ];

    const comfortAffirmations = [
        "Taking time to relax is essential for your well-being.",
        "Give yourself permission to rest and recharge.",
        "Comfort activities can help you unwind and reduce stress.",
        "Pamper yourself with self-care habits that make you feel good inside and out.",
        "Surround yourself with things that bring you comfort.",
        "Finding comfort in small moments can bring a sense of contentment and happiness.",
        "Cherish the little things in life.",
        "Slip into the UNSW sleeping pod for a quick recharge."
    ];

    const [foodIndex, setFoodIndex] = useState(0);
    const [outdoorIndex, setOutdoorIndex] = useState(0);
    const [comfortIndex, setComfortIndex] = useState(0);

    const changeFoodAffirmation = () => {
        setFoodIndex((foodIndex + 1) % foodAffirmations.length);
    };

    const changeOutdoorAffirmation = () => {
        setOutdoorIndex((outdoorIndex + 1) % outdoorAffirmations.length);
    };

    const changeComfortAffirmation = () => {
        setComfortIndex((comfortIndex + 1) % comfortAffirmations.length);
    };

    return (
        <div className="h-screen p-2 bg-[#302E28] flex">
            <div className="w-1/4 p-4 flex flex-col justify-between">
                <div className="flex flex-col items-start">
                    <h1 className="text-3xl font-bold">
                        <span className="text-zinc-200">Achieve</span><span className="text-[#2ADCB1]">Mint</span>
                    </h1>
                    <p className="text-lg font-semibold mt-4 text-white">Sometimes, it's important to step back, take a deep breath, and relax. Here are some activities to help you unwind.</p>
                </div>
                <div className="flex flex-col items-start mt-8">
                    <div className="bg-[#D7C4A9] text-white font-bold rounded-full px-4 py-2 text-center">Hungry?</div>
                    <p className="mt-2 text-white">{foodAffirmations[foodIndex]}</p>
                    <button className="bg-[#80CDBB] hover:bg-[#D7C4A9] text-white font-bold py-2 px-4 mt-2 rounded" onClick={changeFoodAffirmation}>Next Affirmation</button>
                </div>
                <div className="flex flex-col items-start mt-8">
                    <div className="bg-[#D7C4A9] text-white font-bold rounded-full px-4 py-2 text-center">Need fresh Air?</div>
                    <p className="mt-2 text-white">{outdoorAffirmations[outdoorIndex]}</p>
                    <button className="bg-[#80CDBB] hover:bg-[#D7C4A9] text-white font-bold py-2 px-4 mt-2 rounded" onClick={changeOutdoorAffirmation}>Next Affirmation</button>
                </div>
                <div className="flex flex-col items-start mt-8">
                    <div className="bg-[#D7C4A9] text-white font-bold rounded-full px-4 py-2 text-center">Tired?</div>
                    <p className="mt-2 text-white">{comfortAffirmations[comfortIndex]}</p>
                    <button className="bg-[#80CDBB] hover:bg-[#D7C4A9] text-white font-bold py-2 px-4 mt-2 rounded" onClick={changeComfortAffirmation}>Next Affirmation</button>
                </div>
            </div>
            <div className="w-3/4">
                <div className="flex flex-col items-center">

                    <div className="mt-8 w-3/4 flex flex-col items-center self-center bg-[#80CDBB] px-4 py-2 rounded">
                        <h2 className="text-2xl font-bold text-white">TAKE A BREAK & DE-STRESS</h2>
                    </div>

                    <div className="mt-8 w-full flex flex-col items-center">
                        <h2 className="text-2xl font-bold mt-8 self-center bg-blue-100 px-4 py-2 rounded text-black">
                            FOOD SUGGESTIONS
                        </h2>
                        <div className="image-row">
                            <div className="image-box"></div> {/* Image Box 1 */}
                            <div className="image-box"></div> {/* Image Box 2 */}
                            <div className="image-box"></div> {/* Image Box 3 */}
                            <div className="image-box"></div> {/* Image Box 4 */}
                            <div className="image-box"></div> {/* Image Box 5 */}
                        </div>
                    </div>

                    <div className="mt-8 w-full flex flex-col items-center">
                        <h2 className="text-2xl font-bold mt-8 self-center bg-blue-100 px-4 py-2 rounded text-black">
                            OUTDOOR ACTIVITIES
                        </h2>
                        <div className="image-row">
                            <div className="image-box"></div> {/* Image Box 1 */}
                            <div className="image-box"></div> {/* Image Box 2 */}
                            <div className="image-box"></div> {/* Image Box 3 */}
                            <div className="image-box"></div> {/* Image Box 4 */}
                            <div className="image-box"></div> {/* Image Box 5 */}
                        </div>
                    </div>

                    <div className="mt-8 w-full flex flex-col items-center">
                        <h2 className="text-2xl font-bold mt-8 self-center bg-blue-100 px-4 py-2 rounded text-black">
                            COMFORT ACTIVITIES
                        </h2>
                        <div className="image-row">
                            <div className="image-box"></div> {/* Image Box 1 */}
                            <div className="image-box"></div> {/* Image Box 2 */}
                            <div className="image-box"></div> {/* Image Box 3 */}
                            <div className="image-box"></div> {/* Image Box 4 */}
                            <div className="image-box"></div> {/* Image Box 5 */}
                        </div>
                    </div>

                </div>
            </div>

            {/* styles for image boxes that will b replaced by the images  */}
            <style>
                {`
                .image-row {
                    display: flex;
                    flex-wrap: wrap;
                }
                
                .image-box {
                    width: 190px;
                    height: 90px;
                    border: 2px solid white;
                    margin: 8px;
                    transition: transform 0.3s ease;
                }

                .image-box:hover {
                    transform: scale(1.4);
                }
                `}
            </style>
        </div>
    );
}

export default Rest;
