import { Link, Stack } from "expo-router";

import { View, StyleSheet} from "react-native"

export default function NotFoundScreen(){
    return(
        <>
            <Stack.Screen options={{title:"Página não encontrada"}}/>
            <View style={styles.container}>
                <Link href={"/"}>Retorna ao início</Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }
})