import { db } from "./firebase";
import { doc, collection, addDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { RetrospectiveChecklist } from "./interfaces"

const RETROSPECTIVE_CHECKLIST_COLLECTION = "retrospective_checklists";

export const createRetrospectiveChecklist = async (item: Omit<RetrospectiveChecklist, 'id'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, RETROSPECTIVE_CHECKLIST_COLLECTION), item);
    console.log("Retrospective checklist created with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error creating Retrospective checklist: ", error);
    throw new Error("Failed to create Retrospective checklist");
  }
};

export const getRetrospectiveChecklists = async (): Promise<RetrospectiveChecklist[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, RETROSPECTIVE_CHECKLIST_COLLECTION));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,      
      ...doc.data(),   
    })) as RetrospectiveChecklist[];
  } catch (error) {
    console.error("Error fetching Retrospective checklists: ", error);
    return [];
  }
};

export const updateRetrospectiveChecklist = async (item: RetrospectiveChecklist): Promise<void> => {
  try {
    const itemRef = doc(db, RETROSPECTIVE_CHECKLIST_COLLECTION, item.id);
    await setDoc(itemRef, item);
    console.log("Retrospective checklist updated successfully");
  } catch (error) {
    console.error("Error updating Retrospective checklist: ", error);
    throw new Error("Failed to update Retrospective checklist");
  }
};

export const deleteRetrospectiveChecklist = async (itemId: string): Promise<void> => {
  try {
    const itemRef = doc(db, RETROSPECTIVE_CHECKLIST_COLLECTION, itemId);
    await deleteDoc(itemRef);
    console.log("Retrospective checklist deleted successfully");
  } catch (error) {
    console.error("Error deleting Retrospective checklist: ", error);
    throw new Error("Failed to delete Retrospective checklist");
  }
};