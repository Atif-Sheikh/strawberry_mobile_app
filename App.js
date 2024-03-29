import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Main from './src/Main';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyAUQF6YYuVuT1jdhwdVFmwCIthOG0f2io4",
    authDomain: "campusrecuirtment.firebaseapp.com",
    databaseURL: "https://strawberry-eca3e.firebaseio.com/",
    projectId: "strawberry-eca3e",
    storageBucket: "campusrecuirtment.appspot.com",
    messagingSenderId: "874600307382"
};
firebase.initializeApp(config);

const App = () => {
  return (
    <Fragment>
      <Main />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
