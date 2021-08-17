import React from 'react'

const HeaderVideo = ({page}) => {
    return (
        <div className={page==="Home"? "header-video" : `${page}-panel`}>
            {page==="Home" ? (<div className="video">
                <video src="/videos/video-1.mp4" autoPlay loop muted></video>
            </div>) : ""}
            {page==="Home"? (<div className="title">
                <h1>Adventure awaits</h1>
                <h3>What are you waiting for?</h3>
                <div className="control">
                    <button>Get Started</button>
                    <button>
                        <span>Watch Trailer</span>
                        <i className="far fa-play-circle"></i>
                    </button>
                </div>
            </div>) : (<h1>{page} Panel</h1>)}
            
        </div>
    )
}

export default HeaderVideo
