'use client';
import { useForm } from 'react-hook-form';
import styles from '../homepage.module.css';

const Register = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = async (data) => {
		console.log(data);
	};

	return (
		<div className={styles.wrapper}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input {...register('email')} placeholder="Email" />
				</div>

				<div>
					<input {...register('password')}
						type="password"
						placeholder="Password"
					/>
				</div>

				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default Register;
