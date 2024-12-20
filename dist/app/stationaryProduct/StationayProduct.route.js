"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const StationaryProduct_controller_1 = require("./StationaryProduct.controller");
const router = express_1.default.Router();
router.post('/', StationaryProduct_controller_1.ProductControllers.createProduct);
router.get('/', StationaryProduct_controller_1.ProductControllers.getAllProducts);
router.get('/:productId', StationaryProduct_controller_1.ProductControllers.getSignleProduct);
router.put('/:productId', StationaryProduct_controller_1.ProductControllers.updateProduct);
router.delete('/:productId', StationaryProduct_controller_1.ProductControllers.deleteProduct);
exports.ProductRoutes = router;
