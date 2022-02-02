import SpotifyWebApi from 'spotify-web-api-node'

const scopes = [
  'user read email',
  'playlist-read-private',
  'playlist-read-collaborative',
  'rser-raed-email',
  'streaming',
  'user-read-private',
  'user-library-read',
  'user-top-read',
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'user-read-recently-playing',
  'user-follow-read',
].join(',')

const params = {
  scope: scopes,
}
