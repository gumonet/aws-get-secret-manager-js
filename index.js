import {
    SecretsManagerClient,
    GetSecretValueCommand
} from '@aws-sdk/client-secrets-manager';

const awsClient = new SecretsManagerClient({});
const secretId  = `secret_id` ;
const command = new GetSecretValueCommand({ SecretId: secretId });
const response = await awsClient.send(command);

console.log( ` ************* SECRETS STRING CONTENT ****************`)
console.log( response.SecretString );

let secretsEnv = JSON.parse(response.SecretString);
console.log('');
console.log( ` ************* SECRETS JSON CONTENT ****************`)
console.log( secretsEnv );
console.log('Access to specific env');
console.log( secretsEnv.key );
