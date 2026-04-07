//Receba dois números de um inteiro de un intervalo (MIDIInput, máx)

import { View, Text } from "react-native"
import { MinMax } from "./minmax"

const gerarAleatorio = (min: number, max: number) => {
    return //Lógica
}

const Intervalo = (params: MinMax) => {
    return (
        <View>

            <Text> 
                Min = {params.min ?? 0} e Max = {params.max ?? 0}
                
            </Text>

        </View>
    )
}
export default Intervalo