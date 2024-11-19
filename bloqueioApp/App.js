import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Estilo from './recursos/estilos/Estilo';

const App = () => {
  const [nomeExecutante, setNomeExecutante] = useState('');
  const [matriculaExecutante, setMatriculaExecutante] = useState('');
  const [solicitanteBloqueio, setSolicitanteBloqueio] = useState('');
  const [tagItemBloqueado, setTagItemBloqueado] = useState('');
  const [objetivoBloqueio, setObjetivoBloqueio] = useState('');
  const [dataHora, setDataHora] = useState('');
  const [selectedValue, setSelectedValue] = useState('RTG05');

  const enviando = () => {
    console.log({
      nomeExecutante,
      matriculaExecutante,
      solicitanteBloqueio,
      tagItemBloqueado,
      objetivoBloqueio,
      dataHora,
      selectedValue,
    });
  };

  return(
    <View style={Estilo.container}>
      <ScrollView contentContainerStyle={Estilo.formularioContainer}>
        <Image
          source={require('./assets/logo.png')}
          style={Estilo.logo}
          resizeMode="contain"
        />

        <Text style={Estilo.rotuloTexto}>Nome do executante</Text>
        <TextInput
          style={Estilo.entradaDeTexto}
          value={nomeExecutante}
          onChangeText={setNomeExecutante}
        />

        <Text style={Estilo.rotuloTexto}>Matrícula do executante</Text>
        <TextInput
          style={Estilo.entradaDeTexto}
          value={matriculaExecutante}
          onChangeText={setMatriculaExecutante}
          keyboardType="numeric"
        />

        <Text style={Estilo.rotuloTexto}>Solicitante do bloqueio</Text>
        <TextInput
          style={Estilo.entradaDeTexto}
          value={solicitanteBloqueio}
          onChangeText={setSolicitanteBloqueio}
        />

        <Text style={Estilo.rotuloTexto}>Tag do item bloqueado</Text>
        <TextInput
          style={Estilo.entradaDeTexto}
          value={tagItemBloqueado}
          onChangeText={setTagItemBloqueado}
        />

        <Text style={Estilo.rotuloTexto}>Objetivo do bloqueio</Text>
        <TextInput
          style={Estilo.entradaDeTexto}
          value={objetivoBloqueio}
          onChangeText={setObjetivoBloqueio}
        />

        <Text style={Estilo.rotuloTexto}>Data e hora</Text>
        <TextInput
          style={Estilo.entradaDeTexto}
          value={dataHora}
          onChangeText={setDataHora}
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
          <Text style={Estilo.botaoGeralTexto}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>

  )};

export default App;
