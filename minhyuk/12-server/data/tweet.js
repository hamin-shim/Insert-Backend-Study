let tweets = [
    {
        id: '1',
        text: '화이팅!',
        createdAt: Date.now().toString(),
        name: 'Bob',
        username: 'bob',
        url: 'https://werwer.com',
    },
    {
        id: '2',
        text: '화이팅22!',
        createdAt: Date.now().toString(),
        name: 'Ellie',
        username: 'ellie',
    }
];

export function getAll() {
    return tweets;
}

export function getAllByUsername(username){
    return tweets.filter(t => t.username === username);
}

export function getById(id){
    return tweets.find(t => t.id === id);
}

export function create(text, name, username){
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        name,
        username,
    };
    tweets = [tweet, ...tweets];
    return tweet;
}

export function update(id, text){
    const tweet = tweets.find((tweet) => tweet.id === id);
    if(tweet){
        tweet.text = text;    
    }
    return tweet;
}

export function remove(id){
    tweets = tweets.filter(t => t.id !== id);   
    return tweets;
}