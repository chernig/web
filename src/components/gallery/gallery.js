import React, {useState} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './gallery.css'
import 'react-awesome-slider/dist/styles.css';
import deep_1 from './images/deep_1.png'
import deep_2 from './images/deep_2.png'
import deep_3 from './images/deep_3.png'
import deep_4 from './images/deep_4.png'
import finance_1 from './images/finance_1.png'
import finance_2 from './images/finance_2.png'
import finance_3 from './images/finance_3.png'
import snake_1 from './images/snake_1.png'
import snake_2 from './images/snake_2.png'
import website_1 from './images/website_1.JPG'
import website_2 from './images/website_2.JPG'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// TODO : responsive through react
//  <div className={`project ${props.name}`} style={{backgroundImage: `url(${require(`./images/${props.image}.jpg`)})`}}> - works
function Gallery(props) {
    const img_data = {
        deep: [deep_1, deep_2, deep_3, deep_4],
        website: [website_1, website_2],
        finance: [finance_1, finance_2, finance_3],
        snake: [snake_1, snake_2]
    }
    const scroll_forward = () => {
        let max = img_data[props.name].length
        if (img === max-1) {
            setImg(0)
        } else {
            setImg(img+1)
        }
    }
    const scroll_backward = () => {
        let max = img_data[props.name].length
        if (img === 0) {
            setImg(max-1)
        } else {
            setImg(img-1)
        }
    }
    const [img, setImg] = useState(0)
    return (
        <div className='gallery'>
        <TransitionGroup>
            <CSSTransition
            key={img}
            timeout={300}
            classNames='fade'
            >
            <img className='test' src={img_data[props.name][img]} onClick={()=> scroll_forward()}   alt='text'/>
            </CSSTransition>
        </TransitionGroup>
            <div className='back-button'><ArrowBackIosIcon  onClick={()=>scroll_backward()}/></div>
            <div className='forward-button'><ArrowForwardIosIcon  onClick={()=>scroll_forward()} /></div>
        </div>
      );
}   
export default Gallery;