import React from "react";
import {Fade} from "react-reveal";
import {blogSection} from "../../portfolio";
import BlogCard from "../../components/blogCard/BlogCard";
import MediumBlogs from "../../shared/blogs.json";
import styles from "./Blog.module.css";

export default function Blogs(props) {
  const theme = props.theme;
  var mediumSuccess;
  const blogtype = blogSection.display;
  if (["none", "medium", "hardcoded"].indexOf(blogtype) === -1) return null;
  if (blogtype === "none" ) {
      return null;
  }
  if (MediumBlogs.status==="ok" || MediumBlogs.items!=null){
      mediumSuccess = true;
  }
  else {
      mediumSuccess = false;
  }
  
/*Medium API returns blogs' content in HTML format. 
  Below function extracts blog's text content within paragraph tags*/
  function extractTextContent(html) {
    return typeof html === "string"
      ? html
          .split("p>")
          .filter(el => !el.includes(">"))
          .map(el => el.replace("</", ".").replace("<", ""))
          .join(" ")
      : NaN;
  }
//  console.log(JSON.stringify(MediumBlogs.items))
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={styles.main} id="blogs">
        <div className={styles.blogHeader}>
          <h1 className={styles.blogHeaderText} style={{ color : theme.text }}>{blogSection.title}</h1>
          <p
            className={styles.blogSubTitle}
            style={{ color : theme.secondaryText }}
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className={styles.blogMainDiv}>
          <div className={styles.blogTextDiv}>
            {blogtype==="hardcoded" || mediumSuccess === false
              ? blogSection.blogs.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      theme={theme}
                      blog={{
                        url: blog.url,
                        image: blog.image,
                        title: blog.title,
                        description: blog.description
                      }}
                    />
                  );
                })
              : MediumBlogs.items.map((blog, i) => {
                  return (
                    <BlogCard
                      key={i}
                      theme={theme}
                      blog={{
                        url: blog.link,
                        title: blog.title,
                        description: extractTextContent(blog.content)
                      }}
                    />
                  );
                })
            }
          </div>
        </div>
      </div>
    </Fade>
  );
}
