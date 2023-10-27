import PostFooter from './postFooter';
import UserItem from './UserItem';

export default function Post({ post }) {
  return (
    <div className=" card rounded-md bg-white-100   ">
      <div>
        <UserItem userId={post?.autheur ? post.autheur : null} />
      </div>
      <div id="post">
        <div id="video">
          <video className="rounded-lg flex justify-center" height="340" controls>
            <source src={'http://localhost:6969/sendVideo/' + post.video} type="video/mp4" />
          </video>
        </div>
        <div id="contenu" className="inline-block">
          <div id="titre">
            <b>{post.titre}</b>
          </div>
          <div id="text" className="ml-5 p-2  rounded ">
            {post.text}
          </div>
        </div>
        <div className="inline-block float-right">
          <PostFooter post={post} />
        </div>
      </div>
    </div>
  );
}
