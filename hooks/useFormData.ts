import { FormData, FormName, Student } from "@/types/appTypes";
import { useStudents } from "./useStudent";
import useGroups from "./useGroup";

export const useFormData:(formName:FormName)=>FormData=(formName:FormName)=>{

  const { students } = useStudents()
  const { groups } = useGroups()

  switch (formName) {
    // case "Students":return students
    case "Groups":return students
    default: return [] as Student[]
  }

   

};
