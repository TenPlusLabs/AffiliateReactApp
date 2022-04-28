const Sale = () => {
  return (
    <>
      <section className="text-gray-400 bg-whitebody-font scroll-smooth">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg  lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow lg:pl-24 md:pl-16 md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">
              How It Works
            </h1>
            <p className="mb-8 leading-relaxed ">
              Our program offers the opportunity for you to earn commissions by
              referring students to Udacity Nanodegree programs. We’ll provide
              you with a full list of programs you can promote, exciting offers,
              and promotional assets. So help us spread the word about TenPlus
              and become an affiliate today!
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-lprimary border-0 py-2 px-6 focus:outline-none hover:bg-dprimary rounded text-lg">
                Start Promoting
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sale;
