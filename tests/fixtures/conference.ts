import type { ConferenceConfig } from '../../app/types/conference.ts'

// Synthetic verification data, used only by tests.
export const conferenceFixture = {
  id: 'test-conference',
  title: { en: 'Synthetic test conference', id: 'Konferensi uji sintetis' },
  speakers: [
    {
      id: 'test-speaker',
      name: 'Test speaker',
      role: { en: 'Test role', id: 'Peran uji' },
    },
  ],
  registration: { status: 'closed' },
  login: { status: 'available', url: 'https://registration.example/login' },
} satisfies ConferenceConfig
