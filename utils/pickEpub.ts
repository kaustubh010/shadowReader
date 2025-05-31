import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

export async function pickEpubFile() {
  try {
    const result = await DocumentPicker.getDocumentAsync({
      type: ['application/epub+zip', 'application/octet-stream'],
      copyToCacheDirectory: true,
      multiple: false,
    });

    console.log('[Picker Result]', result);

    if (result.canceled) {
      console.log('[Picker Cancelled or Failed]');
      return null;
    }

    // Optional: restrict by extension manually
    if (!result?.assets[0].name.toLowerCase().endsWith('.epub')) {
      console.warn('Selected file is not an EPUB');
      return null;
    }

    const timestamp = Date.now();
    const cleanName = result?.assets[0].name.replace(/\s+/g, '_');
    const newPath = `${FileSystem.documentDirectory}${timestamp}-${cleanName}`;

    await FileSystem.copyAsync({
      from: result?.assets[0].uri,
      to: newPath,
    });

    return {
      name: result?.assets[0].name,
      uri: newPath,
    };
  } catch (err) {
    console.error('[EPUB Picker Error]', err);
    return null;
  }
}
