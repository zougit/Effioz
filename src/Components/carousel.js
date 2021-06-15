import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import Articleview from "./articleview";

const data = [
    { title: "Comment l'innovation RH transforme l'entreprise..." },
    { title: "2Comment l'innovation RH transforme l'entreprise..." },
    { title: "3Comment l'innovation RH transforme l'entreprise..." },
    { title: "4Comment l'innovation RH transforme l'entreprise..." }
];

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function Carousel({ navigation }) {
    const [index, setIndex] = React.useState(0);
    const indexRef = React.useRef(index);
    indexRef.current = index;

    const onScroll = React.useCallback(event => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    return (
        <FlatList
            data={data}
            style= {{flex: 1}}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            onScroll={onScroll}
            renderItem={({ item, index }) => (
                <View
                    style={{
                        width: windowWidth - 20,
                        flex:1,
                    }}
                >
                    <Articleview
                        name={item.title}
                        navigation={navigation}
                        source={images.actu}
                    />
                    <View
                        style={{
                            width: 10,
                            height: 10,
                            borderRadius: 400 / 2,
                            marginBottom: 20,
                            flex:1,
                            backgroundColor: "grey",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    />
                </View>
            )}
            keyExtractor={item => item.title}
        />
    );
}
