document.addEventListener('keypress', (event) => {
  if (event.altKey && event.code=="KeyD") {
        if (document.designMode == "on") {
          document.designMode="off"
        } else {
          document.designMode="on"
        }
      }

}, false);

if (typeof Reveal != "undefined") {
  Reveal.addKeyBinding(
    { keyCode: 68, key: "Alt + D", description: "Trigger designMode" },
    function () {}
  );
}
