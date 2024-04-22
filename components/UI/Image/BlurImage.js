import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

export default async function BlurImage({ src, alt, width, height, className }) {

    const buffer = await fetch(src).then(async (res) => {
        return Buffer.from(await res.arrayBuffer())
    })

    const { base64 } = await getPlaiceholder(buffer);

    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            placeholder="blur"
            className={className}
            blurDataUrl={base64}
        />
    )
}