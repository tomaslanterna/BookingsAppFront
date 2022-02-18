import React from 'react';
import { View,StyleSheet,ScrollView, FlatList} from "react-native";
import {Card} from 'react-native-paper';

const CategoryList = ({bussines}) => {
    return (
        <ScrollView>
            <FlatList
        data={bussines}
        keyExtractor={}
        renderItem={}
        />
        </ScrollView>
    )
}

export default CategoryList
