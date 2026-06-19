import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { getTeacherProfile } from "@/storage/teacherStorage";

export default function Index() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await getTeacherProfile();
      setProfile(data);
      setLoading(false);
    };

    load();
  }, []);

  if (loading) return null;

  if (!profile) {
    return <Redirect href="/onboarding" />;
  }

  return <Redirect href="/(drawer)" />;
}