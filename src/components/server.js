import {Server} from 'miragejs';
import items from './json.json';
   

 function makeServer() {
  let server = new Server({
    routes() {
      this.namespace = "fakeapi"

      this.get("/items", () => {
        return items;
      })
      this.post("/add",( schema, req) => {
          items.push(JSON.parse(req.requestBody));
            })
    },
  })

  return server
}

export default makeServer;