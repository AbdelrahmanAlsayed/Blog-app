import { useEffect } from "react";
import OneSignal from "react-onesignal";

export default function OneSignalSDKSetup() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      OneSignal.init({
        appId: "3b6e1134-5ec4-49a3-8241-4780aee2e232",
        notifyButton: {
          enable: true,
        },
        allowLocalhostAsSecureOrigin: true,
      });
    }
  }, []);

  return null;
}
