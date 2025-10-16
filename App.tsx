import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text>Hello, I'm Dhruvanshi!</Text>

      </View>

      <View style={styles.content}>
        <Text style={styles.greeting}>Hello, I’m Dhruvanshi!</Text>
        <Text style={styles.info}>Student ID: N12345678</Text>
        <Text style={styles.info}>Program: Computer Programming</Text>

        <View style={styles.goals}>
          <Text style={styles.sectionTitle}>My Course Goals:</Text>
          <Text style={styles.goal}>• Learn React Native fundamentals</Text>
          <Text style={styles.goal}>• Build cross-platform mobile apps</Text>
          <Text style={styles.goal}>• Master state management with Redux</Text>
          <Text style={styles.goal}>• Deploy apps to app stores</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  header: {
    backgroundColor: '#4B9CD3',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    fontSize: 16,
    marginBottom: 6,
  },
  goals: {
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  goal: {
    fontSize: 16,
    marginLeft: 8,
  },
});

export default App;
