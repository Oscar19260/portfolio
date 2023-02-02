import Layout from "../components/Layout";
import { posts } from "../profile";

const PostCard = ({ post }) => (
  <div className="col-md-4">
    <div className="card">
      <div className="overflow">
        <img src={post.imageURL} className="card-img-top" />
      </div>
      <div className="card-body">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    </div>
  </div>
);

const Blog = () => (
  <Layout footer={false} title="My Blog">
    <div className="row py-4">
      {posts.map((post, i) => (
        <PostCard post={post} key={i} />
      ))}
    </div>
  </Layout>
);

export default Blog;
