import React, { useState } from "react";

function App() {
  const validEmail = "user";
  const validPassword = "11322";

  const [page, setPage] = useState("login"); 
  const [loginError, setLoginError] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("wallet");
  const [paymentMessage, setPaymentMessage] = useState("");

  const handleLogin = () => {
    if (email === validEmail && password === validPassword) {
      setLoginError("");
      setPage("payment");
    } else {
      setLoginError("Invalid email or password.");
    }
  };

  const handlePayment = () => {
    if (receiver.trim() !== "" && Number(amount) > 0) {
      setPaymentMessage(
        `Payment of $${amount} to ${receiver} via ${method} was successful.`
      );
    } else {
      setPaymentMessage("Please enter valid payment details.");
    }
  };

  return (
    <div style={styles.container}>
      {page === "login" && (
        <>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleLogin} style={styles.button}>
            Login
          </button>
          {loginError && <p style={styles.error}>{loginError}</p>}
        </>
      )}

      {page === "payment" && (
        <>
          <h2>Wallet Payment</h2>
          <input
            type="text"
            placeholder="Receiver's Email or ID"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            style={styles.input}
          />
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            style={styles.input}
          >
            <option value="wallet">Wallet</option>
            <option value="credit">Credit Card</option>
            <option value="bank">Bank Transfer</option>
          </select>
          <button onClick={handlePayment} style={styles.button}>
            Pay Now
          </button>
          {paymentMessage && (
            <p
              style={{
                marginTop: 10,
                fontWeight: "bold",
                color: paymentMessage.includes("successful") ? "green" : "red",
              }}
            >
              {paymentMessage}
            </p>
          )}
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: 350,
    margin: "80px auto",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    width: "100%",
    padding: 10,
    margin: "8px 0",
    borderRadius: 4,
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: 10,
    marginTop: 8,
    borderRadius: 4,
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    cursor: "pointer",
    fontSize: 16,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 8,
  },
};

export default App;
