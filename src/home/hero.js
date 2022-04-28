const Hero = () => {
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
              Your Business <strong>Starts</strong> and Scales{" "}
              <strong>here</strong>
            </h1>
            <p className="mb-8 leading-relaxed ">
              TenPlus is a hub for the world’s best marketers and most
              innovative product owners to build businesses that matter. Our
              marketplace empowers entrepreneurs and brands to grow online
              through global reach, powerful tools, and support you can trust.
            </p>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h4 className=" text-primary font-bold mb-4">Sale</h4>
            </div>
            <p className="mb-4">
              Whether you are a super affiliate or just beginning your marketing
              career, there’s never a bad time to get started with ClickBank.
              The world’s leading performance marketers have been promoting
              ClickBank products for over 20 years with more than $4 billion in
              commissions earned.
            </p>
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h4 className=" text-primary font-bold mb-4">Promote</h4>
            </div>
            <p>
              Whether you are a super affiliate or just beginning your marketing
              career, there’s never a bad time to get started with ClickBank.
              The world’s leading performance marketers have been promoting
              ClickBank products for over 20 years with more than $4 billion in
              commissions earned.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
