import { signIn } from "next-auth/react";

export const handleGoogleSignIn = () => {
  signIn("google", { callbackUrl: "http://localhost:3000" });
};
export const handleGithubSignIn = () => {
  signIn("github", { callbackUrl: "http://localhost:3000" });
};
