
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
    content: "Christmas Events",
  },
  {
    title: "Who is this by?",
    content: "Red nose reindeer.",
  },
  {
    title: "Why is this?",
    content: "Reindeer who only work ones a year",
  },
];

function HomeMainScreen() {
  return (
    <View style={{ padding: 10 }}>
      <Text style={styles.titleText}>Christmas 2020</Text>
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
                "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e8c0cac-ecd2-4e37-ba25-f3cfc79d9fbc/d6zqkyo-8db6b56f-b815-4af5-888d-67d9877333a6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvM2U4YzBjYWMtZWNkMi00ZTM3LWJhMjUtZjNjZmM3OWQ5ZmJjXC9kNnpxa3lvLThkYjZiNTZmLWI4MTUtNGFmNS04ODhkLTY3ZDk4NzczMzNhNi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.oXREx2AT3KGF5HIdBz-RfX444tyNfVFtSnLjP01AIZE",
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


