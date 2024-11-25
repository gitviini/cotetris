import { View, Text, Pressable } from "react-native"

import { Link } from "expo-router"

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header_default(){
    return(
        <View>
            <Ionicons name="checkmark-circle" size={32} color="green" />
        </View>
    )
}