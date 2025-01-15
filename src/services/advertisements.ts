import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { AdFormData } from '../components/dashboard/business/AdForm';

export async function createAdvertisement(userId: string, data: AdFormData) {
  try {
    const adData = {
      ...data,
      businessId: userId,
      status: 'active',
      createdAt: serverTimestamp(),
      location: data.location || '', // Ensure location is always set
      applications: 0, // Add counter for applications
    };

    const docRef = await addDoc(collection(db, 'advertisements'), adData);
    return { id: docRef.id, error: null };
  } catch (error) {
    console.error('Error creating advertisement:', error);
    return { id: null, error: 'Failed to create advertisement' };
  }
}