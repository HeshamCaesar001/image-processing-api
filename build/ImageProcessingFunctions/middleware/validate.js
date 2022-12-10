"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const validate = (req, res, next) => {
    // the file must be with .jpg extension only
    const file = req.query.imageFile;
    if (path_1.default.extname(file) == '.jpg') {
        next();
    }
    else {
        res
            .status(400)
            .send('please choose images files only and with jpg extension');
    }
};
exports.default = validate;
