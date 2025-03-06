import { db } from "./firebase";
import { doc, collection, addDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import { BacklogItem } from "./interfaces"

const BACKLOG_ITEM_COLLECTION = "backlog_items";

export const createBacklogItem = async (item: Omit<BacklogItem, 'id'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, BACKLOG_ITEM_COLLECTION), item);
    console.log("Backlog Item created with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error creating backlog item: ", error);
    throw new Error("Failed to create backlog item");
  }
};

export const getBacklogItems = async (): Promise<BacklogItem[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, BACKLOG_ITEM_COLLECTION));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,      
      ...doc.data(),   
    })) as BacklogItem[];
  } catch (error) {
    console.error("Error fetching backlog items: ", error);
    return [];
  }
};

export const updateBacklogItem = async (item: BacklogItem): Promise<void> => {
  try {
    const itemRef = doc(db, BACKLOG_ITEM_COLLECTION, item.id);
    await setDoc(itemRef, item);
    console.log("Backlog Item updated successfully");
  } catch (error) {
    console.error("Error updating backlog item: ", error);
    throw new Error("Failed to update backlog item");
  }
};

export const deleteBacklogItem = async (itemId: string): Promise<void> => {
  try {
    const itemRef = doc(db, BACKLOG_ITEM_COLLECTION, itemId);
    await deleteDoc(itemRef);
    console.log("Backlog Item deleted successfully");
  } catch (error) {
    console.error("Error deleting backlog item: ", error);
    throw new Error("Failed to delete backlog item");
  }
};