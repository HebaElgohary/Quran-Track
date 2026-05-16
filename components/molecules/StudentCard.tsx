import { View } from "react-native";
import Button from "../atoms/Button";
import Hr from "../atoms/Hr";
import Title from "../atoms/Title";
import { Feather } from "@expo/vector-icons";
import Avatar from "./Avatar";
import { StyleSheet } from "react-native";


interface StudentCardProps {
  isStudent: boolean;
  titleAr: string;
  titleEn: string;
  subtitle: string;
  btn1: string;
  btn2: string;
  image?: string;
}

export default function StudentCard({
  titleAr,
  titleEn,
  subtitle,
  btn1,
  btn2,
  isStudent,
  image,
}: StudentCardProps) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.row}>
        {/* Left side */}
        <View style={styles.leftSection}>
          {isStudent && <Avatar name={titleAr} image={image} />}

          <View style={styles.textColumn}>
            <Title variant="btnPrimary" size="xl">
              {titleAr}
            </Title>
            <Title size="sm">{subtitle}</Title>
          </View>
        </View>

        {/* Right side */}
        <Title>{titleEn}</Title>
      </View>

      <Hr />

      {/* Actions */}
      <View style={styles.actionsRow}>
        <Button variant="transparent" textColor="warning">
          {btn1} <Feather name="edit-2" />
        </Button>

        <Button variant="transparent" textColor="danger">
          {btn2} <Feather name="trash-2" />
        </Button>
      </View>
    </View>
  );
}

 const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginHorizontal: 10,
    padding: 15,
    borderWidth: 1,
    borderRadius: 16,
    gap: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  textColumn: {
    flexDirection: "column",
    gap: 6,
  },

  actionsRow: {
    flexDirection: "row",
    gap: 10,
  },
});