import { Carousel } from "flowbite-react";
import giveawayImg from "../../assets/Rectangle 1.png";
import customareCare from "../../assets/3478661a972ec4f7b6dabda1344f15c7.png";
import time from "../../assets/Group 19.png"
import ground18 from "../../assets/Group 18.png"
import laptop from "../../assets/Website  (2) (2) 1.png"
import watchAndEarn from "../../assets/Frame 12.png"
import deposit from "../../assets/Frame 13.png"
import leadboard from "../../assets/Frame 14.png"
import spinAndwin from "../../assets/Frame 15.png"
import Carousele from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import earnIcon from "../../assets/earn icon.png"
import HomeIcon from "../../assets/home.png"
import giftIcon from "../../assets/gift home right icon.png"
import userIcon from "../../assets/user icon.png"
import wallet from "../../assets/wallet.png"
import plus from "../../assets/plus.png"
import { FaBars } from "react-icons/fa6";


const PricingCard = ({ title, price, features ,index}) => {
  return (
    <div className={`bg-gradient-to-b from-[#F15A69] to-[#FB8056] p-6 rounded-2xl shadow-lg text-white w-42  ml-1 ${index === 0 ? "ml-0" : "ml-3"}`}>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-3xl font-extrabold mt-2">₹ {price}</p>
      <ul className="mt-4 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm">{feature}</li>
        ))}
      </ul>
      <button className="mt-4 bg-white text-[#F15A69] font-bold py-2 px-4 rounded-full w-full shadow-md hover:bg-gray-100">
        SIGN UP
      </button>
    </div>
  );
};
const plans = [
  {
    title: "Professional",
    price: "60",
    features: ["1 user", "4 Web mails", "Responsive Web", "Free SSL"],
  },
  {
    title: "Business",
    price: "120",
    features: ["5 users", "10 Web mails", "Custom Domain", "Free Hosting"],
  },
  {
    title: "Enterprise",
    price: "250",
    features: ["Unlimited users", "50 Web mails", "Dedicated Support", "Advanced Security"],
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};


const Home = () => {
  return (
    <div className="min-h-screen bg-[#290b4b] p-4 text-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold font-title">Mymoney</h1>
        <button className="flex items-center rounded-lg bg-green-500 px-3 py-1 text-white">
     <img src={wallet} alt="" className="pr-2" />500  <img src={plus} alt="" className="pl-2" />
        </button>
      </div>

      {/* Giveaway Slider */}
      <div className="w-full p-0">
        <Carousel className="h-48">
          <img
            src={giveawayImg}
            alt="Giveaway 1"
            className="w-full rounded-md object-cover"
          />
          <img
            src={giveawayImg}
            alt="Giveaway 2"
            className="w-full rounded-md object-cover"
          />
          <img
            src={giveawayImg}
            alt="Giveaway 3"
            className="w-full rounded-md object-cover"
          />
        </Carousel>
      </div>

      {/* Info Cards */}
      <div className="grid grid-cols-2 gap-2 text-center text-sm">
        <div className="flex justify-between rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] p-2">
          <img src={customareCare} alt="" className="w-1/4 max-h-fit" />
          <div>
            <span className="font-time w-fit">Monday-Saturday</span>
            <img src={time} alt="" className="w-24 max-h-fit" />
          </div>
        </div>
        <div className="rounded-lg bg-[#02A7FC] p-2 flex justify-evenly">
          <div>
            <span className="font-time"> A Tutorial On</span>
            <img src={ground18} alt="" className="w-24 max-h-fit" />
          </div>
          <img src={laptop} alt="" className="h-auto w-1/3" />
        </div>
      </div>

      {/* Feature Icons */}
      <div className="mt-4 flex justify-around">
        <div className="text-center">
          <img
            src={watchAndEarn}
            alt="Watch & Earn"
            className="mx-auto w-fit"
          />
          {/* <p>Watch & Earn</p> */}
        </div>
        <div className="text-center">
          <img
            src={deposit}
            alt="Deposit"
            className="mx-auto w-fit"
          />
          {/* <p>Deposit</p> */}
        </div>
        <div className="text-center">
          <img
            src={leadboard}
            alt="Leaderboard"
            className="mx-auto w-fit"
          />
          {/* <p>Leaderboard</p> */}
        </div>
        <div className="text-center">
          <img
            src={spinAndwin}
            alt="Spin & Win"
            className="mx-auto w-fit"
          />
          {/* <p>Spin & Win</p> */}
        </div>
      </div>

      {/* Plans Section */}
      <div className="flex items-center gap-4 my-4">
        <FaBars className="inline-block text-md font-semibold" />
        <h2 className="inline-block text-left text-lg font-title font-semibold ">
          CHOOSE YOUR PLAN 
        </h2>
      </div>
      {/* <div className="mt-4 grid grid-cols-2 gap-4">
     <div className="rounded-lg bg-white p-4 text-black shadow-md">
          <h3 className="text-xl font-bold text-c">Professional</h3>
          <p className="text-2xl font-bold text-red-500">₹ 60</p>
          <ul className="text-sm">
            <li>1 user</li>
            <li>4 Web mails</li>
            <li>Responsive Website</li>
            <li>Free SSL</li>
          </ul>
          <button className="mt-2 w-full rounded-lg bg-red-500 py-1 text-white">
            SIGN UP
          </button>
        </div>
        <div className="rounded-lg bg-white p-4 text-black shadow-md">
          <h3 className="text-xl font-bold">Business</h3>
          <p className="text-2xl font-bold text-green-500">₹ 40</p>
          <ul className="text-sm">
            <li>1 user</li>
            <li>4 Web mails</li>
            <li>Responsive Website</li>
            <li>Free SSL</li>
          </ul>
          <button className="mt-2 w-full rounded-lg bg-green-500 py-1 text-white">
            SIGN UP
          </button>
        </div>
      </div> */}

      <div className="w-full mx-auto">
        <Carousele responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
          {plans?.map((plan, index) => (
            <PricingCard
              key={index}
              index ={index}
              title={plan.title}
              price={plan.price}
              features={plan.features}
            
            />
          ))}
        </Carousele>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 flex w-full justify-around bg-[#290b4b] p-2 text-center text-white">
        <div>
          <img src={HomeIcon} alt="" className="mx-auto" />
          <p>Home</p>
        </div>
        <div>
          <img src={giftIcon} alt="" className="mx-auto" />
          <p>Bonus</p>
        </div>
        <div>
          <img src={earnIcon} alt="" className="mx-auto" />
          <p>Earn 5 Lacs</p>
        </div>
        <div>
          <img src={userIcon} alt="" className="mx-auto" />
          <p>Account</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
