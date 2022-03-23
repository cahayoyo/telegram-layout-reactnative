import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Data } from "./dummy";

const colors = {
    primary: "#517DA2",
    secondary: "#4EA4EA",
    caption: "#A8AAAB",
}

export default function Telegram(){
    return (
        <>
            <StatusBar 
                style="light"
                translucent={false}
                backgroundColor={colors.primary}
            />
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image 
                        style={styles.headerIcon}
                        source={require('./asset/icons/drawwer.png')}
                    />
                    <Text style={styles.headerTitle}>Telegram</Text>
                    <Image 
                        style={styles.headerIcon}
                        source={require('./asset/icons/search.png')}
                    />
                </View>
                <FlatList
                    data={Data}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.messageItem}>
                            <Image style={styles.messageAvatar} source={item.image} />
                            <View style={styles.messageText}>
                                <Text style={styles.messageTitle}>{item.name}</Text>
                                <Text style={styles.messageContent}>{item.message}</Text>
                            </View>
                            <View style={styles.messageInfo}>
                                <View style={styles.messageStatusTime}>
                                    <Image 
                                        style={styles.messageStatus}
                                        source={require('./asset/icons/check.png')}
                                    />
                                    <Text style={styles.messageTime} >{item.time}</Text>
                                </View>
                                <Text style={styles.messageUnreadCounter} >
                                    {item.totalMessage}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    ItemSeparatorComponent={() => <View style={styles.itemSeparator} /> }
                />
                <TouchableOpacity style={styles.fab} >
                        <Image 
                            style={styles.fabIcon}
                            source={require('./asset/icons/pencil.png')}
                        />
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    headerIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
    headerTitle: {
        flex: 1,
        fontSize: 18,
        fontWeight: "600",
        color: "white",
        paddingHorizontal: 20
    },
    messageItem: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingBottom: 5,
        paddingTop: 10
    },
    messageAvatar: {
        height: 50,
        width: 50,
        borderRadius: 30
    },
    messageText: {
        flex: 1,
        paddingHorizontal: 15
    },
    messageTitle: {
        fontSize: 16,
        fontWeight: '600'
    },
    messageContent: {
        color: colors.caption
    },
    messageInfo: {
        justifyContent: "space-around"
    },
    messageStatusTime: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    messageStatus: {
        width: 12,
        height: 12,
        resizeMode: 'contain',
        marginRight: 5
    },
    messageTime: {
        fontSize: 12,
        color: colors.caption
    },
    messageUnreadCounter: {
        alignSelf: 'flex-end',
        textAlign: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: colors.secondary,
        color: 'white',
        fontSize: 12
    },
    itemSeparator: {
        height: 1,
        backgroundColor: "#E5E5E5",
        width: '80%',
        alignSelf: 'flex-end'
    },
    fab: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        padding: 15,
        borderRadius: 50,
        backgroundColor: colors.secondary
    },
    fabIcon: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    },
})