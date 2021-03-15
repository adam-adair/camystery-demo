import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import DragImage from "./DragImage";

export default ({ squareSize }) => {
  const [rand, setRand] = useState(shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]));

  const shufflePics = (ev) => {
    ev.preventDefault();
    const _rand = [...rand];
    shuffle(_rand);
    setRand(_rand);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        alignSelf: "center",
        backgroundColor: "slateblue",
        width: "95%",
        paddingBottom: 150,
      }}
    >
      {rand.map((num, ix) => {
        return (
          <DragImage
            key={ix}
            initX={ix % 3}
            initY={Math.floor(ix / 3)}
            squareSize={squareSize}
            squareX={num % 3}
            squareY={Math.floor(num / 3)}
            reset={{ reset: true }}
          />
        );
      })}
      <Text
        style={{
          alignSelf: "center",
          color: "white",
          fontSize: 20,
          paddingBottom: 20,
        }}
      >
        Drag the pictures!
      </Text>
      <Button
        title="Reset"
        onPress={shufflePics}
        style={{
          color: "white",
          backgroundColor: "red",
        }}
      />
    </View>
  );
};

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
