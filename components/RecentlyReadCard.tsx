import { Text, TouchableOpacity, View } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import { ChevronRight } from 'lucide-react-native'

export default function RecentlyReadCard ({progress}) {
    return (
      <View className="mb-8 flex-row">
          {/* Book Cover */}
          <View className="h-48 w-32 rounded-lg border-2 border-gray-600 bg-gray-800 p-2">
            <Text className="text-center text-xs font-bold text-white">Lord of Mysteries</Text>
            <View className="mx-auto mb-2 mt-2 h-8 w-8 items-center justify-center rounded-full border-2 border-red-600">
              <Text className="font-bold text-red-600">I</Text>
            </View>
            <Text className="mb-2 text-center text-sm font-bold text-yellow-400">Clown</Text>
            <Text className="text-center text-xs text-gray-400">Cuttlefish That Loves Diving</Text>
          </View>

          {/* Info */}
          <View className="ml-4 flex-1 justify-between">
            <View>
              <Text className="text-sm text-gray-400">RECENTLY READ:</Text>
              <Text className="text-lg font-bold leading-tight text-white">
                Lord of Mysteries Vol 1
              </Text>
              <Text className="mb-4 italic text-gray-400">Cuttlefish That Loves Diving</Text>
            </View>
            <View>
              <View className="mb-2 flex-row items-center justify-between">
                <Text className="text-base text-white">{Math.round(progress * 100)}%</Text>
                <TouchableOpacity className="flex-row items-center rounded-lg bg-purple-600 px-4 py-2">
                  <Text className="mr-2 font-semibold text-white">Continue</Text>
                  <ChevronRight size={16} color="white" />
                </TouchableOpacity>
              </View>
              <ProgressBar
                progress={progress}
                color="#A855F7"
                style={{ height: 6, backgroundColor: '#374151', borderRadius: 4 }}
              />
            </View>
          </View>
        </View>
    )
  }