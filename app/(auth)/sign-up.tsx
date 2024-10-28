import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import Oauth from "@/components/Oauth";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSignUpPress = async () => {};

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image className="z-0 w-full h-[250px]" source={images.signUpCar} />
          <Text className=" text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5 ">
            Create your account
          </Text>
        </View>

        <View className="p-5">
          <InputField
            label="Name"
            labelStyle="text-lg font-JakartaSemiBold mb-3"
            icon={icons.person}
            value={form.name}
            onChangeText={(value: string) => setForm({ ...form, name: value })}
            placeholder="Enter your name"
          />
          <InputField
            label="Email"
            labelStyle="text-lg font-JakartaSemiBold mb-3"
            placeholder="Enter your email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value: string) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            labelStyle="text-lg font-JakartaSemiBold mb-3"
            icon={icons.lock}
            value={form.password}
            onChangeText={(value: string) =>
              setForm({ ...form, password: value })
            }
            placeholder="Enter your password"
            secureTextEntry={true}
          />
          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-6"
          />

          <Oauth />
          <Link
            href="/sign-in"
            className="text-lg text-center text-general-200 mt-10"
          >
            <Text>Already have an account? </Text>
            <Text className="text-primary-500">Sign in</Text>
          </Link>

          {/* Verification modal */}
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
