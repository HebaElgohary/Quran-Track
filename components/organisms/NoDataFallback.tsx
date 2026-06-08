import { useState, type ComponentType } from "react";
import { View } from "react-native";
import Button from "../atoms/Button";
import Subtitle from "../atoms/Subtitle";
import FormModal from "../molecules/form/FormModal";
import LottieAnimation from "../../animations/NotFound";

export default function NoDataFallback<T>({
  formName,
  Icon,
  text,
  btn,
  handleSubmit,
}: {
  Icon: ComponentType;
  text: string;
  btn: string;
  formName?: "Students" | "Groups" | "Sessions" | "Schedule" | undefined;
  handleSubmit?:  (formData: T) => Promise<void>;
}) {
  const [open, setOpen] = useState(false);
  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        display: "flex",

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 15,
        borderRadius: 10,
      }}
    >
      {/* icon */}
      <View style={{ display: "flex", alignItems: "center" }}>
        {/* <Icon /> */}
        <LottieAnimation />
      </View>
      {/* ////////////// */}

      {/* Text */}
      <View style={{ display: "flex", alignItems: "center" }}>
        <Subtitle>{text}</Subtitle>
        <Button
          variant="btnPrimary"
          size="xl"
          name="plus"
          onClick={() => {
            setOpen(true);
          }}
        >
          {btn}
        </Button>
        <View />

        {/* ///////////////// */}
      </View>

      <FormModal<T>
        open={open}
        setOpen={setOpen}
        formName={formName}
        handleSubmit={handleSubmit}
      />
    </View>
  );
}
