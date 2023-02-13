import { Text, View } from "react-native";;
import estilo from "./estilo";

export default function Contatos(){
    return(
    <View style={estilo.container}>
        <Text style={estilo.texto}>Página de Contatos</Text>
    </View>
    );
}