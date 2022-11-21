import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Header from './app/components/Header'

export default function App() {
  return (
    <>
      {/* <SafeAreaProvider style={styles.container}> */}
      <SafeAreaProvider>
        <SafeAreaView>
          {/* <Text>Open up App.tsx to start working on your app! 2</Text> */}
          <Header />
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
