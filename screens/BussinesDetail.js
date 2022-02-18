import React from 'react';
import { View,StyleSheet,Image } from 'react-native';
import { Button } from 'react-native-paper';
import SelectDate from '../components/SelectDate';
import BookingList from '../components/BookingList';

const BussinesDetail = ({bussines}) => {

    const showBookings=()=>{
        return(
            <BookingList/>
        )
    }
    return (
        <View>
            <Image/>
            <Button/>
            <SelectDate/>
            <Button onPress={showBookings}/>
        </View>
    )
}

export default BussinesDetail
