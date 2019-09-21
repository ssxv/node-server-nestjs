import * as config from 'config';

const env = config.get('env');

const envMap = {
    LOCAL: 'LOCAL',
    DEV: 'DEV',
    STAGING: 'STAGING',
    PRODUCTION: 'PRODUCTION',
};

export const ENVIRONMENT = envMap[env];
