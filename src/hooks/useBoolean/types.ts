export type UseBooleanMethods = Readonly<{
  set(value: boolean | ((prevState?: boolean) => boolean)): void
  on(): void
  off(): void
  toggle(): void
}>

export type UseBoolean = {
  (initial?: boolean | (() => boolean)): [boolean, UseBooleanMethods]
}
