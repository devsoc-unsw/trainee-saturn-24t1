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
        {/* added a margin left so theres space for the dark/light mode button */}
        <div className="mt-8 w-3/4 flex flex-col items-center px-4 py-2 rounded bg-gradient-to-r from-green-200 to-blue-200" style={{ marginLeft: '-150px' }}>
            <h1 className="text-3xl font-bold text-black transition duration-300 transform hover:scale-105 hover:text-[#2ADCB1]">TAKE A BREAK & DE-STRESS</h1>
            <p style={{ color: "#000000" }}>It's important to step back, take a deep breath, and relax. Here are some activities to help you unwind!</p>
        </div>

                    <div className="mt-8 w-full flex flex-col items-center">
                        <h className="text-2xl font-bold mt-8 self-center rounded text-white transition duration-300 transform hover:scale-105">
                            FOOD SUGGESTIONS
                        </h>

                    <div className="image-container">
                        <div className="image-row">
                        {/* Image Box 2 */}
                        <a href="https://www.google.com/maps/dir//XS+Espresso+-+UNSW,+G05+%26+G05a+Ground+Floor+Biological+Science+(D26,+Kensington+NSW+2033/@-33.9177478,151.2256471,16z/data=!3m1!5s0x6b12b2203f513809:0x27d38b2bf97cf7bc!4m8!4m7!1m0!1m5!1m1!1s0x6b12b3edb60a6861:0x768b3e60eb849cb!2m2!1d151.2354138!2d-33.9173397?entry=ttu"
                                    target= "_blank" rel="noopener noreferrer">
                                    <div className="image-box" style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                </a>                        

                        {/* Image Box 3 */}
                        <a href="https://www.google.com/maps/dir//Yallah+Eat+Pita,+Kebab+%26+Shawarma+Bar,+Kensington+NSW/@-33.9154809,151.18687,13z/data=!3m1!5s0x6b12b2203f513809:0x27d38b2bf97cf7bc!4m8!4m7!1m0!1m5!1m1!1s0x6b12b1e86ae114ef:0xf10f8fe879d01339!2m2!1d151.2280696!2d-33.915559?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                                    <div className="image-box" style={{ backgroundImage: `url(${image3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                </a>

                        {/* Image Box 4 */}
                        <a href="https://www.google.com/maps/dir//It's+Time+For+Thai,+Anzac+Parade,+Kingsford+NSW/@-33.9292548,151.1884777,12.34z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6b12b18f24355e0f:0x91b7dbc927c62faa!2m2!1d151.2266667!2d-33.9222222?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                        <div className="image-box" style={{ backgroundImage: `url(${image4})`, backgroundSize: 'cover', backgroundPosition: 'center top' }}></div> {/* Image Box 3 */}
                        </a>

                          {/* Image Box 5 */}
                        <a href="https://www.google.com/maps/dir//1915+Lanzhou+Beef+Noodles,+Shop+17+Liverpool+Street,+Sydney+NSW/@-33.859139,151.1564112,11.64z/data=!3m1!5s0x6b13eb099503ba87:0x20b19b8a7efcbdf4!4m8!4m7!1m0!1m5!1m1!1s0x6b12afb58012c415:0x79b9a58127cd8b0c!2m2!1d151.2071631!2d-33.8770711?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                        <div className="image-box" style={{ backgroundImage: `url(${image5})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 4 */}
                        </a>

                        {/* Image Box 6 */}
                        <a href="https://www.google.com/maps/dir//Gelato+Messina+Randwick,+Barker+Street,+Randwick+NSW/@-33.9185527,151.2333899,15z/data=!3m1!5s0x6b13eb099503ba87:0x20b19b8a7efcbdf4!4m8!4m7!1m0!1m5!1m1!1s0x6b12b35748dbcb79:0xcb0acdef1598e0d5!2m2!1d151.2376813!2d-33.92125?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                        <div className="image-box" style={{ backgroundImage: `url(${image6})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        </a>

                        {/* Image Box 7 */}
                        <a href="https://www.google.com/maps/dir//Soul+Origin+UNSW,+College+Road,+Kensington+NSW/@-33.9185527,151.2333899,15z/data=!3m1!5s0x6b13eb099503ba87:0x20b19b8a7efcbdf4!4m8!4m7!1m0!1m5!1m1!1s0x6b12b19f63f82e57:0x6100bda9b9cc87c7!2m2!1d151.230434!2d-33.917275?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                        <div className="image-box" style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        </a>

                         {/* Image Box 8 */}
                        <a href="https://www.google.com/maps/dir//Vapiano+King+Street,+York+Street,+Sydney+NSW/@-33.8687299,151.2059265,13z/data=!3m1!5s0x6b13eb099503ba87:0x20b19b8a7efcbdf4!4m8!4m7!1m0!1m5!1m1!1s0x6b12ae3f686241bf:0x9ec664eeb9e4a7f0!2m2!1d151.2059265!2d-33.8687299?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                        <div className="image-box" style={{ backgroundImage: `url(${image25})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        </a>

                          {/* Image Box 9 */}
                        <a href="https://www.google.com/maps/dir//Stellini+Pasta+Bar,+High+Street,+Kensington+NSW/@-33.9156767,151.2278932,13z/data=!3m1!5s0x6b13eb099503ba87:0x20b19b8a7efcbdf4!4m8!4m7!1m0!1m5!1m1!1s0x6b12b18ca4df9835:0x57d6fe926da0067!2m2!1d151.2278932!2d-33.9156767?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                        <div className="image-box" style={{ backgroundImage: `url(${image29})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                        </a>

                        </div>
                    </div>
                </div>

                    <div className="mt-8 w-full flex flex-col items-center">
                        
                        <h className="text-2xl font-bold mt-8 self-center rounded text-white transition duration-300 transform hover:scale-105">
                            OUTDOOR ACTIVITIES
                        </h>
                    <div className="image-container">
                        <div className="image-row">  
                          
                        
                        {/* Image Box 1 */}
                        <a href="https://www.google.com/maps/dir//UNSW+Village+Green,+Kensington+NSW/@-33.9184307,151.2279767,13z/data=!3m2!4b1!5s0x6b13eb099503ba87:0x20b19b8a7efcbdf4!4m8!4m7!1m0!1m5!1m1!1s0x6b12b18bf5b99811:0xb6c110f837836911!2m2!1d151.2279767!2d-33.9184307?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                        <div className="image-box" style={{ backgroundImage: `url(${image7})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        </a>     
                        
                        {/* Image Box 2 */}
                        <a href="https://www.google.com/maps/dir//Coogee+Beach,+Coogee+NSW/@-33.9203384,151.2581325,13z/data=!3m2!4b1!5s0x6b13eb099503ba87:0x20b19b8a7efcbdf4!4m8!4m7!1m0!1m5!1m1!1s0x6b12b26aeb0ad66b:0x5fc588076f352da2!2m2!1d151.2581325!2d-33.9203384?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                        <div className="image-box" style={{ backgroundImage: `url(${image8})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        </a>     
                        
                        {/* Image Box 3 */}
                        <a href="https://www.google.com/maps/dir//NBC+Alexandria,+8%2F190+Bourke+Rd,+Alexandria+NSW+2015/@-33.9304253,151.135504,11.67z/data=!3m1!5s0x6b13eb099503ba87:0x20b19b8a7efcbdf4!4m8!4m7!1m0!1m5!1m1!1s0x6b12b18687e34655:0x5e117607f63d3fa7!2m2!1d151.192351!2d-33.9172262?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                       <div className="image-box" style={{ backgroundImage: `url(${image28})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                       </a>     
                       
                        {/* Image Box 4 */}
                       <a href="https://www.google.com/maps/dir//Luna+Park,+Olympic+Dr,+Milsons+Point+NSW/@-33.9844976,151.1298958,10.93z/data=!3m1!5s0x6b13eb099503ba87:0x20b19b8a7efcbdf4!4m8!4m7!1m0!1m5!1m1!1s0x6b12ae60143fcedf:0x683c95052cc70614!2m2!1d151.2098382!2d-33.8476987?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                        <div className="image-box" style={{ backgroundImage: `url(${image19})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        </a>     

                        {/* Image Box 5 */}
                        <a href="https://www.google.com/maps/dir//Million+Life+Dixon+St,+Dixon+Street,+Haymarket+NSW/@-33.8785075,151.203847,13z/data=!3m1!5s0x6b13eb099503ba87:0x20b19b8a7efcbdf4!4m8!4m7!1m0!1m5!1m1!1s0x6b12afa4e5a8e1cf:0x1d76982a286f35ca!2m2!1d151.203847!2d-33.8785075?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                        <div className="image-box" style={{ backgroundImage: `url(${image10})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        </a>     

                        {/* Image Box 6 */}
                        <a href="https://www.google.com/maps/dir//Art+Gallery+of+New+South+Wales,+Art+Gallery+Road,+Sydney+NSW/@-33.8785075,151.203847,13z/data=!3m1!5s0x6b13eb099503ba87:0x20b19b8a7efcbdf4!4m8!4m7!1m0!1m5!1m1!1s0x6b12ae6c7ca55a3d:0xe1d4577d0927f71c!2m2!1d151.2174138!2d-33.8688037?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                        <div className="image-box" style={{ backgroundImage: `url(${image11})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        </a>     

                        {/* Image Box 7 */}
                        <a href="https://www.google.com/maps/dir//Centennial+Park+Cycles,+Fearnley+Grounds,+Grand+Drive,+Centennial+Park+NSW/@-33.9025122,151.1880651,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x6b12adff0f49cfdb:0xa62d00cbf175b6b1!2m2!1d151.2293053!2d-33.9025628?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                       <div className="image-box" style={{ backgroundImage: `url(${image18})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                       </a>   

                        {/* Image Box 8 */}
                       <a href="https://www.google.com/maps/dir//The+Village+Green,+Kensington+NSW/@-33.8800556,151.164901,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6b12b18bf5b99811:0xb6c110f837836911!2m2!1d151.2279767!2d-33.9184307?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                        <div className="image-box" style={{ backgroundImage: `url(${image20})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        </a>     

                        {/* Image Box 9 */}
                        <a href="https://www.google.com/maps/dir//Hyper+Karting+%26+VR+(Virtual+Reality),+Level+5+Car+Park,+207+Park+Rd+S,+Moore+Park+NSW+2021/@-33.8949918,151.2259721,13z/data=!3m1!5s0x6b12b1fdbf1d95a1:0x44edbaa3df44941e!4m8!4m7!1m0!1m5!1m1!1s0x6b12b12d390627b1:0x68fc1506e75534f!2m2!1d151.2259721!2d-33.8949918?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                        <div className="image-box" style={{ backgroundImage: `url(${image21})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        </a>     

                        {/* Image Box 10 */}
                        <a href="https://www.google.com/maps/dir//Moore+Park+Golf+Course,+Cleveland+Street,+Moore+Park+NSW/@-33.8949918,151.2259721,13z/data=!3m1!5s0x6b12b1fdbf1d95a1:0x44edbaa3df44941e!4m8!4m7!1m0!1m5!1m1!1s0x6b12b1e4f61e20e1:0x824e1bd1b9e36cf!2m2!1d151.220519!2d-33.896277?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                        <div className="image-box" style={{ backgroundImage: `url(${image22})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        </a>    

                        {/* Image Box 11 */}
                        <a href="https://www.google.com/maps/dir//Bondi+Beach+NSW/@-33.896277,151.220519,13z/data=!3m1!5s0x6b12b1fdbf1d95a1:0x44edbaa3df44941e!4m8!4m7!1m0!1m5!1m1!1s0x6b12b201c6bc3859:0x5017d681632ad80!2m2!1d151.2703991!2d-33.8891201?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                        <div className="image-box" style={{ backgroundImage: `url(${image24})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                        </a>     

                        {/* Image Box 12 */}
                        <a href="https://www.google.com/maps/dir//Grand+Dr,+Centennial+Park+NSW+2021/@-33.8964626,151.2304826,15z/data=!3m1!5s0x6b12b1fdbf1d95a1:0x44edbaa3df44941e!4m8!4m7!1m0!1m5!1m1!1s0x6b12b201e7523df3:0xaaadb06adca348c2!2m2!1d151.2304826!2d-33.8964626?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                       <div className="image-box" style={{ backgroundImage: `url(${image27})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                       </a>     
                        </div>
                    </div>
                 </div>

                    <div className="mt-8 w-full flex flex-col items-center">
                        <h2 className="text-2xl font-bold mt-8 self-center rounded text-white transition duration-300 transform hover:scale-105">
                            COMFORT ACTIVITIES
                        </h2>
                    <div className="image-container">
                        <div className="image-row">
                        
                         {/* Image Box 1 */}
                        <a href="https://www.google.com/maps/dir//UNSW+Library,+Library+(F21),+Library+Rd,+UNSW,+Kensington+NSW+2052/@-33.9174196,151.1922514,13z/data=!3m1!5s0x6b12b1fdbf1d95a1:0x44edbaa3df44941e!4m8!4m7!1m0!1m5!1m1!1s0x6b12b18a9e342aef:0x46cd14a8c6426778!2m2!1d151.233451!2d-33.9174977?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                            <div className="image-box" style={{ backgroundImage: `url(${image12})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                            </a>    

                        {/* Image Box 2 */}
                            <a href="https://www.netflix.com/au/"
                                    target="_blank" rel="noopener noreferrer">
                            <div className="image-box" style={{ backgroundImage: `url(${image14})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                            </a>     

                        {/* Image Box 3 */}
                            <a href="https://www.google.com/maps/dir//Sharetea+Kensington+(UNSW),+High+Street,+Kensington+NSW/@-33.9174196,151.1922514,13z/data=!3m1!5s0x6b12b1fdbf1d95a1:0x44edbaa3df44941e!4m8!4m7!1m0!1m5!1m1!1s0x6b12b18b5f0f64c3:0x7bdba6b92954b891!2m2!1d151.227861!2d-33.9155414?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                            <div className="image-box" style={{ backgroundImage: `url(${image13})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                            </a>     

                        {/* Image Box 4 */}
                            <a href="https://www.google.com/maps/dir//Anytime+Fitness+Randwick,+Belmore+Road,+Randwick+NSW/@-33.9148046,151.2404956,13z/data=!3m2!4b1!5s0x6b12b1fdbf1d95a1:0x44edbaa3df44941e!4m8!4m7!1m0!1m5!1m1!1s0x6b12b218ddd606db:0xc65e0f922ba8b43b!2m2!1d151.2404956!2d-33.9148046?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                            <div className="image-box" style={{ backgroundImage: `url(${image17})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                            </a>  

                        {/* Image Box 5 */}
                            <a href="https://www.google.com/maps/dir//Westfield+Bondi+Junction,+Oxford+Street,+Bondi+Junction+NSW/@-33.9148046,151.2404956,13z/data=!3m1!5s0x6b12b1fdbf1d95a1:0x44edbaa3df44941e!4m8!4m7!1m0!1m5!1m1!1s0x6b12adf0fa8bf32d:0x6d613af64d7a36aa!2m2!1d151.2505012!2d-33.8915695?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                            <div className="image-box" style={{ backgroundImage: `url(${image9})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                            </a>   

                        {/* Image Box 6 */}
                            <a href="https://www.google.com/maps/dir//HOYTS+Broadway,+Bay+Street,+Broadway+NSW/@-33.8953188,151.2138827,14z/data=!3m1!5s0x6b12b1fdbf1d95a1:0x44edbaa3df44941e!4m8!4m7!1m0!1m5!1m1!1s0x6b12ae3d3b0bc06d:0x8d01989505276141!2m2!1d151.1945022!2d-33.8830244?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                            <div className="image-box" style={{ backgroundImage: `url(${image23})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                            </a>  

                        {/* Image Box 7 */}
                            <a href="https://www.google.com/maps/dir//Centennial+Park,+New+South+Wales+2021/@-33.892162,151.2321807,13z/data=!3m1!5s0x6b12b1fdbf1d95a1:0x44edbaa3df44941e!4m8!4m7!1m0!1m5!1m1!1s0x6b12ae2221a55fc9:0x5017d681632b0b0!2m2!1d151.2321807!2d-33.892162?entry=ttu"
                                    target="_blank" rel="noopener noreferrer">
                            <div className="image-box" style={{ backgroundImage: `url(${image26})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div> {/* Image Box 1 */}
                            </a>     
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
        border: 0.5px solid white;
        margin-right: 5px;
        transition: transform 0.3s ease;
    }

    .image-box:last-child {
        margin-right: 10;
    }

    .image-box:hover {
        transform: scale(1.25);
    }
    `}
</style>
        </div>
    );
}

export default Rest;
