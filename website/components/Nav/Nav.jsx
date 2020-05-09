import React from 'react'
import Link from 'next/link'
import { Menu } from './Nav.styles'

const Nav = (props) => (
  <Menu>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <ul>
        {props.links.map((link) => (
            link.relative ?
              <li key={link.weight}>
              <Link href={link.relative}>
                <a>{link.title}</a>
              </Link>
            </li>
            :
            <></>
          )
        )}
      </ul>
    </ul>
  </Menu>
)

export default Nav
