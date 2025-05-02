import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './styles.css';
import { BLOG_TITLE } from '@/constants';
import ThemeProvider from '@/components/ThemeProvider';
import ThemeWrapper from '@/components/ThemeWrapper';
import { cookies } from 'next/headers';
import ClientSessionProvider from '@/components/ClientSessionProvider';

export const metadata = {
	title: BLOG_TITLE,
	description: 'The home page of the blog',
};

const RootLayout = async ({ children }) => {
	const theme = await cookies().get('theme')?.value;
	return (
		<ClientSessionProvider>
			<ThemeProvider themeDefault={theme}>
				<ThemeWrapper>
					<body>
						<Header />
						<main>{children}</main>
						<Footer />
					</body>
				</ThemeWrapper>
			</ThemeProvider>
		</ClientSessionProvider>
	);
};

export default RootLayout;
