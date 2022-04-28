const Become = () => {
  return (
    <section className="text-gray-400 bg-whitebody-font scroll-smooth">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-primary">
          Become an Affiliate
          </h1>
          <p className="mb-8 leading-relaxed">
          Nearly one hundred thousand affiliates power ClickBank’s 
                        vast marketplace to promote top-performing, compliant products  
                        and to get paid on time, every time.
          </p>
          <div className="flex justify-center">
          <button className="inline-flex text-white bg-lprimary border-0 py-2 px-6 focus:outline-none hover:bg-dprimary rounded text-lg">
              Start Promoting
              </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default Become;
