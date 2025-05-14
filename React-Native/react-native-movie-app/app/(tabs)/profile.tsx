// import { useState } from "react";
// import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { icons } from "@/constants/icons";

// const Profile = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleAuthMode = () => {
//     setIsLogin(!isLogin);
//     // Clear form when switching
//     setEmail("");
//     setPassword("");
//     setName("");
//   };

//   return (
//     <SafeAreaView className="bg-primary flex-1 px-6">
//       <View className="flex-1 justify-center">
//         {/* Logo */}
//         <View className="items-center mb-10">
//           <Image 
//             source={icons.logo} // or require("@/assets/images/logo.png")
//             className="w-20 h-20"
//             resizeMode="contain"
//           />
//         </View>

//         {isLogin ? (
//           // Login Form
//           <>
//             <View className="mb-4">
//               <Text className="text-white text-sm mb-2">Enter your Email</Text>
//               <TextInput
//                 className="bg-white/10 text-white p-4 rounded-lg border border-white/20"
//                 placeholder="Email"
//                 placeholderTextColor="#9CA3AF"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//             </View>

//             <View className="mb-6">
//               <Text className="text-white text-sm mb-2">Enter your password</Text>
//               <View className="relative">
//                 <TextInput
//                   className="bg-white/10 text-white p-4 rounded-lg border border-white/20 pr-12"
//                   placeholder="Password"
//                   placeholderTextColor="#9CA3AF"
//                   value={password}
//                   onChangeText={setPassword}
//                   secureTextEntry={!showPassword}
//                 />
//                 <TouchableOpacity 
//                   className="absolute right-3 top-4"
//                   onPress={togglePasswordVisibility}
//                 >
//                   <Text className="text-white">{showPassword ? "Hide" : "Show"}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>

//             <TouchableOpacity 
//               className="bg-secondary py-4 rounded-lg items-center mb-6"
//               activeOpacity={0.7}
//             >
//               <Text className="text-white font-bold text-lg">LOGIN</Text>
//             </TouchableOpacity>

//             <View className="flex-row justify-center">
//               <Text className="text-gray-400">New User? </Text>
//               <TouchableOpacity onPress={toggleAuthMode}>
//                 <Text className="text-white font-bold">Sign up Instead!</Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         ) : 
//         (
//           // Signup Form
//           <>
//             <View className="mb-4">
//               <Text className="text-white text-sm mb-2">Enter your name</Text>
//               <TextInput
//                 className="bg-white/10 text-white p-4 rounded-lg border border-white/20"
//                 placeholder="Name"
//                 placeholderTextColor="#9CA3AF"
//                 value={name}
//                 onChangeText={setName}
//                 autoCapitalize="words"
//               />
//             </View>

//             <View className="mb-4">
//               <Text className="text-white text-sm mb-2">Enter Email</Text>
//               <TextInput
//                 className="bg-white/10 text-white p-4 rounded-lg border border-white/20"
//                 placeholder="Email"
//                 placeholderTextColor="#9CA3AF"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//             </View>

//             <View className="mb-6">
//               <Text className="text-white text-sm mb-2">Enter your password</Text>
//               <View className="relative">
//                 <TextInput
//                   className="bg-white/10 text-white p-4 rounded-lg border border-white/20 pr-12"
//                   placeholder="Password"
//                   placeholderTextColor="#9CA3AF"
//                   value={password}
//                   onChangeText={setPassword}
//                   secureTextEntry={!showPassword}
//                 />
//                 <TouchableOpacity 
//                   className="absolute right-3 top-4"
//                   onPress={togglePasswordVisibility}
//                 >
//                   <Text className="text-white">{showPassword ? "Hide" : "Show"}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>

//             // Confirm Password Functionality to be added just on Front end part to check 
            
//             //if both the password Match (----------Will do it later -----------)

//             <TouchableOpacity 
//               className="bg-secondary py-4 rounded-lg items-center mb-6"
//               activeOpacity={0.7}
//             >
//               <Text className="text-white font-bold text-lg">SIGN UP</Text>
//             </TouchableOpacity>

//             <View className="flex-row justify-center">
//               <Text className="text-gray-400">Already have an account? </Text>
//               <TouchableOpacity onPress={toggleAuthMode}>
//                 <Text className="text-white font-bold">Login Instead!</Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         )
//         }

//         {isLogin && (
//           <TouchableOpacity className="items-center mt-6">
//             <Text className="text-red font-bold">Forgot Password</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Profile;

// import { useState, useEffect } from "react";
// import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { icons } from "@/constants/icons";
// import { getAuth, User, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
// import { auth } from '@/services/firebase';

// const Profile = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null); // Properly typed user state

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const toggleAuthMode = () => {
//     setIsLogin(!isLogin);
//     // Clear form when switching
//     setEmail("");
//     setPassword("");
//     setName("");
//   };


//   // Start 


  
// const handleLogin = async () => {
//   try {
//     if (!email || !password) {
//       Alert.alert("Error", "Please fill in all fields");
//       return;
//     }

//     const userCredential = await signInWithEmailAndPassword(auth, email, password);
//     setUser(userCredential.user);
//     Alert.alert("Success", "Logged in successfully!");
//   } catch (error: unknown) {
//     let errorMessage = "An unknown error occurred";
//     if (error instanceof Error) {
//       errorMessage = error.message;
//     }
//     Alert.alert("Error", errorMessage);
//   }
// };

// const handleSignUp = async () => {
//   try {
//     if (!name || !email || !password) {
//       Alert.alert("Error", "Please fill in all fields");
//       return;
//     }

//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     // Update user profile with name
//     await updateProfile(userCredential.user, {
//       displayName: name
//     });
//     // Update local state with the new displayName
//     setUser({
//       ...userCredential.user,
//       displayName: name
//     });
//     Alert.alert("Success", "Account created successfully!");
//   } catch (error: unknown) {
//     let errorMessage = "An unknown error occurred";
//     if (error instanceof Error) {
//       errorMessage = error.message;
//     }
//     Alert.alert("Error", errorMessage);
//   }
// };

// const handleLogout = async () => {
//   try {
//     await signOut(auth);
//     setUser(null);
//     Alert.alert("Success", "Logged out successfully!");
//   } catch (error: unknown) {
//     let errorMessage = "An unknown error occurred";
//     if (error instanceof Error) {
//       errorMessage = error.message;
//     }
//     Alert.alert("Error", errorMessage);
//   }
// };

// // Check auth state on component mount
// useEffect(() => {
//   const unsubscribe = onAuthStateChanged(auth, (user) => {
//     setUser(user);
//   });
//   return unsubscribe; // unsubscribe on unmount
// }, []);

//   //End 



//   // If user is logged in, show welcome message
//   if (user) {
//     return (
//       <SafeAreaView className="bg-primary flex-1 px-6">
//         <View className="flex-1 justify-center items-center">
//           <Text className="text-white text-2xl mb-6">
//             Hi {user.displayName || user.email}!
//           </Text>
//           <TouchableOpacity 
//             className="bg-secondary py-4 px-8 rounded-lg"
//             onPress={handleLogout}
//           >
//             <Text className="text-white font-bold text-lg">LOGOUT</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     );
//   }

//   // Rest of your component remains the same...
//   return (
//     <SafeAreaView className="bg-primary flex-1 px-6">
//       <View className="flex-1 justify-center">
//         {/* Logo */}
//         <View className="items-center mb-10">
//           <Image 
//             source={icons.logo}
//             className="w-20 h-20"
//             resizeMode="contain"
//           />
//         </View>

//         {isLogin ? (
//           // Login Form
//           <>
//             <View className="mb-4">
//               <Text className="text-white text-sm mb-2">Enter your Email</Text>
//               <TextInput
//                 className="bg-white/10 text-white p-4 rounded-lg border border-white/20"
//                 placeholder="Email"
//                 placeholderTextColor="#9CA3AF"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//             </View>

//             <View className="mb-6">
//               <Text className="text-white text-sm mb-2">Enter your password</Text>
//               <View className="relative">
//                 <TextInput
//                   className="bg-white/10 text-white p-4 rounded-lg border border-white/20 pr-12"
//                   placeholder="Password"
//                   placeholderTextColor="#9CA3AF"
//                   value={password}
//                   onChangeText={setPassword}
//                   secureTextEntry={!showPassword}
//                 />
//                 <TouchableOpacity 
//                   className="absolute right-3 top-4"
//                   onPress={togglePasswordVisibility}
//                 >
//                   <Text className="text-white">{showPassword ? "Hide" : "Show"}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>

//             <TouchableOpacity 
//               className="bg-secondary py-4 rounded-lg items-center mb-6"
//               activeOpacity={0.7}
//               onPress={handleLogin}
//             >
//               <Text className="text-white font-bold text-lg">LOGIN</Text>
//             </TouchableOpacity>

//             <View className="flex-row justify-center">
//               <Text className="text-gray-400">New User? </Text>
//               <TouchableOpacity onPress={toggleAuthMode}>
//                 <Text className="text-white font-bold">Sign up Instead!</Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         ) : (
//           // Signup Form
//           <>
//             <View className="mb-4">
//               <Text className="text-white text-sm mb-2">Enter your name</Text>
//               <TextInput
//                 className="bg-white/10 text-white p-4 rounded-lg border border-white/20"
//                 placeholder="Name"
//                 placeholderTextColor="#9CA3AF"
//                 value={name}
//                 onChangeText={setName}
//                 autoCapitalize="words"
//               />
//             </View>

//             <View className="mb-4">
//               <Text className="text-white text-sm mb-2">Enter Email</Text>
//               <TextInput
//                 className="bg-white/10 text-white p-4 rounded-lg border border-white/20"
//                 placeholder="Email"
//                 placeholderTextColor="#9CA3AF"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//               />
//             </View>

//             <View className="mb-6">
//               <Text className="text-white text-sm mb-2">Enter your password</Text>
//               <View className="relative">
//                 <TextInput
//                   className="bg-white/10 text-white p-4 rounded-lg border border-white/20 pr-12"
//                   placeholder="Password"
//                   placeholderTextColor="#9CA3AF"
//                   value={password}
//                   onChangeText={setPassword}
//                   secureTextEntry={!showPassword}
//                 />
//                 <TouchableOpacity 
//                   className="absolute right-3 top-4"
//                   onPress={togglePasswordVisibility}
//                 >
//                   <Text className="text-white">{showPassword ? "Hide" : "Show"}</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>

//             <TouchableOpacity 
//               className="bg-secondary py-4 rounded-lg items-center mb-6"
//               activeOpacity={0.7}
//               onPress={handleSignUp}
//             >
//               <Text className="text-white font-bold text-lg">SIGN UP</Text>
//             </TouchableOpacity>

//             <View className="flex-row justify-center">
//               <Text className="text-gray-400">Already have an account? </Text>
//               <TouchableOpacity onPress={toggleAuthMode}>
//                 <Text className="text-white font-bold">Login Instead!</Text>
//               </TouchableOpacity>
//             </View>
//           </>
//         )}

//         {isLogin && (
//           <TouchableOpacity className="items-center mt-6">
//             <Text className="text-red font-bold">Forgot Password</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Profile;


import { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants/icons";
import UserProfileScreen from "@/components/UserProfileScreen";
import { 
  getAuth, 
  User, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  updateProfile,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '@/services/firebase';

const Profile = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState<User | null>(null); // Changed from FirebaseAuthTypes.User to User

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setName("");
  };

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        Alert.alert("Error", "Please fill in all fields");
        return;
      }

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      Alert.alert("Success", "Logged in successfully!");
    } catch (error: unknown) {
      let errorMessage = "An unknown error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      Alert.alert("Error", errorMessage);
    }
  };

  const handleSignUp = async () => {
    try {
      if (!name || !email || !password) {
        Alert.alert("Error", "Please fill in all fields");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name
      });
      setUser({
        ...userCredential.user,
        displayName: name
      });
      Alert.alert("Success", "Account created successfully!");
    } catch (error: unknown) {
      let errorMessage = "An unknown error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      Alert.alert("Error", errorMessage);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      // Clear all form fields
      setEmail("");
      setPassword("");
      setName("");
      Alert.alert("Success", "Logged out successfully!");
    } catch (error: unknown) {
      let errorMessage = "An unknown error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      Alert.alert("Error", errorMessage);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  // ... rest of your component remains the same ...
  
  
  // // If user is logged in, show welcome message
  // if (user) {
  //   return (
  //     <SafeAreaView className="bg-primary flex-1 px-6">
  //       <View className="flex-1 justify-center items-center">
  //         <Text className="text-white text-2xl mb-6">
  //           Hi {user.displayName || user.email}!
  //         </Text>
  //         <TouchableOpacity 
  //           className="bg-secondary py-4 px-8 rounded-lg"
  //           onPress={handleLogout}
  //         >
  //           <Text className="text-white font-bold text-lg">LOGOUT</Text>
  //         </TouchableOpacity>
  //       </View>
  //     </SafeAreaView>
  //   );
  // }

  if (user) {
    return <UserProfileScreen user={user} onLogout={handleLogout} />;
  }

  // Rest of your component remains the same...
  return (
    <SafeAreaView className="bg-primary flex-1 px-6">
      <View className="flex-1 justify-center">
        {/* Logo */}
        <View className="items-center mb-10">
          <Image 
            source={icons.logo}
            className="w-20 h-20"
            resizeMode="contain"
          />
        </View>

        {isLogin ? (
          // Login Form
          <>
            <View className="mb-4">
              <Text className="text-white text-sm mb-2">Enter your Email</Text>
              <TextInput
                className="bg-white/10 text-white p-4 rounded-lg border border-white/20"
                placeholder="Email"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View className="mb-6">
              <Text className="text-white text-sm mb-2">Enter your password</Text>
              <View className="relative">
                <TextInput
                  className="bg-white/10 text-white p-4 rounded-lg border border-white/20 pr-12"
                  placeholder="Password"
                  placeholderTextColor="#9CA3AF"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity 
                  className="absolute right-3 top-4"
                  onPress={togglePasswordVisibility}
                >
                  <Text className="text-white">{showPassword ? "Hide" : "Show"}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity 
              className="bg-secondary py-4 rounded-lg items-center mb-6"
              activeOpacity={0.7}
              onPress={handleLogin}
            >
              <Text className="text-white font-bold text-lg">LOGIN</Text>
            </TouchableOpacity>

            <View className="flex-row justify-center">
              <Text className="text-gray-400">New User? </Text>
              <TouchableOpacity onPress={toggleAuthMode}>
                <Text className="text-white font-bold">Sign up Instead!</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          // Signup Form
          <>
            <View className="mb-4">
              <Text className="text-white text-sm mb-2">Enter your name</Text>
              <TextInput
                className="bg-white/10 text-white p-4 rounded-lg border border-white/20"
                placeholder="Name"
                placeholderTextColor="#9CA3AF"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
              />
            </View>

            <View className="mb-4">
              <Text className="text-white text-sm mb-2">Enter Email</Text>
              <TextInput
                className="bg-white/10 text-white p-4 rounded-lg border border-white/20"
                placeholder="Email"
                placeholderTextColor="#9CA3AF"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View className="mb-6">
              <Text className="text-white text-sm mb-2">Enter your password</Text>
              <View className="relative">
                <TextInput
                  className="bg-white/10 text-white p-4 rounded-lg border border-white/20 pr-12"
                  placeholder="Password"
                  placeholderTextColor="#9CA3AF"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity 
                  className="absolute right-3 top-4"
                  onPress={togglePasswordVisibility}
                >
                  <Text className="text-white">{showPassword ? "Hide" : "Show"}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity 
              className="bg-secondary py-4 rounded-lg items-center mb-6"
              activeOpacity={0.7}
              onPress={handleSignUp}
            >
              <Text className="text-white font-bold text-lg">SIGN UP</Text>
            </TouchableOpacity>

            <View className="flex-row justify-center">
              <Text className="text-gray-400">Already have an account? </Text>
              <TouchableOpacity onPress={toggleAuthMode}>
                <Text className="text-white font-bold">Login Instead!</Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {isLogin && (
          <TouchableOpacity className="items-center mt-6">
            <Text className="text-red font-bold">Forgot Password</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;