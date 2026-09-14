/**
 * StyleCue Video Storage & Persistence Utility
 * Handles IndexedDB local caching and server-side static video synchronization.
 */

const DB_NAME = 'stylecue_media_db';
const DB_VERSION = 1;
const STORE_NAME = 'videos';
const KEY = 'commercial_video';

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      return reject(new Error('IndexedDB not supported'));
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveVideoToIndexedDB(blob: Blob): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(blob, KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('Failed to save video to IndexedDB:', err);
  }
}

export async function getVideoFromIndexedDB(): Promise<Blob | null> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(KEY);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('Failed to get video from IndexedDB:', err);
    return null;
  }
}

export async function removeVideoFromIndexedDB(): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(KEY);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn('Failed to remove video from IndexedDB:', err);
  }
}

export async function uploadVideoToServer(file: File | Blob): Promise<{ success: boolean; size?: number; error?: string }> {
  try {
    const response = await fetch('/api/upload-video', {
      method: 'POST',
      headers: {
        'Content-Type': 'video/mp4',
      },
      body: file,
    });

    if (!response.ok) {
      throw new Error(`Upload failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err: any) {
    console.warn('Server upload not reachable (e.g. static production preview):', err);
    return { success: false, error: err?.message || 'Server upload failed' };
  }
}

export async function checkServerVideoStatus(): Promise<{ exists: boolean; size: number; url: string }> {
  try {
    const res = await fetch('/api/video-status');
    if (res.ok) {
      return await res.json();
    }
  } catch {}

  // Fallback: direct HEAD check on /Stylecue_video.mp4
  try {
    const headRes = await fetch('/Stylecue_video.mp4', { method: 'HEAD' });
    if (headRes.ok) {
      const length = headRes.headers.get('content-length');
      return { exists: true, size: length ? parseInt(length, 10) : 0, url: '/Stylecue_video.mp4' };
    }
  } catch {}

  return { exists: false, size: 0, url: '/Stylecue_video.mp4' };
}
