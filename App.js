import * as React from "react";
import { useWindowDimensions, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Puzzle from "./Puzzle";

const Stack = createStackNavigator();

const App = () => {
  const { width, height } = useWindowDimensions();
  const squareSize = (0.95 * Math.min(height, width)) / 3;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Camystery">
          {(props) => <Puzzle {...props} squareSize={squareSize} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
