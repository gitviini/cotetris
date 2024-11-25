import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity} from "react-native";
import { Link } from "expo-router";
import Svg, {Circle} from 'react-native-svg';

const COLORS = {
    yellow: "#FFC567",
    brown: "#412929"
}

export default function HomePage(){
    return(
    <View style={styles.container}>
        <Image
        style={styles.letter}
        resizeMode="contain"
        source={require("../../assets/images/letter_cotetris.png")}
        />
        <Text style={{fontFamily:"monospace"}}>A combinação perfeita<br />Código + Tetris</Text>
        <Image 
        style={styles.computer}
        resizeMode="contain"
        source={require("../../assets/gifs/computer_cotetris_playing.gif")}/>
        <Link href={"/editor"} onPress={e=>{
            
        }}>
            <Text style={styles.button}>Começar</Text>
        </Link>
        <Svg height={"300"} width={"100%"} style={{
            position:"fixed",
            zIndex:-1,
            bottom: 0,
            maxWidth: 550
        }}>
            <Circle cx="50%" cy="115%" r="50%" fill={COLORS.brown}/>
        </Svg>
    </View>)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        padding: 10,
    },
    paragraph:{
        padding:20
    },
    button:{
        paddingHorizontal: 30,
        paddingVertical: 10,
        fontFamily:"monospace",
        backgroundColor:COLORS.yellow,
        boxShadow: "-5px 0 0"
    },
    letter:{
        minWidth: 200,
        width:"40%",
    },
    computer:{
        minWidth: 150,
        width:"30%",
        maxWidth: 200,
    }
})