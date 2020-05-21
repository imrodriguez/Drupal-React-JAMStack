import Head from '../../components/Head'
import menuService from '../../services/menu'
import blogService from '../../services/blog'

export default (props) => (
    <>
        <Head title={props.post[0].title} />
        <h1>{props.post[0].title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.post[0].body }}></div>
    </>
)

export async function getStaticPaths() {
    const posts = await blogService.getAll()
    const paths = posts.map(post => `/blog/${post.path}`)

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const post = await blogService.get(params.id)
    const menuItems = await menuService.get('main')

    return { props: { post, menuItems, params } }
}