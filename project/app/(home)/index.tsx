import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity} from "react-native";
import { Link } from "expo-router";
import Svg, {Circle} from 'react-native-svg';
import COLORS from "@/assets/constants/COLORS";

export default function HomePage(){
    return(
    <View style={styles.container}>
        <Image
        style={styles.letter}
        resizeMode="contain"
        source={require("../../assets/images/letter_cotetris.png")}
        />
        <View>
            <Text style={styles.paragraph}>A combinação perfeita</Text>
            <Text style={styles.paragraph}>Código + Tetris</Text>
        </View>
        <Image 
        style={styles.computer}
        resizeMode="contain"
        source={require("../../assets/gifs/computer_cotetris_playing.gif")}/>
        <Link style={styles.button} href={"/editor"}>
            <Text>Começar</Text>
        </Link>        
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:"transparent",
        paddingVertical:30,
    },
    button:{
        paddingHorizontal: 30,
        paddingVertical: 10,
        fontFamily:"monospace",
        backgroundColor:COLORS.yellow,
        boxShadow: "-5px 0 0",
        fontSize:18
    },
    letter:{
        minWidth: 200,
        width:"40%",
    },
    computer:{
        height:"20%",
        maxHeight:200,
        minHeight:100,
    },
    paragraph:{
        fontFamily:"monospace",
        fontSize:18,
    },
})