import { Alert, Image, Text, View } from "react-native";
import { icons } from "@/constants";
import CustomButton from "./CustomButton";
import { useOAuth } from "@clerk/clerk-expo";
import { useCallback } from "react";
import { googleOAuth } from "@/lib/auth";
import { router } from "expo-router";

const Oauth = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const handleGoogleSignIn = useCallback(async () => {
    try {
      const result = await googleOAuth(startOAuthFlow);
      if (result.code === "session_exists" || result.code === "success") {
        router.replace("/(root)/(tabs)/home");
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className="flex-1 h-[1px] bg-general-100 " />
        <Text className="text-lg "> or</Text>
        <View className="flex-1 h-[1px] bg-general-100 " />
      </View>
      <CustomButton
        title="Login with Google"
        className="mt-5 w-full shadow-none"
        bgVariant="outline"
        textVariant="primary"
        onPress={handleGoogleSignIn}
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-5 h-5 mx-2"
          />
        )}
      />
    </View>
  );
};

export default Oauth;
