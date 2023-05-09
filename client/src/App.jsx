import Wallet from "./Wallet";
import Transfer from "./Transfer";
import EnterPrivateKey from "./EnterPrivateKey";
import "./App.scss";
import { useState } from "react";
import Initialize from "./Initialize";

function App() {
    const [isActive, setIsActive] = useState(false);
    const [balance, setBalance] = useState(0);
    const [address, setAddress] = useState("");

    return (
        <div className="app">
            {isActive ? (
                <Wallet
                    balance={balance}
                    setBalance={setBalance}
                    address={address}
                    setAddress={setAddress}
                />
            ) : (
                <Initialize />
            )}

            {isActive && <Transfer setBalance={setBalance} address={address} />}
        </div>
    );
}

export default App;
