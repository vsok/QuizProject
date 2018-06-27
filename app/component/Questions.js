import React, { Component } from 'react';
import {AppRegistry, Text, View, StyleSheet} from 'react-native';
import ToggleButton from './ToggleButton';

function shuffleArray(array) {
	let i = array.length - 1;
	for (; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
  	}
	return array;
}
export default class Questions extends Component {
	constructor(props) {
		super(props);
		this.answer = '';
	}
	handleAnswerClicked(answer, index, status) {
		if(answer == this.props.correct) {
			if(status) {
				this.handleStatusChange(status);
			}
			if(status == false) {
				this.handleStatusChange(status);
			}
		
		}
	
	}
	
	componentWillMount() {
		this.answer = shuffleArray(this.props.data.answers);
	}
	handleStatusChange = (data) => {
		this.props.onSelectStatus(data);            
	}
	render() {
	  return (
			<View>
			{
				this.answer.map((answer, index) => {
					return(
						<View key={answer.toString()}>
							<ToggleButton onPressButton={(status) => {this.handleAnswerClicked(answer,index,status)}} text={answer}  />
						</View>
					)
				})
			}
			</View>
	  );
	}
}

const styles = StyleSheet.create({
	container: {
	  backgroundColor:'#ffffff',
		flex:1,
		padding:10,
	},
	heading: {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'green'
	}
  });
AppRegistry.registerComponent('QuizProject', () => Questions);