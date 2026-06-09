import { SessionFormData } from "@/types/appTypes";

export const useSession=()=>{

    const createSession = async (formData: SessionFormData) => {
console.log('formdata createSession',formData)
  const { student, ...rest } = formData;
  const studentId = student.id
  await addSession({ ...rest, studentId });
    }
    return {createSession}
}