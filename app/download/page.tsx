import { redirect } from "next/navigation";

export default function page() {
  redirect("/releases/latest?download=true");
}
