import { useEffect, useState, useRef } from "react";

const MainTab2 = () => {
    const tabData = [
        { id: 1, menu: 'menu01', content: 'content01' },
        { id: 2, menu: 'menu02', content: 'content02' },
        { id: 3, menu: 'menu03', content: 'content03' }
    ];

    const tanContent = useRef();

    const [tabNumber, setTabnumber] = useState(0);
    const [tabnum, setTabnum] = useState();

    const setTab = (fg) => {
        setTabnumber(fg);

        const tabList = [...tabnum];
        tabList.map(el => el.classList.remove('on'));
        tabList[fg].classList.add('on')
    }

    useEffect(() => {
        setTabnum(tanContent.current.children);
    }, [])
    return (
        <section className="mainTab2">
            <ul>
                {
                    tabData.map((el, idx) => (
                        <li key={el.id} onClick={() => setTab(idx)}>{el.menu}</li>
                    ))
                }
            </ul>
            <div className="tabContent2" ref={tanContent}>
                <div className="on">01. You can now view react_03 in the browser.
                    Note that the development build is not optimized.
                </div>
                <div>02. You can now view react_03 in the browser.
                    Note that the development build is not optimized.
                </div>
                <div>03. You can now view react_03 in the browser.
                    Note that the development build is not optimized.
                </div>
            </div>
        </section>
    )
}

export default MainTab2;