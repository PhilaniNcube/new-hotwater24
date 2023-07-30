import React, { useState } from 'react';

const Step7Modal = ({
  show,
  setShow,
  setOtherGasGeyser,
  page,
  setQuoteInfo,
  quoteInfo,
}) => {
  const [type, setType] = useState('');

  return (
    <div>
      <div
        className="py-12 bg-gray-700 bg-opacity-40 transition duration-150 ease-in-out z-10 absolute  right-0 bottom-[5%] left-0"
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div className="py-8 px-5 md:px-32 bg-white shadow-md rounded border border-gray-400">
            <div className="w-full flex justify-center text-gray-600 mb-4"></div>
            <h1 className="text-center text-gray-800 font-lg font-bold tracking-normal leading-tight mb-5">
              Specify the other type of geyser you use
            </h1>
            <input
              type="text"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mb-5 text-gray-600 focus:outline-none focus:border focus:border-sky-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="What do or will you use gas for"
            />
            <div className="flex items-center justify-center w-full">
              <button
                onClick={() => {
                  setOtherGasGeyser(type);
                  setShow(false);
                }}
                className="focus:outline-none transition duration-150 ease-in-out hover:bg-sky-600 bg-sky-700 rounded text-white px-8 py-2 text-sm"
              >
                Save
              </button>
              <button
                className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onClick={() => {
                  setOtherGasGeyser(null);
                  setShow(false);
                }}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step7Modal;
