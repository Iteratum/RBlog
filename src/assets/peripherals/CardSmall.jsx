import axios from "axios"
import { useEffect, useState } from "react"

const baseURL = 'http://127.0.0.1:8000/BlogHost/'

export const CardSmall = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
      axios.get(baseURL)
      .then((response) => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('An error occured while fetching data from backend', error)
      })
      
  }, [])
  

  try {
    return (
      <div className="bg-gray-400">
        <div className="mx-auto min-w-fit px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div className="mt-6 space-y-12 gap-y-6 gap-x-3 grid grid-cols-1 md:grid md:grid-cols-2 md:space-y-0 lg:grid lg:grid-cols-4 lg:space-y-0">
              {posts.map((post) => post.category == 'Blog' &&
                <div key={post.title} className="group relative bg-cyan-600 flex-wrap pb-3 rounded-lg">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-cyan-800 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={`http://127.0.0.1:8000${post.image}`}
                    alt={post.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="px-2">
                  <h3 className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-800">
                    <a href='{post.href}'>
                      <span className="absolute inset-0" />
                      {post.category}
                    </a>
                  </h3>
                  <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900">{post.title}</p>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('An error occured while trying to fetch data', error)
  }
}