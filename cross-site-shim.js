// Temporary shim. Will ensure that site will load properly in all
// circumstances.
const REPO = 'country-maid';

document.onload = () => {
  let rootURL = window.location.href;
  if (rootURL.indexOf) {
    document.createNode('base');
    base.href = rootURL.split(REPO)[0] + REPO + '/';
    document.head.appendChild(base);
  }
}