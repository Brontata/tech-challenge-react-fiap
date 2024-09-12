
export default function Aside() {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">

          <span className="brand-text font-weight-light">XPTO Educacão</span>
        </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">

            <div className="info">
              <a href="#" className="d-block">User: Alexander Pierce</a>
              <p>Tipo: Professor</p>
            </div>
          </div>

          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">

              <li className="nav-item menu-open">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Listar Posts</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item menu-open">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/newPost" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Novo Post</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item menu-open">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Administrativo</p>
                    </a>
                  </li>
                </ul>
              </li>


            </ul>
          </nav>

        </div>

      </aside>

    </>

  );
}
