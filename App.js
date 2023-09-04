import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
	return (
		<SafeAreaView style={styles.wrapper}>
			<View style={styles.container}>
				<Text>Current Weather</Text>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'pink',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	wrapper: {
		flex: 1
	}
})
export default App
