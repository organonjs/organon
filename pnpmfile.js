"use strict";

const readPackage = (pkg) => {
  console.log("Reading:", pkg.name);
  return pkg;
};

module.exports = {
  hooks: { readPackage },
};
