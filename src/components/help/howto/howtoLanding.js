import Header from "../../partials/header";
import Nav from "../../partials/nav";

import Footer from "../../partials/footer";
import { useState } from "react";
import HowToArticles from "./howtoarticles";
import HowToVideos from "./howtovideos";
import HowToEbooks from "./howtoebooks";
import HowToTools from "./howtotools";
import HowToWebcast from "./howtowebcast";
const HowToVids = () => {
  const [Modal, setModal] = useState(true);
  const [videoModal, setvideoModal] = useState(!true);
  const [toolsModal, settoolsModal] = useState(!true);
  const [ebooksModal, setebooksModal] = useState(!true);
  const [webcastModal, setwebcastModal] = useState(!true);

  const resetVideo = () => {
    setModal(false);
    setvideoModal(true);
    settoolsModal(false);
    setebooksModal(false);
    setwebcastModal(false)
  };
  const resetArticle = () => {
    setModal(true);
    setvideoModal(false);
    settoolsModal(false);
    setebooksModal(false);
    setwebcastModal(false)
  };
  const resetTools = () => {
    setModal(false);
    setvideoModal(false);
    settoolsModal(true);
    setebooksModal(false);
    setwebcastModal(false)
  };
  const resetEbook = () => {
    setModal(false);
    setvideoModal(false);
    settoolsModal(false);
    setebooksModal(true);
    setwebcastModal(false)
  };
  const resetwebcast = () => {
    setModal(false);
    setvideoModal(false);
    settoolsModal(false);
    setebooksModal(false);
    setwebcastModal(true)
  };
  return (
    <>
      <Header />
      <Nav />

      <div
        className=" flex h-52 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url("images/image.png")`,
        }}
      >
        <div className=" text-4xl text-white md:my-16 mx-16 ">Resorces</div>
      </div>
      <div className=" my-10 lg:mx-40 flex flex-col ">
        <div className=" flex flex-col px-3 lg:flex-row md:items-center justify-between border-b-2 border-lprimary">
          <div className="flex flex-row space-x-2">
            <div
              className="flex flex-col items-center cursor-pointer  uppercase"
              onClick={() => resetArticle()}
            >
              <svg className=" h-10 w-10 text-ntext" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M15 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V9L15 3M19 19H5V5H14V10H19M17 14H7V12H17M14 17H7V15H14"
                />
              </svg>
              <div className="my-2 text-lprimary text-base">Articles</div>
            </div>
            <div className="flex flex-col items-center  uppercase" onClick={() => resetTools()}>
              <svg className=" h-10 w-10 text-ntext" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M20,18V14H17V15H15V14H9V15H7V14H4V18H20M6.33,8L4.59,12H7V11H9V12H15V11H17V12H19.41L17.67,8H6.33M9,5V6H15V5H9M21.84,12.61C21.94,12.83 22,13.09 22,13.41V18C22,18.53 21.79,19 21.4,19.41C21,19.81 20.55,20 20,20H4C3.45,20 3,19.81 2.6,19.41C2.21,19 2,18.53 2,18V13.41C2,13.09 2.06,12.83 2.16,12.61L4.5,7.22C4.84,6.41 5.45,6 6.33,6H7V5C7,4.45 7.18,4 7.57,3.59C7.96,3.2 8.44,3 9,3H15C15.56,3 16.04,3.2 16.43,3.59C16.82,4 17,4.45 17,5V6H17.67C18.55,6 19.16,6.41 19.5,7.22L21.84,12.61Z"
                />
              </svg>
              <div className="my-2 text-lprimary text-base">Tools</div>
            </div>
            <div className="flex flex-col items-center  uppercase" onClick={() => resetEbook()}>
              <svg className=" h-10 w-10 text-ntext" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 1L14 6V17L19 12.5V1M21 5V18.5C19.9 18.15 18.7 18 17.5 18C15.8 18 13.35 18.65 12 19.5V6C10.55 4.9 8.45 4.5 6.5 4.5C4.55 4.5 2.45 4.9 1 6V20.65C1 20.9 1.25 21.15 1.5 21.15C1.6 21.15 1.65 21.1 1.75 21.1C3.1 20.45 5.05 20 6.5 20C8.45 20 10.55 20.4 12 21.5C13.35 20.65 15.8 20 17.5 20C19.15 20 20.85 20.3 22.25 21.05C22.35 21.1 22.4 21.1 22.5 21.1C22.75 21.1 23 20.85 23 20.6V6C22.4 5.55 21.75 5.25 21 5M10 18.41C8.75 18.09 7.5 18 6.5 18C5.44 18 4.18 18.19 3 18.5V7.13C3.91 6.73 5.14 6.5 6.5 6.5C7.86 6.5 9.09 6.73 10 7.13V18.41Z"
                />
              </svg>
              <div className="my-2 text-lprimary text-base">E-Books</div>
            </div>
            <div
              className="flex flex-col items-center  uppercase"
              onClick={() => resetVideo()}
            >
              <svg className=" h-10 w-10 text-ntext" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10,8V16L15,12L10,8Z"
                />
              </svg>
              <div className="my-2 text-lprimary text-base">Videos</div>
            </div>
            <div className="flex flex-col items-center uppercase" onClick={() => resetwebcast()}>
              <svg className=" h-10 w-10 text-ntext" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                />
              </svg>
              <div className="my-2 text-lprimary text-base">WebCasts</div>
            </div>
          </div>

          <div className="flex flex-row space-x-2 items-center ">
            <div className=" flex flex-col  items-end justify-end py-2">
              <label className=" text-lprimary"> Look In:</label>
              <select
                name=""
                id=""
                className=" text-ntext rounded-lg py-1 px-2 bg-transparent border border-primary  "
              >
                <option value="name" className=" ">
                  How to
                </option>
                <option value="name">E-commerce</option>
                <option value="name">Payments</option>
                <option value="name">Enterprises</option>
              </select>
              <div className=" opacity-0 ">Reset:</div>
            </div>
            <div className=" flex flex-col  items-end justify-end  py-2">
              <label className=" text-lprimary"> Search:</label>
              <input
                type="text"
                placeholder=" Search"
                className=" text-ntext rounded-lg py-1 px-2 bg-transparent border border-primary  "
              />
              <div className="text-lprimary">Reset:</div>
            </div>
          </div>
        </div>

        {Modal ? <HowToArticles /> : null}
        {videoModal ? <HowToVideos /> : null}
        {ebooksModal ? (<HowToEbooks/>) : null}
        {toolsModal ? (<HowToTools/>) : null}
        {webcastModal ? (<HowToWebcast/>) : null}
      </div>

      <Footer />
    </>
  );
};

export default HowToVids;
