import React, { Component } from 'react';
import { Text, 
View,
//Nota:1 la escritura correcta es StyleSheet y le falto importar TouchableOpacity
StyleSheet,
SafeAreaView,
Platform,
 StatusBar,
 TouchableOpacity} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
          /*Nota:3 aqui su estilo se llama "container" y en su linea 30 se llama "conteiner" y tambien ambas son llaves y usted abrio con llave y cerro con corchete*/
        <View style={styles.container}>
   
        <SafeAreaView style={styles.droidSafeArea}/>

        <View style={styles.titleBar}>
            <Text style={styles.titleText}>Aplicacion Rastreador de la EEI</Text>
           </View>
        <TouchableOpacity style={styles.routeCard}>
        <Text style={styles.routeText}>Localización de la EEI</Text>
        </TouchableOpacity>
</View> 
                )
            }
        }
//Nota:1 la escritura correcta es StyleSheet                
const styles=StyleSheet.create({
  //Nota:3
container:{
  flex:1
},
//Nota:2
droidSafeArea:{
 narginTop:Platform.OS==="android"? StatusBar.
 currentHeigt:0
},//Nota: le falto los puntitos :
titleBar:{
flex: 0.15,
 justifyContent: "center",
  alignItems: "center"
},

titleText:{
  fontSize:40,
  fontweight:"bold",
  color:"black",
},
routeCard:{
flex: 0.25,
marginleft:50,
marginRight:50,
marginTop:50,
   borderRadius:30,
    backgroundColor:"yellow"
},
 routeText:{
    fontSize:25,
    marginLeft:50,
    fontWeight:"bold",
    color:"black",
    marginTop:25,
    paddingLeft:30
  }
//Nota:4 el cierre de styles es con });
});
