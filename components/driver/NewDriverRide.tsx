import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, Text, Platform, Button } from 'react-native';
import { View } from '../Themed';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';



export function NewDriverRide() {
    const [timeOfArrival, setTimeOfArrival] = useState<Date>();
    const [seats, setSeats] = useState<number>();
    const [confirmationTimeLimit, setConfirmationTimeLimit] = useState<Date>();
    const [address, setAddress] = useState<string>();
    const [licensePlate, setLicensePlate] = useState<string>();
    const [gasMoneyRequired, setGasMoneyRequired] = useState<number>();

    const showDatePicker = (currentMode: any, date: Date, onChange: (event: DateTimePickerEvent, date?: Date | undefined) => void) => {
        DateTimePickerAndroid.open({
          value: date,
          onChange,
          mode: currentMode,
          is24Hour: true,
        });
      };

    return (
        <ScrollView contentContainerStyle={styles.container}  keyboardShouldPersistTaps='handled'>
            <View>
                <Text style={styles.label}>Time of arrival</Text>
                {Platform.OS != 'android' ? 
                    (<DateTimePicker 
                        value={timeOfArrival ?? new Date()} 
                        mode="time" 
                        onChange={(event, date) => setTimeOfArrival(date)}
                        />) :
                    (
                        <Button onPress={() => showDatePicker('time', timeOfArrival ?? new Date(), (event, date) => setTimeOfArrival(date))} 
                        title="Open timepicker" />
                        )}
            </View>
            <View>
                <Text style={styles.label}>Confirmation time limit</Text>
                {Platform.OS != 'android' ? 
                    (<DateTimePicker 
                        value={timeOfArrival ?? new Date()} 
                        mode="datetime" 
                        onChange={(event, date) => setConfirmationTimeLimit(date)}
                        />) :
                    (
                        <View>
                            <Button 
                            onPress={() => showDatePicker('time', timeOfArrival ?? new Date(), (event, date) => setTimeOfArrival(date))} 
                            title="Open timepicker" />
                            <Button 
                            onPress={() => showDatePicker('datetime', timeOfArrival ?? new Date(), (event, date) => setConfirmationTimeLimit(date))} 
                            title="Open datetime picker" />
                        </View>
                    )}
            </View>
            <View>
                <Text style={styles.label}>Address</Text>
                <TextInput
                    style={styles.input}
                    dataDetectorTypes="address"
                    />
                </View>
            <View>
                <Text style={styles.label}>Available seats</Text>
                <TextInput
                    keyboardType='numeric'
                    style={styles.input}
                />
            </View>
            <View>
                <Text style={styles.label}>Gas money required</Text>
                <TextInput
                    keyboardType='numeric'
                    style={styles.input}
                />
            </View>
            <View>
                <Text style={styles.label}>License plate</Text>
                <TextInput
                    style={styles.input}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 15,
        fontSize: 16,
        borderColor: '#0076BE',
        borderWidth: 2,
        borderRadius: 100,
        marginVertical: 20,
        width: 300,
        color: '#404040'
    },
    btn: {
        backgroundColor: '#0076BE',
        padding: 12,
        margin: 3,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0076BE'
    }
})