function Header(props) {

    
    return (
        <div>
            <header>
                <div className="logo">Logo</div>
                <div className="menu">
                    Empresa: {props.empresa} <br />
                    Curso: {props.curso}
                </div>
            </header>
        </div>
    )
}

export default Header