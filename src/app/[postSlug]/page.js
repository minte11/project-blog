import React from 'react';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';
import {loadBlogPost} from "@/helpers/file-helpers";
import {MDXRemote} from "next-mdx-remote/rsc";
import COMPONENTS_MAPPING from "@/helpers/mdx-components-mapping";

export async function generateMetadata ({params}) {
	const {postSlug} = await params;
	const {frontmatter} = await loadBlogPost(postSlug);
	const {title, abstract} = frontmatter;
	return {
		title,
		description: abstract,
	};
	
	
}

async function BlogPost ({params}) {
	const {postSlug} = await params;
	const {frontmatter, content} = await loadBlogPost(postSlug);
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
