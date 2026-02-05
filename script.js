const cartCount = document.getElementById("cart-count");
const addButtons = document.querySelectorAll("[data-add]");
let cartTotal = 0;

const announceAdd = (product) => {
  cartTotal += 1;
  cartCount.textContent = cartTotal;
  cartCount.animate(
    [
      { transform: "scale(1)", backgroundColor: "#1a4d8f" },
      { transform: "scale(1.2)", backgroundColor: "#f4b860" },
      { transform: "scale(1)", backgroundColor: "#1a4d8f" }
    ],
    {
      duration: 400
    }
  );

  const message = document.createElement("div");
  message.className = "toast";
  message.textContent = `تمت إضافة ${product} إلى السلة.`;
  document.body.appendChild(message);

  setTimeout(() => {
    message.remove();
  }, 1600);
};

addButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const product = event.currentTarget.dataset.add;
    announceAdd(product);
  });
});

const newsletter = document.querySelector(".newsletter");
newsletter.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = newsletter.querySelector("input");
  input.value = "";
  input.placeholder = "شكرًا لاشتراكك!";
});
