"use strict";

const config = {
    hostname: "127.0.0.1",
    port: 3000,
    db: {
        url: "mongodb://localhost/nodejsblog"
    },
    scopes : 'user-read-private user-read-email',
    my_client_id : 'b5dc6a3138474914a4c25a70ff4615c8',
    client_secret: 'c8ab0cfe4d7a45cdadaee8a8a26423dc',
    redirect_uri : 'http://127.0.0.1:3000/api/v1/spotify/callback'
};

module.exports = config;

// Authorization: Basic *<base64 encoded 683bffccdd0d406b8138cfd286079dee:a8a4400afbac4c95af39052a0fbe1a1d>*

// code: AQA8xKmXIMiZMeXwPuBL2X3kUazgDcSW8S7ixyap4zHqPfafvx5JuzgVBD3EJjcFchPZuQQXBIA5ysoYC_LS_gxud0bSDDNBWTKTJ-1Vr4x30mzr5SM7kOOn-ifzv_kgqlkQdTq--M3RKTFHfoDfFrR92kJ5basUuscO4g0j8WRhi8jD_T-BcH5kOKPv2B7Npxj8txQVFk6Xkgg8269s1blbEfRg_LWSIWdPiHb5OwHa42SvgZUJTpCHkfuSFXBE8lNocU_Bgg
//
// {
//     "access_token": "BQAI-Gak153Rhdbnp2whfGrYQmJ2u99mS66bC7Td2_adw-97adQkS6qWuKlhh4X7ETijiGKHbndNby8hC_jWph67jDlpwIXOnPjHIFBGSGJf0iM49e5jIy4jl8MEq4UeKp7-2icIKLCaTusWLllAG2jM73_G1DHV8Cw",
//     "token_type": "Bearer",
//     "expires_in": 3600,
//     "refresh_token": "AQDfgBctV5Z0-wEP8KN7M1KSmqqvppoGjNaGpycnJVfooAWOCpAlU3rP3zVW2ZS3IJ2RZHBTFE0ySHrLezTce52l6a-ACYmRQcw_mkI0XFPVt-Or769JkqGd00PgzrpxoJg",
//     "scope": "user-read-email user-read-private"
// }
