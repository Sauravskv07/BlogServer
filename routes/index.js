const posts=require('./posts.js');
const comments=require('./comments.js');
const express=require('express');
const bodyParser=require('body-parser');
blogapp=express();

let store = {
	posts : [
		 {
		   "Topic":"Node JS for Beginers",
			"TopicURL":"http://google.com",
			"Body":"This article is all about Node js for beginnes. Expers are recommended to stay away from this topic.",
			"comments": [
			  {"text":"This is a really good begining"},
			  {"text":"May be you should invite the experts as well for their comment"}
			]
		 }
	]
   
   };
   
module.exports.blogapp=blogapp;
blogapp.use((req, res, next) =>{
	req.store = store;
	next();
  });

blogapp.use(bodyParser.json());  

blogapp.get('/posts',(req,res)=>{
	posts.getPosts(req,res);});
blogapp.post('/posts',(req,res)=>{
	posts.addPost(req,res);});
blogapp.put('/posts/:postId',(req,res)=>{
	posts.updatePost(req,res);});
blogapp.delete('/posts/:postId',(req,res)=>{
	posts.deletePost(req,res);});

blogapp.get('/posts/:postId/comments',(req,res)=>{
	comments.getComments(req,res);});
blogapp.post('/posts/:postId/comments',(req,res)=>{
	comments.addComment(req,res);});
blogapp.put('/posts/:postId/comments/:commentId',(req,res)=>{
	comments.updateComment(req,res);});
blogapp.delete('/posts/:postId/:commentId',(req,res)=>{
	comments.deleteComment(req,res);});

