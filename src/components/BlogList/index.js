/* eslint-disable arrow-body-style */
import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <div>
      <ul className="ul-card">
        {blogsList.map(eachItem => (
          <BlogItem blogsDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
