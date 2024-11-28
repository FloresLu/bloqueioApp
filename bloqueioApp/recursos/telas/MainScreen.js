// c:\Users\flore\Documents\Faculdade\bloqueioApp\bloqueioApp\recursos\telas\MainScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Estilo from '../estilos/Estilo';

const MainScreen = ({ navigation }) => {
  return (
    <View style={Estilo.container}>
      <Image
        source={require('../imagens/logo.png')}
        style={Estilo.logo}
        resizeMode="contain"
      />
      <TouchableOpacity style={Estilo.botaoPrincipal} onPress={() => navigation.navigate('Bloquear')}>
        <Text style={Estilo.botaoGeralTexto}>Bloquear Equipamento</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Estilo.botaoPrincipal} onPress={() => navigation.navigate('Desbloquear')}>
        <Text style={Estilo.botaoGeralTexto}>Desbloquear Equipamento</Text>
      </TouchableOpacity>
      <TouchableOpacity style={Estilo.botaoPrincipal}>
        <Text style={Estilo.botaoGeralTexto}>Radar Bloqueio</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainScreen;