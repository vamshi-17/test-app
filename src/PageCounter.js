import React, { useEffect } from 'react';

const PageCounter = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://counter4.optistats.ovh/private/counter.js?c=1q89nrwgn5dgrclf7hwlg5mnzcdwey9m&down=async';
    script.async = true;
    document.getElementById('web-counter').appendChild(script);
    
    return () => {
      document.getElementById('web-counter').removeChild(script);
    };
  }, []);

  return (
    <div id="web-counter">
      <noscript>
        <a href="https://www.freecounterstat.com" title="free web counter html">
          <img src="https://counter4.optistats.ovh/private/freecounterstat.php?c=1q89nrwgn5dgrclf7hwlg5mnzcdwey9m" border="0" title="free web counter html" alt="free web counter html" />
        </a>
      </noscript>
    </div>
  );
};

export default PageCounter;
