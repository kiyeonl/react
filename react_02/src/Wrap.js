const Wrap = ({ children }) => {
    return (
        <div style={{ border: '1px solid #f00', padding: 100, borderLeft: '5px solid #f00' }}>
            {children}
        </div >
    )
}

export default Wrap;

