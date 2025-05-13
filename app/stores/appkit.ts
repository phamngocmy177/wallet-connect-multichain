import { AppKit } from "@reown/appkit"
import { create } from "zustand"

interface AppKitStore {
  appKit: AppKit | null
  setAppKit: (appKit: AppKit) => void
}

const useAppKitStore = create<AppKitStore>((set) => ({
  appKit: null,
  setAppKit: (appKit: AppKit) => {
    set({ appKit })
  }
}))

export default useAppKitStore