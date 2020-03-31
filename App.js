import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Appbar, Button } from 'react-native-paper';
import DisplayLove from './components/DisplayLove';

class App extends Component {
  state = {
    fname: "",
    sname: "",
    result: "Loading"
  }
  onSubmit = () => {
    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`, {
      headers: {
        "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
        "x-RapidAPI-Key": "a25415b335mshe5db747894be133p19a151jsn48d3a0fb5e39"
      }
    }
    )
      .then(data => data.json())
      .then(data2 => {
        this.setState({
          result: data2
        });
        console.log("I Pressed",this.state.result)
      }
      )
      this.setState({
        fname:"",
        sname:""
      })
      console.log("Okay")
  }
  render() {
    return (
      <View style={styles.container}>
        <Appbar.Header>
          <Appbar.Content
            title="Love % Calculator"
            subtitle=""
            style={{ alignItems: "center" }}
          />
        </Appbar.Header>
        <TextInput
          label='Your Name'
          value={this.state.fname}
          onChangeText={text => this.setState({ fname: text })}
          style={{ marginTop: 10 }}
        />
        <TextInput
          label='Partner Name'
          value={this.state.sname}
          onChangeText={text => this.setState({ sname: text })}
          style={{ marginTop: 10 }}
        />
        <Button icon={{ uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400' }}
          mode="contained" style={{ margin: 10, padding: 6 }}
          onPress={this.onSubmit}>
          Calculate
        </Button>
        <DisplayLove data={this.state.result} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

});
export default App