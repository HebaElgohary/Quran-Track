import { groupFields } from "@/schemas/groupFields";
import { scheduleFields } from "@/schemas/scheduleFields";
import { sessionFields } from "@/schemas/sessionfields";
import { studentFields } from "@/schemas/studentFields";


export const formSchemas = {
  Students: studentFields,
  Groups: groupFields,
  Sessions: sessionFields,
  Schedule: scheduleFields,
  
  
};