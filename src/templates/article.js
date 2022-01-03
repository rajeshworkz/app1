import React, { Component }  from 'react';
import propTypes from "prop-types"
import { graphql } from "gatsby"

const Article = ({data}) => {
    const post = data.nodeArticle;
    return(
        <div style={{maxWidth:"600px", margin:"0 auto", backgroundColor:"#ccc", padding:"50px"}}>
     <h1>{post.title}</h1>
     <img src={post.relationships.field_image.localFile.url} />
     <div dangerouslySetInnerHTML={{__html:post.body.processed}} />

        </div>
    )
};
export default Article;

Article.propTypes ={
    data: propTypes.object.isRequired
}

export const query = graphql `
query($ArtileId: String!){
    nodeArticle(id:{eq:$ArtileId}){
        id
      title
      drupal_internal__nid
      body {
        processed
      }
      relationships {
        field_image {
          localFile {
            url
          }
        }
      }
    }
}
` 

