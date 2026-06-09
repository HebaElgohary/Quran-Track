import { groupFields } from "@/schemas/groupFields";
import { scheduleFields } from "@/schemas/scheduleFields";
import { sessionFields } from "@/schemas/sessionfields";
import { studentFields } from "@/schemas/studentFields";
import { FormName } from "@/types/appTypes";


export const formSchemas = {
  Students: studentFields,
  Groups: groupFields,
  Sessions: sessionFields,
    Schedule: scheduleFields,
  
  
};