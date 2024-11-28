import React, { useState } from 'react';
import Estilo from '../estilos/Estilo';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';


const DesbloquearScreen = ({ navigation }) => {

  const [nomeExecutante, setNomeExecutante] = useState('');
  const [matriculaExecutante, setMatriculaExecutante] = useState('');
  const [selectedValue, setSelectedValue] = useState('RTG05');

  function checarCampos() {
    if ((nomeExecutante, matriculaExecutante) !== '') {
      console.log({
        nomeExecutante,
        matriculaExecutante,
        selectedValue,
      });
      setNomeExecutante('');
      setMatriculaExecutante('');
      setSelectedValue('RTG05');
    } else {
      alert('Preencha todos os campos!');
    }
  };

  const enviando = () => {
    checarCampos();
  };


  return (
    <View style={Estilo.container}>
      <Image
        source={require('../imagens/logo.png')}
        style={Estilo.logo}
        resizeMode="contain"
      />
      <Text style={Estilo.titulo}>Desbloquear Equipamento</Text>
      <ScrollView contentContainerStyle={Estilo.formularioContainer}>

        <Text style={Estilo.rotuloTexto}>Nome do executante</Text>
        <TextInput
          style={Estilo.entradaDeTexto}
          value={nomeExecutante}
          onChangeText={setNomeExecutante}
          placeholder="Ex: Primeiro nome e último nome"
        />

        <Text style={Estilo.rotuloTexto}>Matrícula do executante</Text>
        <TextInput
          style={Estilo.entradaDeTexto}
          value={matriculaExecutante}
          onChangeText={setMatriculaExecutante}
          placeholder="Ex: 1234"
          keyboardType="numeric"
        />

        <Text style={Estilo.rotuloTexto}>Esolha o equipamento</Text>
        <Picker
          selectedValue={selectedValue}
          style={Estilo.listaSuspensa}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          {[
            'RTG05', 'RTG06', 'RTG07', 'RTG08', 'RTG09',
            'RTG10', 'RTG11', 'RTG12', 'RTG13', 'RTG14',
            'RTG15', 'RTG16', 'PTN03', 'PTN04', 'PTN05',
            'PTN06', 'PTN07'
          ].map((value) => (
            <Picker.Item label={value} value={value} key={value} />
          ))}
        </Picker>

        <TouchableOpacity style={Estilo.botaoGeral} onPress={enviando}>
          <Text style={Estilo.botaoGeralTexto}>Desbloquear</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DesbloquearScreen;