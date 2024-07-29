import { Link } from "react-router-dom"

const Navigation = () => {

    return (
        <div className="Navigation">
            <nav>
                <Link to={`/`}>Inicio</Link>
                <Link to={`/coasters`}>Galería de montañas rusas</Link>
            </nav>
        </div>
    )
}

export default Navigation