import React, { Component } from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';

export default class Results extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var percent = (this.props.score / this.props.length * 100);
		if(this.props.score > 0) {
			return (
				<View style={styles.container}>
					<Text style={styles.headingCorrect}>You did awesome! You got {percent}%</Text>
				</View>
				);
		} else {
			return (
				<View style={styles.container}>
					<Text style={styles.headingWrong}>You did wrong! You got {percent}%</Text>
				</View>
				);
		}
	 
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor:'#ffffff',
		flex:1,
		padding:10,
	},
	headingCorrect: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'green'
	},
	headingWrong: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'red'
	},
  });
AppRegistry.registerComponent('QuizProject', () => Results);