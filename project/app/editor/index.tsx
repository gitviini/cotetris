import { View, Text, Pressable, StyleSheet} from "react-native"
import { Link } from "expo-router"

import Header_default from "@/components/Header_default"

export default function Editor(){
    return(
        <View style={styles.container}>
            <Header_default/>
            <Text>oi</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        gap: 10
    },

})