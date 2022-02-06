import Fastify from 'fastify';
import mercurius from 'mercurius';
import cors from 'fastify-cors';
import { PubSub } from 'graphql-subscriptions';

import schema from './graphql';

const pubsub = new PubSub();

class App {
  constructor() {
    this.app = Fastify({ logger: false });
    this.setUp();
    this.routes();
  }

  setUp() {
    this.app.register(cors, { origin: '*' });
    this.app.register(mercurius, {
      schema,
      graphiql: true,
      context: () => ({ pubsub }),
    });
  }

  routes() {
    this.app.all('/ping', (req, res) => { res.send({ ok: true, msg: 'pong' }); });
  }

  build() {
    return this.app;
  }
}

export default App;
