"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = __importDefault(require("../ImageProcessingFunctions/imageProcessing/functions"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
describe('check if uploaded image from the image folder', () => {
    it('should return false if the image not from image folder', () => {
        expect(functions_1.default.IfImageExistsInMainFolder('Pictures/Hisham.jpg')).toBe(false);
    });
    it('should return true if the uploaded image from the image directory', () => {
        expect(functions_1.default.IfImageExistsInMainFolder('fjord.jpg')).toBe(true);
    });
});
describe('check if uploaded image already exits with this size', () => {
    it('should return true if the image already exits with this size', () => {
        expect(functions_1.default.IfImageAlreadyCreated(path_1.default.resolve('./' + 'thumbnail/fjord_80_80.jpg'))).toBe(true);
    });
    it('should return false if the image is with new size', () => {
        expect(functions_1.default.IfImageAlreadyCreated(path_1.default.resolve('./' + 'thumbnail/fjord_35_21.jpg'))).toBe(false);
    });
});
describe('test the resizing function', () => {
    it('should generate the resized image', () => __awaiter(void 0, void 0, void 0, function* () {
        const filename = 'palmtunnel.jpg';
        const fileExt = filename.split('.');
        const width = '30';
        const height = '78';
        const thumbNail = path_1.default.resolve('./' + 'thumbnail');
        const result = `${fileExt[0]}_${width}_${height}.${fileExt[1]}`;
        /// check if the image exists just delete it so the test always generate new image resized
        if (fs_extra_1.default.existsSync(path_1.default.resolve('./' + `thumbnail/${result}`))) {
            fs_extra_1.default.unlinkSync(path_1.default.resolve('./' + `thumbnail/${result}`));
        }
        yield functions_1.default.sizing(filename, width, height, fileExt, thumbNail);
        setTimeout(() => {
            expect(fs_extra_1.default.existsSync(path_1.default.resolve('./' + `thumbnail/${result}`))).toBe(true);
        }, 5000);
    }));
});
