import Draggable from "react-native-draggable";
import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import * as ImageManipulator from "expo-image-manipulator";
import { Asset } from "expo-asset";

export default ({ squareSize, initX, initY, squareX, squareY }) => {
  const [ready, setReady] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const image = Asset.fromModule(require("./images/earth.jpg"));
      const croppedImage = await ImageManipulator.manipulateAsync(
        image.localUri || image.uri,
        [
          {
            resize: {
              width: squareSize * 3,
              height: squareSize * 3,
            },
          },
          {
            crop: {
              originX: squareSize * squareX,
              originY: squareSize * squareY,
              width: squareSize,
              height: squareSize,
            },
          },
        ],
        { compress: 1, format: ImageManipulator.SaveFormat.JPG }
      );
      setImage(croppedImage);
      setReady(true);
    })();
  }, [squareX, squareY]);

  const _renderImage = () => {
    return (
      <Image
        source={{ uri: image.localUri || image.uri }}
        style={{
          width: squareSize,
          height: squareSize,
          resizeMode: "contain",
        }}
      />
    );
  };

  return (
    <Draggable x={initX * squareSize} y={initY * squareSize}>
      {ready && image && _renderImage()}
    </Draggable>
  );
};
