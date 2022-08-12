import React, { useState } from 'react'
import DraggableIcon from '../DraggableIcon'
import Main from '../Main'

export default function Root() {
    const [isMainVisible, setIsMainVisible] = useState(false);
    React.useEffect(() => {
        chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
            console.log(msg.text);
          if (msg.text === 'toggleMain') {
            setIsMainVisible(!isMainVisible);
          }
        });
      }, [isMainVisible])
  return (
    <>
    <Main visible={isMainVisible} />
      <DraggableIcon setIsMainVisible={setIsMainVisible} />
      </>
  )
}
