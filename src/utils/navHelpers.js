export const navSection = [ 
    {name: 'About Me', to: '/Portfolio/#About'},
    {name: 'Contact Me', to: '/Portfolio/#Contact'},
    {name: 'Projects', to: '/Portfolio/#Projects'},
    {name: 'Resume', to: '/Portfolio/#Resume'}
];

export const navActive = (nav) => {
    navSection.map((section) => {
      if (section.name === nav) {
        let navNameActive = document.getElementById(section.name);
        navNameActive.style.color = 'rgb(10, 163, 194)';
      }
      else {
        let navName = document.getElementById(section.name);
        navName.style.color = 'rgba(255,255,255,.87)';
      }
      return null;
    });
};