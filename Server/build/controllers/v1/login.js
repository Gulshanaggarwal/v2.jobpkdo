"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funcs = {
    login: (req, res) => {
        if (req.user) {
            res.status(200).json({
                error: false,
                message: "Authorized",
                data: req.user,
            });
            return;
        }
        res.status(500).json({ error: true, message: "Server error!" });
    },
};
exports.default = funcs;
