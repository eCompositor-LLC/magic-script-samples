import React from "react";
import {
  View,
  ScrollView,
  ScrollBar,
  Text,
  LinearLayout
} from "magic-script-components";

export class ExampleScrollView extends React.Component {
  render() {
    const alphabet = [
      "Alfa",
      "Bravo",
      "Charlie",
      "Delta",
      "Echo",
      "Foxtrot",
      "Golf",
      "Hotel",
      "India",
      "Juliett",
      "Kilo",
      "Lima",
      "Mike",
      "November",
      "Oscar",
      "Papa",
      "Quebec",
      "Romeo",
      "Sierra",
      "Tango",
      "Uniform",
      "Victor",
      "Whiskey",
      "X-ray",
      "Yankee",
      "Zulu"
    ];

    const aabb = {
      min: [-0.1, -0.1, -0.1],
      max: [0.1, 0.1, 0.1]
    };
    
    return (
      <View name="main-view">
        <Text
          alignment="center-center"
          text="Phonetic Alphabet"
          textAlignment="center"
          textSize={0.07}
          localPosition={[0, 0.4, 0]}
        />
        <ScrollView scrollBarVisibility="always" scrollBounds={aabb}>
          <ScrollBar length={0.6} thumbSize={0.03} orientation="vertical" />
          <LinearLayout
            defaultItemAlignment="center-left"
            defaultItemPadding={[0.01, 0.01, 0.01, 0.01]}
            orientation="vertical"
          >
            {alphabet.map((word, index) => (
              <Text
                textSize={0.05}
                key={index}
                text={`${word[0]} - ${word}`}
                textColor={"white"}
              />
            ))}
          </LinearLayout>
        </ScrollView>
      </View>
    );
  }
}