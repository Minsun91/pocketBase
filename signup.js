// const PocketBase = require('pocketbase');

// async function signup() {
//     const pb = new PocketBase("http://127.0.0.1:8090");

//     const data = {
//         username: "ss",
//         email: "ss@gmail.com",
//         password: "12345678",
//         passwordConfirm: "12345678",
//         name: "ss"
//     };

//     try {
//         await pb.collection("users").create(data);

//         // Assuming your 'requestVerification' function also uses fetch
//         await pb.collection("users").requestVerification(data.email);

//         console.log("Signup and email verification requested successfully.");
//     } catch (error) {
//         console.error("Error during signup:", error.message);
//     }
// }

// // Call the signup function when needed
// signup();

import PocketBase from 'pocketbase';

async function createReservationDB() {
    const pb = new PocketBase("http://127.0.0.1:8090");

    try {
        // Create a new collection named 'reservations'
        await pb.createCollection("reservations");
        // Define the schema for the reservations collection
        const schema = {
            time: {
                type: "string",
                required: true
            },
            message: {
                type: "string",
                required: true
            },
            location: {
                type: "string",
                required: true
            }
        };

        // Set the schema for the reservations collection
        await pb.setSchema("reservations", schema);

        console.log("Reservation database created successfully.");
    } catch (error) {
        console.error("Error creating reservation database:", error.message);
    }
}

// Call the function to create the reservation database
createReservationDB();
