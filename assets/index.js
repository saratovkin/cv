const App = class {
  static isDark = JSON.parse(localStorage.getItem('theme')) || false;

  static root = null;

  static applyStyles = function () {
    if (this.root) {
      this.root.style.setProperty('--primary', this.isDark ? '#121212' : '#f5f5f5');
      this.root.style.setProperty('--secondary', this.isDark ? '#fff' : '#000');
      document.getElementById('btn').innerText = this.isDark ? 'light_mode' : 'dark_mode';
    }
  };

  static changeTheme = function () {
    this.isDark = !this.isDark;
    this.applyStyles();
    localStorage.setItem('theme', this.isDark);
  };

  static onLoad = function () {
    this.root = document.querySelector(':root');
    this.applyStyles();
    document.getElementById('btn').addEventListener('click', this.changeTheme.bind(this));
  };
};

document.body.onload = () => App.onLoad();
