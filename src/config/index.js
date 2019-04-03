export const isProduction = process.env.NODE_ENV === 'production'
export const HttpRoot = !isProduction ? '/api/private/v1' : '/api/private/v1'
