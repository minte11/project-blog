import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import React from "react";

export async function getBlogPostList () {
	const blogPosts = [];
	const folderPath = path.join(process.cwd(), '/content/');
	const files = await fs.readdir(folderPath);
	const fileContents = await Promise.all(
		files.map(async file => {
			const filePath = path.join(folderPath, file);
			const rawContent = await fs.readFile(filePath, 'utf8');
			const {data: frontmatter} = matter(rawContent);
			
			return {
				slug: file.replace('.mdx', ''),
				...frontmatter,
			};
		})
	);
	
	blogPosts.push(...fileContents);
	
	return blogPosts.sort((p1, p2) =>
		p1.publishedOn < p2.publishedOn ? 1 : -1
	);
}

export const loadBlogPost = React.cache(
	async function loadBlogPost (slug) {
		const rawContent = await readFile(
			`/content/${slug}.mdx`
		);
		const {data: frontmatter, content} =
			matter(rawContent);
		
		return {frontmatter, content};
	}
);

function readFile (localPath) {
	return fs.readFile(
		path.join(process.cwd(), localPath),
		'utf8'
	);
}

function readDirectory (localPath) {
	return fs.readdir(
		path.join(process.cwd(), localPath)
	);
}
