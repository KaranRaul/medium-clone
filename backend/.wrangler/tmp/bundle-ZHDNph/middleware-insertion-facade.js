import worker, * as OTHER_EXPORTS from "E:\\cohort\\medium\\backend\\src\\index.ts";
import * as __MIDDLEWARE_0__ from "E:\\cohort\\medium\\backend\\node_modules\\wrangler\\templates\\middleware\\middleware-ensure-req-body-drained.ts";

worker.middleware = [
	__MIDDLEWARE_0__.default,
	...(worker.middleware ?? []),
].filter(Boolean);

export * from "E:\\cohort\\medium\\backend\\src\\index.ts";
export default worker;