import React from 'react';
import './YouTubeComp.css'

const YouTubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className='img-thumb'>
                <img src="https://i.ytimg.com/vi/CZKcmzNs5Jw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDFCbLCe4k6tcIMOrareN1hklWhJA" alt="gmbar" />
                <p className='time'>{props.time}</p>
            </div>
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
        </div>
    )

};

// set props default values
YouTubeComp.defaultProps = {
    time: '00.00',
    title: 'Belajar React JS Bagian',
    desc: '0 views  Dec 20, 2018  ReactJS Tutorial'
}
export default YouTubeComp;