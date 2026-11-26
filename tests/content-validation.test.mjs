import assert from 'node:assert/strict'
import { test } from 'node:test'
import { validateConference } from '../app/utils/content-validation.ts'
import { conferenceFixture } from './fixtures/conference.ts'

test('accepts a valid fixture with closed registration and available login', () => {
  assert.deepEqual(validateConference(conferenceFixture), [])
})

test('reports malformed and duplicate IDs', () => {
  const errors = validateConference({
    ...conferenceFixture,
    id: 'invalid ID',
    speakers: [...conferenceFixture.speakers, ...conferenceFixture.speakers],
  })
  assert.deepEqual(errors, ['id must be a valid kebab-case ID', 'speakers[1].id is duplicated'])
})

test('reports missing and blank translations', () => {
  const errors = validateConference({ ...conferenceFixture, title: { en: ' ' } })
  assert.deepEqual(errors, ['title.en must be non-empty', 'title.id must be non-empty'])
})

test('reports invalid registration and login states', () => {
  assert.deepEqual(
    validateConference({ ...conferenceFixture, registration: { status: 'pending' } }),
    ['registration.status is invalid'],
  )
  assert.deepEqual(
    validateConference({
      ...conferenceFixture,
      registration: { status: 'closed', url: 'https://registration.example/event' },
      login: { status: 'unavailable', url: 'https://registration.example/login' },
    }),
    ['registration.url must be absent for status closed', 'login.url must be absent for status unavailable'],
  )
})

test('requires HTTPS URLs without credentials when registration is open', () => {
  for (const url of [
    undefined,
    '/local',
    'http://registration.example/event',
    'https:///registration.example/event',
    'https://user@registration.example/event',
  ]) {
    assert.deepEqual(
      validateConference({ ...conferenceFixture, registration: { status: 'open', url } }),
      ['registration.url must be an absolute HTTPS URL without credentials'],
      `Rejected URL: ${String(url)}`,
    )
  }
  assert.deepEqual(
    validateConference({
      ...conferenceFixture,
      registration: { status: 'open', url: 'https://registration.example/event' },
    }),
    [],
  )
})
