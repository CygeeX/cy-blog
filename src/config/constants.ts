export const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export const IS_SERVER = typeof window === 'undefined'
export const SITE_URL = IS_PRODUCTION ? 'https://eonova.me' : 'http://localhost:3000'

export const MY_NAME = 'Nova Eon'
export const GITHUB_USERNAME = 'eonova'

export const SITE_NAME = 'Gorge\'s Space'
export const SITE_TITLE = 'Gorge - A Full Stack Developer'
export const SITE_DESCRIPTION = 'Gorge • Full Stack Developer'
export const SITE_KEYWORDS = [
  'Gorge',
  'gorge',
  'Nova Eon',
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
]

export const SITE_GITHUB_URL = 'https://github.com/CygeeX'
export const SITE_INSTAGRAM_URL = 'https://www.instagram.com/a3178789048/'
export const SITE_X_URL = 'https://x.com/diemCarpe311800'
export const SITE_YOUTUBE_URL = 'https://www.youtube.com/@Cygeex'

export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630
export const OG_IMAGE_TYPE = 'image/png'

export const AVATAR_MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
export const SUPPORTED_AVATAR_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'] as const

export type AvatarMimeType = (typeof SUPPORTED_AVATAR_MIME_TYPES)[number]
