import Navbar from '../../components/Navbar';
import AjoutCours from '../../components/AjoutForm';

export default function AddPostScreen() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '100px' }}>
        <AjoutCours />
      </div>
    </div>
  );
}
