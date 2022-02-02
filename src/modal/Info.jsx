import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Info(props) {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div ref={props.refisi}>
      <div
        data-cy="modal-add"
        variant="primary"
        className=" bg-black bg-opacity-50 z-20 modal absolute inset-0 flex justify-center items-center overflow-y-hidden"
      >
        <div className="overlay flex sm:w-auto w-full flex-col items-center justify-center">
          <div
            data-aos={"zoom-in"}
            className="bg-white rounded-xl flex gap-5 w-[500px] py-4 px-6"
          >
            <svg
              data-cy="modal-information-icon"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-450"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 data-cy="modal-information-title">berhasil login</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
