import React from 'react'

const NavigationDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {
        ['home', 'about', 'work', 'skills', 'contact', 'testimonials', 'contact'].map((item,i) =>(
        <a href={`#${item}`}
        key={item + i}
        className='app__navigation-dot'
        style={active === item ? {background: '#313BAC'} :{ }}
        />
        ))}
    </div>
  )
}

export default NavigationDots