import './Footer.css';
import { getCurrentYear } from '../utils/helpers';

export default function Footer() {
  return (
    <footer>
      <p>&copy;{getCurrentYear()} - Ryan Burns. All Rights Reserved.</p>
    </footer>
  );
}
