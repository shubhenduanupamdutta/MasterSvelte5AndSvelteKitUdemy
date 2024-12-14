<script lang="ts">
	let { data } = $props();
	let { blogPost, articleId } = data;
	$inspect(data);
</script>

<h1>Blog Article</h1>
<h4>Article Id: {articleId}</h4>
<p>{blogPost}</p>
