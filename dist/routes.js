"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
/* Controllers */
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const EditCategoryController_1 = require("./controllers/category/EditCategoryController");
const ListCategoriesController_1 = require("./controllers/category/ListCategoriesController");
const DeleteCategoryController_1 = require("./controllers/category/DeleteCategoryController");
const EditProductController_1 = require("./controllers/product/EditProductController");
const ListProductsController_1 = require("./controllers/product/ListProductsController");
const DeleteProductController_1 = require("./controllers/product/DeleteProductController");
const SaleProductController_1 = require("./controllers/product/SaleProductController");
const router = (0, express_1.Router)();
exports.router = router;
/* USER */
router.post("/user", new CreateUserController_1.CreateUserController().handle);
router.post("/auth", new AuthUserController_1.AuthUserController().handle);
/* CATEGORY */
router.post("/category", isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
router.put("/category/edit", isAuthenticated_1.isAuthenticated, new EditCategoryController_1.EditCategoryController().handle);
router.get("/categories", isAuthenticated_1.isAuthenticated, new ListCategoriesController_1.ListCategoriesController().handle);
router.delete("/category/delete", isAuthenticated_1.isAuthenticated, new DeleteCategoryController_1.DeleteCategoryController().handle);
/* PRODUCT */
router.post("/product", isAuthenticated_1.isAuthenticated, new CreateProductController_1.CreateProductController().handle);
router.put("/product/edit", isAuthenticated_1.isAuthenticated, new EditProductController_1.EditProductController().handle);
router.get("/products", isAuthenticated_1.isAuthenticated, new ListProductsController_1.ListProductsController().handle);
router.delete("/product/delete", isAuthenticated_1.isAuthenticated, new DeleteProductController_1.DeleteProductController().handle);
router.put("/product/sale", isAuthenticated_1.isAuthenticated, new SaleProductController_1.SaleProductController().handle);
