import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="content">
                <h2>Join the Adventure newsletter to receive our best vacation deals</h2>
                <h3>You can unsubscribe at any time.</h3>
                <div className="subscribe">
                    <input type="text" placeholder="Your Email"/>
                    <button type="submit">Subscribe</button>
                </div>
            </div>
            <div className="content">
                <div className="item">
                    <h2>About Us</h2>
                    <h4>How it works</h4>
                    <h4>Testimonials</h4>
                    <h4>Careers</h4>
                    <h4>Investors</h4>
                    <h4>Term of Services</h4>
                </div>
                <div className="item">
                    <h2>Contact Us</h2>
                    <h4>Contact</h4>
                    <h4>Support</h4>
                    <h4>Destinations</h4>
                    <h4>Sponsorships</h4>
                </div>
                <div className="item">
                    <h2>Videos</h2>
                    <h4>Submit Videos</h4>
                    <h4>Ambassadors</h4>
                    <h4>Agency</h4>
                    <h4>Influencer</h4>
                </div>
                <div className="item">
                    <h2>Social Media</h2>
                    <h4>Instagram</h4>
                    <h4>Facebook</h4>
                    <h4>Youtube</h4>
                    <h4>Twitter</h4>
                </div>
            </div>
            <div className="content">
                <div className="logo">
                    <span>trvl</span>
                    <i className="fab fa-typo3"></i>
                </div>
                <div className="item-detail">
                    <h4>TRVL © 2020</h4>
                </div>
                <div className="item-icon">
                    <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.youtube.com/">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="https://twitter.com/">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer

