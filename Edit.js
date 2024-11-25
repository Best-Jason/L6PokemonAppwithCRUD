import React, { useState } from 'react';
import { numbers } from './Data';
import { TextInput, View, Text, Button,Alert } from 'react-native';

const Edit = ({ navigation, route }) => {
    const [name, setName] = useState(route.params.name); //
    const [PokNum, setPokNum] = useState(route.params.key); //


    return (
        <View style={{ padding: 10 }}>

            {/* Pokemon Name INPUT (Unable to verify if name matches the number)(Unless I have the whole datasheet of 151 name,img,num,type */}

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Pokemon Nane:</Text>

                <TextInput
                    value={name}
                    style={{ borderWidth: 1}}
                    onChangeText={(text) => setName(text)}
                />
            </View>



            {/* Pokemon Num/img INPUT */}

            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Pokemon Number:</Text>
                <Text style={{fontWeight:400 }}>(Check the 151 Scarlet & Violet Promotion in the Pokemon website.) </Text>
                <Text style={{fontWeight:200 }}>Bottom left of a pokemon card</Text>
                <TextInput
                    value={PokNum}
                    maxLength={3}
                    style={{ borderWidth: 1}}
                    onChangeText={(text) => setPokNum(text)}
                />
            </View>




            {/* BUTTONS */}
            <View style={{ padding: 10,flexDirection: 'row', justifyContent: 'space-between' }}>

                {/* SAVE BUTTON */}
                <View style={{flex:1, margin: 10}}>
                    <Button title="SAVE"
                            onPress={() => {
                                let indexNum=1
                                if (route.params.type == 'PokemonEx') {
                                    indexNum = 0
                                }
                                numbers[indexNum].data[route.params.index].key = PokNum;
                                numbers[indexNum].data[route.params.index].name = name;
                                navigation.navigate('Home');
                            }}/>
                </View>

                {/* DELETE BUTTON */}
                <View style={{flex:1, margin: 10}}>
                    <Button title="DELETE"
                            onPress={() => {
                                let indexNum=1
                                if (route.params.type == 'PokemonEx') {
                                    indexNum = 0
                                }
                                Alert.alert("Are you sure?", '',
                                    [{text:'Yes', onPress: () => {
                                            numbers[indexNum].data.splice(route.params.index, 1);
                                            navigation.navigate('Home');
                                        }},
                                        {text: 'No'}])
                            }}
                    />
                </View>

            </View>




        </View>
    );
};

export default Edit;
