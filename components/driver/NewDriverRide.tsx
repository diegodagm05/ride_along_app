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
            <View style={{width: '100%'}}>
                <Text style={styles.label}>Date and time of departure</Text>
                {Platform.OS != 'android' ? 
                    (   
                        <DateTimePicker 
                        value={timeOfArrival ?? new Date()} 
                        mode="datetime" 
                        onChange={(event, date) => setTimeOfArrival(date)}
                        style={{marginStart: 0}}
                        />
                    
                    ) :
                    (
                        <View>
                            <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => showDatePicker('date', timeOfArrival ?? new Date(), (event, date) => setConfirmationTimeLimit(date))} >
                                <Text style={styles.btnText}>
                                Select date
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => showDatePicker('time', timeOfArrival ?? new Date(), (event, date) => setTimeOfArrival(date))} >
                                <Text style={styles.btnText}>
                                Select time
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
            </View>
            <View style={{width: '100%'}}>
                <Text style={styles.label}>Confirmation time limit</Text>
                {Platform.OS != 'android' ? 
                    (
                    <DateTimePicker 
                        value={confirmationTimeLimit ?? new Date()} 
                        mode="datetime" 
                        onChange={(event, date) => setConfirmationTimeLimit(date)}
                        />) :
                    (
                        <View>
                            <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => showDatePicker('date', confirmationTimeLimit ?? new Date(), (event, date) => setConfirmationTimeLimit(date))} >
                                <Text style={styles.btnText}>
                                Select date
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                            style={styles.btn}
                            onPress={() => showDatePicker('time', confirmationTimeLimit ?? new Date(), (event, date) => setTimeOfArrival(date))} >
                                <Text style={styles.btnText}>
                                Select time
                                </Text>
                            </TouchableOpacity>
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
                    onChange={e => setSeats(e.nativeEvent.text as unknown as number)}
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
        height: 55,
        padding: 15,
        fontSize: 18,
        borderColor: '#3090C8',
        borderWidth: 2,
        borderRadius: 100,
        marginVertical: 5,
        width: 300,
        color: '#404040'
    },
    btn: {
        backgroundColor: '#3090C8',
        padding: 9,
        margin: 5,
        borderRadius: 100
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    label: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#3090C8'
    }
})