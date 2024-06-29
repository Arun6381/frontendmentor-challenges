import React from 'react';
import mainimg from "./../assets/screen-mockups.svg";
import email from "./../assets/icon-communities.svg";
import message from "./../assets/icon-messages.svg";
import firstdis from "./../assets/bg-section-top-desktop-1.svg";
import firstdis2 from "./../assets/bg-section-top-desktop-2.svg";
import firstdiss from "./../assets/bg-section-bottom-desktop-1.svg";
import firstdiss2 from "./../assets/bg-section-bottom-desktop-2.svg";
import firstdimg from "./../assets/illustration-grow-together.svg";
import flowing from "./../assets/illustration-flowing-conversation.svg";
import users from "./../assets/illustration-your-users.svg";

const Firstpg = () => {
  return (
      <div className="flex flex-col ">
          <div className="mt-12 flex justify-center text-black">
              <h1 className="font-extrabold text-2xl w-auto p-10">Build The Community Your Fans Will Love</h1></div>
      <div className=" flex justify-center mt-5">
          <div className="font-light text-sm border border-none w-2/5 h-auto pl-10">Huddle re-imagines the way we build communities. You have a voice, but so does 
  your audience. Create connections with your users as you engage in genuine discussion.</div>
          </div>
          <div className="  flex justify-center pl-70 mt-14">
           <p className=" border border-pink-500 bg-pink-500 text-back rounded-xl  w-40 p-2 flex justify-center ">Get Started For Free</p>
      </div>
      <div className="flex justify-center mt-14">
     <img className="w-2/5 " src={mainimg} alt="" />   
      </div>
      <div className="flex justify-around mt-10">
        <div className="border border-none">
          <img className="w-6 mb-4" src={email} alt="" />
          <span className="font-bold text-6xl">1.4k+</span>
          <p className="font-thin text-base flex justify-center mt-2"> Communities Formed</p>
        </div>
        <div className="border border-none">
          <img className="w-6 mb-4" src={message} alt="" />
          <span className="font-bold text-6xl ">2.7m+</span>
          <p className="font-thin text-base flex justify-center mt-2"> Messages Sent</p>
        </div>
      </div>
      <div className="">
        <img src={firstdis} alt="" />
        <div className="flex">
        <div className="bg-blue-50 p-10 flex justify-center flex-col ">
        <h2 className="text-2xl font-bold mb-5"> Grow Together </h2>
        <p className="font-light border border-none w-3/5">Generate meaningful discussions with your audience and build a strong, loyal community. 
  Think of the insightful conversations you miss out on with a feedback form.</p>
          </div>
          <img className="w-2/5 bg-blue-50" src={firstdimg} alt="" />
          </div>
          <img src={firstdiss} alt="" />
      </div>
        <div className="flex justify-center mt-9 p-5">
         <div className="">
          <img className="w-4/5" src={flowing} alt="" />
        </div>
        <div className="flex justify-center flex-col">
            <h2 className="text-2xl font-bold ">Flowing Conversations</h2>
           <p className="font-light border border-none w-4/5 mt-5">You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
            just-in-time loading for a more natural flow.</p>
        </div>
      </div>
      <div className="">
        <img src={firstdis2} alt="" />
        <div className="flex">
        <div className="bg-blue-50 p-10 flex justify-center flex-col ">
        <h2 className="text-2xl font-bold mb-5"> Your Users </h2>
        <p className="font-light border border-none w-3/5">It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
  once signed in to your app, your users can start chatting immediately.</p>
          </div>
          <img className="w-2/5 bg-blue-50" src={users} alt="" />
          </div>
          <img src={firstdiss2} alt="" />
      </div>
      <div className="flex flex-col ">
        <p className="flex justify-center font-bold text-2xl m-10"> Ready To Build Your Community?</p>
        <div className="flex justify-center">
        <button className=" text-white border bg-pink-600 w-48 rounded-xl"> Get Started For Free</button>
</div></div>
</div>
      
  )
}

export default Firstpg;
