import { db } from "./firebase";
import { collection, addDoc, getDocs, DocumentData } from "firebase/firestore";

interface Project {
  name: string;
}

// Function to add a project
export const addProject = async (project: Project): Promise<void> => {
  try {
    await addDoc(collection(db, "projects"), project);
    console.log("Project added successfully");
  } catch (error) {
    console.error("Error adding project:", error);
  }
};

// Function to fetch all users
export const getProjects = async (): Promise<DocumentData[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    return querySnapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};
