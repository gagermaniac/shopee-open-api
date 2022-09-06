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
const index_1 = __importDefault(require("./index"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shopee = index_1.default({
            host: "https://partner.shopeemobile.com",
            partner_id: +2003905,
            partner_key: "d773743ea6e73ad8dfe3c432e0e6e0c6506f2019d8d0dcf814e3b299be445675",
            redirect: "https://google.com",
        });
        // const result = await shopee.getAuthLink();
        const result = yield shopee.getAccessToken({
            code: "4958764e5057484d6f7153714f516749",
            shop_id: 119797661,
        });
        console.log(result);
        // const result = await shopee.refreshAccessToken({
        //   refresh_token: "09b3d8c0acbe0d91e77e424b4172e494",
        //   shop_id: 5304,
        // });
        // const shop = shopee.createShop({
        //   shop_id: 22943,
        //   onGetAccessToken: async () => {
        //     //get access token from db
        //     return "6324e6ea9e6c51f1ea86f2444f657dce";
        //   },
        //   onRefreshAccessToken: async () => {
        //     //get refresh token from db
        //     const { access_token, refresh_token } = await shopee.refreshAccessToken({ refresh_token: "refresh_token", shop_id: 22943 });
        //     //store new refresh token & access token
        //     return access_token;
        //   },
        // });
        // const result = await shop.Product.getCategory();
        // shop.Order.cancelOrder({ cancel_reason: CANCEL_REASON.COD_NOT_SUPPORTED, item_list: [], order_sn: "" });
        // const shopInfo = await shop.getShopInfo();
        // const { response } = await shop.Chat.getMessage({ conversation_id: 12344 });
        // const result = await shop.Chat.getMessage({ conversation_id: 22780506543289 });
        // console.log(result2.response);
        // const a = await shop.Product.getItemBaseInfo({ item_id_list: [101551196, 101551197] });
        // console.log(a);
        // console.log(result);
    }
    catch (error) {
        console.error(error);
        console.log("error");
    }
}))();
//# sourceMappingURL=test.js.map