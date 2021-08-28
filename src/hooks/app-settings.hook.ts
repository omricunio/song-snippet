import { useState } from 'react'
import { AppSettings, defaultAppSettings } from '../state/app-settings.context';


export const useAppSettingContextValue = () => {
    const [appSettings, setAppSettings] = useState<AppSettings>(defaultAppSettings);

    return {
        appSettings,
        setCurrentAppSettings: setAppSettings
    }
}