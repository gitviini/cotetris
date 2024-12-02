// Importações
import { View, Text, StyleSheet, Pressable} from "react-native"
import { useState } from "react"
import COLORS from "@/assets/constants/Colors"
import Header_default from "@/components/UI/Header_default"
import ContainerFollow from "@/components/UI/ContainerFollow"
import Ionicons from '@expo/vector-icons/Ionicons';

// Interface do blocos
interface Block{
    id:number,
    ref:string,
    content:string | number | null,
}

export default function Editor(){
    // Lista e função que configura os blocos
    const [listBlocks,setListBlocks] = useState<Array<Block>>([{id:2,ref:"",content:null}])
    // Estado da Barra de ferramentas (true=open, false=close)
    const [stateToolBar,setStateToolBar] = useState(false)
    const [followChoose,setFollowChoose] = useState([1,0,0])
    return(
        <View style={styles.container}>
            {/* HEADER */}
            <Header_default title="Editor"/>
            {/* CONTAINER EDITOR */}
            <View>
                {listBlocks?.map((block)=>(
                    <Text key={block.id}>{block.ref}</Text>
                ))}
            </View>
            {/* TOOLBAR CONTAINER */}
            <View style={(!stateToolBar ? styles.containerToolsBar : styles.containerToolsBarOpen)}>
                <Pressable style={styles.buttonToolsBar} onPress={()=>setStateToolBar(!stateToolBar)}>
                    <Ionicons name={(!stateToolBar ? "arrow-up" : "arrow-down")} size={25} color={"white"}/>
                </Pressable>
                <View style={styles.toolsBar}>
                    <ContainerFollow bg="#789" icon="map" choose={followChoose[0]}>
                        hi
                    </ContainerFollow>
                    <ContainerFollow bg="#456" icon="text" choose={followChoose[1]}>
                        hi
                    </ContainerFollow>
                    <ContainerFollow bg="#879" icon="image" choose={followChoose[2]}>
                        eita
                    </ContainerFollow>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        gap: 10,
    },
    containerToolsBar:{
        position:"absolute",
        bottom:0,
        flexDirection:"column",
        width:"100%",
        height:80,
    },
    containerToolsBarOpen:{
        position:"absolute",
        bottom:0,
        flexDirection:"column",
        width:"100%",
        height:"50%",
    },
    buttonToolsBar:{
        padding:5,
        boxShadow:"-4px 0 0 #000",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#456",
        alignSelf:"flex-end",
        marginRight:14,
        cursor:"pointer"
    },
    toolsBar:{
        flexDirection:"row",
        backgroundColor:COLORS.yellow,
        width:"100%",
        height:"100%",
        borderTopWidth: 4,
    },
})