// app/profile/page.tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '../../../pages/api/auth/[...nextauth]';
import { redirect } from 'next/navigation';

const ProfilePage = async () => {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect('/login'); // client-side safe redirect in app router
	}

	return (
		<div>
			<h1>
				Welcome,
				{JSON.stringify(session)}
			</h1>
		</div>
	);
};

export default ProfilePage;
