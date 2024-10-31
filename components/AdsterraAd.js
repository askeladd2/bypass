import { useEffect } from 'react';

const AdsterraAd = () => {
  useEffect(() => {
    // Create the configuration script for Adsterra
    const configScript = document.createElement("script");
    configScript.type = "text/javascript";
    configScript.innerHTML = `
      atOptions = {
        'key' : '46d5326d0fe6e8f791d50a878373aedf',
        'format' : 'iframe',
        'height' : 60,
        'width' : 468,
        'params' : {}
      };
    `;
    document.body.appendChild(configScript);

    // Create the invocation script for Adsterra
    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src = "//www.highperformanceformat.com/46d5326d0fe6e8f791d50a878373aedf/invoke.js";
    document.body.appendChild(invokeScript);

    return () => {
      // Cleanup: remove scripts when the component unmounts
      document.body.removeChild(configScript);
      document.body.removeChild(invokeScript);
    };
  }, []);
return <div id="ad-container" style={{ width: '468px', height: '60px' }} />;
};
export default AdsterraAd;