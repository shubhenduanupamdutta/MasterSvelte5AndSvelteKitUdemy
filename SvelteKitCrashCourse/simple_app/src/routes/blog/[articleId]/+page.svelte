<script lang="ts">
	let { data } = $props();
	let { blogPost } = data;
	$inspect(data);
</script>

<h1>Blog Article</h1>
<h4>{blogPost.id}. {blogPost.title}</h4>
<p>{blogPost.content}</p>
