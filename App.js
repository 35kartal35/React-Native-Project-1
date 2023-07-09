import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Mehmet Özdemir</Text>
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{width: 350, height: 300, marginTop: 10}}
        />
        <Image
        
        source={{
          uri: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/06/person-at-computer.jpeg.jpg'
        }}
        style={{width: 200, height: 200, margin: 10,}}
        />
      <StatusBar style="auto" />

      <Text
      style={{
        margin: 10,
      }}
      >React && React-Native Developer</Text>
      <TextInput
        style={{
          height: 30,
          padding: 5,
          margin: 10,
          borderColor: 'gray',
          borderWidth: 3,
        }}
        defaultValue="Burayı doldurabilirsiniz!..."
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
