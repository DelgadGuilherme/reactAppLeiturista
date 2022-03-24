import Camera from '../Camera';
import { useState } from "react";
import { StyleSheet,TextInput, View, Text, TouchableOpacity, Modal } from "react-native";

export default function Form() {
    
    const [matricula, setMatricula] = useState(null);
    const [codigo, setCodigo] = useState(null);
    const [situacao, setSituacao] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    function camera() {
      setIsOpen(true);
    }
    return (
        <View>
            <Text>Matricula</Text>
            <TextInput></TextInput>
            <Text>Codigo</Text>
            <TextInput></TextInput>
            <Text>Situacao</Text>
            <TextInput></TextInput>
            <TouchableOpacity onPress={ () => camera()}>
                <Text>Tirar foto</Text>
            </TouchableOpacity>
            <Modal transparent={true} visible={isOpen}>
                <Camera />
            </Modal>
        </View>
    )
}