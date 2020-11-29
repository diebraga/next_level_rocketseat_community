import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ hello: "Hello"})

})

export default routes;