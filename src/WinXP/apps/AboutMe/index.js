import Notepad from '../Notepad';

export default function AboutMe({ onClose }) {
  return Notepad({ onClose, startText: 'Hey, fill this in with stuff...' });
}
