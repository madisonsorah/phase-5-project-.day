import React from 'react';
import './index.css';
import dotdaythemegraphic from '../../images/dotdaythemegraphic.png';
import dotdayprofilegraphic from '../../images/dotdayprofilegraphic.png';
import dotdaygridgraphic from '../../images/dotdaygridgraphic.png';

function AboutPage() {
    return (
        <div>
            <h3 className='footerheader'>How .DAY Works</h3> 
            <div className='homepageaboutcontainer'>
                <div className='homepageaboutleft'>
                    <div className='homepageaboutleftsection'>
                        <h4 className='homepageh4'>Create an account with your author details.</h4>
                        <p className='homepagep'>Sign up with your name, a pen name of your choice and email.</p>
                    </div>
                    <div className='homepageaboutleftsection'>
                        <h4 className='homepageh4'>Choose a journal theme.</h4>
                        <p className='homepagep'>Select from three pre-built journal themes with specific question prompts or general to share daily thoughts.</p>
                    </div>
                    <div className='homepageaboutleftsection2'>
                        <h4 className='homepageh4'>Track published entries on your calendar grid.</h4>
                        <p className='homepagep'>View entries written over the course of the month to identify trends.</p>
                    </div>
                </div>
                <div className='homepageaboutright'>
                    <img className='homepageaboutpreview' alt='profile preview' src={dotdayprofilegraphic}></img>
                    <img className='homepageaboutpreview' alt='theme preview' src={dotdaythemegraphic}></img>
                    <img className='homepageaboutpreview' alt='grid preview' src={dotdaygridgraphic}></img>
                </div>
            </div>
            <div className='homepagefooter'>
                <h3 className='footerheader'>About .DAY</h3>
                <ul className='footerul'>
                    <div className='footerp'>.DAY is a project concept created by @madisonsorah, who recently kicked off her career as a front-end developer.</div>
                    <div className='footerp'>Created with a clean interface and minimalist design, .DAY is your digital solution to journaling on a daily basis.</div>
                    <div className='footerp2'>Feature updates will continuously be made to .DAY to improve your journaling experience.</div>
                </ul>
            </div>
        </div>
    )
}

export default AboutPage;