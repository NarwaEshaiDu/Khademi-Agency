import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Artist from "../components/artist"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  CTA,
  section,
  subtitle,
  artists,
} from "../page.module.css"

const IndexPage = ({
  data: {
    wpPage: { homePageFields },
  },
}) => {
  const image = getImage(homePageFields.headerHome.picture.localFile)
  return (
    <Layout>
      <div className={header}>
        <div className={headerInfo}>
          <h1 className={headerTitle}>{homePageFields.headerHome.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homePageFields.headerHome.description,
            }}
          />
          <a
            className={CTA}
            target="__blank"
            href={homePageFields.callToAction.link}
          >
            {homePageFields.callToAction.description}
          </a>
        </div>
        <div>
          <GatsbyImage
            image={image}
            className={headerPicture}
            alt={homePageFields.headerHome.picture.altText}
          />
        </div>
      </div>
      <div className={section}>
    <h2 className={subtitle}>{homePageFields.featuredArtists.title}</h2>
    <p>{homePageFields.featuredArtists.description}</p>
    <div className={artists}>
      {homePageFields.featuredArtists.artists.map(artist => (
           <Artist
              slug={`artists/${artist.slug}`}
              key={artist.id}
              artist={artist}
            />
      ))}
    </div>
  </div>
</Layout>
  )
}
export const query = graphql`
  query {
    wpPage(slug: { eq: "home" }) {
      homePageFields {
        headerHome {
          description
          title
          picture {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
              }
            }
          }
        }
        callToAction {
          description
          link
        }
        featuredArtists {
          artists {
            ... on WpArtist {
              id
              artistMeta {
                artistName
                firstName
                lastName
                profilePicture {
                  altText
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
            }
          }
          description
          title
        }
      }
    }
  }
`
export default IndexPage
