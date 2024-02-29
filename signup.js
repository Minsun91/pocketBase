// import PocketBase from 'pocketbase';

// async function createReservationDB() {
//     const pb = new PocketBase("http://127.0.0.1:8090");

//     try {
//         // Create a new collection named 'reservations'
//         await pb.createCollection("reservations");
//         // Define the schema for the reservations collection
//         const schema = {
//             time: {
//                 type: "string",
//                 required: true
//             },
//             message: {
//                 type: "string",
//                 required: true
//             },
//             location: {
//                 type: "string",
//                 required: true
//             }
//         };

//         // Set the schema for the reservations collection
//         await pb.setSchema("reservations", schema);

//         console.log("Reservation database created successfully.");
//     } catch (error) {
//         console.error("Error creating reservation database:", error.message);
//     }
// }

// // Call the function to create the reservation database
// createReservationDB();
