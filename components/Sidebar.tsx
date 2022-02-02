import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div>
      <div>
        <button>
          <HomeIcon />
          <p>Home</p>
        </button>
        <button>
          <SearchIcon />
          <p>Search</p>
        </button>
        <button>
          <LibraryIcon />
          <p>Library</p>
        </button>
      </div>
    </div>
  )
}

export default Sidebar
