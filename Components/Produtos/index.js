import { Text, View } from "react-native";;
import estilo from "./estilo";

export default function Produtos(){
    return(
    <View style={estilo.container}>
        <Text style={estilo.texto}>Página de Produtos</Text>
    </View>
    );
}