import { db } from "./firebase"; // Ensure this import is correct
import { collection, addDoc, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { User } from "./interfaces"

const USER_COLLECTION = "users";

export const createUser = async (user: Omit<User, 'id'>): Promise<string> => {
    try {
        const docRef = await addDoc(collection(db, USER_COLLECTION), user);
        console.log("User created with ID:", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user");
    }
};

export const getUsers = async (): Promise<User[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, USER_COLLECTION));
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,      
            ...doc.data(),   
        })) as User[];
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};

export const updateUser = async (user: User): Promise<void> => {
    try {
        const userRef = doc(db, USER_COLLECTION, user.id);
        await setDoc(userRef, user);
        console.log("User updated successfully");
    } catch (error) {
        console.error("Error updating user:", error);
        throw new Error("Failed to update user");
    }
};

export const deleteUser = async (userId: string): Promise<void> => {
    try {
        const userRef = doc(db, USER_COLLECTION, userId);
        await deleteDoc(userRef);
        console.log("User deleted successfully");
    } catch (error) {
        console.error("Error deleting user:", error);
        throw new Error("Failed to delete user");
    }
};
