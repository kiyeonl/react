import { useRef, useState } from 'react';

const TopBanner = () => {
    const [toggleClass, setToggleClass] = useState(false);
    const tg = useRef();
    const tClass = () => { tg.current.classList.toggle('on') }
    return (
        <div className="TopBanner">
            <div className={'container ' + (toggleClass ? 'on' : '')}>
                <h2>Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo ipsum, ea cupiditate facilis maxime eaque laudantium</p>
                {console.log(toggleClass)}
            </div>
            <div ref={tg} className="tg">2. Lorem ipsum dolor sit amet.</div>
            <i className='xi-bars' onClick={tClass}></i>
            <i className="xi-close" onClick={() => setToggleClass(!toggleClass)}></i>
        </div>
    )
}

export default TopBanner;