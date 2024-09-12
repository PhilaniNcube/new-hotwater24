"use client"
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import React, { Fragment, useState } from 'react';
import Step2Modal from './Modals/Step2Modal';
import { LeadStageProps } from '../NewLead';

const PropertyType = ({ quoteInfo, nextPage, prevPage, page, setQuoteInfo }:LeadStageProps) => {
  console.log('Step', page, quoteInfo);

  const [other, setOther] = useState(false);

  const [show, setShow] = useState(false);

  const homeType = (type:string) => {
    setQuoteInfo({ ...quoteInfo, houseType: type });
    setOther(false);
  };

  return (
    <motion.div
          transition={{ duration: 0.3}}
        key="property"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
          className="max-w-6xl mx-auto my-16 relative">
      <h1 className="mt-8 font-sans text-center font-bold text-2xl">
        Type of property
      </h1>

      {show && (
        <Step2Modal
          show={show}
          setShow={setShow}
          setOther={setOther}
          homeType={homeType}
          page={page}
          setQuoteInfo={setQuoteInfo}
          quoteInfo={quoteInfo}
        />
      )}

      <p className="py-3 px-8 text-center">
        Please tell us which of the below properties best describes the type of
        house you live in
      </p>
      <div className="py-8 max-w-6xl mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-y-8">
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg justify-self-center bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeType('apartment')}
        >
          {quoteInfo.houseType === 'apartment' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <img
            className="h-16 w-16"
            alt=""
            src="/images/icons/appartment.svg"
          />
          <p className="text-lg text-center text-sky-500 font-bold">
            Apartment
          </p>
        </div>
        <div
          className="relative h-[200px] w-[250px] justify-self-center rounded shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeType('semi-detached')}
        >
          {quoteInfo.houseType === 'semi-detached' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <img
            className="h-16 w-16"
            alt=""
            src="/images/icons/semidetatched.svg"
          />
          <p className="text-lg text-center text-sky-500 font-bold">
            Semi-detached
          </p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded justify-self-center shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeType('free-standing')}
        >
          {quoteInfo.houseType === 'free-standing' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <img className="h-16 w-16" alt="" src="/images/icons/home.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">
            Free-standing
          </p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded shadow-lg justify-self-center bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeType('cornerhouse')}
        >
          {quoteInfo.houseType === 'cornerhouse' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <img className="h-16 w-16" alt="" src="/images/icons/farm.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">
            Cornerhouse
          </p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded justify-self-center shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeType('two-in-one')}
        >
          {quoteInfo.houseType === 'two-in-one' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <img className="h-16 w-16" alt="" src="/images/icons/2in1.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">
            Two In One
          </p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded justify-self-center shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeType('villa')}
        >
          {quoteInfo.houseType === 'villa' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <img className="h-16 w-16" alt="" src="/images/icons/villa.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">Villa</p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded justify-self-center shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => homeType('farm')}
        >
          {quoteInfo.houseType === 'farm' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <img className="h-16 w-16" alt="" src="/images/icons/farm1.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">Farm</p>
        </div>
        <div
          className="relative h-[200px] w-[250px] rounded justify-self-center shadow-lg bg-gray-100 flex flex-col items-center justify-center hover:shadow-md cursor-pointer"
          onClick={() => setShow(true)}
        >
          {other && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 absolute top-2 right-2 text-sky-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <img className="h-16 w-16" alt="" src="/images/icons/dots.svg" />
          <p className="text-lg text-center text-sky-500 font-bold">Other</p>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-6 my-3">
        {quoteInfo.houseType !== '' ? (
          <Fragment>
            {' '}
            <svg
              onClick={prevPage}
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 bg-red-500 text-white rounded-full shadow-red-500 shadow-lg hover:shadow-md hover:bg-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <button
              onClick={nextPage}
              className="bg-sky-500 hover:bg-sky-600 text-center text-white text-2xl font-medium rounded-full py-4 px-8 shadow-sky-400 shadow-md hover:shadow"
            >
              Continue
            </button>
          </Fragment>
        ) : (
          <Fragment>
            <svg
              onClick={prevPage}
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 bg-red-500 text-white rounded-full shadow-red-500 shadow-lg hover:shadow-md hover:bg-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <p className="text-md text-sky-600 font-bold text-center">
              Please answer the question
            </p>
          </Fragment>
        )}
      </div>
    </motion.div>
  );
};

export default PropertyType;
