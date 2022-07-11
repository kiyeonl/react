import MainVisual from './MainVisual';
import SetCount from './SetCount';
import ToggleClass from './ToggleClass';
import SectionCustommer from './SectionCustommer';
import Map from './Map';

export default function Main() {
    const Test = ({ name }) => {
        return (
            <div>{name}가 임시로 만든 컴포넌트</div>
        )
    }
    return (
        <main className='mainVisual'>

            <MainVisual />
            <Test name="바보" />
            <SectionCustommer name="이창훈" age="51" color="#f00" />
            <SectionCustommer name="김창훈" age="61" color="#ff0" />
            <SectionCustommer name="박창훈" age="71" color="#f0f" />
            <SectionCustommer age="81" color="#00f" />
            <SetCount />
            <ToggleClass />
            <Map />
        </main>
    )
}