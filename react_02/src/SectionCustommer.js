const SectionCustommer = ({ name, age, color }) => {
    // console.log(props, typeof props)
    return (
        <div style={{ color: color }}>
            {name}는 {age}세 입니다.
        </div>
    )
}

SectionCustommer.defaultProps = {
    name: '무명'

}

export default SectionCustommer;