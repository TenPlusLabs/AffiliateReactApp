const Who = () => {
  return (
    <>
      <section className="text-gray-400 bg-whitebody-font scroll-smooth">
        <div className="container mx-auto px-5 py-24 md:flex-row  items-center">
          <div className="flex justify-center items-center w-full ">
            <div className="rounded-lg w-10 h-1 bg-lprimary"></div>
          </div>
          <div className="flex justify-center items-center w-full ">
            <h1 className=" text-primary font-bold text-xl">
              Who Can Register?
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10 px-10 justify-items-center ">
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-20 h-20 "
              src="images/image.png"
              alt="Not Me"
            />
            <h2 className=" text-lg font-bold text-primary my-3">Micro-influencer/Creator</h2>
            <p className=" text-lprimary text-md text-center">Your Identity yourself as a content creator who loves to give recomendations and reviews to your loyal folowers (maximum 5k)</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-20 h-20 "
              src="images/image.png"
              alt="Not Me"
            />
            <h2 className=" text-lg font-bold text-primary my-3">Mega-influencer/Creator</h2>
            <p className=" text-lprimary text-md text-center">Your Identity yourself as a content creator who loves to give recomendations and reviews to your loyal folowers (maximum 5k)</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="rounded-full w-20 h-20 "
              src="images/image.png"
              alt="Not Me"
            />
            <h2 className=" text-lg font-bold text-primary my-3">Affiliate</h2>
            <p className=" text-lprimary text-md text-center">Your Identity yourself as a content creator who loves to give recomendations and reviews to your loyal folowers (maximum 5k)</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Who;
