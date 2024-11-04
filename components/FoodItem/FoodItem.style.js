import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    cardsContainer: {
        marginTop: 16,
        paddingHorizontal: 16,
        height: "28%"
    },
    tab: (activeFoodType, item) => ({
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: activeFoodType === item ? "#444262" : "#C1C0C8",
    }),
    tabText: (activeFoodType, item) => ({
        fontFamily: "DMMedium",
        color: activeFoodType === item ? "#444262" : "#C1C0C8",
    }),
});

export default styles;