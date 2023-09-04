import React from 'react'
import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	FlatList,
	StatusBar,
	Image
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const Item = ({ min, max, dt, condition }) => {
	return (
		<View style={styles.item}>
			<Feather name={'sun'} size={24} color={'white'} />
			<Text style={styles.date}>{dt}</Text>
			<Text style={styles.temp}>{min}</Text>
			<Text style={styles.temp}>{max}</Text>
		</View>
	)
}

const UpcomingWeather = () => {
	const renderItem = ({ item }) => (
		<Item
			condition={item.list[0].weather[0].main}
			dt={item.list[0].dt}
			min={item.list[0].main.temp_min}
			max={item.list[0].main.temp_max}
		/>
	)
	return (
		<SafeAreaView style={styles.container}>
			<Text>Upcoming Weather</Text>
			<Image
				source={{
					uri: 'https://cdn.pixabay.com/photo/2023/08/29/07/13/dahlia-8220659_1280.jpg'
				}}
				style={{ height: 100 }}
			/>
			<FlatList
				data={OPENWEATHER_DUMMYDATA}
				renderItem={renderItem}
				keyExtractor={(item) => item.cnt}
			></FlatList>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0
	},
	item: {
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		borderWidth: 5,
		backgroundColor: 'pink'
	},
	temp: {
		fontSize: 15,
		fontWeight: 'bold',
		color: 'white'
	},
	date: {
		fontSize: 15,
		color: 'white'
	}
})

const OPENWEATHER_DUMMYDATA = [
	{
		cod: '200',
		message: 0,
		cnt: 96,
		list: [
			{
				dt: 1661875200,
				main: {
					temp: 296.34,
					feels_like: 296.02,
					temp_min: 296.34,
					temp_max: 298.24,
					pressure: 1015,
					sea_level: 1015,
					grnd_level: 933,
					humidity: 50,
					temp_kf: -1.9
				},
				weather: [
					{
						id: 500,
						main: 'Rain',
						description: 'light rain',
						icon: '10d'
					}
				],
				clouds: {
					all: 97
				},
				wind: {
					speed: 1.06,
					deg: 66,
					gust: 2.16
				},
				visibility: 10000,
				pop: 0.32,
				rain: {
					'1h': 0.13
				},
				sys: {
					pod: 'd'
				},
				dt_txt: '2022-08-30 16:00:00'
			},
			{
				dt: 1661878800,
				main: {
					temp: 296.31,
					feels_like: 296.07,
					temp_min: 296.2,
					temp_max: 296.31,
					pressure: 1015,
					sea_level: 1015,
					grnd_level: 932,
					humidity: 53,
					temp_kf: 0.11
				},
				weather: [
					{
						id: 500,
						main: 'Rain',
						description: 'light rain',
						icon: '10d'
					}
				],
				clouds: {
					all: 95
				},
				wind: {
					speed: 1.58,
					deg: 103,
					gust: 3.52
				},
				visibility: 10000,
				pop: 0.4,
				rain: {
					'1h': 0.24
				},
				sys: {
					pod: 'd'
				},
				dt_txt: '2022-08-30 17:00:00'
			},
			{
				dt: 1661882400,
				main: {
					temp: 294.94,
					feels_like: 294.74,
					temp_min: 292.84,
					temp_max: 294.94,
					pressure: 1015,
					sea_level: 1015,
					grnd_level: 931,
					humidity: 60,
					temp_kf: 2.1
				},
				weather: [
					{
						id: 500,
						main: 'Rain',
						description: 'light rain',
						icon: '10n'
					}
				],
				clouds: {
					all: 93
				},
				wind: {
					speed: 1.97,
					deg: 157,
					gust: 3.39
				},
				visibility: 10000,
				pop: 0.33,
				rain: {
					'1h': 0.2
				},
				sys: {
					pod: 'n'
				},
				dt_txt: '2022-08-30 18:00:00'
			},
			{
				dt: 1662217200,
				main: {
					temp: 294.14,
					feels_like: 293.99,
					temp_min: 294.14,
					temp_max: 294.14,
					pressure: 1014,
					sea_level: 1014,
					grnd_level: 931,
					humidity: 65,
					temp_kf: 0
				},
				weather: [
					{
						id: 804,
						main: 'Clouds',
						description: 'overcast clouds',
						icon: '04d'
					}
				],
				clouds: {
					all: 100
				},
				wind: {
					speed: 0.91,
					deg: 104,
					gust: 1.92
				},
				visibility: 10000,
				pop: 0.53,
				sys: {
					pod: 'd'
				},
				dt_txt: '2022-09-03 15:00:00'
			}
		],
		city: {
			id: 3163858,
			name: 'Zocca',
			coord: {
				lat: 44.34,
				lon: 10.99
			},
			country: 'IT',
			population: 4593,
			timezone: 7200,
			sunrise: 1661834187,
			sunset: 1661882248
		}
	}
]

export default UpcomingWeather
