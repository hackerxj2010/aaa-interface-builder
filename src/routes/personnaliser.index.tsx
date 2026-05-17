import { createFileRoute, redirect } from "@tanstack/react-router";
export const Route = createFileRoute("/personnaliser/")({
  beforeLoad: () => { throw redirect({ to: "/personnaliser/competences" }); },
});