export function addLoadingInPage(keyExecution) {
  const boxLoading = document.querySelector(".box-loading");
  const body = document.querySelector("body");

  if (boxLoading) {
    body.removeChild(boxLoading);
  }

  const p = document.createElement("p");
  const div = document.createElement("div");

  if (keyExecution) {
    // Element HTML Div Config
    div.classList.add("loading", "box-loading");

    // Element HTML Paragraph Config
    p.className = "loadingParagraph";
    p.textContent = "Carregando dados...";

    // Add element in screen
    div.appendChild(p);
    body.appendChild(div);
  } else {
    div.className = "";
  }
}
