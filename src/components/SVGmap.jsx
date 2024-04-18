import { useState, useEffect } from 'react'

export const SVGMap = ({ coordinates }) => {
  // Define the initial position of the user based on coordinates

  const [x, setX] = useState(coordinates['0'])
  const [y, setY] = useState(coordinates['0'])

  // Update the position of the user based on new coordinates
  useEffect(() => {
    const [newX, newY] = coordinates.split(',')
    setX(newX)
    setY(newY)
    console.log('NEw info:', newX, newY)
  }, [coordinates])
  let circleCx, circleCy

  if (x === '0' && y === '0') {
    circleCx = 340
    circleCy = 10
  } else if (x === '1' && y === '0') {
    circleCx = 425
    circleCy = 200
  } else if (x === '1' && y === '1') {
    // Default values
    circleCx = 240
    circleCy = 207
  } else if (x === '0' && y === '1') {
    // Default values
    circleCx = 350
    circleCy = 255
  } else if (x === '0' && y === '2') {
    // Default values
    circleCx = 240
    circleCy = 410
  } else if (x === '0' && y === '3') {
    // Default values
    circleCx = 140
    circleCy = 410
  } else if (x === '1' && y === '3') {
    // Default values
    circleCx = 140
    circleCy = 500
  }

  const circleStyle = {
    cx: circleCx,
    cy: circleCy,
    r: 10,
    fill: 'red',
  }

  return (
    <svg fill="#000000" height="800px" width="800px" viewBox="0 0 512 512">
      {/* Your existing SVG code for the map layout */}
      <g>
        <g>
          <g>
            {/* Add your existing path elements here */}
            {/* For example: */}
            <path
              d="M264.533,273.067c-4.71,0-8.533,3.823-8.533,8.533V384c0,4.71,3.823,8.533,8.533,8.533h85.333
				c4.71,0,8.533-3.823,8.533-8.533s-3.823-8.533-8.533-8.533h-76.8V281.6C273.067,276.89,269.244,273.067,264.533,273.067z"
            />
            <path
              d="M170.667,332.8V230.4c0-4.71-3.823-8.533-8.533-8.533h-102.4c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533
				H153.6v85.333h-42.667h-51.2c-4.71,0-8.533,3.823-8.533,8.533v102.4c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533
				v-93.867H102.4v153.6H34.133c-9.412,0-17.067-7.654-17.067-17.067V290.133h93.867c4.71,0,8.533-3.823,8.533-8.533
				s-3.823-8.533-8.533-8.533H17.067v-85.333h93.867c4.71,0,8.533-3.823,8.533-8.533s-3.823-8.533-8.533-8.533H68.267v-59.733
				c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533v59.733H17.067V34.133c0-9.412,7.654-17.067,17.067-17.067H51.2v42.667
				c0,4.71,3.823,8.533,8.533,8.533H102.4V128c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533V59.733
				c0-4.71-3.823-8.533-8.533-8.533H68.267V17.067H307.2v153.6H170.667v-102.4H256v51.2h-34.133v-8.533
				c0-4.71-3.823-8.533-8.533-8.533c-4.71,0-8.533,3.823-8.533,8.533V128c0,4.71,3.823,8.533,8.533,8.533h51.2
				c4.71,0,8.533-3.823,8.533-8.533V59.733c0-4.71-3.823-8.533-8.533-8.533h-102.4c-4.71,0-8.533,3.823-8.533,8.533V179.2
				c0,4.71,3.823,8.533,8.533,8.533h238.933c4.71,0,8.533-3.823,8.533-8.533s-3.823-8.533-8.533-8.533h-76.8V8.533
				c0-4.71-3.823-8.533-8.533-8.533h-281.6C15.309,0,0,15.309,0,34.133v443.733C0,496.691,15.309,512,34.133,512h76.8
				c4.71,0,8.533-3.823,8.533-8.533V341.333h42.667C166.844,341.333,170.667,337.51,170.667,332.8z"
            />
            <path
              d="M366.933,136.533c4.71,0,8.533-3.823,8.533-8.533V59.733c0-4.71-3.823-8.533-8.533-8.533s-8.533,3.823-8.533,8.533V128
				C358.4,132.71,362.223,136.533,366.933,136.533z"
            />
            <path
              d="M452.267,341.333c4.71,0,8.533-3.823,8.533-8.533V230.4c0-4.71-3.823-8.533-8.533-8.533H264.533
				c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h179.2V332.8C443.733,337.51,447.556,341.333,452.267,341.333z"
            />
            <path
              d="M221.867,230.4c0-4.71-3.823-8.533-8.533-8.533c-4.71,0-8.533,3.823-8.533,8.533v102.4c0,4.71,3.823,8.533,8.533,8.533
				c4.71,0,8.533-3.823,8.533-8.533V230.4z"
            />
            <path
              d="M477.867,0H366.933c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h110.933
				c9.412,0,17.067,7.654,17.067,17.067v85.333h-68.267v-51.2h25.6c4.71,0,8.533-3.823,8.533-8.533s-3.823-8.533-8.533-8.533
				h-34.133c-4.71,0-8.533,3.823-8.533,8.533V128c0,4.71,3.823,8.533,8.533,8.533h25.6V179.2c0,4.71,3.823,8.533,8.533,8.533
				c4.71,0,8.533-3.823,8.533-8.533v-42.667h34.133v238.933h-42.667c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533
				h42.667v34.133H409.6V281.6c0-4.71-3.823-8.533-8.533-8.533h-85.333c-4.71,0-8.533,3.823-8.533,8.533v51.2
				c0,4.71,3.823,8.533,8.533,8.533h34.133c4.71,0,8.533-3.823,8.533-8.533c0-4.71-3.823-8.533-8.533-8.533h-25.6v-34.133h68.267
				V435.2c0,4.71,3.823,8.533,8.533,8.533h93.867v34.133c0,9.412-7.654,17.067-17.067,17.067h-307.2v-51.2h179.2
				c4.71,0,8.533-3.823,8.533-8.533s-3.823-8.533-8.533-8.533H162.133c-4.71,0-8.533,3.823-8.533,8.533v68.267
				c0,4.71,3.823,8.533,8.533,8.533h315.733C496.691,512,512,496.691,512,477.867V34.133C512,15.309,496.691,0,477.867,0z"
            />
            <path
              d="M213.333,375.467h-51.2c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h51.2c4.71,0,8.533-3.823,8.533-8.533
				S218.044,375.467,213.333,375.467z"
            />
            {/* Add more path elements as needed */}
            <circle {...circleStyle} />
          </g>
        </g>
      </g>
    </svg>
  )
}