import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Card, Caption } from 'react-native-paper';

const BookingItem = () => {
    return (
        <View>
            <TouchableOpacity>
                <Card>
                    <Image />
                    <Caption />
                </Card>
            </TouchableOpacity>
        </View>
    )
}

export default BookingItem
