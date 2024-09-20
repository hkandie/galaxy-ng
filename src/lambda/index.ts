import { Handler, Context } from 'aws-lambda';

export const handler: Handler = async (event: any, context: Context) => {
  console.log('EVENT: \n' + JSON.stringify(event, null, 2));
  return context.logStreamName;
};
