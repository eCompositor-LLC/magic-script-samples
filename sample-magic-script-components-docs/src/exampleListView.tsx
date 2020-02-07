import React from "react";
import {
  ScrollBar,
  ListView,
  ListViewItem,
  Text
} from "magic-script-components";

export class ExampleListView extends React.Component {
  render() {
    const moons = [
      "Europa",
      "Ganymede",
      "Io",
      "Callisto",
      "Valetudo",
      "Amalthea",
      "Metis",
      "Ananke",
      "Carme"
    ];

    return (
      <ListView localPosition={[-0.15, -0.15, 0]} width={0.5} height={0.5}>
        <ScrollBar width={0.5} thumbSize={0.03} />
        {moons.map((moon, index) => (
          <ListViewItem>
            <Text key={index} textSize={0.1}>
              {moon}
            </Text>
          </ListViewItem>
        ))}
      </ListView>
    );
  }
}