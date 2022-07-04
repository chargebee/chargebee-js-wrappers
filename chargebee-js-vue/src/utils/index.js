export function genUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}

export function validateCbInstance(cbInstance) {
  if (cbInstance) {
      const site = cbInstance.site;
      const key = cbInstance.publishableKey;

      if (!(site && typeof site == "string" && site.length > 0))
          return false;

      if (!(key && typeof key == "string" && key.length > 0))
          return false;

      return true;
  } else {
    return false;
  }
}
