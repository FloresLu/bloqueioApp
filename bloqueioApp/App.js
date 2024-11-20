import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Estilo from './recursos/estilos/Estilo';

const App = () => {
  const [nomeExecutante, setNomeExecutante] = useState('');
  const [matriculaExecutante, setMatriculaExecutante] = useState('');
  const [solicitanteBloqueio, setSolicitanteBloqueio] = useState('');
  const [tagItemBloqueado, setTagItemBloqueado] = useState('');
  const [objetivoBloqueio, setObjetivoBloqueio] = useState('');
  const [dataHora, setDataHora] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [selectedValue, setSelectedValue] = useState('RTG05');

  function checarCampos(){
    if((nomeExecutante, matriculaExecutante, solicitanteBloqueio, tagItemBloqueado, objetivoBloqueio, dataHora) !== ''){
      console.log({
      nomeExecutante,
      matriculaExecutante,
      solicitanteBloqueio,
      tagItemBloqueado,
      objetivoBloqueio,
      dataHora,
      selectedValue,
    });
      setNomeExecutante('');
      setMatriculaExecutante('');
      setSolicitanteBloqueio('');
      setTagItemBloqueado('');
      setObjetivoBloqueio('');
      setDataHora('');
      setSelectedValue('RTG05');
      } else{
        alert('Preencha todos os campos!');
      }
  };

  const enviando = () => {
    checarCampos();
  };

  const showDatePicker = () => {
    setShowPicker(true);
  };

  const onChangeDate = (selectedDate) => {
    const currentDate = selectedDate || dataHora;
    setShowPicker(false);
    setDataHora(currentDate);
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

        <Text style={Estilo.rotuloTexto}>Solicitante do bloqueio</Text>
        <TextInput
          style={Estilo.entradaDeTexto}
          value={solicitanteBloqueio}
          onChangeText={setSolicitanteBloqueio}
          placeholder="Ex: Primeiro nome e último nome"
        />

        <Text style={Estilo.rotuloTexto}>Tag do item bloqueado</Text>
        <TextInput
          style={Estilo.entradaDeTexto}
          value={tagItemBloqueado}
          onChangeText={setTagItemBloqueado}
          placeholder="EX: =11-f16, =11-f17"
        />

        <Text style={Estilo.rotuloTexto}>Objetivo do bloqueio</Text>
        <TextInput
          style={Estilo.entradaDeTexto}
          value={objetivoBloqueio}
          onChangeText={setObjetivoBloqueio}
          placeholder="EX: Impedir de ligar RTG"
        />

<Text style={Estilo.rotuloTexto}>Data e Hora</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={Estilo.entradaDeTexto}>
            {dataHora.toLocaleString()}
          </Text>
        </TouchableOpacity>

        {showPicker && (
          <DateTimePicker
            value={dataHora}
            mode="datetime"
            display="default"
            onChange={onChangeDate}
          />
        )}

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
