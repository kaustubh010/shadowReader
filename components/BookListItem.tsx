import { View, Text } from 'react-native'
import React from 'react'
import { ProgressBar } from 'react-native-paper'

export default function BookListItem({progress, book}) {
  return (
    <View className="mb-20 rounded-xl border border-gray-700 bg-gray-900/50 p-4">
          <View className="flex-row">
            <View className="h-24 w-16 items-center rounded border border-gray-600 bg-gray-800 p-2">
              <Text className="text-center text-xs font-bold text-gray-300">Lord of Mysteries</Text>
              <View className="my-1 h-4 w-4 items-center justify-center rounded-full border border-red-600">
                <Text className="text-xs font-bold text-red-600">I</Text>
              </View>
              <Text className="text-center text-xs font-bold text-yellow-400">Clown</Text>
            </View>
            <View className="ml-4 flex-1">
              <Text className="mb-1 text-base font-semibold text-white">{book.name}</Text>
              <Text className="mb-2 text-xs italic text-gray-400">
                Cuttlefish That Loves Diving
              </Text>
              <ProgressBar
                progress={progress}
                color="#A855F7"
                style={{ height: 4, backgroundColor: '#374151', borderRadius: 4 }}
              />
            </View>
          </View>
        </View>
  )
}