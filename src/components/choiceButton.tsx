import React, { useState } from 'react'

interface ChoiceButtonsPropsType {
  label: string[],
}
function ChoiceButtons(props: ChoiceButtonsPropsType): JSX.Element {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  function onClicked(idx: number) {
    setSelectedIndex(idx)
  }
  function bgColorSelected(i: number) {
    if (selectedIndex === i) return 'bg-gradient-to-r from-lighterGreen to-lightGreen rounded-full'
    else return ''
  }
  function textColor(i: number): string { return selectedIndex === i ? 'text-darkBlue' : 'text-white' }
  return (
    <div className='inline-flex border border-lightGreen rounded-full'>
      {props.label.map((e, i) =>
        <div key={i}
          className={`px-5 py-1 ${bgColorSelected(i)}`}>
          <p className={`cursor-pointer ${textColor(i)} relative  z-10`}
            onClick={() => onClicked(i)}
          >{e}</p>
        </div>
      )}
    </div >
  )
}

export default ChoiceButtons