const Map = () => {
    const DATA = [
        { id: 1, name: '이기연', title: '하고싶은 말', content: '나는 바보다.', src: './img/lesedilarona01.jpg' },
        { id: 2, name: '김기연', title: '하고싶은 발', content: '나는 메로나다.', src: './img/lesedilarona02.jpg' },
        { id: 3, name: '박기연', title: '하고싶은 손', content: '나는 비비빅다.', src: './img/lesedilarona03.jpg' },
        { id: 4, name: '오기연', title: '하고싶은 배', content: '나는 월드콘이다.', src: './img/lesedilarona04.jpg' },
    ]
    return (
        <section className="custommer">
            <ul>
                {
                    DATA.map((elm, idx) =>
                        <li key={elm.id}>
                            <div className="box"><img src={elm.src} alt='바부팅' /></div>
                            <strong>{elm.name}이 {elm.title}은 '{elm.content}'이다.</strong>
                        </li>
                    )
                }
            </ul>
        </section>
    )
}

export default Map;