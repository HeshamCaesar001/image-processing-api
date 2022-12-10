"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imageProcess_1 = __importDefault(require("../routes/api/imageProcess"));
const supertest_1 = __importDefault(require("supertest"));
const endpoint = 'http://localhost:3000/';
//check if the home page returned with ok
describe('check if endpoint reached ', () => {
    it('image processing endpoint api reached with 200 ok status', () => {
        (0, supertest_1.default)(imageProcess_1.default).get(endpoint).expect(200);
    });
});
