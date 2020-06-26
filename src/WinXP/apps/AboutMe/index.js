import Notepad from '../Notepad';

const text = `
             ,----------------,              ,---------,
        ,-----------------------,          ,"        ,"|
      ,"                      ,"|        ,"        ,"  |
     +-----------------------+  |      ,"        ,"    |
     |  .-----------------.  |  |     +---------+      |
     |  |                 |  |  |     | -==----'|      |
     |  |  C:\\>_          |  |  |     |         |      |
     |  |                 |  |  |/----|\`---=    |      |
     |  |                 |  |  |   ,/|==== ooo |      ;
     |  |                 |  |  |  // |(((( [33]|    ,"
     |  \`-----------------'  |," .;'| |((((     |  ,"
     +-----------------------+  ;;  | |         |,"     -ASCII art by Kevin Lam-
        /_)______________(_/  //'   | +---------+
   ___________________________/___  \`,
  /  oooooooooooooooo  .o.  oooo /,   \\,"-----------
 / ==ooooooooooooooo==.o.  ooo= //   ,\`\\--{)B     ,"
/_==__==========__==_ooo__ooo=_/'   /___________,"
\`-----------------------------'

Hey! My name is Thomas and I have been coding in a range of languages since I was
8. I started in BBC Basic but have since used Python, Java, JavaScript, HTML,
CSS and PHP.

Feel free to browse around the machine and follow the links on the desktop to
see where you can find me :)
`;

export default function AboutMe({ onClose }) {
  return Notepad({ onClose, startText: text, filename: 'About me.txt' });
}
