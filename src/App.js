import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
          <img src="https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn" alt=""/>
      </header>

        <nav className="nav">
            <div>
                <a>Profile</a>
            </div>

            <div>
                <a>Messages</a>
            </div>

            <div>
                <a>News</a>
            </div>

            <div>
                <a>Music</a>
            </div>
            
            <div>
                <a>Settings</a>
            </div>

        </nav>

        <div className="content">
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8RFF15T8cAuB6ctgbNqk1wl1_Av148xp1A&usqp=CAU" alt=""/>
            </div>

            <div>
                Ava + description
            </div>

            <div>
                My posts

                <div>
                    New Posts
                </div>

                <div>
                    <div>Post 1</div>

                    <div>Post 2</div>

                    <div>Post 3</div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
