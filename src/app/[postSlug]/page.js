import React from 'react';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';
import {notFound} from 'next/navigation'
import {loadBlogPost} from "@/helpers/file-helpers";
import {MDXRemote} from "next-mdx-remote/rsc";
import COMPONENTS_MAPPING from "@/helpers/mdx-components-mapping";

export async function generateMetadata ({params}) {
	const {postSlug} = await params;
	const blogPost = await loadBlogPost(postSlug);
	
	if (!blogPost) {
		notFound();
	}
	
	const {frontmatter} = blogPost
	const {title, abstract} = frontmatter;
	return {
		title,
		description: abstract,
	};
	
	
}

async function BlogPost ({params}) {
	const {postSlug} = await params;
	const blogPost = await loadBlogPost(postSlug);
	if(!blogPost) {
		notFound();
	}
	const {frontmatter, content} = blogPost;
	const {title, publishedOn} = frontmatter;
	return (
		<article className={styles.wrapper}>
			<BlogHero
				title={title}
				publishedOn={publishedOn}
			/>
			<div className={styles.page}>
				<MDXRemote source={content} components={COMPONENTS_MAPPING}/>
			</div>
		</article>
	);
}

export default BlogPost;
