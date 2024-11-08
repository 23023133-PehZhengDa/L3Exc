import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, StyleSheet, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome6";


const QuizApp = () => {
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const correctAnswers = { q1: 'Elephant', q2: 'Leopard', q3: 'Kingfisher', q4: 'Bee' };

  const handleSubmit = () => {
    let correctCount = 0;
    Object.keys(correctAnswers).forEach((key) => {
      if (answers[key] === correctAnswers[key]) {
        correctCount += 1;
      }
    });
    if (correctCount === 4) {Alert.alert(`Congrats! You have answered all of them correctly!`);}
    else if (correctCount === 3) {Alert.alert(`So close! You have answered ${correctCount} correctly`);}
    else if (correctCount === 1 || correctCount === 2) {Alert.alert(`You only got ${correctCount} correct, you got this!`);}
    else {Alert.alert(`You got none of them right...better luck next time!`);}
  };

  return (
      <ScrollView>
          <View>
              <Text></Text>
              <Text></Text>
              <Text style={styles.header}><Icon name="paw" size={50} color="orange" />Guess the Animal!<Icon name="paw" size={50} color="orange" /></Text>
          </View>
        <View style={styles.Parent}>
          <Image source={require('./img/elephant.jpg')} style={styles.image} />
          <Text style={styles.Child}>What animal is this?</Text>
          <RNPickerSelect
              onValueChange={(value) => setAnswers({ ...answers, q1: value })}
              items={[
                { label: 'Elephant', value: 'Elephant' },
                { label: 'Rhino', value: 'Rhino' },
                { label: 'Lion', value: 'Lion' },
              ]}
          />
        </View>


        <View style={styles.Parent}>
          <Image source={require('./img/leopard.jpg')} style={styles.image} />
          <Text style={styles.Child}>What animal is this?</Text>
          <RNPickerSelect
              onValueChange={(value) => setAnswers({ ...answers, q2: value })}
              items={[
                { label: 'Cheetah', value: 'Cheetah' },
                { label: 'Leopard', value: 'Leopard' },
                { label: 'Tiger', value: 'Tiger' },
              ]}
          />
        </View>

        {/* Question 3 */}
        <View style={styles.Parent}>
          <Image source={require('./img/kingfisher.jpg')} style={styles.image} />
          <Text style={styles.Child}>What animal is this?</Text>
          <RNPickerSelect
              onValueChange={(value) => setAnswers({ ...answers, q3: value })}
              items={[
                { label: 'Parrot', value: 'Parrot' },
                { label: 'Stork', value: 'Stork' },
                { label: 'Kingfisher', value: 'Kingfisher' },
              ]}
          />
        </View>

          <View style={styles.Parent}>
              <Image source={require('./img/bee.jpg')} style={styles.image} />
              <Text style={styles.Child}>What animal is this?</Text>
              <RNPickerSelect
                  onValueChange={(value) => setAnswers({ ...answers, q4: value })}
                  items={[
                      { label: 'Bee', value: 'Bee' },
                      { label: 'Butterfly', value: 'Butterfly' },
                      { label: 'Mosquito', value: 'Mosquito' },
                  ]}
              />
          </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text>SUBMIT ANSWERS</Text>
        </TouchableOpacity>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'monospace',
        backgroundColor: 'green'
    },
      image: {
        width: 350,
        height: 200,
          alignSelf: 'center',
      },
      submitButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        alignItems: 'center',
      },
        Parent: {
        alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'Grey',
            marginBottom: 5,
            marginTop: 5,
            maxWidth: 400
        },
    Child: {
        textAlign: 'center',
        borderWidth: 2,
        fontSize: 24,
        backgroundColor: "orange"
    }
});

export default QuizApp;
