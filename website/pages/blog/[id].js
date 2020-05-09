import Head from '../../components/Head'
import Nav from '../../components/Nav'
import menuService from '../../services/menu'
import blogService from '../../services/blog'
import drupalField from '../../helpers/drupalField'

export default (props) => (
    <div>
        {console.log(props)}
        <Head title="Home" />
        <Nav links={props.menuItems} />
        <h1>{drupalField(props.post[0].title)}</h1>
    </div>
)

export async function getStaticPaths() {
    const posts = await blogService.getAll()
    const paths = posts.map(post => `/blog/${post.field_path[0].value}`)

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const post = await blogService.get(params.id)
    const menuItems = await menuService.get('main')

    return { props: { post, menuItems, params } }
}