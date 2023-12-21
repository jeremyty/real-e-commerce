import { Button } from "react-bootstrap";

export default function PayButton({ items }) {
  const handleCheckout = () => {
    fetch("https://winsmash-api.jeremytty.repl.co/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        items: items.map((item) => ({
          id: item.id,
          quantity: item.amount,
          price: item.price,
          name: item.name,
        })),
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => {
        console.log(e.error);
      });
  };

  return (
    <Button variant="outline-dark" className="mb-3" onClick={handleCheckout}>
      CHECKOUT NOW
    </Button>
  );
}
