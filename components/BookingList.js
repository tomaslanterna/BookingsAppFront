import React from 'react';
import { ScrollView,FlatList } from 'react-native';
import BookingItem from './BookingItem';

const BookingList = ({bookings}) => {
    return (
        <ScrollView>
            <FlatList
        data={bookings}
        keyExtractor={}
        renderItem={BookingItem}
        />
        </ScrollView>
    )
}

export default BookingList
