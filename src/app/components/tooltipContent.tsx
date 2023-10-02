import { Tooltip } from '@nextui-org/tooltip'
import React from 'react'

interface ICustomTooltipProp {
  label: string
  children: React.ReactNode
}
function CustomTooltip(props: ICustomTooltipProp): React.ReactElement {
  const {
    label,
    children
  } = props
  return (
    <Tooltip
      showArrow
      placement='bottom'
      classNames={{
        base: 'bg-darkBlue text-white py-2 px-3 rounded-md',
        arrow: ' bg-darkBlue'
      }}
      content={label}
    >
      {children}
    </Tooltip>
  )
}

export default CustomTooltip