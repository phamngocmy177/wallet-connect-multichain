import { createContext, useEffect } from 'react'


import type { AppKit, CreateAppKit } from '@reown/appkit'
import { createAppKit } from '@reown/appkit/react'
import useAppKitStore from '@/app/stores/appkit'


type AppKitContextType = {
  projectId: string
  appKit: AppKit | undefined
}

export const AppKitContext = createContext<AppKitContextType>({
  projectId: '',
  appKit: undefined
})

export function AppKitProvider({
  children,
  config
}: {
  children: React.ReactNode
  config: Omit<CreateAppKit, 'projectId'> & { projectId?: string }
}) {
  const { appKit, setAppKit } = useAppKitStore()
  const projectId = config.projectId || process.env['NEXT_PUBLIC_PROJECT_ID']
  if (!projectId) {
    throw new Error('NEXT_PUBLIC_PROJECT_ID is not set')
  }

  useEffect(() => {
    if (config) {
      const modal = createAppKit({
        ...config,
        projectId
      })
      setAppKit(modal)
    }
  }, [])

  return (
    <AppKitContext.Provider value={{ projectId, appKit: appKit as AppKit | undefined }}>
      {appKit && children}
    </AppKitContext.Provider>
  )
}
