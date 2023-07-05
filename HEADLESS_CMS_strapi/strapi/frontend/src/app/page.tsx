// server component
import Image from 'next/image'


export default async function Home() {
  const res = await fetch(`${process.env.CMS_URL}/api/news?populate=image`, {
    headers: {
      authorization: `bearer ${process.env.CMS_TOKEN}`
    }
  })


  const { data } = await res.json()

  return <div className="flex p-5 flex-col gap-4 items-center">
    {data && data.map((item: any) => <div key={item.id}>
      <div>{item.attributes.title}</div>
      <div>{item.attributes.desc}</div>
      <Image
        src={item.attributes.image.data.attributes.url}
        width={300}
        height={300}
        alt="Picture of the author"

      />
    </div>
    )}
  </div>
}
