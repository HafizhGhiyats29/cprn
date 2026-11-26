export const locales = ['en', 'id'] as const

export type Locale = (typeof locales)[number]
export type Localized<T = string> = Record<Locale, T>

export interface Speaker {
  id: string
  name: string
  role: Localized
}

export type Registration =
  | { status: 'open'; url: string }
  | { status: 'tba' | 'closed'; url?: never }

export type LoginAvailability =
  | { status: 'available'; url: string }
  | { status: 'unavailable'; url?: never }

export interface ConferenceConfig {
  id: string
  title: Localized
  speakers: readonly Speaker[]
  registration: Registration
  login: LoginAvailability
}
