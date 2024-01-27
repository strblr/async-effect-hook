import { DependencyList, useEffect } from "react";

export interface AsyncEffectStatus {
  active: boolean;
  cleanup?: () => void;
}

export function useAsyncEffect(
  effect: (status: AsyncEffectStatus) => Promise<any>,
  deps?: DependencyList
) {
  useEffect(() => {
    const status: AsyncEffectStatus = { active: true };
    void effect(status);
    return () => {
      status.active = false;
      status.cleanup?.();
    };
  }, deps);
}
