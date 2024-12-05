// Importações de Libs e Constantes
import { View, ScrollView, SafeAreaView, Text, StyleSheet, Pressable } from "react-native"
import { useState } from "react"
import COLORS from "@/assets/constants/Colors"
import Ionicons from '@expo/vector-icons/Ionicons';
import Block from "@/assets/constants/BlockInterface";

// Importações de componentes
import Header_default from "@/components/UI/Header_default"
import ContainerFollow from "@/components/UI/ContainerFollow"
import BlockModel from "@/components/UI/BlockModel";
import listAllBlocks from "@/assets/constants/listAllBlocks";

export default function Editor() {
    // Lista e função que configura os blocos
    const [listBlocks, setListBlocks] = useState<Array<Block>>([
        listAllBlocks.listContainers[0]
    ])

    let numberOfContainers = 0
    // Estado da Barra de ferramentas (true=open, false=close)
    const [stateToolBar, setStateToolBar] = useState(false)
    // Lista de qual Seguimento foi escolhido (1) ou não (0)
    const [followChoose, setFollowChoose] = useState([1, 0, 0])
    // Bloco selecionado
    const [selectBlock, setSelectBlock] = useState<Block>(listAllBlocks.listContainers[0])
    return (
        <View style={styles.container}>
            {/* HEADER */}
            <Header_default title="Editor" />
            {/* CONTAINER EDITOR */}
            <View style={{ width: "100%", height: (stateToolBar ? "45%" : "95%"), paddingBottom: (stateToolBar ? 25 : 110) }}>
                <ScrollView contentContainerStyle={styles.containerBlocks}>
                    {listBlocks?.map(block => {
                        block.follow == "container" ? numberOfContainers += 1 : {}
                        return (
                            <BlockModel style={{ marginLeft: 12 * (numberOfContainers - 1) }} select={() => { }} block={block} key={block.id} />
                        )
                    })}
                    <View style={{ marginLeft: 12 * (numberOfContainers - 1) }}>
                        <Pressable
                            style={styles.blockPlus}
                            onPress={() => {
                                setListBlocks([...listBlocks, {
                                    id: listBlocks.length + 1,
                                    content: selectBlock.content,
                                    follow: selectBlock.follow,
                                    ref: selectBlock.ref,
                                    setContent: selectBlock.setContent,
                                }])
                            }}>
                            <Ionicons name={"add"} size={25}/>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>
            {/* TOOLBAR CONTAINER */}
            <View style={(stateToolBar ? styles.containerToolsBarOpen : styles.containerToolsBar)}>
                <Pressable style={styles.buttonToolsBar} onPress={() => setStateToolBar(!stateToolBar)}>
                    <Ionicons name={(stateToolBar ? "arrow-down" : "arrow-up")} size={25} color={"white"} />
                </Pressable>
                <View style={styles.toolsBar}>
                    <ContainerFollow bg={COLORS.orange} icon="map" choose={followChoose[0]} callback={() => setFollowChoose([1, 0, 0])}>
                        {/* BLOCK EXAMPLE */}
                        {listAllBlocks.listContainers?.map(block => (
                            <BlockModel style={{}} select={() => setSelectBlock(block)} block={block} key={block.id} />
                        ))}
                    </ContainerFollow>
                    <ContainerFollow bg={COLORS.magenta} icon="text" choose={followChoose[1]} callback={() => setFollowChoose([0, 1, 0])}>
                        {listAllBlocks.listTexts?.map(block => (
                            <BlockModel style={{}} select={() => setSelectBlock(block)} block={block} key={block.id} />
                        ))}
                    </ContainerFollow>
                    <ContainerFollow bg={COLORS.purple} icon="image" choose={followChoose[2]} callback={() => setFollowChoose([0, 0, 1])}>
                        <Text></Text>
                    </ContainerFollow>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    containerBlocks: {
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 5,
        paddingHorizontal: 10,
    },
    containerToolsBar: {
        position: "absolute",
        bottom: 0,
        flexDirection: "column",
        width: "100%",
        height: 80,
    },
    containerToolsBarOpen: {
        position: "absolute",
        bottom: 0,
        flexDirection: "column",
        width: "100%",
        height: "50%",
    },
    buttonToolsBar: {
        padding: 5,
        boxShadow: "-4px 0 0 #000",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#456",
        alignSelf: "flex-end",
        marginRight: 14,
    },
    toolsBar: {
        flexWrap: "nowrap",
        flexDirection: "row",
        backgroundColor: "#000",
        width: "100%",
        height: "100%",
        borderTopWidth: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    blockPlus: {
        backgroundColor: "#789",
        padding: 5,
        borderColor: "#000",
        borderLeftWidth: 4,
    },
})