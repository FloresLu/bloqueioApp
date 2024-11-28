import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      },
      formularioContainer: {
        padding: 20,
        alignItems: 'center',
      },
      logo: {
        width: 250, 
        height: 250, 
        marginBottom: 0,
      },

      rotuloTexto: {
        marginVertical: 10,
        color: '#000000',
        fontSize: 18,
      },
      titulo:{
        fontSize: 30,
        color: '#000000',
        fontWeight:'bold',
      },
      entradaDeTexto: {
        width: '100%',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 0,
        color: '#000000',
      },

      listaSuspensa: {
        width: '70%',
        borderColor: '#ed6c0c',
        padding: 0,
        marginBottom: 0,
        color: '#ed6c0c',
      },
      botaoGeral: {
        backgroundColor: '#ed6c0c',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 0,
      },
      botaoGeralTexto: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
      },
      botaoPrincipal: {
        backgroundColor: '#ed6c0c',
        marginTop: 40,
        borderRadius: 5,
        padding: 40,
      },

})