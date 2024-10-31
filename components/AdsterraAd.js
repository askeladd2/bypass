import { useEffect } from 'react';

const AdsterraAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      atOptions = {
        'key' : '46d5326d0fe6e8f791d50a878373aedf',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
    `;
    document.body.appendChild(script);

    const invokeScript = document.createElement("script");
    invokeScript.src = "//www.highperformanceformat.com/46d5326d0fe6e8f791d50a878373aedf/invoke.js";
    invokeScript.type = "text/javascript";
    document.body.appendChild(invokeScript);
  }, []);

  return <div id="ad-container" style={{ width: '468px', height: '60px' }} />;
};

export default AdsterraAd;
