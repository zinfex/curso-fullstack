function Body(props) {
    return (
        <div style={{background: props.cor}}>
            body
            {props.children}
        </div>
    )
}

export default Body