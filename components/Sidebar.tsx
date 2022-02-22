import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  HeartIcon,
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { playlistIdState } from '../atoms/playlistAtom'
import useSpotify from '../hooks/useSpotify'

function Sidebar() {
  const spotifyApi = useSpotify()
  const { data: session, status } = useSession()

  const [playlists, setPlaylists] = useState([])

  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState)

  console.log('You picked playlist >>> ', playlistId, playlists)

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data: any) => {
        setPlaylists(data.body.items)
      })
    }
  }, [session, spotifyApi])

  return (
    <div className="hidden h-screen overflow-y-scroll border-r border-gray-900 pb-36 pr-5 pl-5 text-xs text-gray-500 scrollbar-hide sm:max-w-[12rem] md:inline-flex lg:max-w-[15rem] lg:text-sm">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>

        {/* Playlists.. */}
        {playlists.map((playlist: any) => (
          <p
            key={playlist.id}
            onClick={() => setPlaylistId(playlist.id)}
            className="cursor-pointer truncate hover:text-white"
          >
            {playlist.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
