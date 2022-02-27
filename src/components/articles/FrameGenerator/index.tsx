import React, {useEffect} from 'react';

const FrameGenerator = ({}) => {
  // useEffect(() => {
  //   function iframeLoaded() {
  //     const iFrameID = document.getElementById('idIframe');
  //     if (iFrameID) {
  //       const {width} = iFrameID.getBoundingClientRect();
  //       iFrameID.style.height = '';
  //       iFrameID.style.height = `${(9 * width) / 16}px`;
  //     }
  //   }

  //   iframeLoaded();
  // }, []);

  return (
    <iframe
      width="100%"
      height="600"
      // src="https://gracious-volhard-22bfe6.netlify.app/frame"
      src="http://localhost:8001/frame"
      title="React Konva Frame Generator"
      frameBorder="0"
      id="idIframe"
    />
  );
};

export default FrameGenerator;
