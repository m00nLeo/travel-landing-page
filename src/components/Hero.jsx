import Navbar from "./Navbar";
import { BsArrowRight } from "react-icons/bs";

const HeroContentBox = ({ type, info, title, placeholder }) => {
  return (
    <div className="flex flex-col mb-8 px-5 md:mb-0 md:p-10">
      <label htmlFor={info} className="text-slate-400 text-sm">
        {title}
      </label>
      <input
        type={type}
        min="0"
        name={info}
        id={info}
        placeholder={placeholder}
        className="bg-inherit border-b outline-none border-black p-1 text-sm font-serif"
      />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative text-white bg-cover bg-no-repeat bg-bottom bg-[url(https://images.unsplash.com/photo-1597339801934-bfb6a88b0010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&w=1000&q=80)]">
      <div className="absolute opacity-25 inset-0 bg-slate-300/75 sm:bg-gradient-to-r sm:from-black/75 sm:to-black"></div>
      {/* Navbar */}
      <div className="mx-auto max-w-screen-xl relative flex gap-2 px-8 py-9">
        <Navbar />
      </div>

      {/* Hero */}
      <div className="relative mx-auto max-w-screen-xl px-4 md:px-0 py-48 ">
        {/* Title */}
        <div className="px-8 2xl:px-10 mb-32 font-extralight font-serif ">
          <h2 className="text-5xl mb-4">
            Strart your unforgettable journey with us.
          </h2>
          <p className="text-base">
            The best travel for your journey begins now
          </p>
        </div>

        {/* Contentbox */}
        <div className="bg-white md:w-5/6 flex flex-col md:flex-row md:justify-between 2xl:-translate-x-[12%] rounded-lg md:rounded-l-none md:rounded-r-xl text-black">
          <div className="flex-grow">
            <div className="grid pt-5 md:pt-0 md:grid-cols-2 lg:grid-cols-4">
              <HeroContentBox type="text" info="place" title="DESTINATION" />
              <HeroContentBox
                type="number"
                info="person"
                title="PERSON"
                placeholder="0"
              />
              <HeroContentBox type="date" info="checkin" title="CHECK IN" />
              <HeroContentBox type="date" info="checkout" title="CHECK OUT" />
            </div>
          </div>
          <a
            href="#"
            className="flex items-center px-4 py-8 gap-4 bg-orange-600/75 rounded-b-lg font-serif text-white text-2xl font-light md:rounded-bl-none md:rounded-r-xl"
          >
            Book <br className="hidden md:flex" /> Now{" "}
            <span>
              <BsArrowRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
