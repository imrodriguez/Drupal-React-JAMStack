import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
    gap: 15px;
`

export const PostCard = styled.div`
    img {
        object-fit: cover;
        height: 200px;
        width: 100%;
    }

    a {
        text-decoration: none;
    }
`

export const Title = styled.p`
    font-size: 1.3em;
    font-weight: bold;
    margin: 0;
    color: #000;
`

export const Date = styled.p`
    margin: 0;
    font-size: 0.7em;
`