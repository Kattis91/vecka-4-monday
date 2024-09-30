import { Image, StyleSheet, Platform, View, Text, FlatList, TextInput, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { FancyPersonRow } from '../FancyPersonRow';


export default function HomeScreen() {

  const [people, setPeople] = useState ([{
      firstname: "Arne", 
      lastname: "Arnesson"
    },{
      firstname: "Bengt",
      lastname: "Bengtsson"
    }, {
      firstname: "Cecilia",
      lastname: "Ceciliasson"
    }, {
      firstname: "David",
      lastname: "Davidsson"
    }
  ]);

  const [myname, setMyname] = useState("");
  const [mylastname, setMylastname] = useState("");
  const [myerrormessage, setMyerrormessage] = useState("");

  function addPerson () {
    console.log(myname);

    if (myname == "") {
      // Inget förnamn
      setMyerrormessage("Inget förnamn");
      return;
    }

    if (mylastname == "") {
      // Inget efternamn
      setMyerrormessage("Inget efternamn")
      return;
    }

    setMyerrormessage("");
  
    /*
    people.push({
      firstname: "Erik",
      lastname: "Eriksson"
    });
    */

    setPeople([...people, {firstname: myname, lastname: mylastname }]);

    setMyname("");
    setMylastname("");

    console.log(people);

  }
  
  return (
    <View style={{ backgroundColor: "blue", flex: 1 }}> 

      <View style={{ backgroundColor: "red", height: 100 }}></View>

      {myerrormessage != "" &&
      <Text style={nicestyle.nicetext}>{myerrormessage}</Text>
      }

      <TextInput 
        onChangeText={setMyname} 
        value={myname} 
        style={{ backgroundColor: "white", height: 50 }}/>

      <TextInput 
        onChangeText={setMylastname} 
        value={mylastname} 
        style={{ backgroundColor: "white", height: 50 }}/>

      <Button title='Add' onPress={addPerson} />
      

      <FlatList 
        data={people} 
        renderItem={({item}) =>  <FancyPersonRow firstname={ item.firstname } lastname={ item.lastname }/> }
      />

    </View>
  );
}

export const nicestyle = StyleSheet.create({
  nicetext: {
    fontSize: 25,
    color: "black"
  }
})

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
