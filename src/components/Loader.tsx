import React from 'react'

export const Loader = () => {
  return (
    <div className="loader">
        <div className="orb" style={{'--index': 0} as React.CSSProperties}></div>
        <div className="orb" style={{'--index': 1} as React.CSSProperties}></div>
        <div className="orb" style={{'--index': 2} as React.CSSProperties}></div>
        <div className="orb" style={{'--index': 3} as React.CSSProperties}></div>
        <div className="orb" style={{'--index': 4} as React.CSSProperties}></div>
    </div>
  )
}
