import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js';

// let tweets = [
//     {
//         id: '1',
//         text: '화이팅!',
//         createdAt: Date.now().toString(),
//         name: 'Bob',
//         username: 'bob',
//         url: 'https://werwer.com',
//     },
//     {
//         id: '2',
//         text: '화이팅22!',
//         createdAt: Date.now().toString(),
//         name: 'Ellie',
//         username: 'ellie',
//     }
// ];

const router = express.Router();

//GEt /tweets
//GET /tweets?username=:username
router.get('/', tweetController.getTweets);//getTweets()아니고 getTweets!! 호출하면 안됨.
//GET /tweets/:id
router.get('/:id', tweetController.getTweet)
//POST /tweets
router.post('/', tweetController.createTweet)

//PUT /tweets/:id
router.put('/:id', tweetController.updateTweet)
//DELETE /tweets/:id
router.delete('/:id', tweetController.deleteTweet)

export default router;