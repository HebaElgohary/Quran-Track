import { useGroupForm } from "@/hooks/useGroupForm";
import { Group, GroupFormData, SourcesMap } from "@/types/appTypes";
import React from "react";
import { View } from "react-native";
import Form from "./form/Form";
import FormHeading from "./form/FormHeading";
import { useStudents } from "@/hooks/useStudent";

export default function GroupForm({
  handleSubmit,
  formData: group,
  setOpen,
  open,
}: {
  formData?: Group;
  handleSubmit?: (data: GroupFormData) => Promise<void>;
  setOpen: any;
  open: boolean;
}) {
  const { students } = useStudents()
  console.log(students);
  const groupStudents = students.filter(
    (student) => student.groupId === group?.id,
  );
  const { formData, setFormData, errors, validate, reset } =
    useGroupForm(group);


  const onSubmit = async () => {
    const isValid = validate();
    if (!isValid) return;

    if (handleSubmit) await handleSubmit(formData);
    reset();
    setOpen(false);
  };

    //------- source resolver-------//
    const sources: Partial<SourcesMap> = {
      students: students.map((student) => ({
        id: student.id,
        name: student.nameAr,
        value: student.id,
        checked:  student.groupId === group?.id,
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
      <Form<GroupFormData>
        formData={formData}
        setFormData={setFormData}
        page="Groups"
        btn1={"اضافة"}
        btn2={"الغاء"}
          sources={sources}

        setOpen={setOpen}
        handleSubmit={handleSubmit}
      />
    </View>
  );
}
