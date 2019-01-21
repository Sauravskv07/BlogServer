module.exports=
{	
	getComments(req,res)
	{	
		if(req.store.posts.comments==[])
			res.status(204).send('No Comments for this post till Now');
		else	{
			res.status(200).send(req.store.posts[req.params.postId].comments);
			}
	},
	updateComment(req,res)
	{	if(req.store.posts[req.params.postId].comments.length<(req.params.commentId+1))
			res.status(404).send('No such comment in the database');
		else	{
			req.store.posts[req.params.postId].comments[req.params.commentId]=req.body;
			res.status(200).send('Done updating');
			}
	},
	addComment(req,res)
	{
		req.store.posts[req.params.postId].comments.push(req.body);
		res.status(201).send('Done Adding');
	},
	deleteComment(req,res)
	{	if(req.store.posts[req.params.postId].comments.length<(postId+1))
			res.status(404).send('No such comment in the database');
		else	{
			req.store.posts[req.params.postId].comments.splice(req.params.commentId,1);
			res.status(200).send('Done Deleting');
			}
	}
}
