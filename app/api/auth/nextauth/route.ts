// pages/api/auth/[...nextauth].ts
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("https://your-backend.com/api/login", {
          method: "POST",
          body: JSON.stringify(credentials),
        });
        const user = await res.json();

        if (res.ok && user) return user;
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
});
