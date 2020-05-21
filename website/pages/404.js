import Head from '../components/Head'
import menuService from '../services/menu'

export default (props) => (
  <>
    <Head title="Not found" />
    <h1>Not found</h1>
  </>
)

export async function getStaticProps() {
  const menuItems = await menuService.get('main')

  return {
    props: {
      menuItems
    },
  }
}