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

export const signInWithPassword = async (email: string, password: string) => {
  const supabase = createClient();
  const { data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return data;
};

export const signInWithEmail = async (email: string, redirectTo: string) => {
  const supabase = createClient();
  const { data } = await supabase.auth.signInWithOtp({
    email,
    options: {
      shouldCreateUser: false,
      emailRedirectTo: redirectTo,
    },
  });
  return data;
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
