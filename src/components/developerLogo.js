import * as React from "react"
import { Link } from "gatsby"

export default function DeveloperLogo(developerInfo) {

  return <Link className="w-full" to={developerInfo.website}>
    <div className="w-full border-2 rounded-full p-8 aspect-square flex align-center justify-center" dangerouslySetInnerHTML={{ __html: developerInfo.logo }}>
      
    </div>
  </Link>

}