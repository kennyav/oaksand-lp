// components
import { AppLogo } from "./Components/Icons";
const sizing = 'lg:pt-[20px] pt-[10px] lg:px-[74px] px-[15px]'
const emailAddress = 'drcowan@oakpsychologicalservices.com';
const subject = 'Request for purchase of Beta Application';
const body = 'This is a request to purchase your Oak SandPortal beta application.';

const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;



function App() {
  const imageUrl = 'sand.png'
  return (
    <div className={`flex flex-col sm:flex-row bg-cover bg-no-repeat bg-center h-screen font-Epilogue`} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="md:w-1/2 h-screen lg:pt-[88px] md:pt-[66px] pt-[22px]">
        <div className={`${sizing}`}>
          <AppLogo />
        </div>
        <div className={`${sizing}`}>
          <h1 className="lg:text-[60px] md:text-[30px] text-[40px]">Get more out of therapy with <span className="font-bold">Oak SandPortal</span></h1>
        </div>
        <div className={`${sizing}`}>
          <h1 className="lg:text-[30px] md:text-[20px] text-[20px]">Our app is user friendly, convenient and directs you to resources that are needed</h1>
        </div>
        <div className={`${sizing}`}>
          <h1 className="lg:text-[30px] md:text-[20px] text-[20px]">Beta test coming soon on these two platforms below!</h1>
        </div>
        <div className={`flex ${sizing}`}>
          <div>
            <img src="apple.svg" alt="apple download" className="object-fit" />
          </div>
          <div>
            <img src="google.svg" alt="google download" className="object-fit" />
          </div>
        </div>
        <div className={`flex flex-col justify-center ${sizing} p-1`}>
          <h1 className="lg:text-[30px] md:text-[20px] text-[20px]">To purchase download please email the developer!</h1>
          <a href={mailtoLink}>
            <button className="hover:shadow-lg shadow-sm rounded-lg bg-[#FFFFFE] p-3">Email</button>
          </a>
        </div>
      </div>
      <div className="w-1/2 h-screen hidden sm:flex z-10">
        <img src="phone.png" alt="mobile app" className="object-cover" />
      </div>
    </div >
  );
}

export default App;
