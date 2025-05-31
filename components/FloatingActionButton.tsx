import { TouchableOpacity, View } from 'react-native';
import { PlusIcon } from 'lucide-react-native';

export default function FloatingActionButton({ handlePick }) {
  return (
    <View className="absolute bottom-6 right-6 z-50">
      <TouchableOpacity onPress={handlePick} className="rounded-full bg-violet-600 p-4 shadow-lg">
        <PlusIcon size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
