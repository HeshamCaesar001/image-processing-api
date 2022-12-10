"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageProcess_1 = __importDefault(require("./api/imageProcess"));
const routes = express_1.default.Router();
// here will be all the main routes for this project
routes.use(imageProcess_1.default);
exports.default = routes;
