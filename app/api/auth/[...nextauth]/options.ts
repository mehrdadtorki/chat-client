import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your-cool username",
        },
        email: {
          label: "Email:",
          type: "email",
          placeholder: "your-cool email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-cool password",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Missing credentials");
        }

        const { username, password } = credentials;

        try {
          // Call your GraphQL API
          const res = await fetch("http://localhost:4000/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              query: `
                mutation UserLogin($username: String!, $password: String!) {
                  userLoginMutation(username: $username, password: $password) {
                    token
                    user {
                      id
                      username
                      email
                    }
                  }
                }
              `,
              variables: { username, password },
            }),
          });

          const { data, errors } = await res.json();

          if (errors || !data?.userLoginMutation) {
            throw new Error("Invalid login");
          }

          const { token, user } = data.userLoginMutation;

          // Return the user object (can include token if needed)
          return { ...user, token }; // This will be stored in the session
        } catch (error) {
          console.error("Error in NextAuth authorize:", error);
          return null;
        }
      },
    }),
  ],
};
