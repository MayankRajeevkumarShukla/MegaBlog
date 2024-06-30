import React from 'react'

function Button({
    children,
    type = "button",
    bgColor ="bg-blue-600",
    textColor ="text-white",
    className = '',
    ...props
// yeh ...props ko spred kiya hai taki aur bh atributtes jo diya hai voh bhi aajye
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${className} ${textColor} `} {...props}>
      {children}
      {/* children bas text hota hai aur kuch nai  */}
    </button>
  )
}

export default Button
