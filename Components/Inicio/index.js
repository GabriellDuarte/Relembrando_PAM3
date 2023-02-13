import { Text, View } from "react-native";;
import estilo from "./estilo";

export default function Inicio(){
    return(
    <View style={estilo.container}>
        <Text style={estilo.texto}>Página de início</Text>
    </View>
    );
}