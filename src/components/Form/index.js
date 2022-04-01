import TakePicture from '../Camera';
import { useState } from "react";
import styles from "../../Style";
import { StyleSheet,TextInput, View, Text, TouchableOpacity, Modal, Picker, Alert } from "react-native";

export default function Form() {
    
    const [matricula, setMatricula] = useState(null);
    const [codigo, setCodigo] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("default");

    function validar() {
        if(matricula != null && selectedValue != "default" && codigo != null) {
            setIsOpen(true)
        } else {
            Alert.alert('Todos os campos devem ser preenchidos!')
        }
    }

    function confirmarEnvio() {
        setIsOpen(false)
        setMatricula(null)
        setCodigo(null)
        setSelectedValue("default")
    }
    
    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.text}>Matricula:</Text>
                <TextInput 
                    style={styles.textInput} 
                    onChangeText={setMatricula}
                    value={matricula}
                />
                <Text style={styles.text}>Codigo:</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={setCodigo}
                    value={codigo}
                />
                <Text style={styles.text}>Situacao:</Text>
                <Picker
                    style={styles.selectInput}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >   
                    <Picker.Item label="Porfavor Selecione uma opcao:" value="default" />
                    <Picker.Item label="Leitura Implausivel" value="Leitura Implausivel" />
                    <Picker.Item label="Releitura" value="Releitura" />
                    <Picker.Item label="Situação de Risco" value="Situacao de Risco" />
                    <Picker.Item label="Suspeita de Fraude" value="Suspeita de Fraude" />
                    <Picker.Item label= "Impedimento de leitura" value="Impedimento de leitura" />
                </Picker>
                <TouchableOpacity  style={styles.button} onPress={ () => validar()}>
                    <Text style={styles.buttonText}>Tirar foto</Text>
                </TouchableOpacity>
            </View>
            <Modal transparent={true} visible={isOpen}>
                <TakePicture 
                    matricula={matricula}
                    codigo={codigo}
                    situacao={selectedValue}
                    confirmarEnvio={confirmarEnvio}
                />
            </Modal>
        </View>
    )
}