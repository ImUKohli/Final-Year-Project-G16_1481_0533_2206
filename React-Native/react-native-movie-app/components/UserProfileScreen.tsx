// import { View, Text, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// interface UserProfileScreenProps {
//   user: {
//     displayName?: string | null;
//     email?: string | null;
//   };
//   onLogout: () => void;
// }

// const UserProfileScreen = ({ user, onLogout }: UserProfileScreenProps) => {
//   return (
//     <SafeAreaView className="bg-primary flex-1 px-6">
//       <View className="flex-1 justify-center items-center">
//         <Text className="text-white text-2xl mb-6">
//           Hi {user.displayName || user.email}!
//         </Text>
//         <TouchableOpacity 
//           className="bg-secondary py-4 px-8 rounded-lg"
//           onPress={onLogout}
//         >
//           <Text className="text-white font-bold text-lg">LOGOUT</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default UserProfileScreen;

import { View, Text, TouchableOpacity, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
interface UserProfileScreenProps {
  user: {
    displayName?: string | null;
    email?: string | null;
  };
  onLogout: () => void;
}

const UserProfileScreen = ({ user, onLogout }: UserProfileScreenProps) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  
  // Get first letter of name or email and capitalize it
  const getProfileInitial = () => {
    const name = user.displayName || user.email || '';
    return name.charAt(0).toUpperCase();
  };

  return (
    <SafeAreaView className="bg-primary flex-1 px-6">
      <View className="flex-1">
        {/* Profile Header */}
        <View className="items-center mt-10 mb-8">
          <View className="w-32 h-32 rounded-full bg-[#ab8bff] items-center justify-center mb-4">
            <Text className="text-[#151312] text-5xl font-bold">
              {getProfileInitial()}
            </Text>
          </View>
          <Text className="text-white text-4xl font-bold">
            {user.displayName || user.email}
          </Text>
        </View>

        {/* Account Details Section */}
        <View className="mb-8">
          <Text className="text-white text-lg font-bold mb-4">Account Details</Text>
          <View className="bg-white/10 rounded-lg p-4">
            <Text className="text-gray-300">Email: {user.email}</Text>
          </View>
        </View>

        {/* Preferences Section */}
        <View className="mb-8">
          <Text className="text-white text-lg font-bold mb-4">Preferences</Text>
          <View className="bg-white/10 rounded-lg p-4 flex-row justify-between items-center">
            <Text className="text-gray-300">Push Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: "#767577", true: "#ab8bff" }}
              thumbColor={notificationsEnabled ? "#f4f3f4" : "#f4f3f4"}
            />
          </View>
        </View>

        {/* About App Section */}
        <View className="mb-8">
          <Text className="text-white text-lg font-bold mb-4">About App</Text>
          <View className="bg-white/10 rounded-lg">
            <TouchableOpacity className="p-4 flex-row justify-between items-center">
              <Text className="text-gray-300">Privacy Policy</Text>
              <Text className="text-gray-400 text-xl">→</Text>
            </TouchableOpacity>
            <View className="p-4 flex-row justify-between items-center border-t border-white/20">
              <Text className="text-gray-300">Version</Text>
              <Text className="text-gray-400">1.0.1</Text>
            </View>
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={{ backgroundColor: '#E57373' }}
          className=" py-6 rounded-lg items-center mb-6 mt-20"
          onPress={onLogout}
        >
          <Text className="text-white font-bold text-lg">LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserProfileScreen;