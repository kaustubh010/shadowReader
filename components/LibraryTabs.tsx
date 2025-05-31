import { View, Text, TouchableOpacity } from 'react-native'
import { ChevronDown } from 'lucide-react-native'

export default function LibraryTabs() {
  return (
    <View className="mb-4 flex-row justify-between border-b border-gray-700">
          <View className="flex-row">
            <TouchableOpacity className="border-b-2 border-white px-4 py-2">
              <Text className="font-medium text-white">Books</Text>
            </TouchableOpacity>
            <TouchableOpacity className="px-4 py-2">
              <Text className="text-gray-400">Shelves</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <ChevronDown size={20} color="white" />
          </TouchableOpacity>
        </View>
  )
}