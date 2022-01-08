import { urlFor } from "../sanity"

const Image = ({ identifier, image }) => {
  return (
    <div className={identifier === "main-image" ? "main-image" : "image"}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={urlFor(image).auto("format")} alt=""/>
    </div>
  )
}

export default Image
