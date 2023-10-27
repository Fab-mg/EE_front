import Navbar from '../../components/Navbar';
import PostList from '../../components/PostList';

export default function ListScreen() {
  return (
    <div>
      <Navbar />
      <div className="mt-28">
        <PostList />
      </div>
    </div>
  );
}
