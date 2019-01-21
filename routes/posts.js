
module.exports=
{	
	getPosts(req,res)
	{
		if(req.store.posts.length==0)
			res.status(204).send('Nothing Posted till Now');
		else	{
			res.status(200).send(req.store);
			}
	},
	updatePost(req,res)
	{	if(req.store.posts.length<(req.params.postId+1))
			res.status(404).send('No such data in the database');
		else	{
			req.store.posts[req.params.postId]=req.body;
			res.status(200).send('Done updating');
			}
	},
	addPost(req,res)
	{
		let post=req.body;
		if(post.comments==undefined)
			post.comments=[];
		req.store.posts.push(post);
		res.status(201).send('Done Adding');
	},
	deletePost(req,res)
	{	if(req.store.posts.length<(req.params.postId+1))
			res.status(404).send('No such data in the database');
		else	{
			req.store.posts.splice(req.params.postId,1);
			res.status(200).send('Done Deleting');
			}
	}
}
