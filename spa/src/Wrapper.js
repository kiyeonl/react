const Wrapper = (props) => {
    return (
        <div className="Wrapper">
            {props.children}
        </div>
    )
}

export default Wrapper;

//const Wrapper = ({children}) => {
//     return (
//         <div className="Wrapper">
//             {children}
//         </div>
//     )
// }