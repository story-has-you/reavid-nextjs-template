import { createClient } from "@/config/supabase/client";

export const signInWithGoogle = async () => {
  const supabase = createClient();
  await supabase.auth.signInWithOAuth({
    provider: "google",
  });
};

export const signInWithGithub = async () => {
  const supabase = createClient();
  await supabase.auth.signInWithOAuth({
    provider: "github",
  });
};

export const signOut = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
};

export const getUser = async () => {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  return data;
};
