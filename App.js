import React from 'react';
import { FlatList, 
  AppRegistry, 
  View, 
  Text,
  StyleSheet, 
  Dimensions, 
  ActivityIndicator, 
  TouchableOpacity, 
  AsyncStorage,
  StatusBar,
  ScrollView } from 'react-native';
import Results from './app/component/Results';
import ToggleButton from './app/component/ToggleButton';
import Questions from './app/component/Questions';

const { width, height } = Dimensions.get('window');

const jsonData = {
  questions: [
      {
          "text": "What is the name of the US president?", 
          "correct": "Trump", 
          "answers": [
            "Obama", 
            "Trump",
            "Roosvelt",
            "Putin"
          ]
      }, 
      {
          "text": "What is the square root of 100?", 
          "correct": "10", 
          "answers": [
            "sin(10)",
            "1",
            "100",
            "10"
          ]
      }
  ]
}
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
export default class App extends React.Component {
	constructor(props){
		super(props);
		this.score = 0;
			this.state = {
      		data: jsonData.questions,
      		showResult: false,
    	}
	}

	handleStatusChange = (status) => {
    	if(status) {
      		this.score += 1;
    	}

    	if(status == false) {
      		this.score -= 1;
    	}
	}

	handleResultClicked = () => this.setState({ showResult: true })


	render() {
   
    if(this.state.showResult) {
       var results = <Results score={this.score} length={this.state.data.length} />
    }
    return (
      <ScrollView style={{backgroundColor: '#F5FCFF',paddingTop: 10, marginTop:StatusBar.currentHeight}}>
      <View style={styles.container}>
       {results}
      {
         this.state.data.map(question => {
           return (
          <View key={question.text}>
            <Text style={styles.heading}>{question.text} {this.state.language}</Text>
            <Questions key={question.text} data={question} correct={question.correct} onSelectStatus={this.handleStatusChange} />
            
          </View>
           )
        })
      }
        <TouchableOpacity		
						onPress={this.handleResultClicked}
						style={styles.btn2}>
						<Text style={styles.btnText}>Quiz Results</Text>
						</TouchableOpacity>
      </View>
     </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
	container: {
		backgroundColor:'#ffffff',
		flex:1
	},
	heading: {
		flex: 1,
		padding:10,
		margin:10,
		width:'95%'
	},
	radioGroup: {
		paddingLeft: 15
	},
	btn2:{
		backgroundColor:'orange',
		padding:10,
		margin:10,
		width:'30%',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'flex-end',  
		borderRadius:20
    
	},
	btn2Selected: {
		backgroundColor:'orange',
		padding:10,
		margin:10,
		width:'30%',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'flex-end',  
	},
  	btnText:{
		color:'#fff',
		fontWeight:'bold'
	},
});