/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STREAM_KEY
	STREAM_SECRET
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return "sas"
};
