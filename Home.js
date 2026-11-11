
import React from "react";
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import Icons from "./components/Icons";

const Home = () => {

    const products = [
        {
            name: "iPad 8",
            category: "Tablet",
            description: "Lorem Ipsum dolor sit amet, ut labore et dolore magna aliqua.",
            price: "$880",
            image: require("./assets/ipad.jpg")
        },
        {
            name: "Iphone X",
            category: "iPhone",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation.",
            price: "$750",
            image: require("./assets/iphone.jpg")
        },
        {
            name: "Samsung S21",
            category: "Samsung",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation.",
            price: "$990",
            image: require("./assets/samsung.jpg")
        }
    ];

    return (
        <ScrollView style={styles.container}>

          
            <View style={styles.iconContainer}>
                <Icons name="cellphone-iphone" iconsText="Iphone"/>
                <Icons name="android" iconsText="Android"/>
                <Icons name="laptop" iconsText="Laptop"/>
            </View>

           
            <Text style={styles.heading}>
                Most popular products
            </Text>

            {products.map((item, index) => (
                <View style={styles.productContainer} key={index}>

                    <Image
                        source={item.image}
                        style={styles.productImage}
                    />

                    <View style={styles.productInfo}>

                        <Text style={styles.productName}>
                            {item.name}
                        </Text>

                        <Text style={styles.category}>
                            {item.category}
                        </Text>

                        <Text style={styles.description}>
                            {item.description}
                        </Text>

                        <Text style={styles.price}>
                            {item.price}
                        </Text>

                    </View>
                </View>
            ))}

            {/* View More Button */}
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    View More
                </Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },

    iconContainer: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 25,
        color: '#111'
    },

    productContainer: {
        flexDirection: 'row',
        marginBottom: 30,
        alignItems: 'flex-start'
    },

    productImage: {
        width: 115,
        height: 130,
        borderRadius: 10,
        resizeMode: 'cover'
    },

    productInfo: {
        flex: 1,
        marginLeft: 12
    },

    productName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#111'
    },

    category: {
        color: '#20c5e8',
        fontSize: 14,
        marginTop: 3
    },

    description: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#333',
        marginTop: 3
    },

    price: {
        backgroundColor: '#374151',
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 15,
        marginTop: 5
    },

    button: {
        backgroundColor: '#20c9ed',
        padding: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 25
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }

});

export default Home;
