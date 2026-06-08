import { useGroupForm } from "@/hooks/useGroupForm";
import { Group, GroupFormData, SourcesMap } from "@/types/appTypes";
import React from "react";
import { View } from "react-native";
import Form from "./form/Form";
import FormHeading from "./form/FormHeading";
import { useStudents } from "@/hooks/useStudent";


export default function GroupForm<T>({
  handleSubmit,
  formData: group,
  setOpen,
  open,
}: {
  formData?: T;
  handleSubmit?: (data: T) => Promise<void>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) {
  const { students } = useStudents()
  console.log(students);

  const { formData, setFormData, errors, validate, reset } =
    useGroupForm(group as Group);



const onSubmit = async () => {
  console.log("GROUP FORM ONSUBMIT");

  const isValid = validate();

  console.log("IS VALID", isValid);

  if (!isValid) return;

  if (handleSubmit) {
    console.log("CALLING ADDGROUP");
    await handleSubmit(formData as T);
      setOpen(false);

  }
};

    //------- source resolver-------//
const sources: Partial<SourcesMap> = {
  students: (students ?? []).map((student) => ({
    id: student.id,
    name: student.nameAr,
    value: student.id,
    checked: student.groupId === (group as Group)?.id,
    data: student,
  })),
};
    //---------------------------//

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 16,
        borderRadius: 10,
        width: "100%",
        marginHorizontal: "auto",
      }}
    >
      {/* form heading */}
      <FormHeading title="مجموعة  جديدة " name={"x"} setOpen={setOpen} />
      {/* /////////////////// */}
      <Form<T>
        formData={formData}
        setFormData={setFormData}
        page="Groups"
        btn1={"اضافة"}
        btn2={"الغاء"}
          sources={sources}

        setOpen={setOpen}
        handleSubmit={onSubmit}
      />
    </View>
  );
}
