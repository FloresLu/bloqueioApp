import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ed6c0c',
        justifyContent: 'center',
      },
      formularioContainer: {
        padding: 20,
        alignItems: 'center',
      },
      logo: {
        width: 250, // Adjust the width as needed
        height: 250, // Adjust the height as needed
        marginBottom: 0, // Space between image and form
      },

      rotuloTexto: {
        marginVertical: 10,
        color: '#fff',
        fontSize: 18,
      },
      entradaDeTexto: {
        width: '100%',
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 0,
        color: '#fff',
      },

      listaSuspensa: {
        width: '50%',
        borderColor: '#fff',
        padding: 0,
        marginBottom: 0,
        color: '#fff',
      },
      botaoGeral: {
        backgroundColor: '#fff',
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

})