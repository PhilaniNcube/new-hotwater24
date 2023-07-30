"use client"
import {motion, useMotionTemplate, useMotionValue, useTransform} from 'framer-motion'
import { useEffect, useRef, useState } from 'react';
import formatter from '../../lib/format';
import roundUp from '../../lib/roundUp';

function clamp(number, min, max) {
  return Math.max(min, Math.min( number, max));
}

const Slider = ({ quoteInfo, setQuoteInfo}) => {
  let min = 0
  let max = 12000
  const [value, setValue] = useState(500)
  let constraintsRef = useRef()
  let handleRef = useRef()
  let progressBarRef = useRef()
  let handleX = useMotionValue(0)
  let handleSize = 24
  let progress = useTransform(handleX, v => v + handleSize/2)
  let background = useMotionTemplate`linear-gradient(90deg, #374151 ${progress}px, #d1d5db 0)`

  let monthlySavings = value * .2
  let yearlySavings = monthlySavings *12

  useEffect(() => {
    let newProgress = value /(max-min)
    let progressBarBounds = progressBarRef.current.getBoundingClientRect()
    handleX.set(newProgress * progressBarBounds.width)

    setQuoteInfo({
      ...quoteInfo,
      monthlySavings: roundUp(value * 0.2),
      yearlySavings: roundUp((value * 0.2)*12),
    })

  },[handleX, max, min, value, setQuoteInfo])

  const handleDrag = () => {
    // calculate savings
      let handleBounds = handleRef.current.getBoundingClientRect()
      let middleOfHandle = handleBounds.x + handleBounds.width / 2
      let progressBarBounds = progressBarRef.current.getBoundingClientRect()
      let newProgress = (middleOfHandle - progressBarBounds.x) / progressBarBounds.width
      setValue(newProgress * (max - min))

   }

  return (
    <div className="p-8">
    <p className="font-medium text-md text-gray-700">My Current Electricity Bill: <span className="font-extrabold">{formatter.format(roundUp(value))}</span></p>
          <div data-test="slider" className="relative flex flex-col justify-center">
              <motion.div data-test="slider-background" style={{background}} className="h-4 w-full rounded-full absolute"></motion.div>
              <div ref={progressBarRef} data-test="slider-progress" className="absolute"
                   style={{left: handleSize/2,
                      right: handleSize /2
                    }} />
                    <div ref={constraintsRef}>
                          <motion.div
                          className="bg-red-500 z-10 relative rounded-full"
                          ref={handleRef}
                          drag="x"
                          dragMomentum={false}
                          data-test="slider-handle"
                          dragConstraints={constraintsRef}
                          dragElastic={0}
                          onDrag={handleDrag}
                          style={{
                            width: handleSize,
                            height: handleSize,
                            x: handleX
                          }}
                          >
                          </motion.div>
                    </div>

                    <div data-test="slider-clickable-area" className="absolute w-full h-4  rounded-full" onPointerDown={(event) => {
                      let {left, width} = progressBarRef.current.getBoundingClientRect()
                      let position = event.pageX - left
                      let newProgress = position / width
                      let newValue = newProgress * (max - min)
                      setValue(clamp(newValue, min, max))
                      console.log({value})
                      setQuoteInfo({
                        ...quoteInfo,
                        monthlySavings: monthlySavings,
                        yearlySavings: yearlySavings
                      })
                    }} />
                    </div>
                    <div className="flex flex-col space-x-4">
                        <span>
                            <p className="font-bold text-lg mt-4 text-emerald-700 text-center">Potential Monthly Savings:</p>
                            <h2 className="font-bold text-4xl text-center text-zinc-700">{formatter.format(roundUp(monthlySavings))}</h2>
                        </span>
                        <span>
                            <p className="font-bold text-lg mt-4 text-emerald-700 text-center">Potential Yearly Savings:</p>
                            <h2 className="font-bold text-4xl text-center text-zinc-700">{formatter.format(roundUp(yearlySavings))}</h2>
                        </span>
                    </div>

           </div>
  )
};
export default Slider;
