import PocketBase from 'pocketbase';

async function signup() {
    const pb = new PocketBase("http://127.0.0.1:8090");

    const data = {
        username: "ss",
        email: "ss@gmail.com",
        password: "12345678",
        passwordConfirm: "12345678",
        name: "ss"
    };

    try {
        await pb.collection("users").create(data);

        // Assuming your 'requestVerification' function also uses fetch
        await pb.collection("users").requestVerification(data.email);

        console.log("Signup and email verification requested successfully.");
    } catch (error) {
        console.error("Error during signup:", error.message);
    }
}

// Call the signup function when needed
signup();