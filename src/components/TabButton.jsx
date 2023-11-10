import React from 'react'

function TabButton({ active, selectTab, children }) {

    const buttonClasses = active ? 'text-white border-b border-pink-800' : 'text-[#e05765]'

  return (
    <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses} `}>
        {children}
        </p>
    </button>
  )
}

export default TabButton