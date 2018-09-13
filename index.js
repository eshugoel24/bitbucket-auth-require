"use strict";
import bitbucket from 'bitbucket-auth';

export default bitbucket;

// The default is looking ugly in es5, so the fix
// is as per suggested from
// https://github.com/Microsoft/TypeScript/issues/2719"
exports["default"] = bitbucket;
module.exports = exports["default"];