import inpageContent from "../src-generated/inject.txt";

function injectScript(content) {
  try {
    const container = document.head || document.documentElement
    const scriptTag = document.createElement('script')
    scriptTag.setAttribute('async', 'false')
    scriptTag.textContent = content
    container.insertBefore(scriptTag, container.children[0])
    // container.removeChild(scriptTag)
  } catch (e) {
    console.error('MetaMask provider injection failed.', e)
  }
}

console.log("YOHAN INJECTING ETHER");
injectScript(inpageContent);