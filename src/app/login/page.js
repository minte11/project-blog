'use client';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import LoginWithGitHub from '@/components/LoginWithGithub';

const LoginPage = () => {
	const { register, handleSubmit } = useForm();
	const router = useRouter();

	const onSubmit = async (data) => {
		const res = await signIn('credentials', {
			email: data.email,
			password: data.password,
			redirect: false,
		});

		console.log(res);

		// if (res?.ok) {
		// 	router.push('/');
		// } else {
		// 	alert('Login failed. Try email: eve.holt@reqres.in, password: anything');
		// }
	};

	return (
		<div>
			<LoginWithGitHub />

			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register('email')}
					placeholder="Email"
					defaultValue="eve.holt@reqres.in"
				/>

				<input {...register('password')}
					type="password"
					placeholder="Password"
				/>

				<button type="submit">Login with Reqres</button>
			</form>
		</div>
	);
};

export default LoginPage;
