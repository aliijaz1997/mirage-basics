import {Server} from 'miragejs';
import items from './json.json';
   

 function makeServer() {
  let server = new Server({
    routes() {
      this.namespace = "fakeapi"

      this.get("/items", () => {
        return items;
      })
    },
  })

  return server
}

export default makeServer;