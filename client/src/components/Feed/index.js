import "../Feed/feed.css";
import AddPost from "../../components/AddPost";
//import Posts from "../../components/Posts/index"

//dummy data?

function Feed() {
  return (
    <div className="feed container gx-12">
      <div className="feedWrapper row">
        <AddPost />
        {/* {PostsDummy.map((p) => (
          <Posts key={p.id} posts={p} />
        ))} */}
      </div>
    </div>
  );
}

export default Feed;