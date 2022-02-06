import App from './app';

class Server {
  constructor(port) {
    this.PORT = port;
    this.app = new App().build();
  }

  async serve() {
    try {
      const addr = await this.app.listen(this.PORT);
      console.log('runnning at:', addr);
    } catch (error) {
      console.log('Something went worng:', error);
    }
  }
}

export default Server;
