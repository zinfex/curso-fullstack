import { useContext, useEffect } from "react"
import Util from "../../config/Util"
import AuthContext from "../../contexts/AuthContext"

export default function Logout() {
    
    const { isLogged, setIslogged } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Text>Logout</Text>
        </View>
    )
}