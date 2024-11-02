import { HttpRequest } from "@mds-coding/http-request";
import { HttpResponse } from "@mds-coding/http-response";

export interface HttpHandler<RequestBodyT, ResponseBodyT> {
  handle(request: HttpRequest<RequestBodyT>): HttpResponse<ResponseBodyT>;
} 

