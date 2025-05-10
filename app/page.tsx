import ContextProvider  from "./wallet/reown/context-provider";
import WalletButton from "./components/WalletButton";

export default function Home() {
  const cookies = null;
  return (
    <div>
          <ContextProvider cookies={cookies}>
            <WalletButton />
          </ContextProvider>
    </div>
  );
}
