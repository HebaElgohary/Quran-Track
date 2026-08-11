import { useGroupForm } from "@/hooks/useGroupForm";
import { useStudents } from "@/hooks/useStudent";
import { Group, GroupFormData, SourcesMap } from "@/types/appTypes";
import React, { useEffect } from "react";
import { useWindowDimensions, View } from "react-native";
import Form from "./form/Form";
import FormHeading from "./form/FormHeading";

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
  const { students, loadStudents } = useStudents();

  useEffect(() => {
    loadStudents();
  }, []);

  const { formData, setFormData, errors, validate } = useGroupForm(
    group as Group
  );
const {width,height}=useWindowDimensions()
const formHeight = Math.min(height * 0.85, 700);
  const onSubmit = async () => {
    console.log("GROUP FORM ONSUBMIT");

    const isValid = validate();

    console.log("IS VALID", isValid);

    if (!isValid) return;

    if (handleSubmit) {
      console.log("FORM DATA BEFORE UPDATE", formData);
      console.log("SELECTED STUDENTS", formData.students);

      await handleSubmit(formData as T);

      setOpen(false);
    }
  };


  const sources: Partial<SourcesMap> = {
    students: (students ?? []).map((student) => ({
      id: student.id,
      name: student.nameAr,
      label: student.nameAr,
      value: student.id,
      checked:
        student.groupId === (group as Group)?.id,
      data: student,
    })),
  };


  return (
      <View style={{backgroundColor:'white',padding:12,borderRadius:10,height:formHeight,width:width-44}}>


      <FormHeading
        title="مجموعة جديدة"
        name="x"
        setOpen={setOpen}
      />


      <Form<GroupFormData>
        formData={formData}
        setFormData={setFormData}
        page="Groups"
        errors={errors}
        sources={sources}
        setOpen={setOpen}
        handleSubmit={onSubmit}
      />

    </View>
  );
}