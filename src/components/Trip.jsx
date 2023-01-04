const dataList = [
  {
    place: "Rome City Tour",
    price: 99,
    imageUrl:
      "data:image/jpeg;base64,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",
  },
  {
    place: "Paris City Tour",
    price: 95,
    imageUrl:
      "https://i0.wp.com/www.vagabondjourney.com/travelogue/wp-content/uploads/cyril-mazarin-WSvth_lwCi0-unsplash.jpg?ssl=1",
  },
  {
    place: "Barcelona City Tour",
    price: 89,
    imageUrl:
      "https://globaleurope.eu/wp-content/uploads/sites/24/2020/11/florian-wehde-WBGjg0DsO_g-unsplash1.jpg",
  },
];

const StarIcon = () => {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z"
          fill="#FFC107"
        />
      </svg>
    </div>
  );
};

const Tour = ({ place, price, imageUrl }) => {
  return (
    <>
      <div className="mb-10 group lg:hover:-translate-y-12 lg:hover:overflow-visible">
        <img
          src={imageUrl}
          alt={place}
          className="w-full md:w-screen sm:w-[288px] h-[320px] md:h-[350px] lg:h-[399px] rounded-3xl my-12 object-cover"
        />
        <div className="lg:hidden lg:group-hover:block">
          <div className="font-sans flex justify-between mb-3">
            <p className=" uppercase">Guided Tour</p>
            <p>€{price}/Day</p>
          </div>
          <h5 className="font-serif text-3xl tracking-tight font-medium mb-3">
            {place}
          </h5>
          <div className="flex justify-between pb-6">
            <div className="flex gap-1">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
            <p>7 Days tour</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Trip = () => {
  return (
    <div className="my-8">
      {/* Container */}
      <div className=" max-w-screen-xl mx-auto px-4 py-8 mt-4">
        {/* Layout */}
        <div className="flex justify-between">
          {/* Content */}
          <div className="grid lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8">
            {/* Intro-part */}
            <div className="lg:col-span-2 xl:grid-cols-2 md:right-0 md:pr[50%] py-8">
              {/* Title */}
              <h3 className="font-body font-thin text-5xl mb-4  ">
                Trip Planners
              </h3>

              <hr className=" w-3/5 h-1 my-4 bg-orange-500 border-0 rounded md:my-10  " />
              <p className="py-6 text-gray-500 text-lg text-justify lg:pr-6">
                20 years from now you will be more disappointed by the things
                that you didn’t do. Stop regretting and start travelling, start
                throwing off the bowlines.
              </p>
              <div className="flex mx-4 my-4">
                {/* Button */}
                <div className="flex relative">
                  <div className="flex absolute bg-black w-10 aspect-square -translate-x-4"></div>
                  <button className="flex relative text-zinc-50 rounded-2xl bg-orange-500 tracking-wide border-none font-light text-lg px-6 py-4 my-3">
                    View all trip plans
                  </button>
                  <div className="flex -z-10 absolute bottom-0 -right-0 bg-gray-500 w-10 aspect-square translate-x-4 translate-y-1"></div>
                </div>
              </div>
            </div>

            <div className="lg:flex gap-3 lg:col-span-4 overflow-x-hidden my-4">
              {/* List of Tour */}
              {dataList.map((tour, id) => {
                return (
                  <Tour
                    key={id}
                    place={tour.place}
                    price={tour.price}
                    imageUrl={tour.imageUrl}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trip;
