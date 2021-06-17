import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import {
    FlatList,
    ScrollView,
    TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Articleview from "./articleview";

const data = [
    { title: "Comment l'innovation RH transforme l'entreprise..." },
    { title: "2Comment l'innovation RH transforme l'entreprise..." },
    { title: "3Comment l'innovation RH transforme l'entreprise..." },
    { title: "4Comment l'innovation RH transforme l'entreprise..." },
    { title: "5Comment l'innovation RH transforme l'entreprise..." },
];

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export default function Carousel({ navigation }) {
    const [Index, setIndex] = React.useState(0);
    const indexRef = React.useRef(Index);
    indexRef.current = Index;

    const onScroll = React.useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);

        const distance = Math.abs(roundIndex - index);
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    const scrollToIndex = (index) => {
        Index.scrollToIndex({animated: true, index: index})
    };

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <FlatList
                data={data}
                style={{ flex: 1 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                pagingEnabled
                onScroll={onScroll}
                initialScrollIndex={0}
                renderItem={({ item }) => (
                    <View style={{ width: windowWidth - 20, flex: 1 }}>
                        <Articleview
                            name={item.title}
                            navigation={navigation}
                            source={images.actu}
                        />
                    </View>
                )}
                keyExtractor={(item) => item.title}
            />
            <View style={styles.indicatorContainer}>
                {data.map((image, index) => (
                    <TouchableWithoutFeedback
                        key={`${image}_${index}`}
                        //onPress={(index) => scrollToIndex(index)}
                    >
                        <View
                            style={[
                                styles.indicator,
                                Index == index
                                    ? styles.activeIndicator
                                    : undefined,
                            ]}
                        />
                    </TouchableWithoutFeedback>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    indicatorContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: windowWidth,
        zIndex: 2,
    },
    indicator: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        borderColor: "grey",
        borderWidth: 1,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    activeIndicator: {
        backgroundColor: "orange",
        borderWidth: 0,
    },
});
