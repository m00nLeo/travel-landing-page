import React from "react";

const Popular = () => {
  return (
    <div className="my-20 mx-auto max-w-screen-xl">
      <div className="mb-10">
        <h1 className="font-serif text-[#172432] mb-6 text-5xl font-extralight">
          Popular Destinations
        </h1>
        <hr className="mb-6 w-[288px] border-[2px] border-[#FF7757] border-solid  "></hr>
        <div className=" md:flex md:justify-between">
          <p className="font-normal leading-[21px] text-[#767E86] tracking-wide text-2xl">
            Most popular destinations around the world, from historical places
            to natural wonders.
          </p>

          <div className="text-white hidden gap-2 md:flex md:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 bg-gray-800 rounded-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" bg-orange-500 w-8 h-8 rounded-md"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className=" mt-20 mx-auto md:flex gap-4 md:justify-between">
        <div className="relative ">
          <img
            className="w-[400px] h-[450px] rounded-2xl items-center "
            src="https://s3-alpha-sig.figma.com/img/4459/b16d/92fe37f01fbd24ba59e39ee98303f766?Expires=1673827200&Signature=EfVaFYBCeUKt4zrkHAN6KDWdrtS055xLFjFyjA~b-XyqlFt9~60BKNuub5tRfWy2XbOCwWWIRpMyuA1~~aFJyp0hs4JOfX1srd6N9pd3OJK~sQGPAwTUH2g6xRcCrrSDOVsw-0nE6PzbKO0ZlJlZie4fyUWkYLPusbyPh7pe8AF1NX-oTTNKbrcnEjd44WiYdgFvwCYxIRB91OfaN1ZDjZw4nm2-~gRxag~PNZwx1jv033Towka05gPk4NKteraMZ5hNXuzN2OJWfw~v2nxYW9ELan9hJm72QXaAfYnFvURgj8YMQ-48Ryh0vn~mu1e10xJKmMZrlZMR-xYUpeZMYA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Berlin"
          />
          <div className="absolute bottom-7 left-4">
            <p className="text-white text-2xl mb-2">Monument of Berlin</p>
            <p className="flex text-white text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white pr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              Berlin, Germany
            </p>
          </div>
        </div>
        <div className="relative hidden md:flex">
          <img
            className="w-[400px] h-[450px] rounded-2xl items-center "
            src="https://s3-alpha-sig.figma.com/img/8b6c/a606/57afa880580875c7a29e7ffc92950e01?Expires=1673827200&Signature=d4jEt20aO778tkXJhuVGUDucEeG6njEFdJl-H7~cMXhBYmAn0-PPHIxOsgDR6bj52ijLqflyH8cSYCZfzNVMs--tb8t98CGwCyDsqasV0lZ86NT7oyMbpVai57HpwLMRuJicaox9AY~NsHNkP55eKhoN4pZDFOLwsZImZGGRiCLTekNxDhzznvJGcCZbLEwguMaTJL2cqXXwiQ3q3rJvneSDIy94Ev2cyDG2aEIz3m4mbi5rqqi8buL5slkjDjSx1fEiuDVW-nVxjElbU3u6htwFXEpBtqkRvZgLFUzzcR4ZEseGpTeVso6GVtcASRbQce5JirAoDL0uDRbjIEnt2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="London"
          />
          <div className="absolute bottom-7 left-4">
            <p className="text-white text-2xl mb-2">Millennium Bridge</p>
            <p className="flex text-white text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white pr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              London, United Kingdom
            </p>
          </div>
        </div>
        <div className="relative hidden md:flex">
          <img
            className="w-[400px] h-[450px] rounded-2xl items-center sm:hidden md:flex"
            src="https://s3-alpha-sig.figma.com/img/1536/85d6/d4f6820b1e9764100a62337277117114?Expires=1673827200&Signature=OJcWWFCbQxxq9MmVvgMXrf3LXxPGn35dYNeQnOTHDHuC1m~xbps9XAd0oFm2GsK8LYuer851Xvedoe0X3IhcDy1hsYf8XgFkmjWAQttO8c8EYlho3lHE3I2KBlZyU7W3Qv-WBdB9oEVB1-8kKoBX0OH3XizBDxQpo6l5htqKKqnr8RqSFWmPhdHs5GyxM09JBNS~TxKU4dB~8iTYuqjp9~hiMFNRU0iQZx~DGLYG~34rg-2YyQ1cSI9v8WcNmkLs~lOJsNeq8QJirEEVc~6KctIYST64pYJUD2FjdPZuanuzhbRrvddmQsgZ4YFftQIStdeUn3OToCV0Rlf70GQ7-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Italy"
          />
          <div className="absolute bottom-7 left-4">
            <p className="text-white text-2xl mb-2">Rialto Bridge</p>
            <p className="flex text-white text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white pr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              Venice, Italy
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-white m-4 gap-8 justify-center mt-20 md:hidden ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-20 h-16 bg-gray-800 rounded-xl"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" bg-orange-500 w-20 h-16 rounded-xl"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Popular;

