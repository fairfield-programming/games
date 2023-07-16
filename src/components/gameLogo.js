import * as React from "react"
import { Link } from "gatsby"

export default function DeveloperLogo(developerInfo) {

  return <Link className="w-full" to={developerInfo.website}>
    <div className="w-full border-2 rounded-lg aspect-[4/5] flex align-center justify-center bg-black">
        <img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src={developerInfo.cover} />
    </div>
  </Link>

}