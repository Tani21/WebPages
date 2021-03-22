
import React from 'react';
import { View, SafeAreaView, StyleSheet, ScroolView, Text, StatusBar } from 'react-native';

export default function App()
	{
		
			return (
			<View style={styles.container}>
				<Text>Hi there</Text>
			</View>
			);
		
	}

const styles = StyleSheet.create(
{
	container:{
		background: "#455a64",
		flex:1,
	}
});
