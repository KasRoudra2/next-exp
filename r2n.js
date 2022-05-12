const fs = require("fs");
const path = require("path");

const react2next = (startPath = "./", extension = "js") => {
  let notFound = true;
  const recursive = (startPath, extension) => {
    const ext = "." + extension;
    const files = fs.readdirSync(startPath);
    for (let i = 0; i < files.length; i++) {
      const relPath = (dir) => path.join(startPath, dir);
      const filename = relPath(files[i]);
      const stat = fs.lstatSync(filename);
      if (stat.isDirectory()) {
        recursive(filename, extension); //recursion
      }
      if (filename.endsWith(ext)) {
        const reactFileData = fs.readFileSync(filename).toString();
        let nextFileData;
        const reactCssLine = reactFileData.match(/import ".\/[a-zA-Z]*.css";/g);
        if (reactCssLine) {
          notFound = false;
          const reactCssFile = reactCssLine
            .toString()
            .replace('import "./', "")
            .replace('";', "");
          //const reactCssFile = files[i].replace(ext, ".css");
          const nextCssFile = reactCssFile.replace(".css", ".module.css");
          const nextCssLine = `import styles from "./${nextCssFile}";`;
          nextFileData = reactFileData.replace(reactCssLine, nextCssLine);
          const reactClassLines = reactFileData.match(
            /className="[a-z- A-Z_]*"/g
          );
          if (reactClassLines) {
            reactClassLines.forEach((reactClassLine) => {
              const reactClassName = reactClassLine
                .replace('className="', "")
                .replace('"', "");
              let nextClassName =
                reactClassName.includes("-") || reactClassName.includes("_")
                  ? reactClassName
                      .replace(/(-|_)/g, "-")
                      .split("-")
                      .map((word) => {
                        if (reactClassName.startsWith(word)) return word;
                        return word.charAt(0).toUpperCase() + word.slice(1);
                      })
                      .join("")
                  : reactClassName; //capitalize first letter and remove -. _
              nextClassName = nextClassName.replace(/ /g, ' + " " + styles.'); // multiple class
              const nextClassLine = `className={styles.${nextClassName}}`;
              nextFileData = nextFileData.replace(
                new RegExp(reactClassLine, "g"),
                nextClassLine
              );
            });
          }
          // convert imgs into Image
          const imgs = reactFileData.match(/<img/g);
          if (imgs) {
            nextFileData =
              (!nextFileData.includes('import Image from "next/image"') &&
                `import Image from "next/image";\n`) +
              nextFileData.replace(/<img/g, `<Image`);
          }
          const images = reactFileData.match(/<img>/g);
          if (images) {
            nextFileData =
              (!nextFileData.includes('import Image from "next/image"') &&
                `import Image from "next/image";\n`) +
              nextFileData
                .replace(/<img>/g, `<Image>`)
                .replace(/<\/img>/g, `</Image>`);
          }
          // console.log(nextFileData);
          fs.writeFileSync(filename, nextFileData); //javascript file
          const cssFileData = fs.readFileSync(relPath(reactCssFile)).toString();
          let nextCssData = cssFileData;
          const cssClassNames = cssFileData.match(/\.[a-z-A-Z_]*/g);
          if (cssClassNames) {
            const filteredCssClassNames = cssClassNames.filter(
              (cssClassName) => cssClassName !== "."
            );
            filteredCssClassNames.forEach((cssClassName) => {
              const newClassName =
                cssClassName.includes("-") || cssClassName.includes("_")
                  ? cssClassName
                      .replace(/(-|_)/g, " ")
                      .split(" ")
                      .map((word) => {
                        if (cssClassName.startsWith(word)) return word;
                        return word.charAt(0).toUpperCase() + word.slice(1);
                      })
                      .join("")
                  : cssClassName; //capitalize first letter and remove -, _
              nextCssData = nextCssData.replace(
                new RegExp(cssClassName, "g"),
                newClassName
              );
            });
          }
          fs.writeFileSync(relPath(nextCssFile), nextCssData); // write next css file
          fs.rmSync(relPath(reactCssFile)); // reomve react css file
          console.log(
            `${files[i].replace(ext, "")} has been converted into NextJS!`
          );
        }
      }
    }
  };
  recursive(startPath, extension);
  notFound && console.log(`No file available to convert in ${startPath}!`);
};

const target = process.argv[2] || "./test";

react2next(target); //2nd param can be jsx, by default it's js
