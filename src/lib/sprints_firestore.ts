import { db } from "./firebase";
import { doc, collection, addDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { Sprint } from "./interfaces"

const SPRINT_COLLECTION = "sprints"

export const createSprint = async (sprint: Omit<Sprint, 'id'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, SPRINT_COLLECTION), sprint);
    console.log("Sprint created with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error creating sprint: ", error);
    throw new Error("Failed to create sprint");
  }
};

export const getSprints = async (): Promise<Sprint[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, SPRINT_COLLECTION));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,      
      ...doc.data(),   
    })) as Sprint[];
  } catch (error) {
    console.error("Error fetching sprints: ", error);
    return [];
  }
};

export const updateSprint = async (sprint: Sprint): Promise<void> => {
  try {
    const sprintRef = doc(db, SPRINT_COLLECTION, sprint.id);
    await setDoc(sprintRef, sprint);
    console.log("Sprint updated successfully");
  } catch (error) {
    console.error("Error updating sprint: ", error);
    throw new Error("Failed to update sprint");
  }
};

export const deleteSprint = async (sprintId: string): Promise<void> => {
  try {
    const sprintRef = doc(db, SPRINT_COLLECTION, sprintId);
    await deleteDoc(sprintRef);
    console.log("Sprint deleted successfully");
  } catch (error) {
    console.error("Error deleting sprint: ", error);
    throw new Error("Failed to delete sprint");
  }
};
