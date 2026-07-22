import { cookies } from "next/headers";

export async function getLocale(): Promise<"ar" | "en"> {
  const cookieStore = await cookies();

  return (
    (cookieStore.get("locale")?.value as "ar" | "en") ??
    "ar"
  );
}