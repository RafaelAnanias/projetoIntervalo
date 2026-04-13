import { View, Text, Button, StyleSheet, TextInput } from "react-native"
import { MinMax } from "./minmax"
//import Aleatorio from "./Aleatorio"
import React, { useState } from "react"

const gerarAleatorio = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Intervalo = (params: MinMax) => {

    const min = params.min ?? 0
    const max = params.max ?? 100

    //const numero = gerarAleatorio(min, max)
    //let gerado = gerarAleatorio(min,max)

    const [gerado, setGerado] = useState<number | undefined>(undefined)

    return (
        <View>
            <Button title="Gerar número"
                color="#841584"
                onPress={() => {
                    setGerado(gerarAleatorio(min, max))
                }}
            />

            <Text style={styles.resultado}    >
                {gerado ? `Número gerado = ${gerado}`
                    : ""}
            </Text>

        </View >


    )
}


const styles = StyleSheet.create({
    resultado: {
        fontSize: 20,
        marginTop: 10
    }

})

export default Intervalo