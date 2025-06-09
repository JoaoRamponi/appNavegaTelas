
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Tela1({navigation}) {
    return(
        <View style={styles.container}>
            <Text> Tela 1 </Text>
            <Button
            title="Ir para a tela 2"
            onPress={() => navigation.navigate('Tela2')}>
            </Button>
        </View>
    )
} 


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
