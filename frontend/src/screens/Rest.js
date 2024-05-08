import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

 // Import images for categories //
import image1 from './images/image1.png';
import image2 from './images/image2.jpeg'; 
import image3 from './images/image3.jpeg';
import image4 from './images/image4.jpeg';
import image5 from './images/image5.jpeg';
import image6 from './images/image6.jpeg';
import image7 from './images/image7.jpeg';
import image8 from './images/image8.jpeg';
import image9 from './images/image9.jpeg';
import image10 from './images/image10.jpeg';
import image11 from './images/image11.webp';
import image12 from './images/image12.jpeg';
import image13 from './images/image13.jpeg';
import image14 from './images/image14.jpeg';
import image17 from './images/image17.jpeg';
import image19 from './images/image19.jpeg';
import image18 from './images/image18.jpeg';
import image20 from './images/image20.jpeg';
import image21 from './images/image21.jpeg';
import image22 from './images/image22.webp';
import image23 from './images/image23.jpeg';
import image24 from './images/image24.webp';
import image25 from './images/image25.jpeg';
import image26 from './images/image26.jpeg';
import image27 from './images/image27.jpeg';
import image28 from './images/image28.jpeg';
import image29 from './images/image29.jpeg';

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
                    <div className="image-container">
                        <div className="image-row">
                        <div className="image-box" style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        <div className="image-box" style={{ backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 2 */}
                        <div className="image-box" style={{ backgroundImage: `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}></div> {/* Image Box 3 */}
                        <div className="image-box" style={{ backgroundImage: `url(${image5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 4 */}
                        <div className="image-box" style={{ backgroundImage: `url(${image6})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <div className="image-box" style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <div className="image-box" style={{ backgroundImage: `url(${image25})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        <div className="image-box" style={{ backgroundImage: `url(${image29})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

                        </div>
                    </div>
                </div>

                    <div className="mt-8 w-full flex flex-col items-center">
                        <h2 className="text-2xl font-bold mt-8 self-center rounded text-white transition duration-300 transform hover:scale-105">
                            OUTDOOR ACTIVITIES
                        </h2>
                    <div className="image-container">
                        <div className="image-row">
                        <div className="image-box" style={{ backgroundImage: `url(${image7})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        <div className="image-box" style={{ backgroundImage: `url(${image8})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        <div className="image-box" style={{ backgroundImage: `url(${image28})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        <div className="image-box" style={{ backgroundImage: `url(${image19})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        <div className="image-box" style={{ backgroundImage: `url(${image10})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        <div className="image-box" style={{ backgroundImage: `url(${image11})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        <div className="image-box" style={{ backgroundImage: `url(${image18})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        <div className="image-box" style={{ backgroundImage: `url(${image20})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        <div className="image-box" style={{ backgroundImage: `url(${image21})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        <div className="image-box" style={{ backgroundImage: `url(${image22})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        <div className="image-box" style={{ backgroundImage: `url(${image24})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        <div className="image-box" style={{ backgroundImage: `url(${image27})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}

                        </div>
                    </div>
                 </div>

                    <div className="mt-8 w-full flex flex-col items-center">
                        <h2 className="text-2xl font-bold mt-8 self-center rounded text-white transition duration-300 transform hover:scale-105">
                            COMFORT ACTIVITIES
                        </h2>
                    <div className="image-container">
                        <div className="image-row">
                            <div className="image-box" style={{ backgroundImage: `url(${image12})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                            <div className="image-box" style={{ backgroundImage: `url(${image14})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                            <div className="image-box" style={{ backgroundImage: `url(${image13})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                            <div className="image-box" style={{ backgroundImage: `url(${image17})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                            <div className="image-box" style={{ backgroundImage: `url(${image9})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                            <div className="image-box" style={{ backgroundImage: `url(${image23})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                            <div className="image-box" style={{ backgroundImage: `url(${image26})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}

                        </div>
                    </div>
                    </div>
                </div>
            </div>

     {/* styles for image boxes  */}
    <style>
    {`
    .image-container {
        width: 90%;
        overflow-x: auto;
        white-space: nowrap;
        height: 120px; 
    }

    .image-row {
        display: inline-flex;
    }

    .image-box {
        width: 190px;
        height: 100px;
        border: 1px solid grey;
        margin-right: 10px;
        transition: transform 0.3s ease;
    }

    .image-box:last-child {
        margin-right: 20;
    }

    .image-box:hover {
        transform: scale(1.2);
    }
    `}
</style>
        </div>
    );
}

export default Rest;
