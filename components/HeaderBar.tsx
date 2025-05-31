import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { Menu, Search, X } from 'lucide-react-native'

export default class Header extends Component {
  render() {
    return (
      <View className="mb-6 flex-row items-center justify-between">
          <TouchableOpacity className="rounded-full p-2">
            <Menu size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-xl font-semibold text-white">Library</Text>
          <View className="flex-row gap-2">
            <TouchableOpacity className="rounded-full p-2">
              <Search size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="rounded-full p-2">
              <X size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
    )
  }
}