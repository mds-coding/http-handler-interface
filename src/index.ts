import { HttpRequest } from "@mds-coding/http-request";
import { HttpResponse } from "@mds-coding/http-response";

export type HttpHandler<RequestBodyT, ResponseBodyT> = (request: HttpRequest<RequestBodyT>) => HttpResponse<ResponseBodyT>;

