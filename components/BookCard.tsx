import { View, Text, Image } from 'react-native';

interface BookCardProps {
  title: string;
  cover: any;
  progress?: number; // 0 to 100
}

export default function BookCard({ title, cover, progress = 0 }: BookCardProps) {
  return (
    <View className="w-32 mr-4">
      <Image
        source={cover}
        resizeMode="cover"
        className="w-full h-48 rounded-xl"
      />
      <Text className="mt-2 text-sm font-semibold text-gray-800" numberOfLines={1}>
        {title}
      </Text>
      <View className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
        <View className="h-2 bg-blue-500" style={{ width: `${progress}%` }} />
      </View>
    </View>
  );
}
