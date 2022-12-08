"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = __importDefault(require("./config/db"));
const auth_1 = __importDefault(require("./middlewares/auth"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const whiteList = ["https://jobpkdo.vercel.app"];
const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (whiteList.indexOf(req.header("Origin")) !== -1) {
        corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    }
    else {
        corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};
app.use((0, cors_1.default)(corsOptionsDelegate));
app.use(body_parser_1.default.json());
app.use(auth_1.default); //auth middleware
app.use("/api", routes_1.default);
app.use("*", (req, res) => {
    res.status(404).json({ message: "404 not found!" });
});
(0, db_1.default)();
app.listen(PORT, () => console.log(`Server is listening at PORT ${PORT}`));
