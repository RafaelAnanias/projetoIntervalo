import { View, Text } from "react-native"
import { MinMax } from "./minmax"
import Aleatorio from "./Aleatorio"

const gerarAleatorio = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Intervalo = (params: MinMax) => {

    const min = params.min ?? 0
    const max = params.max ?? 100

    const numero = gerarAleatorio(min, max)

    return (
        <View>
            <Text> 
                Min = {min} e Max = {max}
            </Text>

            <Aleatorio numero={numero} />
        </View>
    )
}

export default Intervalo