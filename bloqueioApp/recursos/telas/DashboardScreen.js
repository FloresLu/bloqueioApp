import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Estilo from '../estilos/Estilo';

const DashboardScreen = () => {
  const [cartoes, setCartoes] = useState([]);

  useEffect(() => {
    const carregarCartoes = async () => {
      const cartoesExistentes = await AsyncStorage.getItem('cartoes');
      if (cartoesExistentes) {
        setCartoes(JSON.parse(cartoesExistentes));
      }
    };

    carregarCartoes();
  }, []);

  return (
    <View style={Estilo.container}>
      <ScrollView>
        {cartoes.map((cartao, index) => (
          <View key={index} style={[Estilo.cartao, index === cartoes.length - 1 && { marginBottom: 100 }]}>
            <Text style={Estilo.tituloCartao}>{cartao.selectedValue}</Text>
            <Text style={Estilo.cartaoTexto}>Nome do Executante:{cartao.nomeExecutante}</Text>
            <Text style={Estilo.cartaoTexto}>Objetivo do Bloqueio: {cartao.objetivoBloqueio}</Text>
            <Text style={Estilo.cartaoTexto}>Data do Bloqueio: {cartao.dataBloqueio}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;