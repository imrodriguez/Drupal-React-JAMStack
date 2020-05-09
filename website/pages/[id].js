import Head from '../components/Head'
import Nav from '../components/Nav'
import menuService from '../services/menu'
import pageService from '../services/page'
import drupalField from '../helpers/drupalField'

export default (props) => (
    <div>
        <Head title="Home" />
        <Nav links={props.menuItems} />
        <h1>{drupalField(props.page[0].title)}</h1>
    </div>
)

export async function getStaticPaths() {
    const pages = await pageService.getAll()
    const paths = pages.map(page => `/${page.field_path[0].value}`)

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const page = await pageService.get(params.id)
    const menuItems = await menuService.get('main')

    console.log('PAGEEEEEEEEEEEEEEEEEEEE', page)

    return { props: { page, menuItems, params } }
}