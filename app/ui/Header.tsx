import Cloud from "@/icons/Cloud"
import Search from "./search"

export const Header = () => {
  return (
    <header className="p-4 flex items-center space-x-4">
      <div>
        <Cloud className="size-10"/>
      </div>
      <div className="">
        <Search placeholder="Enter a city name"/>
      </div>
    </header>
  )
}