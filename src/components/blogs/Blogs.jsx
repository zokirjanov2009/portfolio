import "./Blogs.css"

const Blogs = () => {
  return (
    <div>
      <div className="blog">
        <div className="main-blog">
          <div className="latest-blog">
            <h3>BLOGS</h3>
            <h1>Latest Blogs</h1>
            <p>View all</p>
          </div>
          <div className="types">

            <div className="type">
              <span>April 16, 2021 . 6 mins</span>
              <h1>Design tips for designers, that cover <br /> everything you need</h1>
              <p>Read the article</p>
            </div>
            <div className="type">
            <span>April 16, 2021 . 5 mins</span>
              <h1>How to build rapport with your web design <br /> clients</h1>
              <p>Read the article</p>
            </div>
            <div className="type">
            <span>April 16, 2021 . 5 mins</span>
              <h1>Top 6 free website mockup tools 2021</h1>
              <p>Read the article</p>
            </div>
            <div className="type">
            <span>April 16, 2021 . 7 mins</span>
              <h1>Logo design trends to avoid in 2021</h1>
              <p>Read the article</p>
            </div>
            <div className="type">
            <span>April 16, 2021 . 7 mins</span>
              <h1>22 best UI design tools</h1>
              <p>Read the article</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
