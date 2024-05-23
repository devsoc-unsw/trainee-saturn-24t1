import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ModeButton from './components-hana/ModeToggleButton';

/* Timer for rest page: no stop or start button, it just tracks how long you've been on the page for */
function Timer() {
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {const interval = setInterval(() => {setTime((prevTime) => prevTime + 1);}, 1000); 
    return () => clearInterval(interval);}, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (<div className="text-white font-bold absolute top-4 left-4"><p>{formatTime(time)}</p></div>);
}


function Rest({ isDarkMode, handleModeChange }) {
    /* Positive affirmation generator */
    const navigate = useNavigate();

    const foodAffirmations = [
        "You are what you eat. Choose foods that nourish your body and soul.",
        "Savouring a meal with loved ones creates lasting memories and strengthens bonds.",
        "Indulge in treats occasionally. Life is too short to skip dessert!",
        "Treat yourself to the Italian goodness of Vapiano Pasta.",
        "Indulge in a scoop of happiness from Messina. Let every lick be a sweet escape.",
        "Enjoying a delicious meal is a form of self care. Take your time and savor every bite.",
        "Feeling like you could eat a horse? Trot over to Yallah Eats.",
        "Spice up your day at Time for Thai. Let each bite be a culinary adventure.",
        "Soul Origin's iced coffee is like a cold splash of motivation",
        "Food is fuel for your body. Choose meals that give you energy and vitality.",
        "Eating mindfully can help you appreciate the taste, texture, and aroma of your food."
    ];

    const outdoorAffirmations = [
        "Nature has a way of refreshing your mind, body, and spirit.",
        "Let art be your escape. Lose yourself in the colors at the Art Gallery of NSW.",
        "Feel the adrenaline as you speed through the tracks at Moore Park Go Karting.",
        "Let the waves of Coogee Beach wash away your worries",
        "Find solace in the simplicity of a sunset or the gentle rustle of leaves in the wind.",
        "Take a stroll on the UNSW walking track and soak up some Vitamin D.",
        "Dive into the world of arcade fun and let your inner child run wild!.",
        "Take a spin at Luna Park and rediscover the thrill of being carefree.",
        "Breathing in fresh air can invigorate your senses and clear your mind.",
        "Embrace the thrill of defying gravity at Centennial Park's Flying Trapeze.",
        "Step outside and take a deep breath, and surround yourself with positivity.",
        "Enjoy a game of badminton at Moore Park. Soak in the joy of friendly competition.",
        "Connecting with nature can inspire creativity and reduce stress. ",
        "Spending time outdoors can improve your mood and boost your immune system.",
    ];

    const comfortAffirmations = [
        "Taking time to relax is essential for your well-being.",
        "Curl up and unwind with Netflix. Let every show be an escape into entertainment.",
        "Sweat it out at Anytime Fitness. Each rep brings you closer to your strongest self.",
        "Remember to give yourself some downtime to recharge. Take care of yourself.",        
        "Comfort activities can help you unwind and reduce stress.",
        "Retail therapy awaits! Explore the aisles and treat yourself to something special.",
        "Take a moment to unwind at Centennial Park. Let nature soothe your soul.",
        "Escape into another world at Hoyts. Let every movie be a journey of imagination.",
        "Pamper yourself with self-care habits that make you feel good inside and out.",
        "Surround yourself with things that bring you comfort.",
        "Finding comfort in small moments can bring a sense of contentment and happiness.",
        "Slip into the UNSW sleeping pod for a quick recharge.",
        "Don't forget to appreciate the small joys life brings. Those little moments matter."
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
        <div className={
            isDarkMode === true
                ? "relative flex h-screen p-2 bg-[#302E28]"
                : "relative flex h-screen p-2 bg-[#FFFDEE]"
        }>
            <div className="w-1/4 p-4 flex flex-col justify-between">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold">
                        <span className={
                            isDarkMode === true
                                ? "text-[#FBFBFB]"
                                : "text-[#302E28]"}>
                            Achieve
                        </span>
                        <span className="text-[#2ADCB1]">Mint</span>
                    </h1>

                    {/* Buttons for rest page */}
                    <button className={
                        isDarkMode === true
                            ? "bg-[#FBFBFB] hover:bg-[#CCCCCC] font-bold text-[#302E28] rounded-xl p-3 m-1.5 flex items-center space-x-2"
                            : "bg-[#302E28] hover:bg-[#CCCCCC] font-bold text-[#FBFBFB] rounded-xl p-3 m-1.5 flex items-center space-x-2"
                    }
                        onClick={handleButtonClick}><span>&#8592;</span> <span>Back to Landing Page</span></button>
                    <Timer isDarkMode={isDarkMode} />
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
    width: 220px;
    height: 109px;
    border: 2.5px solid black;
    transition: transform 0.3s ease;
    margin-right: 15px; 

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
