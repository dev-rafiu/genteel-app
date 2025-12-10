import { useAuthStore } from "@/src/utils/authStore";
import { Pressable, Text } from "react-native";

type Props = {
  scrollTo: () => void;
  isLastScreen: boolean;
};

function NextButton({ scrollTo, isLastScreen }: Props) {
  const { completeOnboarding } = useAuthStore();

  const handlePress = () => {
    if (isLastScreen) {
      completeOnboarding();
    } else {
      scrollTo();
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      className="w-full h-[50px] rounded-md bg-primary items-center justify-center"
    >
      <Text className="text-text-primary text-lg font-semibold">
        {isLastScreen ? "Get Started" : "Next"}
      </Text>
    </Pressable>
  );
}

export default NextButton;
