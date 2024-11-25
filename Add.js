import React, {useState} from 'react'
import {numbers} from "./Data";
import {TextInput, View, Text, Button} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

const Add = ({navigation}) => {
    const [PokName, setPokName] = useState('')
    const [PokNum, setPokNum] = useState('');
    const [type, setType] = useState('EX Rarity');

    return (
        <View style={{padding: 10, marginTop: 50}}>


            <View style={{padding: 10}}>
                <Text style={{fontWeight:'bold'}}>Pokemon Name:</Text>
                <TextInput style={{borderWidth: 1}}
                           onChangeText={(text)=> setPokName(text)}


                />
            </View>



            {/*Pokemon Number input*/}
            <View style={{padding: 10}}>
                <Text style={{fontWeight:'bold'}}>Pokemon No.: (Check the 151 Scarlet & Violet Promotion in the Pokemon website, bottom left of a pokemon card)</Text>
                <TextInput style={{borderWidth: 1}}
                           onChangeText={(text)=> setPokNum(text)}
                           maxLength={3}  //Restrict to max of 300 number


                />
            </View>

            {/*Rarity Type selection input*/}
            <View style={{padding: 10}}>
                <Text style={{fontWeight:'bold'}}>Choose Rarity:</Text>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        {label: "EX Rarity", value: "EX Rarity"},
                        {label: "Illustration Rare", value: "Illustration Rare"}
                    ]}
                />
            </View>


            {/*Submitting all the info from input boxes above*/}
            <Button title="SUBMIT"
                    onPress={() => {
                        const entry = {
                            name: PokName,
                            key: PokNum
                        };
                        let indexNum=1;
                        if (type == 'EX Rarity') {
                            indexNum = 0;
                        }
                        numbers[indexNum].data.push(entry);
                        navigation.navigate('Home');
                    }}/>
        </View>
    );
};
export default Add;
