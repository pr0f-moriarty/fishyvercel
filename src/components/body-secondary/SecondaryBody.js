import "./SecondaryBody.css";
import BackgroundShape from "../../assets/BackgroundShape.svg";

export function SecondaryBody() {
  return (
    <>
      <div className="relative">
        <img src={BackgroundShape} alt="BackgroundImage" className="mt-1 w-full max-sm:h-72 sm:max-lg:h-80 lg:h-96" />
        <p className="text-white font-semibold text-roboto text-center absolute max-sm:top-12 top-16 lg:top-24 text-2xl
        min-[350px]:left-[27%] min-[400px]:left-[33%] min-[520px]:left-[38%] md:left-[40%] lg:left-[42%]
        min-[350px]:text-xl lg:text-3xl">
          
        </p>
        <p className="absolute text-roboto text-white font-light text-center
         max-sm:text-xs sm:text-sm md:text-base lg:text-lg max-sm:top-20 top-24 lg:top-36 max-md:mx-7 md:mx-14 lg:mx-20">
          This project scans the input URL and runs it through a few machine learning algorithms to scan it and separate legitimate URLs from fake URLs. 
          The input URL after being scanned is given a probability score (in the form of %). This probability score has a threshold of 70%. 
          If the score is above 70%, then the URL is highly likely to lead to a phishing attempt. Whereas if the score is under 70%, the URL is more inclined to be safe.
          
          <br/> <br/>
         <span className="font-bold sm:text-sm underline text-red-400 hover:text-white mb-5"> 
         <a href="https://github.com/pr0f-moriarty/fishy" target="_blank" rel="noreferrer">
         LEARN MORE </a> </span>
        </p>
      </div>
    </>
  );
}
