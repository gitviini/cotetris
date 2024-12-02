import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ContainerFollow({icon,choose,bg,children}:{icon:"map"|"text"|"image",choose:boolean,bg:string,children:React.ReactNode}){
    return(
        <View style={{
            width:(choose ? "80%" : "10%"),
            height:"100%",
            backgroundColor:bg,
            padding:10,
            overflow:"hidden",
        }}>
            <Ionicons name={icon} size={25}/>
            {children}
        </View>
    )
}