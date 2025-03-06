import { db } from "./firebase";
import { doc, collection, addDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { Project } from "./interfaces"

// PROJECT
const PROJECT_COLLECTION = "projects"

export const createProject = async (project: Omit<Project, 'id'>): Promise<string> => {
    try {
      const docRef = await addDoc(collection(db, PROJECT_COLLECTION), project);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding document: ", error);
      throw new Error("Failed to create project");
    }
};

export const getProjects = async (): Promise<Project[]> => {
    try {
      const querySnapshot = await getDocs(collection(db, PROJECT_COLLECTION));
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,      
        ...doc.data(),   
      })) as Project[];  
    } catch (error) {
      console.error("Error fetching projects:", error);
      return [];
    }
  };

export const updateProject = async (project: Project): Promise<void> => {
try {
    const projectRef = doc(db, PROJECT_COLLECTION, project.id);
    await setDoc(projectRef, project);
    console.log("Project updated successfully");
} catch (error) {
    console.error("Error updating project: ", error);
    throw new Error("Failed to update project");
}
};

export const deleteProject = async (projectId: string): Promise<void> => {
try {
    const projectRef = doc(db, PROJECT_COLLECTION, projectId);
    await deleteDoc(projectRef);
    console.log("Project deleted successfully");
} catch (error) {
    console.error("Error deleting project: ", error);
    throw new Error("Failed to delete project");
}
};


