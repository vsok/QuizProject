import React, { Component } from 'react';
import {AppRegistry, Text, View, TouchableWithoutFeedback} from 'react-native';

export default class ToggleButton extends Component {
	constructor(props) {
		super(props);	
		this.state ={
		  status: false
		}
	}
	onPressButton(status) {
		this.props.onPressButton(!this.state.status);
		this.setState({ status: !this.state.status});
	}
	render() {
	  return (
		<TouchableWithoutFeedback onPress={() => this.onPressButton(this.state.status)}>
        <View style={{ margin:10, paddingTop :10, paddingBottom: 10, paddingRight: 20, paddingLeft: 20, backgroundColor: this.state.status ? "orange": "#bdbdbd", borderRadius:20}}>
          <Text style={{color: this.state.status ? "white" : "#696969", fontWeight: "bold"}}>{this.props.text}</Text>
        </View>
      </TouchableWithoutFeedback>
	  );
	}
}
AppRegistry.registerComponent('QuizProject', () => ToggleButton);