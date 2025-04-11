import React from 'react';
import Link from 'next/link'
import styles from "@/app/not-found.module.css";

export default function NotFound() {
	return (
		<div className={styles.wrapper}>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/">Return Home</Link>
		</div>
	)
}