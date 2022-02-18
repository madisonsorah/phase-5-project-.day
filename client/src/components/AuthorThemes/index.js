import React from 'react';
import './index.css';
import dotdaycreativity from '../../images/dotdaycreativity.png'
import dotdaypositivity from '../../images/dotdaypositivity.png'
import dotdayproductivity from '../../images/dotdayproductivity.png'
import dotdaycustom from '../../images/dotdaycustom.png'

function AuthorThemes() {
    return (
      <div>
        <div className='themediv'>
          <div className='themedetailsdiv'>
            <h3 className='themeheader'>Themes</h3>
            <p className='themep'>Hover over a journal theme below to learn more.</p>
          </div>
          <div className='themecontainer'>
            <div className='themeimagecontainer'>
              <img className='themeimage' src={dotdaycreativity} alt='Creativity'></img>
              <div className='thememiddle'>
                <div class='thememiddletext'>Creativity prompts to encourage imaginative thinking.</div>
              </div>
            </div>
            <div className='themeimagecontainer'>
              <img className='themeimage' src={dotdaypositivity} alt='Positivity'></img>
              <div className='thememiddle'>
                <div class='thememiddletext'>Positivity prompts to reflect on mood and gratitude.</div>
              </div>
            </div>
            <div className='themeimagecontainer'>
              <img className='themeimage' src={dotdayproductivity} alt='Productivity'></img>
              <div className='thememiddle'>
                <div class='thememiddletext'>Productivity prompts to help you accomplish tasks.</div>
              </div>
            </div>
            <div className='themeimagecontainer'>
              <img className='themeimage' src={dotdaycustom} alt='Custom'></img>
              <div className='thememiddle'>
                <div class='thememiddletext'>General prompt for sharing daily thoughts and tasks.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AuthorThemes;