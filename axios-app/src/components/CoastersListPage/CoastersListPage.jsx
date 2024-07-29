import { useEffect, useState } from "react"
import axios from 'axios'

const CoastersListPage = () => {

    const [coasters, setCoasters] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        axios
            .get('https://multiapi-app.fly.dev/coasters/coastersSelection')
            .then(response => {
                setCoasters(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))

    }, [])                  // ARRAY VACÍO = MOUNTING PHASE 


    return (
        <div className="CoastersListPage">

            <h1>Listado de montañas de la API</h1>

            <hr />

            {
                isLoading
                    ? <h1>CARGANDO...</h1>
                    : coasters.map(elm => {
                        return (
                            <article>{elm.title}</article>
                        )
                    })
            }
        </div>
    )
}

export default CoastersListPage