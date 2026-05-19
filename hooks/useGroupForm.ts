import { GroupFormData ,Group} from "@/types/appTypes";
// import { validateGroup } from "@/utils/validateGroup";
import { useState } from "react";

export function useGroupForm(initial?: Group) {
  const [formData, setFormData] = useState<GroupFormData>(
    initial || {
      nameAr: "",
      nameEn: "",
      color: "",
      students: [],
      notes: "",
    }
  );

//   const validate = () => {
//     const errors = validateGroup(form.formData);
//     form.setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

  return {
    formData,

    setFormData,
    // validate,
  };
}