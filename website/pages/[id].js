import Head from '../components/Head'
import menuService from '../services/menu'
import pageService from '../services/page'

export default (props) => (
    <>
        <Head title={props.page[0].title} />
        <h1>{props.page[0].title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.page[0].body }}></div>
    </>
)

export async function getStaticPaths() {
    const pages = await pageService.getAll()
    const paths = pages.map(page => `/${page.path}`)

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const page = await pageService.get(params.id)
    const menuItems = await menuService.get('main')

    return { props: { page, menuItems, params } }
}