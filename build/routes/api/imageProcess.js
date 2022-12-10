"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const validate_1 = __importDefault(require("../../ImageProcessingFunctions/middleware/validate"));
const functions_1 = __importDefault(require("../../ImageProcessingFunctions/imageProcessing/functions"));
const imagesRouter = express_1.default.Router();
imagesRouter.get('/', (req, res) => {
    res.status(200).sendFile(path_1.default.resolve('./' + 'index.html'));
});
// processing image endpoint
imagesRouter.get('/sizingImage', validate_1.default, (req, res) => {
    // get the query values from the request
    const filename = req.query.imageFile;
    const fileExt = filename.split('.');
    const width = req.query.width;
    const height = req.query.height;
    const thumbNail = path_1.default.resolve('./' + 'thumbnail');
    const pic = thumbNail + `/${fileExt[0]}_${width}_${height}.${fileExt[1]}`;
    // main logic to decide how to deal with this image
    if (functions_1.default.IfImageExistsInMainFolder(filename)) {
        if (fs_extra_1.default.existsSync(thumbNail)) {
            if (functions_1.default.IfImageAlreadyCreated(pic)) {
                // show that sized image
                res.sendFile(pic);
            }
            else {
                res.sendFile(functions_1.default.sizing(filename, width, height, fileExt, thumbNail));
            }
        }
        else {
            fs_extra_1.default.mkdirSync(thumbNail);
            res.sendFile(functions_1.default.sizing(filename, width, height, fileExt, thumbNail));
        }
    }
    else {
        res
            .status(400)
            .send('please choose pic from the image directory or put ur desired pic in this folder');
    }
});
exports.default = imagesRouter;
