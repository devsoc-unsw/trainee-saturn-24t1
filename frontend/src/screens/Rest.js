import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/* Timer for rest page: no stop or start button, it just tracks how long you've been on the page for */
function Timer() {
    const [time, setTime] = useState(0);

    useEffect(() => {const interval = setInterval(() => {setTime((prevTime) => prevTime + 1);}, 1000); 
    return () => clearInterval(interval);}, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      };

    return (<div className="text-white font-bold absolute top-4 left-4"><p>{formatTime(time)}</p></div>);
}

function Rest() {
  /* Positive affirmation generator */
    const navigate = useNavigate();

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

    const handleButtonClick = () => {
        navigate('/');
    };

    return (
        <div className="relative flex h-screen p-2 bg-[#302E28]">
            <div className="w-1/4 p-4 flex flex-col justify-between">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold">
                      <span className="text-zinc-200">Achieve</span><span className="text-[#2ADCB1]">Mint</span>
                    </h1>

                    {/* Buttons for rest page */}
                    <button className="bg-[#FFFFFF] hover:bg-[#CCCCCC] font-bold text-[#3C3C3C] bg-white rounded-xl p-3 m-1.5 flex items-center space-x-2" onClick={handleButtonClick}><span>&#8592;</span> <span>Back to Landing Page</span></button>
                    <Timer />
                </div>
                <div className="flex flex-col items-center mt-8">
                    <div className="bg-[#D7C4A9] text-black font-bold rounded-full px-4 py-2 text-center">HUNGRY?</div>
                    <p className="mt-2 text-white text-center">{foodAffirmations[foodIndex]}</p>
                    <button className="bg-[#80CDBB] hover:bg-[#D7C4A9] text-black font-bold px-6 mt-2 rounded-lg" onClick={changeFoodAffirmation}>Next Affirmation</button>
                </div>
                <div className="flex flex-col items-center mt-8">
                    <div className="bg-[#D7C4A9] text-black font-bold rounded-full px-4 py-2 text-center">NEED FRESH AIR?</div>
                    <p className="mt-2 text-white text-center">{outdoorAffirmations[outdoorIndex]}</p>
                    <button className="bg-[#80CDBB] hover:bg-[#D7C4A9] text-black font-bold px-6 mt-2 rounded-lg" onClick={changeOutdoorAffirmation}>Next Affirmation</button>
                </div>
                <div className="flex flex-col items-center mt-8">
                    <div className="bg-[#D7C4A9] text-black font-bold rounded-full px-4 py-2 text-center">TIRED & BURNT OUT?</div>
                    <p className="mt-2 text-white text-center">{comfortAffirmations[comfortIndex]}</p>
                    <button className="bg-[#80CDBB] hover:bg-[#D7C4A9] text-black font-bold px-6 mt-2 rounded-lg" onClick={changeComfortAffirmation}>Next Affirmation</button>
                </div>
            </div>

            {/* Categories for rest page */}
            <div className="w-3/4">
                <div className="flex flex-col items-center">
                    <div className="mt-8 w-3/4 flex flex-col items-center self-center px-4 py-2 rounded bg-gradient-to-r from-green-200 to-blue-200">
                        <h2 className="text-3xl font-bold text-black transition duration-300 transform hover:scale-105 hover:text-[#2ADCB1]">TAKE A BREAK & DE-STRESS</h2>
                        <p1 style={{ color: "#000000" }}>It's important to step back, take a deep breath, and relax. Here are some activities to help you unwind!</p1>
                    </div>

                    <div className="mt-8 w-full flex flex-col items-center">
                        <h2 className="text-2xl font-bold mt-8 self-center rounded text-white transition duration-300 transform hover:scale-105">
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
                        <h2 className="text-2xl font-bold mt-8 self-center rounded text-white transition duration-300 transform hover:scale-105">
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
                        <h2 className="text-2xl font-bold mt-8 self-center rounded text-white transition duration-300 transform hover:scale-105">
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
