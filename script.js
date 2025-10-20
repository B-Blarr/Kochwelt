function sendMail(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);

  fetch("https://formspree.io/f/xpwybwwb", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      form.reset();
      window.location.href = "#popup";
    })
    .catch((error) => {
      console.log(error);
    });
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("is-open");
}

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });

fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;
  });
