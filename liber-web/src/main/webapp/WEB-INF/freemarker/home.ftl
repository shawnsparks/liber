<html>
<head>
	<title>Liber - Home</title>
</head>
<body>
	<h1>Liber</h1>
	<div>
		<ul>
			<li><a href="createArticle"/>Create New Article</a></li>
		</ul>
	</div>
	<p>Liber is an awesome web content management system!</p>
	<ul>
		<#list articles as article>
			<li>${article.name}</li>
		</#list>
	</ul>
</body>
</html>