const dataList = [
  {
    place: "Rome City Tour",
    price: 99,
    imageUrl:
      "https://s3-alpha-sig.figma.com/img/a717/2218/bc22d25a76c2b164435990719fae6573?Expires=1673827200&Signature=IH5mRQ-Y9obmeJLR-igZK6pB~NBC4a2SKpkZ1XUVzdli3DSNWzgXMgktwW8-EAB0p8LcDi4U1q3~tXugYlRGSoJWJVQQ2hd4YXj6XtZDSgOOxD4ZF1OH~oltPY1sRHjvknslUlkR17ar5Tc6vOGLqQgqRrApUmnWHMEUuiIoC36jCczyByJkVO2cs8lKxESJTyhtpVchMPhFYs2h7TTs4lkiBoYQbXonRcdYZq16abNv6NRljTtFkbkWYdsq7ghdjRZteMfFflVTG-FlV111DrpM2gnoab9BYOMNu3OlmNwBgSgytdcRiIRqeTI6M~8DmK6BDvaYWw-tAuDSjQ-rYQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
      <div className="mb-10 group">
        <img
          src={imageUrl}
          alt={place}
          className="w-full md:w-screen sm:w-[288px] h-[320px] md:h-[350px] rounded-3xl mb-4 object-cover"
        />
        <div className="lg:hidden lg:group-hover:block ">
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
          <div className="grid lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {/* Intro-part */}
            <div className="lg:col-span-2 xl:grid-cols-2 md:right-0 md:pr[50%]">
              {/* Title */}
              <h3 className="font-body font-thin text-5xl mb-4  ">
                Trip Planners
              </h3>

              <hr className=" w-3/5 h-1 my-4 bg-orange-500 border-0 rounded md:my-10  " />
              <p className="py-6 text-gray-500 text-lg text-justify">
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
