"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
const supertest_1 = __importDefault(require("supertest"));
const endpoint = 'http://localhost:3000/';
describe('check if server endpoint is reached ', () => {
    it('server must be reached and with 200 ok status', () => {
        (0, supertest_1.default)(index_1.default).get(endpoint).expect(200);
    });
});
