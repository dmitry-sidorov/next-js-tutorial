import quotes from '../../quotes.json';

export default (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  res.status(200).json(quote);
};
