import { Image, StyleSheet, Text, View } from 'react-native';

const ULRow = ({text}) => (<View style={{flexDirection: 'row'}}>
  <Text>{'\u2023'}</Text>
  <Text style={{
    paddingLeft: 5,
    textAlign: 'justify'
  }}>{text}</Text>
</View>);
const OLRow = ({index, text}) => (<View style={{flexDirection: 'row'}}>
  <Text>{index}</Text>
  <Text style={{paddingLeft: 5,
    color: "#000",
    textAlign: "justify"
  }}>{text}</Text>
</View>)
const Receta = ({nombre, img, ingredientes, pasos}) => {
  return <View style={styles.container}>
    <Text style={styles.title}>{nombre}</Text>
    <Image source={img} style={styles.image} />
    <View style={styles.section}>
      <Text style={styles.subtitle}>Ingredientes: </Text>
      {ingredientes.map((ingrediente) => <ULRow text={ingrediente} key={`recipe-ingredient-${ingrediente}`}/>)}
    </View>
    <View style={styles.section}>
      <Text style={styles.subtitle}>Preparación:</Text>
      {pasos.map((paso, index) => <OLRow index={index + 1} text={paso} key={`recipe-step-${paso}`}/>)}
    </View>
  </View>
}
const styles = StyleSheet.create({
    title: {
        margin: 'auto',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20
    },
    subtitle: {
        margin: 'auto',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 15
    },
    image: {

        width: 250,
        height: 250
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    section: {
        marginTop: 50,
        width: '90%',
    }
});
export default Receta;