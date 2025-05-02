import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {

	// Configure one or more authentication providers
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'text',
				},
				password: {
					label: 'Password',
					type: 'password',
				},
			},
			async authorize(credentials) {
				const res = await fetch('https://reqres.in/api/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'x-api-key': 'reqres-free-v1',
					},
					body: JSON.stringify({
						email: credentials?.email,
						password: credentials?.password,
					}),
				});

				if (!res.ok) {
					throw new Error('Invalid credentials');
				}

				const data = await res.json();
				console.log(data);

				// Normally you'd verify the user and return info from your DB
				return {
					id: 'reqres_user',
					email: credentials?.email,
					token: data.token,
					role: 'user',
				};
			},
		}),
	],
	session: {
		strategy: 'jwt',
	},
	pages: {
		signIn: '/login',
	},
	secret: process.env.NEXTAUTH_SECRET,
	callbacks: {
		async jwt({ token, user, account }) {
			// From CredentialsProvider (user manually returned)
			if (user?.token) {
				token.token = user.token;
				token.role = user.role;
			}

			// From GitHub OAuth
			if (account?.provider === 'github') {
				console.log(account);
				token.accessToken = account.access_token; // GitHub access token
				token.provider = 'github';
			}

			return token;
		},

		async session({ session, token }) {
			// Credentials session data
			if (token.token) {
				session.user.token = token.token;
				session.user.role = token.role;
			}

			// GitHub session data
			if (token.accessToken) {
				session.user.accessToken = token.accessToken;
				session.user.provider = token.provider;
			}

			return session;
		},
	},

};
export default NextAuth(authOptions);