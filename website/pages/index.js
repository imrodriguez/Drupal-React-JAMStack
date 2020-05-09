import Head from '../components/Head'
import Nav from '../components/Nav'
import blogService from '../services/blog'
import menuService from '../services/menu'
import Blog from '../components/Blog'

export default (props) => (
  <div>
    <Head title="Home" />
    <Nav links={props.menuItems} />
    {console.log(menuService.get('main'))}
    <Blog posts={props.posts} />
  </div>
)

export async function getStaticProps() {
  const posts = await blogService.getAll()
  const menuItems = await menuService.get('main')

  return {
    props: {
      posts,
      menuItems
    },
  }
}