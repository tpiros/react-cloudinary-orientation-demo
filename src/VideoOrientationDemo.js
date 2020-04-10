import React from 'react';
import { Video } from 'cloudinary-react';
import useScreenOrientation from './orientationChange';

function VideoOrientationDemo() {
  const orientation = useScreenOrientation();
  return (
    <>
      {orientation === 'portrait-primary' ? (
        <Video
          controls
          cloudName="demo"
          publicId="dog_orig_qflwce"
          height="400"
          width="244"
          crop="fill"
          gravity="auto"
        ></Video>
      ) : (
        <Video
          controls
          cloudName="demo"
          publicId="dog_orig_qflwce"
          width="600"
        ></Video>
      )}
    </>
  );
}

export default VideoOrientationDemo;
