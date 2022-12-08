"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
aws_sdk_1.default.config.update({ region: "Asia Pacific (Mumbai)" });
const sendMail = () => {
    const params = {
        Template: {
            TemplateName: "TEMPLATE_NAME" /* required */,
            HtmlPart: "HTML_CONTENT",
            SubjectPart: "SUBJECT_LINE",
            TextPart: "TEXT_CONTENT",
        },
    };
    const templatePromise = new aws_sdk_1.default.SES({ apiVersion: "2010-12-01" })
        .createTemplate(params)
        .promise();
    templatePromise
        .then(function (data) {
        console.log(data);
    })
        .catch(function (err) {
        console.error(err, err.stack);
    });
};
exports.default = sendMail;
