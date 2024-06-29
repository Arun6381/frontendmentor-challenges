import message from "./../assets/icon-messages.svg";

// import "./header.css";

const Hearder = () => {
  return (
    <div className="flex justify-between p-3">
      <div className="flex pl-5">
        <img className="w-5" src={message} alt="" />
       <span className="font-bold">Hubble</span>
      </div>
      <div className="border pr-10 border-pink-600 rounded-lg text-pink-600 font-semibold  w-30 flex justify-center">
        <button className=" pl-8">Try it free</button>
        
      </div>
    </div>
  )
}

export default Hearder;
