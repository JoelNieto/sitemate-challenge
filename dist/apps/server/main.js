/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(6);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
    createIssue(request) {
        return this.appService.createIssue(request);
    }
    updateIssue(id, request) {
        return this.appService.updateIssue(id, request);
    }
    deleteIssue(id) {
        return this.appService.deleteIssue(id);
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
tslib_1.__decorate([
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "createIssue", null);
tslib_1.__decorate([
    (0, common_1.Patch)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "updateIssue", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "deleteIssue", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const fs_1 = __webpack_require__(7);
const path_1 = tslib_1.__importDefault(__webpack_require__(8));
let AppService = class AppService {
    getData() {
        const file = (0, fs_1.readFileSync)(path_1.default.join(process.cwd(), 'apps/issues.json'), 'utf-8');
        common_1.Logger.log(file);
        return JSON.parse(file).issues;
    }
    createIssue(request) {
        let issues = this.getData();
        issues = [...issues, request];
        (0, fs_1.writeFileSync)(path_1.default.join(process.cwd(), 'apps/issues.json'), JSON.stringify({ issues: issues }));
        return this.getData();
    }
    deleteIssue(id) {
        let issues = this.getData();
        issues = issues.filter((x) => x.id !== id);
        (0, fs_1.writeFileSync)(path_1.default.join(process.cwd(), 'apps/issues.json'), JSON.stringify({ issues: issues }));
        return this.getData();
    }
    updateIssue(id, request) {
        let issues = this.getData();
        issues = issues.map((x) => (x.id !== id ? x : request));
        (0, fs_1.writeFileSync)(path_1.default.join(process.cwd(), 'apps/issues.json'), JSON.stringify({ issues: issues }));
        return this.getData();
    }
};
exports.AppService = AppService;
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("fs");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("path");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.enableCors();
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

/******/ })()
;