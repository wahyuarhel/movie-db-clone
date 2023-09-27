import React from 'react'
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


interface ICircularPercentage {
  value: number
  strokeWidth?: number
  baseColor?: string
  valueColor?: string
  size?: number | string
  bgColor?: string
  useBackGround?: boolean,
  textSize?: string | number,
  textColor?: string
}

/**
interface ICircularPercentage {
  value: number
  strokeWidth?: number
  baseColor?: string
  valueColor?: string
  size?: number | string
  bgColor?: string
  useBackGround?: boolean,
  textSize?: string | number,
  textColor?: string
}
 */
function CircularPercentage(props: ICircularPercentage) {
  const {
    value = 0,
    strokeWidth = 6,
    baseColor = '#245f70',
    valueColor = '#33cc50',
    size = 40,
    textSize = 14,
    textColor = 'white',
    bgColor = '#081C22'
  } = props

  const percentage = parseFloat(value.toFixed(1)) * 10
  function indicatorColor() {
    switch (true) {
      case percentage <= 40:
        return 'red'
      case percentage < 70:
        return 'yellow'
      default:
        return valueColor
    }
  }
  return (
    <div style={{ width: size, height: size }}>
      <CircularProgressbarWithChildren value={percentage}
        background
        backgroundPadding={5}
        strokeWidth={strokeWidth}
        styles={buildStyles({
          pathColor: indicatorColor().toString(),
          trailColor: percentage != 0 ? baseColor : bgColor,
          backgroundColor: bgColor,
        })}
      >
        <div className='flex items-start'>
          <p style={{
            fontSize: textSize,
            color: textColor,
            fontFamily: 'Manrope'
          }}>{percentage != 0 ? percentage : 'NR'}</p>
          {percentage != 0 ? <p className='text-white text-[8px] pt-[3px]'>%</p> : null}

        </div>
      </CircularProgressbarWithChildren>
    </div>
  )
}

export default CircularPercentage