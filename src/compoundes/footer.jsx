import footer from './../assets/bg-footer-top-desktop.svg';
import message from "./../assets/icon-messages.svg";
import phone from "./../assets/icon-phone.svg";
import mail from "./../assets/icon-email.svg";
const Footer = () => {
  return (
    <div className="text-white mt-20">
          <img src={footer} alt="" />
          <div className="bg-black w-full h-full flex p-10 justify-between">
              <div className="flex pl-5 flex-col">
                  <div className="flex pl-5">
                   <img className="w-5" src={message} alt="" />
                  <span className="font-bold text-xl">Hubble</span>
                  </div>
                  <div className="font-light text-sm w-50">
                      <div className="w-3/5">
                   <p className="mt-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
                    vestibulum a, ultrices quis sem.</p></div>
                       <div className="flex flex-col">
                          <div className="flex">
                              <img className="w-4 h-4 m-4 " src={phone} alt="" />
                              <span className="m-4">+1-543-123-4567</span></div>
                          <div className="flex">
                              <img className="w-4 h-4 m-4 " src={mail} alt="" />
                              <span className="m-4">example@huddle.com</span></div>
                          </div>
                  </div>
                </div>
              <div className="pl-20 flex flex-col">
                 <h2 className="font-simebold  text-2xl"> Newsletter</h2>
               <p className="text-sm w-3/5">To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never 
                      send you spam or pass on your email address</p>
                  <div className=" flex justify-evenly mt-10">
                   <input type="text" className="w-2/5 h-8 text-black" />
                      <button className="bg-pink-700 w-2/5 rounded-lg">Subscribe</button> 
                      </div>
              </div>
          </div>
    </div>
  )
}

export default Footer;
