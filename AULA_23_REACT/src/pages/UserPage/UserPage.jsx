import { useEffect, useState } from "react";
import axios from 'axios';

function UserPage() {
    const[data, setData] = useState([])

    async function consultaLista() {
        const response = await axios.get('https://iwtraining.free.beeceptor.com/todos')
        console.log(response)
        setData(response.data)
    }

    useEffect(() => {
        consultaLista()
    }, [])

    return (
        <>
            User

            <table className='table table-hover table-striped'>

                <tbody>
                    {data.map((item, posicao) => (
                        <tr key={posicao}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.completed}</td>
                        </tr>
                    ))}
                </tbody>
             </table>
        </>
    )
}

export default UserPage;