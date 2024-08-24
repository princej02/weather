import Cloud from "@/icons/Cloud"
import Search from "./search"


export const Header = () => {
  return (
    <header className="p-4 shadow-md flex items-center space-x-4">
      <div className="flex items-center">
        <Cloud className="size-10"/>
      </div>
      <div className="flex-1 max-w-lg">
        <Search placeholder="Enter a city name"/>
      </div>
    </header>
  )
}