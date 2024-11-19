import React from "react";
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image,Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

const App = () => {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.opacityStyle}>
                {/* Name on the left */}
                <Text style={styles.textStyle}>{item.name}</Text>

                {/* Image on the right */}
                <Image
                    source={{ uri: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_" + item.key + "-2x.png" }}
                    style={styles.imageStyle}
                />
            </TouchableOpacity>
        );
    };

    const renderSectionHeader = ({ section: { title, bgColor,ico,colo,outline } }) => (

        <View style={{ backgroundColor: bgColor, padding:10 }}>

            <Text style={[styles.headerText, styles[outline], {color: colo }]}>

                <Icon name={ico} size={20} color={colo}  />

                {title}</Text>

        </View>
    );

    return (
        <View style={{ marginBottom: 20, marginTop: 50 }}>
            <Text style={styles.title}>Scarlet & Violet - 151 Expansion Pack</Text>

            <Button title="Add Pokemon button" onPress={() => alert("")} />
            <SectionList
                sections={numbers}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const numbers = [
    {
        data: [
            { key: '76', name: "Charizard EX" },
            { key: '151', name: "Mew EX" },
            { key: '115', name: "KangasKhan EX" },
            { key: '76', name: "Golem EX" }
        ],
        title: "PokemonEx",
        bgColor: 'skyblue',
        ico:'skull',
        colo:'silver',
        outline:'textOutline'//controls outline
    },
    {
        data: [
            { key: '203', name: "Erika's Invitation" },
            { key: '173', name: "Picachu Illustration Rare" },
            { key: '178', name: "Tangela Illustration Rare" },
            { key: '168', name: "Charmander Illustration Rare" },
            { key: '172', name: "Caterpie Illustration Rare" }
        ],
        title: "IllustrationRare",
        bgColor: 'pink',
        ico:'paintbrush',
        colo:'khaki',
        outline:'textOutline2'

    }
];

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: "center",
        fontWeight: "bold",
    },
    opacityStyle: {
        flexDirection: 'row',  // Align name and image horizontally
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',  // Center the items vertically
    },
    textStyle: {
        fontSize: 15,
        marginRight: 10,  // Add space between name and image
        textAlign: "left",
        flex: 1,  // Ensure the text occupies available space
    },
    imageStyle: {
        width: 200,  // Adjust image size
        height: 300, // Adjust image size
        borderRadius: 5,
    },
    textOutline: {
        color: 'black', // Outline color
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: {width: -1, height: 1}, // Shadow directions
        textShadowRadius: 1, // Spread of the shadow
    },

        title:{
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
            color: "#f3f3f4",
            padding:20,
            backgroundColor:"red"

        },
        textOutline2: {
            color: 'black', // Outline color
            fontWeight: 'bold',
            textShadowColor: 'black',
            textShadowOffset: {width: -1, height: 1}, // Shadow directions
            textShadowRadius: 1, // Spread of the shadow
        },
}
);

export default App;


//apparently emojis can be used instead of icons
//ChatGpt
// import React from "react";
// import { SectionList, View, Text, StyleSheet, TouchableOpacity, Image, StatusBar, Button, Alert } from "react-native";
//
// const App = () => {
//     const renderItem = ({ item }) => {
//         return (
//             <TouchableOpacity style={styles.opacityStyle} onPress={() => Alert.alert("Pokémon Selected", item.name)}>
//                 <Text style={styles.textStyle}>{item.name}</Text>
//                 <Image source={{ uri: item.image }} style={styles.imageStyle} />
//             </TouchableOpacity>
//         );
//     };
//
//     const renderSectionHeader = ({ section: { title, bgColor, icon } }) => (
//         <Text style={[styles.headerText, { backgroundColor: bgColor }]}>
//             {icon} {title}
//         </Text>
//     );
//
//     return (
//         <View style={{ marginBottom: 20 }}>
//             <StatusBar hidden={true} />
//             <Button title="Add Pokémon" onPress={() => Alert.alert("Feature Coming Soon!", "You can add Pokémon in the next lesson.")} />
//             <SectionList
//                 sections={datasource}
//                 renderItem={renderItem}
//                 renderSectionHeader={renderSectionHeader}
//                 keyExtractor={(item, index) => index.toString()}
//             />
//         </View>
//     );
// };
//
// const datasource = [
//     {
//         data: [
//             {
//                 name: "Mimikyu EX",
//                 image: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_76-2x.png",
//             },
//             {
//                 name: "Dragonite EX",
//                 image: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_151-2x.png",
//             },
//             {
//                 name: "Zapdos EX",
//                 image: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_115-2x.png",
//             },
//             {
//                 name: "Gardevoir EX",
//                 image: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_176-2x.png",
//             },
//         ],
//         title: "Pokémon EX",
//         bgColor: "lightpink",
//         icon: "✨",
//     },
//     {
//         data: [
//             {
//                 name: "Pikachu Illustration Rare",
//                 image: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_203-2x.png",
//             },
//             {
//                 name: "Eevee Illustration Rare",
//                 image: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_173-2x.png",
//             },
//             {
//                 name: "Snorlax Illustration Rare",
//                 image: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_168-2x.png",
//             },
//             {
//                 name: "Jigglypuff Illustration Rare",
//                 image: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_172-2x.png",
//             },
//         ],
//         title: "Illustration Rares",
//         bgColor: "lightyellow",
//         icon: "🎨",
//     },
// ];
//
// const styles = StyleSheet.create({
//     headerText: {
//         fontSize: 20,
//         margin: 10,
//         textAlign: "center",
//         fontWeight: "bold",
//     },
//     opacityStyle: {
//         flexDirection: "row",
//         alignItems: "center",
//         padding: 10,
//         backgroundColor: "#fff",
//         marginBottom: 5,
//         borderRadius: 5,
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 3,
//         elevation: 2,
//     },
//     textStyle: {
//         flex: 1,
//         fontSize: 18,
//         margin: 10,
//         textAlign: "left",
//     },
//     imageStyle: {
//         width: 100, // Increased size
//         height: 150, // Increased size
//         borderRadius: 5,
//     },
// });
//
// export default App;
