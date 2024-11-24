
import { Text } from "react-native"
import { TextProps } from "react-native"

const H1 = ({style,...rest}:TextProps) =>{
    return (<Text {...rest}/>)
}

export default H1