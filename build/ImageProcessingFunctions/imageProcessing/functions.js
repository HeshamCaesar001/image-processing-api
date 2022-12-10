"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const IfImageExistsInMainFolder = (filename) => {
    if (fs_extra_1.default.existsSync(path_1.default.resolve('./' + `/images/${filename}`))) {
        return true;
    }
    else {
        return false;
    }
};
const IfImageAlreadyCreated = (pic) => {
    if (fs_extra_1.default.existsSync(pic)) {
        return true;
    }
    else {
        return false;
    }
};
const sizing = (filename, width, height, fileExt, thumbNail) => {
    (0, sharp_1.default)(path_1.default.resolve('./' + `/images/${filename}`))
        .resize(parseInt(width), parseInt(height))
        .toFile(thumbNail + `/${fileExt[0]}_${width}_${height}.${fileExt[1]}`);
    const dir = path_1.default.resolve('./' + 'sized.html');
    return dir;
};
exports.default = { IfImageExistsInMainFolder, IfImageAlreadyCreated, sizing };
