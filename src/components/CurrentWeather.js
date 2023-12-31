import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
const CurrentWeather = () => {
	return (
		<SafeAreaView style={styles.wrapper}>
			<Feather name="sun" size={100} />
			<View style={styles.container}>
				<Text>Current Weather</Text>
				<Text style={styles.temperature}>6</Text>
				<Text style={styles.feels}>Feels like 5</Text>
				<View style={styles.highLowWrapper}>
					<Text style={styles.highLow}>High: 8</Text>
					<Text style={styles.highLow}>Low: 6</Text>
				</View>
			</View>
			<View style={styles.bodyWrapper}>
				<Text style={styles.description}>Its Sunny</Text>
				<Text style={styles.message}>Its perfect t-shirt weather</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'pink',
		flex: 1,
		alignItems: 'center'
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	temperature: {
		color: 'black',
		fontSize: 48
	},
	feels: {
		fontSize: 30,
		color: 'black'
	},
	highLow: {
		color: 'black',
		fontSize: 20
	},
	highLowWrapper: {
		flexDirection: 'row'
	},
	bodyWrapper: {
		justifyContent: 'flex-end',
		paddingLeft: 20,
		marginBottom: 40
	},
	description: {
		fontSize: 48
	},
	message: {
		fontSize: 30
	}
})
export default CurrentWeather
