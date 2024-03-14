import { buildPageLanguage } from "@/config/locale";
import React from "react";

export default async function Login() {
  const l = await buildPageLanguage();
  return <div>{l.documentation}</div>;
}
