import './global.css';
import { FlatList, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBar from 'components/HeaderBar';
import RecentlyReadCard from 'components/RecentlyReadCard';
import LibraryTabs from 'components/LibraryTabs';
import BookListItem from 'components/BookListItem';
import FloatingActionButton from 'components/FloatingActionButton';
import { useEffect, useState } from 'react';
import { pickEpubFile } from './utils/pickEpub';
import { getStoredBooks, saveBook } from './utils/storage';

export default function LibraryScreen() {
  const progress = 0.52;

  const [books, setBooks] = useState<{ name: string; uri: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const stored = await getStoredBooks();
      setBooks(stored);
      console.log('[Loaded Books]:', stored);
    } catch (err) {
      console.error('Failed to load books:', err);
    } finally {
      setLoading(false);
    }
  };

  const handlePick = async () => {
    const file = await pickEpubFile();
    console.log(file);
    if (file) {
      await saveBook(file);
      await loadBooks();
      console.log('[Added Book]:', file.name);
    }
  };

  const renderEmptyState = () => (
    <Text className="mt-8 text-center text-gray-300">
      Your library is empty. Tap + to add books.
    </Text>
  );

  return (
    <LinearGradient
      colors={['#6b21a8', '#4c1d95', '#000000']}
      className="flex-1 px-4 pt-8 relative"
    >
      <FlatList
        data={loading ? [] : books}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <BookListItem progress={progress} book={item} />}
        ListEmptyComponent={!loading ? renderEmptyState : null}
        ListHeaderComponent={
          <View>
            <HeaderBar />
            <RecentlyReadCard progress={progress} />
            <LibraryTabs />
          </View>
        }
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      />

      <FloatingActionButton handlePick={handlePick} />
    </LinearGradient>
  );
}
