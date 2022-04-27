import './App.css';
import { useWallet, WalletStatus } from "@terra-money/wallet-provider";
import Menu from './components/Menu';
import WalletAddress from './components/WalletAddress';

function App() {
  // Current wallet status, connect & disconnect functions, available connections
  const { status, connect, disconnect, availableConnectTypes } = useWallet();
    
  const renderConnectButton = () => {
    if (status === WalletStatus.WALLET_NOT_CONNECTED) {
      return (
        <div className="connect-wallet-div">
          <button
            type="button"
            key={`connect-EXTENSION`}
            onClick={() => {
              const confirm = window.confirm('Click OK only if you are sure you are connected to Bombay test net!');
              if(confirm){
                connect("EXTENSION");
              }
            }}
            className="cta-button connect-wallet-button"
          >
            Connect wallet
          </button>
        </div>
      );
    } else if (status === WalletStatus.WALLET_CONNECTED) {
      return (
        <button
          type="button"
          onClick={() => disconnect()}
          className="cta-button connect-wallet-button"
        >
          Disconnect
        </button>
      );
    }
  };

  // Let's take a look at what the starting states are!
  console.log("Wallet status is ", status);
  console.log("Available connection types:", availableConnectTypes);


  // Nothing changes here :D
  return (
    <main className="App">
      <header>
        <div className="header-titles">
          <h1>⚔ Goblin War ⚔</h1>
          <p>Only you can save us from Goblin town</p>
        </div>

        <WalletAddress />
      </header>
      {status === WalletStatus.WALLET_NOT_CONNECTED && (
      <div>
        <img
          src="https://media.giphy.com/media/B19AYwNXoXtcs/giphy.gif"
          alt="Goblin gif"
        />
      </div>
      )}
      {status === WalletStatus.WALLET_CONNECTED && (
          <div className="game-menu-container">
            <Menu />
          </div>
        )}

      {renderConnectButton()}
    </main>
  );
}

export default App;
