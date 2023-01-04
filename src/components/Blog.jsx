const Blog = () => {
  return (
    <div className="my-20 mx-auto max-w-screen-xl">
      <div className="mb-10">
        <h1 className="font-serif text-[#172432] mb-6 text-5xl font-extralight">
          Our Blog
        </h1>
        <hr className="mb-9 w-[288px] border-[2px] h-1 border-[#FF7757] border-solid "></hr>
        <p className="text-lg font-normal leading-[21px] text-[#767E86]">
          An insight the incredible experience in the world
        </p>
      </div>
      <div className="md:flex mt-20 md:justify-center gap-8">
        <div className="md:w-full ">
          <img
            className="w-full h-[380px] rounded-2xl md:w-full md:h-[600px] "
            src="https://s3-alpha-sig.figma.com/img/d8c0/9581/0adccc54c1cae01de3a13bf58abe510e?Expires=1673827200&Signature=jNoQglRf8c6kRrpFxdGWmKW2CERjM~uWosGwStqbcIqA5dvnukCsyf1~pHGyczUh-zbx5-4Ebi0y0~gSQQxavI9iz-kQNOBqhvph6DGBLAiF4qJc9SmERlrRS4xR-zDCIjM3ICa0WUtPdxY74KSM4MbiJ6FNAAopfw9Bv7KIETHoxq-4Tx1KpedDX0Ghk1cihhVT84vlFGuFePUVbMrrzNj9-XcWLMvRw1iMXwTwj750hh6P0fsUq4vZYWXMls819FClU4hiChq5jMto7nECxqOSsrsFknwExbwKLv~f-viK92sTweRS5YMNUBfFOyl8BEzXoWPA1pz05rYqu-msgg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="Berlin"
          />
        </div>
        <div className="w-full">
          <h2 className="text-5xl font-light tracking-wider font-serif leading-10">
            Beautiful Italy
          </h2>
          <h2 className="text-5xl font-light tracking-wider font-serif leading-10 mt-6">
            Let’s travel
          </h2>
          <p className="text-md mt-10 tracking-wider leading-10">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system and expound the actual teachings of the great
            explorer of the truth, the master- builder of human happiness. No
            one rejects, dislike, or avoids plasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremly painful. Nor
            again is there anyone who loves or pursues.
          </p>
          <div className="flex text-orange-500 gap-3 mt-8">
            <span className="text-lg">Read More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
