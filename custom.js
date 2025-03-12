setTimeout(() => {
      let iframe = document.querySelector("iframe");
      if (iframe) {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"mute","args":""}',
          "*"
        );
      }
    }, 2000);