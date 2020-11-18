/**
 * Sample React Native App using a FlatList styled with
 * styled-components.
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import styled from 'styled-components/native'

const AppList = styled.FlatList`
  flex: 1;
  backgroundColor: black;
  color: black;
  paddingTop: 10px;
`;

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		name: 'Mighty Mouse',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		name: 'Minnie Mouse',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		name: 'Stuart Little',
	},
];

const Item = ({ name }) => (
	<View style={styles.item}>
		<Text style={styles.name}>{name}</Text>
	</View>
);

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	renderItem({ item }) {
		return <Item name={item.name} />;
	};
	render() {
		return (
			<>
			<AppList
				data={DATA}
				renderItem={this.renderItem}
				keyExtractor={item => item.id}
				ref={ref => (this.flatList = ref)}
			>
				<Text>Mighty Mouse</Text>
				<Text>Minnie Mouse</Text>
				<Text>Mickey Mouse</Text>
				<Text>Stuart Little</Text>
			</AppList>
			</>
		);	
	}
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#f9c2ff',
		color: 'black',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	name: {
		fontSize: 32,
		backgroundColor: '#f9c2ff',
	},
});

export default App;
