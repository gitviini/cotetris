import { GestureResponderEvent, Pressable, View, Text, TextInput, StyleSheet, StyleProp, ViewStyle } from "react-native"
import Block from "@/assets/constants/BlockInterface";
import COLORS from "@/assets/constants/Colors";

export default function BlockModel({ block, select, style }: { block: Block, select: ((event: GestureResponderEvent) => void), style: StyleProp<ViewStyle> }) {
    if (block.follow == "container") {
        switch (block.ref) {
            case "View":
                return (
                    <View style={style}>
                        <Pressable onPress={select} style={styles.blockContainer}>
                            <Text style={{
                                minWidth: 80,
                                width: "auto",
                            }}>{block.ref}</Text>
                        </Pressable>
                        {/* <View style={{ marginLeft: 20, gap: 5 }}>
                            <View style={styles.blockPlus}>

                                <Text>+</Text>
                            </View>
                        </View>
                        <Pressable style={styles.blockContainerEnd}><Text>{block.ref}</Text></Pressable> */}
                    </View>
                )
            default:
                return (
                    <></>
                )
        }
    }
    else {
        switch (block.ref) {
            case "Text":
                return (
                    <View style={style}>
                        <Pressable onPress={select} style={styles.blockText}>
                            <Text>{block.ref}</Text>
                            <TextInput
                                placeholder={`${block.content}`}
                                onChange={e=>{
                                    block.content = e?.target?.value
                                }}
                                style={{ backgroundColor: "#fff", paddingHorizontal: 5 }}></TextInput>
                        </Pressable>
                    </View>
                )
            default:
                return (
                    <></>
                )
        }
    }
}

const styles = StyleSheet.create({
    blockContainer: {
        flexDirection: "row",
        borderLeftWidth: 4,
        borderColor: "#000",
        padding: 5,
        overflow: "hidden",
        width: "auto",
        height: "auto",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: COLORS.orange,
        borderTopRightRadius: 10,
    },
    blockContainerEnd: {
        flexDirection: "row",
        borderLeftWidth: 4,
        borderColor: "#000",
        padding: 5,
        overflow: "hidden",
        width: "auto",
        height: "auto",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: COLORS.orange,
        borderBottomRightRadius: 10,
    },
    blockText: {
        flexDirection: "row",
        borderLeftWidth: 4,
        borderColor: "#000",
        padding: 5,
        gap: 10,
        paddingRight: 10,
        overflow: "hidden",
        width: "auto",
        height: "auto",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: COLORS.magenta,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    }
})