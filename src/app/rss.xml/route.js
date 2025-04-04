import {BLOG_DESCRIPTION} from "@/constants";
import RSS from "rss";
import {getBlogPostList} from "@/helpers/file-helpers";

export async function GET() {
	const feed = new RSS({
		title: 'title',
		description: BLOG_DESCRIPTION,
		feed_url: 'rss.xml',
		site_url: '/',
		language: 'en',
	});
	const posts = await getBlogPostList();
	posts.map(post => {
		feed.item({
			title: post.title,
			description: post.description,
			url: `/${post.slug}`,
			date: post.publishedOn,
		});
	})
	const xml = feed.xml();
	
	
	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=UTF-8',
		},
	});
}
