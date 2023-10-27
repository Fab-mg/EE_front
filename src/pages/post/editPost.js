import Navbar from '../../components/Navbar';
import ModifCours from '../../components/EditForm';

export default function EditPostScreen() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '100px' }}>
        <ModifCours />
      </div>
    </div>
  );
}
