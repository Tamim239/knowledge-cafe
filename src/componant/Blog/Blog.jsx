import PropTypes from 'prop-types';

export default function Blog({blog}) {
    const {title, cover} = blog
    // console.log(blog)
  return (
    <div>
        <img src={cover} alt={`Cover picture of title ${title}`} />
        <div>
            
        </div>
        <h2 className='text-4xl'>{title}</h2>
    </div>
  )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}