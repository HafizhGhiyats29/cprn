import { locales } from '../types/conference.ts'

const idPattern = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function isText(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function isHttpsUrl(value: unknown): boolean {
  if (typeof value !== 'string' || !/^https:\/\/[^/?#\s\\][^\s\\]*$/i.test(value)) return false

  const url = URL.parse(value)
  return url?.protocol === 'https:' && Boolean(url.hostname) && !url.username && !url.password
}

export function validateConference(input: unknown): string[] {
  if (!isRecord(input)) return ['conference must be an object']

  const errors: string[] = []
  const speakerIds = new Set<string>()

  function checkId(value: unknown, path: string) {
    if (typeof value !== 'string' || !idPattern.test(value)) {
      errors.push(`${path} must be a valid kebab-case ID`)
    }
  }

  function checkLocalized(value: unknown, path: string) {
    for (const locale of locales) {
      if (!isRecord(value) || !isText(value[locale])) {
        errors.push(`${path}.${locale} must be non-empty`)
      }
    }
  }

  function checkLinkState(value: unknown, path: string, active: string, inactive: readonly string[]) {
    if (!isRecord(value) || typeof value.status !== 'string') {
      errors.push(`${path}.status is invalid`)
      return
    }

    if (value.status === active) {
      if (!isHttpsUrl(value.url)) errors.push(`${path}.url must be an absolute HTTPS URL without credentials`)
    } else if (!inactive.includes(value.status)) {
      errors.push(`${path}.status is invalid`)
    } else if (Object.hasOwn(value, 'url')) {
      errors.push(`${path}.url must be absent for status ${value.status}`)
    }
  }

  checkId(input.id, 'id')
  checkLocalized(input.title, 'title')
  checkLinkState(input.registration, 'registration', 'open', ['tba', 'closed'])
  checkLinkState(input.login, 'login', 'available', ['unavailable'])

  if (!Array.isArray(input.speakers)) {
    errors.push('speakers must be an array')
    return errors
  }

  for (const [index, speaker] of input.speakers.entries()) {
    const path = `speakers[${index}]`
    if (!isRecord(speaker)) {
      errors.push(`${path} must be an object`)
      continue
    }

    checkId(speaker.id, `${path}.id`)
    if (typeof speaker.id === 'string') {
      if (speakerIds.has(speaker.id)) errors.push(`${path}.id is duplicated`)
      speakerIds.add(speaker.id)
    }
    if (!isText(speaker.name)) errors.push(`${path}.name must be non-empty`)
    checkLocalized(speaker.role, `${path}.role`)
  }

  return errors
}
