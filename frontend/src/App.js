import './index.css';
const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("#menu");

menuButton.addEventListener("click", () => {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}


