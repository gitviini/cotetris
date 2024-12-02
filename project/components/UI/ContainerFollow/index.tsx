import React from "react";
import { View, Pressable} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ContainerFollow({icon,choose,bg,children}:{icon:"map"|"text"|"image",choose:number,bg:string,children:React.ReactNode}){
    return(
        <Pressable style={{
            width:(choose ? "80%" : "10%"),
            height:"100%",
            backgroundColor:bg,
            padding:5,
            overflow:"hidden",
        }}>
            <Ionicons name={icon} size={25} style={{marginBottom:10}}/>
            {children}
        </Pressable>
    )
}