import './index.css'

const BlogItem = props => {
  const {blogsDetails} = props
  const {publishedDate, description, title} = blogsDetails

  return (
    <li>
      <div className="item-card">
        <h1>{title}</h1>
        <p className="item-paragraph">{publishedDate}</p>
      </div>
      <p className="item-paragraph">{description}</p>
    </li>
  )
}

export default BlogItem
