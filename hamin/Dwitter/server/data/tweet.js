let tweets = [
  {
    id: "1",
    text: "hello",
    createdAt: Date.now().toString(),
    name: "Bob",
    username: "bob",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
  {
    id: "2",
    text: "bye",
    createdAt: Date.now().toString(),
    name: "Bob",
    username: "hamin",
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
  },
];

export function getAll() {
  return tweets;
}
export function getAllByUserName(username) {
  return tweets.filter((tweet) => tweet.username === username);
}
export function getById(id) {
  return tweets.find((t) => t.id === id);
}
export function create(text, name, username) {
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
export function update(id, text) {
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}
export function deleteT(id) {
  tweets = tweets.filter((t) => t.id !== id);
}
