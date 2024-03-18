const Banner = () => {
  return (
    <div>
      <div
        className="hero lg:h-[600px] lg:w-[1320px] w-[450px] bg-base-200 m-auto rounded-xl lg:mt-[50px] mt-[20px]"
        style={{
          backgroundImage: "url(https://r2.easyimg.io/9tuc299b2/banner.jpg)",
        }}
      >
        <div className="hero-content text-center">
          <div className="w-1/2 text-white ">
            <h1 className="lg:text-5xl text-xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="py-6 ">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex gap-[24px] justify-center">
              <button className="btn text-black bg-[#0BE58A] border-2 border-[#0BE58A] hover:bg-transparent hover:border-[#0BE58A] hover:text-[#0BE58A] rounded-full">
                Get Started
              </button>
              <button className="btn text-white bg-transparent border-2 border-white hover:bg-[#0BE58A] hover:border-[#0BE58A] hover:text-black rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
