import Image from "next/image";
import React from "react";
import {Fade} from "react-reveal";
import { contactPageData } from "../../portfolio.js";
import BlogsImg from "./BlogsImg";
import Button from "../../components/button/Button";
import styles from "./BlogSection.module.css";

const BlogSection = (props) => {
     const theme = props.theme;
     const blogSection = contactPageData.blogSection;
     return(
        <div className={styles.basicContact}>
                    <Fade bottom duration={1000} distance="40px">
            <div className={styles.blogHeadingDiv}>
              <div className={styles.blogHeadingTextDiv}>
                <h1 className={styles.blogHeadingText} style={{ color: theme.text }}>
                  {blogSection["title"]}
                </h1>
                <p
                  className={styles.blogHeaderDetailText + " " + styles.subTitle}
                  style={{ color: theme.secondaryText }}
                >
                  {blogSection["subtitle"]}
                </p>
                <div className={styles.blogsiteBtnDiv}>
                  <Button
                    text="Visit My Blogsite"
                    newTab={true}
                    href={blogSection.link}
                    theme={theme}
                  />
                </div>
              </div>
              <div className={styles.blogHeadingImgDiv}>
                {/* <Image
											src={require(`../../assests/images/${blogSection["avatar_image_path"]}`)}
											alt=""
										/> */}
                <BlogsImg theme={theme} />
              </div>
            </div>
          </Fade>
        </div>
    );
}
export default BlogSection;