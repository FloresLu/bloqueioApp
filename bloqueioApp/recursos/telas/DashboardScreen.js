import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Estilo from '../estilos/Estilo';

const DashboardScreen = ({ navigation }) => {
  const equipamentos = [
    "RTG05", "RTG06", "RTG07", "RTG08", "RTG09",
    "RTG10", "RTG11", "RTG12", "RTG13", "RTG14",
    "RTG15", "RTG16", "PTN03", "PTN04", "PTN05",
    "PTN06", "PTN07"
  ];

  return (
    <View style={Estilo.container}>
      <ScrollView contentContainerStyle={Estilo.containerCartao}>
        {equipamentos.map((equipamento) => (
          <View key={equipamento} style={Estilo.cartao}>
            <Text style={Estilo.tituloCartao}>{equipamento}</Text>
            <Text style={Estilo.textoCartao}>Nome: </Text>
            <Text style={Estilo.textoCartao}>Objetivo: </Text>
            <Text style={Estilo.textoCartao}>Data: {new Date().toLocaleDateString()}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;