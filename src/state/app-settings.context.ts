import React from 'react'

export interface AppSettings {
    isLoading: boolean,
    isPlaying: boolean
}

interface AppSettingsContext {
    appSettings: AppSettings,
    setCurrentAppSettings: (appSettings: AppSettings) => void
}

export const defaultAppSettings: AppSettings = {
    isLoading: false,
    isPlaying: false
}

const defaultAppSettingsContext: AppSettingsContext = {
    appSettings: defaultAppSettings,
    setCurrentAppSettings: () => {}
}

export const appSettingsContext = React.createContext<AppSettingsContext>(defaultAppSettingsContext)