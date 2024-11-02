import { HttpResponse } from "@mds-coding/http-response"
import { HttpHandler } from "./index.js"
import { HttpRequest } from "@mds-coding/http-request";

test("can use `HttpHandler` properly", () => {
  const handler: HttpHandler<{ hello: string }, { world: string }> = (req) => new HttpResponse(200, "OK", {}, { world: req.body.hello })
  const request = new HttpRequest("get", "/foo", {}, { hello: "42" });
  const response = handler(request);
  expect(response).toBeDefined();
  expect(response.statusCode).toBe(200);
  expect(response.statusMessage).toBe("OK");
  expect(response.headers).toStrictEqual({});
  expect(response.body.world).toStrictEqual("42");
})
