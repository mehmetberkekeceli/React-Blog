import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img
      className="postImg"
       src="https://wallpapercave.com/wp/wp11161509.png"
       alt="" 
       />
       <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Java-Spring</span>
          <span className="postCat">JS-React</span>
        </div>
        <span className="postTitle">MBRKCL Blog</span>
        <hr />
        <span className="postDate">X hour ago</span>
       </div>
       <p className="postDesc">
       1337
       </p>
    </div>
  )
}
