import React, { useState } from 'react';
import Estilo from '../estilos/Estilo';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert,KeyboardAvoidingView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as MailComposer from 'expo-mail-composer';

const DesbloquearScreen = ({ navigation }) => {
  const [nomeExecutante, setNomeExecutante] = useState('');
  const [matriculaExecutante, setMatriculaExecutante] = useState('');
  const [selectedValue, setSelectedValue] = useState('RTG05');

  function checarCampos() {
    return nomeExecutante !== '' && matriculaExecutante !== '';
  };

  const desbloqueando = async () => {
    if (checarCampos()) {
      const cartoesExistentes = await AsyncStorage.getItem('cartoes');
      const cartoes = cartoesExistentes ? JSON.parse(cartoesExistentes) : [];

      // Verifica se o cartão existe
      const index = cartoes.findIndex(cartao => cartao.selectedValue === selectedValue);
      if (index !== -1) {
        // Remove o cartão
        cartoes.splice(index, 1);
        // Atualiza o AsyncStorage
        await AsyncStorage.setItem('cartoes', JSON.stringify(cartoes));
        Alert.alert('Sucesso', 'Equipamento desbloqueado!');
        // Limpa os campos
        setNomeExecutante('');
        setMatriculaExecutante('');
        setSelectedValue('RTG05');
      } else {
        Alert.alert('Atenção', 'Equipamento não bloquado');
      }
    } else {
      Alert.alert('Atenção', 'Preencha todos os campos!');
    }
    MailComposer.composeAsync({
      recipients: ['EmailAqui@email.com'], // Substitua pelo email do destinatário
      subject: `Desbloqueio do Equipamento: ${selectedValue}`,
      body: `
        Nome do Executante: ${nomeExecutante}
        Matrícula do Executante: ${matriculaExecutante}
      `,
    }).then(() => {
      navigation.navigate('Dashboard');
    }).catch(error => {
      Alert.alert('Erro', 'Não foi possível enviar o email. Tente novamente.');
    });
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
        <Text style={Estilo.rotuloTexto}>Escolha o equipamento</Text>
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
          
        <TouchableOpacity style={Estilo.botaoGeral} onPress={desbloqueando}>
          <Text style={Estilo.botaoGeralTexto}>Desbloquear</Text>
        </TouchableOpacity>
        
      </ScrollView>
    </View>
    
  );
};

export default DesbloquearScreen;