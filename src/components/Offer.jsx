import React from "react";
import StarIcon from "../../public/StarIcon";

const listOfReview = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1605641532626-5ab1dab56350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cm9vZnRvb3B8ZW58MHx8MHx8&w=1000&q=80",
    place: "Lisbon, Portugal",
    description:
      "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: 500,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1531816458010-fb7685eecbcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpbGxhcnN8ZW58MHx8MHx8&w=1000&q=80",
    place: "Athens, Greece",
    description:
      "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: 800,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80",
    place: "Rome, Italy",
    description:
      "5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.",
    price: 750,
  },
];

const Review = ({ description, place, imageUrl, price }) => {
  return (
    <div>
      {/* Content */}

      <div className="py-4">
        {/* Image */}
        <img
          src={imageUrl}
          alt={place}
          className="rounded-t-3xl h-[286px] w-full"
        />
        <div>
          <div className="rounded-b-3xl px-4 py-4 bg-[#FFF8F1] ">
            {/* Location */}
            <h4 className="tracking-wide font-sans text-gray-500 sm:text-2xl text-3xl font-light">
              {place}
            </h4>

            {/* Rating */}
            <div className="flex gap-1 py-4 sm:py-3">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>

            {/* Review */}
            <p className="py-3 sm:py-2 sm:text-base text-lg text-gray-500 text-justify">
              {description}
            </p>

            {/* Price */}
            <div className="sm:py-3 py-4 flex items-center">
              <p className=" text-xl text-gray-600">From</p>
              <p className="pl-3 text-3xl text-orange-500 ">€{price}</p>
            </div>

            {/* Button */}
            <button className="text-zinc-50 rounded-3xl bg-orange-500 tracking-wide border-none font-medium uppercase text-lg px-6 py-4 my-3">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Offer = () => {
  return (
    <div className="my-6">
      {/* Container */}
      <div className=" max-w-screen-xl mx-auto px-4">
        {/* Layout */}
        <div>
          <div>
            <div className="flex sm:flex-row-reverse justify-between items-end">
              {/* Title */}
              <div className="sm:text-right">
                <h3 className=" font-body font-thin text-6xl mb-4">
                  Special Offer
                </h3>
                <hr className=" w-4/5 h-1 my-4 bg-orange-500 border-0 rounded md:my-10  " />

                <p className="py-6 text-gray-500">
                  Check out our special offer and discounts{" "}
                </p>
              </div>

              {/* Slider Button */}
              <div className="hidden md:flex sm:justify-center gap-8 my-6">
                <button className="aspect-square rounded-2xl bg-black tracking-wide border-none font-medium uppercase text-lg px-6 my-3">
                  <svg
                    width="12"
                    height="22"
                    viewBox="0 0 12 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 1.00012L1 11.0001L11 21.0001"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="aspect-square rounded-2xl bg-orange-500 tracking-wide border-none font-medium uppercase text-lg px-6 my-3">
                  <svg
                    width="12"
                    height="22"
                    viewBox="0 0 12 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 21.0001L11 11.0001L0.999999 1.00012"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Description */}
          <div className="grid lg:grid-cols-3 lg:gap-6">
            {listOfReview.map((review, id) => {
              return (
                <Review
                  key={review.id}
                  imageUrl={review.imageUrl}
                  place={review.place}
                  price={review.price}
                  description={review.description}
                />
              );
            })}
          </div>

          <div>
            {/* Slider */}
            <div className="flex md:hidden justify-center gap-8 my-6">
              <button className="aspect-square rounded-2xl bg-black tracking-wide border-none font-medium uppercase text-lg px-6 my-3">
                <svg
                  width="12"
                  height="22"
                  viewBox="0 0 12 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 1.00012L1 11.0001L11 21.0001"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button className="aspect-square rounded-2xl bg-orange-500 tracking-wide border-none font-medium uppercase text-lg px-6 my-3">
                <svg
                  width="12"
                  height="22"
                  viewBox="0 0 12 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 21.0001L11 11.0001L0.999999 1.00012"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;

