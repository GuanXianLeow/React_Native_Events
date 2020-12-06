
import * as React from "react";
import { View, StyleSheet, Image,Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  
  Icon,
  Accordion,
} from "native-base";



function EventsHomeScreen({navigation}) {
  return (
    <View style={{ padding: 10 }}>
      
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>Christmas Events</Text>
            <Text>
            In traditional lore, Santa Claus's sleigh is led by eight reindeer: Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Donder.
            
            </Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://i.pinimg.com/564x/a9/a2/ac/a9a2ace35a2ca64088c88e68eb257ba1.jpg",
            }}
            style={{ height: 350, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>
      <Button
       onPress={() => navigation.navigate("FirstEvents")}
       title="First Events"></Button>
   
    </View>
  );
}


function FirstEventsScreen({navigation}) {
  return (
    <View style={{ padding: 10 }}>
     
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>Let it's snow.</Text>
            <Text>
            Let it snow, let it snow, let it snow.
            </Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://i.pinimg.com/originals/5a/81/b7/5a81b763f14769af1d562adf24c814a8.jpg",
            }}
            style={{ height: 350, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>
      <Button
       onPress={() => navigation.navigate("SecondEvents")}
       title="Second Events"></Button>
   
    </View>
  );
}

function SecondEventsScreen({navigation}) {
  return (
    <View style={{ padding: 10 }}>
      
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>Exchange Gift With Reindeer </Text>
            <Text>
              I only work ones a year.
            </Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://i.pinimg.com/564x/ea/7f/06/ea7f066b3ff7f074c859f1fbb2186055.jpg",
            }}
            style={{ height: 390, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>
      <Button
       onPress={() => navigation.navigate("EventsHome")}
       title="Events Home"></Button>
   
    </View>
  );
}


const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen name="EventsHome" component={EventsHomeScreen} />
      <Stack.Screen name="FirstEvents" component={FirstEventsScreen} />
      <Stack.Screen name="SecondEvents" component={SecondEventsScreen} />

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
