import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Text,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Button,
  Icon,
  Accordion,
} from "native-base";

const dataArray = [
  {
    title: "What is this?",
    content: "Exactly what the title says. A potato exhibition!",
  },
  {
    title: "Who is this by?",
    content: "The International Society of Potato Growers.",
  },
  {
    title: "Why is this?",
    content: "Because potatoes! Wheee!",
  },
];

function HomeMainScreen() {
  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.titleText}>International Potato Day</Text>
      <Card style={styles.card}>
        <CardItem>
          <Body>
            <Text style={styles.cardTitle}>Welcome</Text>
            <Text>
              Thanks for downloading our app! Here, you'll find all kinds of
              information about our upcoming event. It'll be great!
            </Text>
          </Body>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri:
                "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg",
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
      </Card>

      <Accordion style={styles.accordion} dataArray={dataArray} expanded={0} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeMainScreen} />
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


