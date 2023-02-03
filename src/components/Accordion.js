import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item border border-seagreen-100 bg-seagreen-50 p-4">
            <div className="accordion-title flex justify-between items-center cursor-pointer" onClick={() => setIsActive(!isActive)}>
                <div className='flex gap-3 items-center font-work'>
                    <div className="w-3 h-3 rounded-full bg-purple-100">

                    </div>

                    <div>
                        {title}
                    </div>
                </div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className="accordion-content font-work mt-4">{content}</div>}
        </div>
    );
};

export default Accordion
