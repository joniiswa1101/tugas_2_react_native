import React, { Component } from "react";
import { View, TextInput, Text } from "react-native";

class Header extends Component{
  constructor() {
    super();
    this.state = {
      // umur: this.props.usia,
      inputan: "",
      inputan2: ""
    };
  }

  handleInput = (event) => {
    this.setState({ inputan:event});
  };

  handleInput2 = (event2) => {
    this.setState({ inputan2:event2});
  };

  render(){
    return (
      <View>
        <Text>{this.state.umur}</Text>
        <TextInput
          onChangeText={this.handleInput}
          placeholder="Masukkan Nama Barang"
          value={this.state.inputan}
        />

        <TextInput
          onChangeText={this.handleInput2}
          placeholder="Masukkan Jumlah Barang2"
          keyboardType="numeric"
          value={this.state.inputan2}
        />
        <Text>=========== Total Belanja ============</Text>
        <Text>Nama Barang: {this.state.inputan}</Text>
        <Text>Jumlah Barang: {this.state.inputan2}</Text>
      </View>
    );
  }
}

export default Header;
