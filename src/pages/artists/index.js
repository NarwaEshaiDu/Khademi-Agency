import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Artist from "../../components/artist"
import {
  hero,
  section,
  subtitle,
  artists,
  description,
} from "../../page.module.css"

const ArtistsPage = ({
  data: {
    allWpArtist: { edges: artistsInfo },
    wpPage: { artistsPageFields },
  },
}) => {
  const image = getImage(artistsPageFields.headerArtists.picture.localFile)
  return (
    <Layout pageTitle="Artists of Inghelbrecht Agency">
      <GatsbyImage
        className={hero}
        image={image}
        alt={artistsPageFields.headerArtists.picture.altText}
      />
      <div className={section}>
        <h2 className={subtitle}>{artistsPageFields.headerArtists.title}</h2>
        <div
          className={description}
          dangerouslySetInnerHTML={{
            __html: artistsPageFields.headerArtists.description,
          }}
        />
        <div className={artists}>
          {artistsInfo.map(({ node: artist }) => (
            <Artist key={artist.id} slug={artist.slug} artist={artist} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    wpPage(slug: { eq: "artists" }) {
      artistsPageFields {
        headerArtists {
          description
          title
          picture {
            localFile {
              childImageSharp {
                gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
    allWpArtist {
      edges {
        node {
          artistMeta {
            artistName
            firstName
            lastName
            profilePicture {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    transformOptions: { grayscale: true }
                  )
                }
              }
            }
          }
          slug
          id
        }
      }
    }
  }
`

export default ArtistsPage