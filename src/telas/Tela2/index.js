
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Tela3({navigation}) {
    return(
        <View style={styles.container}>
            <Text> Voltar tela 1 </Text>
            <Button
            title="tela 1"
            onPress={() => navigation.navigate('Tela1')}>
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
