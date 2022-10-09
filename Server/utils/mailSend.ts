import AWS from "aws-sdk";

AWS.config.update({ region: "Asia Pacific (Mumbai)" });
const sendMail = () => {
	const params = {
		Template: {
			TemplateName: "TEMPLATE_NAME" /* required */,
			HtmlPart: "HTML_CONTENT",
			SubjectPart: "SUBJECT_LINE",
			TextPart: "TEXT_CONTENT",
		},
	};

	const templatePromise = new AWS.SES({ apiVersion: "2010-12-01" })
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

export default sendMail;
