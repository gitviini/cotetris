import { View, Text, Pressable, StyleSheet } from "react-native"

import { Link } from "expo-router"

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header_default(props:{title:string}){
    return(
        <View style={styles.container_header}>
            <Link href={"/"} style={styles.button}>
                <Ionicons name="arrow-back" size={25} color="black" />
            </Link>
            <Text style={styles.title}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container_header:{
        height:"auto",
        width:"100%",
        padding:10,
        flexDirection:"row",
        gap: 10,
        justifyContent:"flex-start",
        alignItems:"center",
    },
    button:{
        backgroundColor: "#FFC567",
        padding: 5,
        boxShadow: "-4px 0 0",
        marginLeft: 4,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontFamily:"monospace"
    },
})