import { p as patchBrowser, g as globals, b as bootstrapLazy } from './app-50de0c85.js';

patchBrowser().then(resourcesUrl => {
  globals();
  return bootstrapLazy([["prix-directory",[[0,"prix-directory"]]]], { resourcesUrl });
});
