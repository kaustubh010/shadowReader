import AsyncStorage from '@react-native-async-storage/async-storage';

const BOOKS_KEY = 'EPUB_BOOKS';

export async function getStoredBooks(): Promise<{ name: string; uri: string }[]> {
  try {
    const json = await AsyncStorage.getItem(BOOKS_KEY);
    return json ? JSON.parse(json) : [];
  } catch (err) {
    console.error('[Storage Load Error]', err);
    return [];
  }
}

export async function saveBook(book: { name: string; uri: string }) {
  try {
    const existing = await getStoredBooks();
    const alreadyExists = existing.some(b => b.name === book.name);
    if (alreadyExists) {
      console.log('[Duplicate Book Skipped]', book.name);
      return existing;
    }

    const newBooks = [...existing, book];
    await AsyncStorage.setItem(BOOKS_KEY, JSON.stringify(newBooks));
    console.log('[Saved Books]', newBooks);
    return newBooks;
  } catch (err) {
    console.error('[Storage Save Error]', err);
    return [];
  }
}

export async function removeBook(bookName: string) {
  try {
    const existing = await getStoredBooks();
    const filtered = existing.filter(b => b.name !== bookName);
    await AsyncStorage.setItem(BOOKS_KEY, JSON.stringify(filtered));
    return filtered;
  } catch (err) {
    console.error('[Remove Book Error]', err);
    return [];
  }
}
