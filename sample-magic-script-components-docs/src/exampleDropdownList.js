import React from "react";
import { View, DropdownList, DropdownListItem, LinearLayout, Text } from "magic-script-components";

export class ExampleDropdownList extends React.Component {
  constructor(props) {
    super(props);

    this.stateList = [
      "New",
      "In Progress",
      "On Hold",
      "Resolved",
      "Closed",
      "Canceled"
    ];

    this.state = { selectedState: "Select" };
  }

  onSelectedStateChanged = event => {
    if (event.SelectedItems.length > 0) {
      const item = event.SelectedItems[0];
      this.setState({ selectedState: item.label });
    }
  };

  render() {
    const { selectedState } = this.state;

    return (
      <View name="main-view" localPosition={this.props.localPosition} >
        <LinearLayout
          alignment={'center-center'}
          defaultItemAlignment={'center-center'}
          defaultItemPadding={[0.03, 0.03, 0.03, 0.03]}
          orientation={'horizontal'}
        >
          <Text textSize={0.1}>State:</Text>
          <DropdownList
            textSize={0.1}
            text={selectedState}
            onSelectionChanged={this.onSelectedStateChanged}
          >
            {this.stateList.map((item, index) => (
              <DropdownListItem key={item} id={index} label={item} />
            ))}
          </DropdownList>
        </LinearLayout>
      </View>
    );
  }
}