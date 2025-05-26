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
exports.SaleProductService = void 0;
const index_1 = __importDefault(require("../../prisma/index"));
class SaleProductService {
    execute({ product_id, amount }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!product_id || !amount) {
                throw new Error("Dados de entrada não foram passados corretamente!");
            }
            const queryProduct = yield index_1.default.product.findFirst({
                where: {
                    id: product_id,
                },
            });
            if ((queryProduct === null || queryProduct === void 0 ? void 0 : queryProduct.amount) >= amount && amount > 0) {
                const newAmount = (queryProduct === null || queryProduct === void 0 ? void 0 : queryProduct.amount) - amount;
                const saveSale = yield index_1.default.product.update({
                    where: {
                        id: product_id,
                    },
                    data: {
                        amount: newAmount,
                    },
                    select: {
                        id: true,
                        name: true,
                        amount: true,
                    },
                });
                return saveSale;
            }
            else {
                throw new Error("Não foi possível efetuar a venda!");
            }
        });
    }
}
exports.SaleProductService = SaleProductService;
