import React from "react";
import { View, Pressable} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GestureResponderEvent } from "react-native";

export default function ContainerFollow({callback,choose,icon,bg,children}:{callback:((event: GestureResponderEvent) => void),choose:number,icon:"map"|"text"|"image",bg:string,children:React.ReactNode}){
    return(
        <Pressable style={{
            width:(choose ? "80%" : "10%"),
            height:"100%",
            backgroundColor:bg,
            padding:5,
            overflow:"hidden",
        }}
        onPress={callback}>
            <Ionicons name={icon} size={25} style={{marginBottom:10}}/>
            {children}
        </Pressable>
    )
}