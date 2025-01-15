import React, { useState } from 'react'

const SizePicker = () => {
    const [active, setActive] = useState(9);
    const sizes = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12];
    return (
        <div className='size-picker'>
            <h3 className='title'>choose size</h3>
            <div className='sizes'> 
                {sizes.map((size, index) => (
                    <div 
                        key={index}
                        className={`size ${active === size && 'active'}`}
                        onClick={() => setActive(size)} 
                    >
                        {size}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SizePicker;