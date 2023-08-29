import type { InjectionKey } from "vue";

export const provideCountKey = Symbol() as InjectionKey<number | ComputedRef<number>>